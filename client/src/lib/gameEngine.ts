import { useRhythm, Note } from "./stores/useRhythm";
import { useGame } from "./stores/useGame";
import { useAudio } from "./stores/useAudio";
import { AudioEngine } from "./audioEngine";
import { getChart } from "./charts";

export class GameEngine {
  private canvas: HTMLCanvasElement | null = null;
  private ctx: CanvasRenderingContext2D | null = null;
  private animationId: number | null = null;
  private audioEngine: AudioEngine;
  private startTime: number = 0;
  private width: number = 0;
  private height: number = 0;
  private laneWidth: number = 0;
  private laneStartX: number = 0;
  private hitZoneY: number = 0;
  private baseNoteSpeed: number = 300; // base pixels per second
  private keyStates: { [key: string]: boolean } = {};
  private keyPressedFrames: { [key: string]: number } = {};
  private activeHolds: { [key: string]: string | null } = {}; // Maps key to note ID
  private currentFrame: number = 0;
  private chartNotes: Array<{time: number, lane: number}> = [];
  private nextNoteIndex: number = 0;
  private lastFlashTime: number = 0;
  private flashTriggers: number[] = []; // Chorus timing points in milliseconds

  // Lane colors
  private laneColors = ['#ef4444', '#22c55e', '#3b82f6', '#eab308']; // red, green, blue, yellow
  
  // Particles for effects
  private particles: Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    maxLife: number;
    color: string;
  }> = [];
  private audioContext: AudioContext | null = null;
  private analyser: AnalyserNode | null = null;
  private dataArray: Uint8Array | null = null;
  private source: MediaElementAudioSourceNode | null = null;

  constructor() {
    this.audioEngine = new AudioEngine();
    this.setupKeyListeners();
  }

  // Mobile input handler for touch controls
  handleMobileInput(key: string, isPressed: boolean) {
    const gameState = useGame.getState();
    
    // Only process when game is playing
    if (gameState.phase !== 'playing') {
      return;
    }

    if (['a', 's', 'k', 'l'].includes(key)) {
      if (isPressed && !this.keyStates[key]) {
        this.keyStates[key] = true;
        this.keyPressedFrames[key] = this.currentFrame;
        this.handleKeyPress(key);
      } else if (!isPressed && this.keyStates[key]) {
        this.keyStates[key] = false;
        this.handleKeyRelease(key);
      }
    }
  }

  setCanvas(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
  }

  resize(width: number, height: number) {
    this.width = width;
    this.height = height;
    // Make lanes smaller and center them
    const gameAreaWidth = Math.min(width * 0.6, 600); // Max 600px wide
    this.laneWidth = gameAreaWidth / 4;
    this.laneStartX = (width - gameAreaWidth) / 2;
    
    // Check if mobile device to adjust hit zone position
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
      (width <= 768 && 'ontouchstart' in window);
    
    // Position hit zone higher on mobile to account for touch controls
    this.hitZoneY = isMobile ? height - 200 : height - 120;
  }

  private setupKeyListeners() {
    const handleKeyDown = (e: KeyboardEvent) => {
      const gameState = useGame.getState();
      const key = e.key.toLowerCase();
      
      // Only process keys when game is actually playing
      if (gameState.phase !== 'playing') {
        return;
      }
      
      if (['a', 's', 'k', 'l'].includes(key)) {
        if (!this.keyStates[key]) {
          this.keyStates[key] = true;
          this.keyPressedFrames[key] = this.currentFrame;
          this.handleKeyPress(key);
        }
      }

    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const gameState = useGame.getState();
      // Only process key releases when game is playing
      if (gameState.phase !== 'playing') {
        return;
      }
      
      const key = e.key.toLowerCase();
      if (['a', 's', 'k', 'l'].includes(key)) {
        this.keyStates[key] = false;
        this.handleKeyRelease(key);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // Store listeners for cleanup
    this.keyDownListener = handleKeyDown;
    this.keyUpListener = handleKeyUp;
  }

  private keyDownListener?: (e: KeyboardEvent) => void;
  private keyUpListener?: (e: KeyboardEvent) => void;

  private initAudioAnalyser() {
    try {
      // Get the audio element that's playing music
      const audioElement = document.querySelector('audio');
      console.log('Audio element found:', audioElement, 'playing:', audioElement?.currentTime);
      if (!audioElement) {
        console.log('No audio element found for visualizer');
        return;
      }

      // Skip if already initialized and working
      if (this.source && this.analyser && this.dataArray) {
        console.log('Audio analyser already initialized');
        return;
      }

      // Create audio context and analyser
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      this.analyser = this.audioContext.createAnalyser();
      
      // Configure analyser
      this.analyser.fftSize = 256; // 128 frequency bins for better resolution
      this.analyser.smoothingTimeConstant = 0.8;
      
      // Create data array for frequency data
      this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
      console.log('Audio analyser created with', this.analyser.frequencyBinCount, 'frequency bins');
      
      // Connect audio source to analyser
      this.source = this.audioContext.createMediaElementSource(audioElement);
      this.source.connect(this.analyser);
      this.source.connect(this.audioContext.destination);
      console.log('Audio source connected to analyser');
      
      // Resume audio context if needed
      if (this.audioContext.state === 'suspended') {
        this.audioContext.resume().then(() => {
          console.log('Audio context resumed');
        });
      }
      
    } catch (error) {
      console.error('Audio analyser setup failed:', error);
      // If we get CORS or other errors, we can still show animated bars
      if ((error as Error).message.includes('cross-origin') || (error as Error).message.includes('CORS')) {
        console.log('Using animated fallback bars due to CORS');
        this.useFallbackAnimation = true;
      }
    }
  }

  private useFallbackAnimation = false;

  private getFrequencyData(): number[] {
    if (!this.analyser || !this.dataArray) {
      console.log('No analyser or dataArray available');
      return [];
    }
    
    this.analyser.getByteFrequencyData(this.dataArray);
    
    // Group frequencies into bars (8 bars total)
    const barCount = 8;
    const binSize = Math.floor(this.dataArray.length / barCount);
    const bars: number[] = [];
    
    for (let i = 0; i < barCount; i++) {
      let sum = 0;
      for (let j = 0; j < binSize; j++) {
        sum += this.dataArray[i * binSize + j];
      }
      bars.push(sum / binSize / 255); // Normalize to 0-1
    }
    
    // Log first few frames to see if we're getting data
    if (this.currentFrame % 60 === 0) { // Log every second
      console.log('Frequency data:', bars.map(b => b.toFixed(2)));
    }
    
    return bars;
  }

  private drawAudioBars() {
    const frequencyData = this.getFrequencyData();
    if (frequencyData.length === 0 || this.useFallbackAnimation) {
      // Create animated bars that pulse with time
      const time = Date.now() / 1000;
      const animatedBars = Array.from({length: 8}, (_, i) => {
        const phase = (i * 0.5) + time * 2;
        return Math.abs(Math.sin(phase)) * 0.8 + 0.2; // Range 0.2 to 1.0
      });
      this.renderBars(animatedBars);
      return;
    }
    
    this.renderBars(frequencyData);
  }



  private renderBars(barData: number[]) {
    const barWidth = this.width / barData.length;
    const maxBarHeight = this.height * 0.3; // Reduced height so it doesn't cover gameplay
    
    barData.forEach((amplitude, index) => {
      const barHeight = Math.max(amplitude * maxBarHeight, 10); // Minimum height for visibility
      const x = index * barWidth;
      const y = this.height - barHeight;
      
      // Create gradient for each bar (only bottom bars now)
      const barGradient = this.ctx!.createLinearGradient(x, y + barHeight, x, y);
      const hue = (index * 45) % 360;
      barGradient.addColorStop(0, `hsla(${hue}, 70%, 50%, 0.4)`);
      barGradient.addColorStop(1, `hsla(${hue}, 70%, 70%, 0.8)`);
      
      this.ctx!.fillStyle = barGradient;
      this.ctx!.fillRect(x, y, barWidth - 4, barHeight);
    });
  }

  private handleKeyPress(key: string) {
    const laneIndex = ['a', 's', 'k', 'l'].indexOf(key);
    if (laneIndex === -1) return;

    const state = useRhythm.getState();
    const audioState = useAudio.getState();
    
    // Find notes in this lane that could be hit
    const notesInLane = state.notes.filter(note => 
      note.lane === laneIndex && !note.hit
    );

    if (notesInLane.length === 0) {
      // No notes to hit - this should NOT reset combo
      // Only reset combo when an actual note is missed
      return;
    }

    // Find the closest note to the hit zone
    const closestNote = notesInLane.reduce((closest, note) => 
      Math.abs(note.y - this.hitZoneY) < Math.abs(closest.y - this.hitZoneY) ? note : closest
    );

    const distance = Math.abs(closestNote.y - this.hitZoneY);
    
    // Get character modifier for hit windows
    const gameState = useGame.getState();
    const character = gameState.selectedCharacter;
    const hitWindowMultiplier = character?.modifier.hitWindowMultiplier || 1.0;
    
    // Determine timing based on distance (modified by character)
    let timing: 'perfect' | 'good' | 'miss';
    const perfectWindow = 30 * hitWindowMultiplier;
    const goodWindow = 60 * hitWindowMultiplier;
    
    if (distance <= perfectWindow) {
      timing = 'perfect';
      audioState.playSuccess(); // Keep the satisfying "ding" for perfect hits
      this.createParticles(this.laneStartX + laneIndex * this.laneWidth + this.laneWidth / 2, this.hitZoneY, '#ffd700');
    } else if (distance <= goodWindow) {
      timing = 'good';
      // No sound for good hits - cleaner experience
      this.createParticles(this.laneStartX + laneIndex * this.laneWidth + this.laneWidth / 2, this.hitZoneY, '#ffffff');
    } else {
      timing = 'miss';
      // No sound for misses - less punishing
      // This miss will reset combo because it's a note that was hit but too late/early
    }

    if (closestNote.isHold) {
      // Start holding the note
      state.startHoldNote(closestNote.id);
      this.activeHolds[key] = closestNote.id;
    } else {
      // Regular note hit
      state.hitNote(closestNote.id, timing);
    }
  }

  private handleKeyRelease(key: string) {
    const holdNoteId = this.activeHolds[key];
    if (holdNoteId) {
      // End the hold note
      const state = useRhythm.getState();
      const note = state.notes.find(n => n.id === holdNoteId);
      
      if (note && note.holdActive) {
        // Determine timing based on how well the hold was maintained
        const holdDuration = Date.now() - (note.holdStartTime || 0);
        const expectedDuration = note.holdDuration || 1000;
        const holdRatio = holdDuration / expectedDuration;
        
        let timing: 'perfect' | 'good' | 'miss';
        if (holdRatio >= 0.8) {
          timing = 'perfect';
        } else if (holdRatio >= 0.5) {
          timing = 'good';
        } else {
          timing = 'miss';
        }
        
        state.endHoldNote(holdNoteId, timing);
      }
      
      this.activeHolds[key] = null;
    }
  }

  private createParticles(x: number, y: number, color: string) {
    for (let i = 0; i < 10; i++) {
      this.particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 200,
        vy: (Math.random() - 0.5) * 200 - 100,
        life: 1,
        maxLife: 1,
        color
      });
    }
  }

  private generateNote() {
    if (this.startTime === 0) return; // Wait for game to properly start
    
    const currentTime = (this.lastTime || 0) - this.startTime;
    
    // Check if we have more notes to spawn from the chart
    while (this.nextNoteIndex < this.chartNotes.length) {
      const chartNote = this.chartNotes[this.nextNoteIndex];
      
      // Calculate lead time based on note speed and distance
      const gameState = useGame.getState();
      const currentSpeed = this.baseNoteSpeed * gameState.speedMultiplier;
      const fallDistance = this.hitZoneY + 50; // Distance note needs to fall
      const leadTime = (fallDistance / currentSpeed) * 1000; // Convert to milliseconds
      const spawnTime = chartNote.time - leadTime;
      
      if (currentTime >= spawnTime) {
        const note: Note = {
          id: `note-${this.nextNoteIndex}-${chartNote.time}`,
          lane: chartNote.lane,
          y: -50,
          time: currentTime + leadTime, // When this note should be hit
          hit: false,
          isHold: (chartNote as any).isHold || false,
          holdDuration: (chartNote as any).holdDuration || 0,
          holdActive: false
        };

        useRhythm.getState().addNote(note);
        this.nextNoteIndex++;
        
        console.log(`Spawned note ${this.nextNoteIndex}/${this.chartNotes.length} for lane ${chartNote.lane} at ${currentTime.toFixed(0)}ms`);
      } else {
        break; // No more notes ready to spawn yet
      }
    }
  }

  private updateNotes(deltaTime: number) {
    const state = useRhythm.getState();
    const gameState = useGame.getState();
    
    const updatedNotes = state.notes.filter(note => {
      // Don't move or check hit notes anymore - they stay in place briefly
      if (note.hit) {
        // Keep hit notes visible for a short time for visual feedback
        if (!note.hitTime) {
          note.hitTime = Date.now();
        }
        
        // Remove hit notes after 200ms for visual feedback
        const timeSinceHit = Date.now() - (note.hitTime || 0);
        if (timeSinceHit > 200) {
          return false;
        }
        return true;
      }

      // Move note down using global speed multiplier and character modifier
      const character = gameState.selectedCharacter;
      const characterSpeedMultiplier = character?.modifier.noteSpeedMultiplier || 1.0;
      const currentSpeed = this.baseNoteSpeed * gameState.speedMultiplier * characterSpeedMultiplier;
      note.y += currentSpeed * (deltaTime / 1000);

      // Check if note passed the judgment line without being hit
      if (note.y > this.hitZoneY + 100) {
        // This is a proper miss - mark it as hit first to avoid double processing
        note.hit = true;
        note.hitTime = Date.now();
        
        // Process the miss
        if (note.isHold) {
          state.endHoldNote(note.id, 'miss');
        } else {
          state.hitNote(note.id, 'miss');
        }
        
        // Keep the note for visual feedback but mark as hit
        return true;
      }

      return true;
    });

    // Only update if the array actually changed
    if (updatedNotes.length !== state.notes.length) {
      state.updateNotes(updatedNotes);
    }

    // Check if health is depleted
    if (state.health <= 0) {
      gameState.end();
    }
  }

  private updateParticles(deltaTime: number) {
    this.particles = this.particles.filter(particle => {
      particle.x += particle.vx * (deltaTime / 1000);
      particle.y += particle.vy * (deltaTime / 1000);
      particle.life -= deltaTime / 1000;
      
      return particle.life > 0;
    });
  }

  private setupFlashTriggers(songId: string) {
    // Define chorus/drop timing for each song (in seconds)
    const flashTimings: { [key: string]: number[] } = {
      "1": [20, 40, 60, 80, 100, 120, 140, 160, 180], // Gears of Fate
      "2": [25, 50, 75, 100, 125, 150, 175], // Grievous Lady  
      "3": [30, 60, 90, 120, 150, 180], // Viyella's Destiny
      "4": [22, 44, 66, 88, 110, 132, 154, 176] // Another Me
    };
    
    // Convert to milliseconds
    this.flashTriggers = (flashTimings[songId] || []).map(time => time * 1000);
    this.lastFlashTime = 0;
    console.log(`Set up ${this.flashTriggers.length} flash triggers for song ${songId}`);
  }

  private checkFlashTriggers() {
    if (this.startTime === 0) return;
    
    const currentTime = (this.lastTime || 0) - this.startTime;
    
    // Check if we've hit a chorus timing
    for (const flashTime of this.flashTriggers) {
      if (currentTime >= flashTime && this.lastFlashTime < flashTime) {
        useRhythm.getState().triggerFlash(0.9); // Strong flash for chorus
        this.lastFlashTime = flashTime;
        console.log(`Triggered chorus flash at ${currentTime.toFixed(0)}ms`);
        break;
      }
    }
  }

  private updateFlash() {
    useRhythm.getState().updateFlash();
  }

  private render() {
    if (!this.ctx || !this.canvas) return;

    const state = useRhythm.getState();
    
    // Draw animated background
    const gradient = this.ctx!.createLinearGradient(0, 0, 0, this.height);
    gradient.addColorStop(0, '#1a1a2e');
    gradient.addColorStop(0.5, '#16213e');
    gradient.addColorStop(1, '#0f3460');
    this.ctx!.fillStyle = gradient;
    this.ctx!.fillRect(0, 0, this.width, this.height);
    
    // Draw audio visualizer bars behind everything
    this.drawAudioBars();
    
    // Draw background pattern
    this.ctx!.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    this.ctx!.lineWidth = 1;
    for (let i = 0; i < this.width; i += 50) {
      this.ctx!.beginPath();
      this.ctx!.moveTo(i, 0);
      this.ctx!.lineTo(i, this.height);
      this.ctx!.stroke();
    }

    // Draw lanes
    for (let i = 0; i < 4; i++) {
      const x = this.laneStartX + i * this.laneWidth;
      
      // Lane background
      this.ctx!.fillStyle = `${this.laneColors[i]}20`;
      this.ctx!.fillRect(x, 0, this.laneWidth, this.height);
      
      // Lane border
      this.ctx!.strokeStyle = this.laneColors[i];
      this.ctx!.lineWidth = 2;
      this.ctx!.beginPath();
      this.ctx!.moveTo(x, 0);
      this.ctx!.lineTo(x, this.height);
      this.ctx!.stroke();

      // Hit zone
      const isPressed = this.keyStates[['a', 's', 'k', 'l'][i]];
      const pressFrame = this.keyPressedFrames[['a', 's', 'k', 'l'][i]] || 0;
      const framesSincePress = this.currentFrame - pressFrame;
      
      this.ctx!.fillStyle = isPressed && framesSincePress < 10 ? 
        `${this.laneColors[i]}80` : `${this.laneColors[i]}40`;
      this.ctx!.fillRect(x + 10, this.hitZoneY - 30, this.laneWidth - 20, 60);
      
      // Hit zone border
      this.ctx!.strokeStyle = this.laneColors[i];
      this.ctx!.lineWidth = 3;
      this.ctx!.strokeRect(x + 10, this.hitZoneY - 30, this.laneWidth - 20, 60);
    }

    // Draw notes with stems
    state.notes.forEach(note => {
      if (note.hit) return;
      
      const x = this.laneStartX + note.lane * this.laneWidth;
      const noteSize = this.laneWidth - 40;
      const centerX = x + this.laneWidth / 2;
      
      if (note.isHold) {
        // Draw hold note as a long white rectangle
        const holdHeight = Math.max(60, (note.holdDuration || 1000) / 10); // Scale hold duration to visual height
        const isActive = note.holdActive;
        
        // Hold note body (long white bar)
        this.ctx!.fillStyle = isActive ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.7)';
        this.ctx!.fillRect(x + 15, note.y - holdHeight + 10, this.laneWidth - 30, holdHeight);
        
        // Hold note outline
        this.ctx!.strokeStyle = isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.8)';
        this.ctx!.lineWidth = isActive ? 3 : 2;
        this.ctx!.strokeRect(x + 15, note.y - holdHeight + 10, this.laneWidth - 30, holdHeight);
        
        // Hold note head (at the end) - white block
        this.ctx!.fillStyle = 'white';
        this.ctx!.fillRect(x + 10, note.y, this.laneWidth - 20, 20);
        
        // Hold note tail (at the start) - white block
        this.ctx!.fillStyle = 'white';
        this.ctx!.fillRect(x + 10, note.y - holdHeight + 10, this.laneWidth - 20, 20);
        
        // Add progress indicator for active holds (green overlay)
        if (isActive && note.holdStartTime) {
          const elapsed = Date.now() - note.holdStartTime;
          const progress = Math.min(elapsed / (note.holdDuration || 1000), 1.0);
          const progressHeight = holdHeight * progress;
          
          this.ctx!.fillStyle = 'rgba(0, 255, 0, 0.5)';
          this.ctx!.fillRect(x + 18, note.y - holdHeight + 10, this.laneWidth - 36, progressHeight);
        }
      } else {
        // Simple white block for regular notes
        this.ctx!.fillStyle = 'white';
        this.ctx!.fillRect(x + 10, note.y, this.laneWidth - 20, 20);
        
        // Add a subtle shadow for depth
        this.ctx!.fillStyle = 'rgba(0, 0, 0, 0.3)';
        this.ctx!.fillRect(x + 12, note.y + 2, this.laneWidth - 24, 16);
        
        // White block on top
        this.ctx!.fillStyle = 'white';
        this.ctx!.fillRect(x + 10, note.y, this.laneWidth - 20, 20);
      }
    });

    // Draw particles
    this.particles.forEach(particle => {
      const alpha = particle.life / particle.maxLife;
      this.ctx!.fillStyle = particle.color + Math.floor(alpha * 255).toString(16).padStart(2, '0');
      this.ctx!.fillRect(particle.x - 2, particle.y - 2, 4, 4);
    });

    // Draw lane labels at bottom with extra bold styling
    this.ctx!.font = '900 32px Nunito, Fredoka, sans-serif';
    this.ctx!.textAlign = 'center';
    ['A', 'S', 'K', 'L'].forEach((key, i) => {
      const x = this.laneStartX + i * this.laneWidth + this.laneWidth / 2;
      
      // Draw multiple overlapping text for extra thickness
      this.ctx!.fillStyle = 'black';
      this.ctx!.fillText(key, x - 1, this.height - 29);
      this.ctx!.fillText(key, x + 1, this.height - 29);
      this.ctx!.fillText(key, x, this.height - 31);
      this.ctx!.fillText(key, x, this.height - 29);
      
      // Main white text
      this.ctx!.fillStyle = 'white';
      this.ctx!.fillText(key, x, this.height - 30);
    });

    // Draw speed indicator using global multiplier
    const gameState = useGame.getState();
    this.ctx!.fillStyle = 'rgba(255, 255, 255, 0.9)';
    this.ctx!.font = 'bold 18px Arial';
    this.ctx!.textAlign = 'right';
    const speedText = `Speed: ${(gameState.speedMultiplier * 100).toFixed(0)}%`;
    this.ctx!.fillText(speedText, this.width - 20, 40);
    
    // Draw controls hint
    this.ctx!.fillStyle = 'rgba(255, 255, 255, 0.6)';
    this.ctx!.font = '14px Arial';
    this.ctx!.fillText('ESC to pause', this.width - 20, 60);
  }

  private gameLoop = (timestamp: number) => {
    const gameState = useGame.getState();
    
    // Check if game is paused - if so, only render but don't update game logic
    if (gameState.phase === 'paused') {
      this.render(); // Still render the current state
      this.animationId = requestAnimationFrame(this.gameLoop);
      return;
    }
    
    // Stop game loop if not in playing state
    if (gameState.phase !== 'playing') {
      this.stop();
      return;
    }

    if (!this.startTime) {
      this.startTime = timestamp;
    }

    const deltaTime = Math.min(timestamp - (this.lastTime || timestamp), 16.67); // Cap at 60fps
    this.lastTime = timestamp;
    this.currentFrame++;

    this.generateNote();
    this.updateNotes(deltaTime);
    this.updateParticles(deltaTime);
    this.checkFlashTriggers();
    this.updateFlash();
    this.render();

    this.animationId = requestAnimationFrame(this.gameLoop);
  };

  private lastTime?: number;

  start() {
    if (this.animationId) {
      console.log("GameEngine already running, ignoring duplicate start call");
      return;
    }
    
    // Load chart data based on selected song and difficulty
    const gameState = useGame.getState();
    if (gameState.selectedSong) {
      const chart = getChart(gameState.selectedSong.id, gameState.selectedSong.selectedDifficulty.level);
      if (chart) {
        this.chartNotes = chart.notes;
        this.baseNoteSpeed = gameState.selectedSong.selectedDifficulty.noteSpeed;
        this.setupFlashTriggers(gameState.selectedSong.id);
        console.log(`Loaded chart for ${gameState.selectedSong.title} - ${gameState.selectedSong.selectedDifficulty.level}: ${this.chartNotes.length} notes`);
      }
    }
    
    this.startTime = 0; // Will be set in gameLoop
    this.lastTime = undefined;
    this.currentFrame = 0;
    this.nextNoteIndex = 0;
    
    // Try to initialize audio analyser immediately and with retries
    this.initAudioAnalyser();
    
    // Also retry after delays in case audio isn't ready yet
    setTimeout(() => {
      this.initAudioAnalyser();
    }, 1000);
    
    setTimeout(() => {
      this.initAudioAnalyser();
    }, 3000);
    
    this.animationId = requestAnimationFrame(this.gameLoop);
  }

  stop() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }

    // Clean up event listeners
    if (this.keyDownListener) {
      window.removeEventListener('keydown', this.keyDownListener);
    }
    if (this.keyUpListener) {
      window.removeEventListener('keyup', this.keyUpListener);
    }
  }
}
