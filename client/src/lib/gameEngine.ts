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
  private noteSpeed: number = 300; // pixels per second
  private keyStates: { [key: string]: boolean } = {};
  private keyPressedFrames: { [key: string]: number } = {};
  private currentFrame: number = 0;
  private chartNotes: Array<{time: number, lane: number}> = [];
  private nextNoteIndex: number = 0;

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

  constructor() {
    this.audioEngine = new AudioEngine();
    this.setupKeyListeners();
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
    this.hitZoneY = height - 120;
  }

  private setupKeyListeners() {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (['a', 's', 'k', 'l'].includes(key)) {
        if (!this.keyStates[key]) {
          this.keyStates[key] = true;
          this.keyPressedFrames[key] = this.currentFrame;
          this.handleKeyPress(key);
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (['a', 's', 'k', 'l'].includes(key)) {
        this.keyStates[key] = false;
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
      // Miss - no notes to hit (no sound for cleaner experience)
      return;
    }

    // Find the closest note to the hit zone
    const closestNote = notesInLane.reduce((closest, note) => 
      Math.abs(note.y - this.hitZoneY) < Math.abs(closest.y - this.hitZoneY) ? note : closest
    );

    const distance = Math.abs(closestNote.y - this.hitZoneY);
    
    // Determine timing based on distance
    let timing: 'perfect' | 'good' | 'miss';
    if (distance <= 30) {
      timing = 'perfect';
      audioState.playSuccess(); // Keep the satisfying "ding" for perfect hits
      this.createParticles(this.laneStartX + laneIndex * this.laneWidth + this.laneWidth / 2, this.hitZoneY, '#ffd700');
    } else if (distance <= 60) {
      timing = 'good';
      // No sound for good hits - cleaner experience
      this.createParticles(this.laneStartX + laneIndex * this.laneWidth + this.laneWidth / 2, this.hitZoneY, '#ffffff');
    } else {
      timing = 'miss';
      // No sound for misses - less punishing
    }

    state.hitNote(closestNote.id, timing);
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
    const currentTime = (this.lastTime || 0) - this.startTime;
    
    // Check if we have more notes to spawn from the chart
    while (this.nextNoteIndex < this.chartNotes.length) {
      const chartNote = this.chartNotes[this.nextNoteIndex];
      
      // Check if it's time to spawn this note (with lead time for it to fall to hit zone)
      const leadTime = (this.hitZoneY + 50) / this.noteSpeed * 1000; // Time for note to reach hit zone
      const spawnTime = chartNote.time - leadTime;
      
      if (currentTime >= spawnTime) {
        const note: Note = {
          id: `note-${chartNote.time}-${chartNote.lane}`,
          lane: chartNote.lane,
          y: -50,
          time: chartNote.time,
          hit: false
        };

        useRhythm.getState().addNote(note);
        this.nextNoteIndex++;
      } else {
        break; // No more notes ready to spawn yet
      }
    }
  }

  private updateNotes(deltaTime: number) {
    const state = useRhythm.getState();
    const gameState = useGame.getState();
    
    const updatedNotes = state.notes.filter(note => {
      if (note.hit) {
        // Remove hit notes after a short delay
        return false;
      }

      // Move note down
      note.y += this.noteSpeed * (deltaTime / 1000);

      // Check if note missed (went past hit zone)
      if (note.y > this.hitZoneY + 100) {
        state.hitNote(note.id, 'miss');
        return false;
      }

      return true;
    });

    state.updateNotes(updatedNotes);

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

    // Draw notes
    state.notes.forEach(note => {
      if (note.hit) return;
      
      const x = this.laneStartX + note.lane * this.laneWidth;
      const noteSize = this.laneWidth - 40;
      
      // Note shadow
      this.ctx!.fillStyle = 'rgba(0, 0, 0, 0.3)';
      this.ctx!.fillRect(x + 22, note.y + 2, noteSize, 20);
      
      // Note body
      this.ctx!.fillStyle = this.laneColors[note.lane];
      this.ctx!.fillRect(x + 20, note.y, noteSize, 20);
      
      // Note highlight
      this.ctx!.fillStyle = 'rgba(255, 255, 255, 0.3)';
      this.ctx!.fillRect(x + 20, note.y, noteSize, 5);
    });

    // Draw particles
    this.particles.forEach(particle => {
      const alpha = particle.life / particle.maxLife;
      this.ctx!.fillStyle = particle.color + Math.floor(alpha * 255).toString(16).padStart(2, '0');
      this.ctx!.fillRect(particle.x - 2, particle.y - 2, 4, 4);
    });

    // Draw lane labels at bottom
    this.ctx!.font = 'bold 24px Lato, sans-serif';
    this.ctx!.textAlign = 'center';
    ['A', 'S', 'K', 'L'].forEach((key, i) => {
      this.ctx!.fillStyle = 'white';
      this.ctx!.fillText(key, this.laneStartX + i * this.laneWidth + this.laneWidth / 2, this.height - 30);
    });
  }

  private gameLoop = (timestamp: number) => {
    if (!this.startTime) {
      this.startTime = timestamp;
    }

    const deltaTime = Math.min(timestamp - (this.lastTime || timestamp), 16.67); // Cap at 60fps
    this.lastTime = timestamp;
    this.currentFrame++;

    this.generateNote();
    this.updateNotes(deltaTime);
    this.updateParticles(deltaTime);
    this.render();

    this.animationId = requestAnimationFrame(this.gameLoop);
  };

  private lastTime?: number;

  start() {
    if (this.animationId) return;
    
    // Load chart data based on selected song and difficulty
    const gameState = useGame.getState();
    if (gameState.selectedSong) {
      const chart = getChart(gameState.selectedSong.id, gameState.selectedSong.selectedDifficulty.level);
      if (chart) {
        this.chartNotes = chart.notes;
        this.noteSpeed = gameState.selectedSong.selectedDifficulty.noteSpeed;
        console.log(`Loaded chart for ${gameState.selectedSong.title} - ${gameState.selectedSong.selectedDifficulty.level}: ${this.chartNotes.length} notes`);
      }
    }
    
    this.startTime = 0; // Will be set in gameLoop
    this.lastTime = undefined;
    this.currentFrame = 0;
    this.nextNoteIndex = 0;
    
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
