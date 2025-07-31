import { useRhythm, Note } from "./stores/useRhythm";
import { useGame } from "./stores/useGame";
import { useAudio } from "./stores/useAudio";
import { AudioEngine } from "./audioEngine";

export class GameEngine {
  private canvas: HTMLCanvasElement | null = null;
  private ctx: CanvasRenderingContext2D | null = null;
  private animationId: number | null = null;
  private audioEngine: AudioEngine;
  private startTime: number = 0;
  private width: number = 0;
  private height: number = 0;
  private laneWidth: number = 0;
  private hitZoneY: number = 0;
  private noteSpeed: number = 300; // pixels per second
  private nextNoteTime: number = 0;
  private noteInterval: number = 1000; // ms between notes
  private keyStates: { [key: string]: boolean } = {};
  private keyPressedFrames: { [key: string]: number } = {};
  private currentFrame: number = 0;

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
    this.laneWidth = width / 4;
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
      // Miss - no notes to hit
      audioState.playHit();
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
      audioState.playSuccess();
      this.createParticles(laneIndex * this.laneWidth + this.laneWidth / 2, this.hitZoneY, '#ffd700');
    } else if (distance <= 60) {
      timing = 'good';
      audioState.playHit();
      this.createParticles(laneIndex * this.laneWidth + this.laneWidth / 2, this.hitZoneY, '#ffffff');
    } else {
      timing = 'miss';
      audioState.playHit();
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
    const currentTime = Date.now() - this.startTime;
    
    if (currentTime >= this.nextNoteTime) {
      const lane = Math.floor(Math.random() * 4);
      const note: Note = {
        id: `note-${Date.now()}-${Math.random()}`,
        lane,
        y: -50,
        time: currentTime,
        hit: false
      };

      useRhythm.getState().addNote(note);
      
      // Schedule next note with some variation
      this.nextNoteTime = currentTime + this.noteInterval + (Math.random() - 0.5) * 300;
      
      // Gradually increase difficulty
      if (this.noteInterval > 400) {
        this.noteInterval -= 0.5;
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
    
    // Clear canvas
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    this.ctx.fillRect(0, 0, this.width, this.height);

    // Draw lanes
    for (let i = 0; i < 4; i++) {
      const x = i * this.laneWidth;
      
      // Lane background
      this.ctx.fillStyle = `${this.laneColors[i]}20`;
      this.ctx.fillRect(x, 0, this.laneWidth, this.height);
      
      // Lane border
      this.ctx.strokeStyle = this.laneColors[i];
      this.ctx.lineWidth = 2;
      this.ctx.beginPath();
      this.ctx.moveTo(x, 0);
      this.ctx.lineTo(x, this.height);
      this.ctx.stroke();

      // Hit zone
      const isPressed = this.keyStates[['a', 's', 'k', 'l'][i]];
      const pressFrame = this.keyPressedFrames[['a', 's', 'k', 'l'][i]] || 0;
      const framesSincePress = this.currentFrame - pressFrame;
      
      this.ctx.fillStyle = isPressed && framesSincePress < 10 ? 
        `${this.laneColors[i]}80` : `${this.laneColors[i]}40`;
      this.ctx.fillRect(x + 10, this.hitZoneY - 30, this.laneWidth - 20, 60);
      
      // Hit zone border
      this.ctx.strokeStyle = this.laneColors[i];
      this.ctx.lineWidth = 3;
      this.ctx.strokeRect(x + 10, this.hitZoneY - 30, this.laneWidth - 20, 60);
    }

    // Draw notes
    state.notes.forEach(note => {
      if (note.hit) return;
      
      const x = note.lane * this.laneWidth;
      const noteSize = this.laneWidth - 40;
      
      // Note shadow
      this.ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
      this.ctx.fillRect(x + 22, note.y + 2, noteSize, 20);
      
      // Note body
      this.ctx.fillStyle = this.laneColors[note.lane];
      this.ctx.fillRect(x + 20, note.y, noteSize, 20);
      
      // Note highlight
      this.ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      this.ctx.fillRect(x + 20, note.y, noteSize, 5);
    });

    // Draw particles
    this.particles.forEach(particle => {
      const alpha = particle.life / particle.maxLife;
      this.ctx.fillStyle = particle.color + Math.floor(alpha * 255).toString(16).padStart(2, '0');
      this.ctx.fillRect(particle.x - 2, particle.y - 2, 4, 4);
    });

    // Draw lane labels at bottom
    this.ctx.font = 'bold 24px Inter, sans-serif';
    this.ctx.textAlign = 'center';
    ['A', 'S', 'K', 'L'].forEach((key, i) => {
      this.ctx.fillStyle = 'white';
      this.ctx.fillText(key, i * this.laneWidth + this.laneWidth / 2, this.height - 30);
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
    
    this.startTime = 0;
    this.lastTime = undefined;
    this.currentFrame = 0;
    this.nextNoteTime = 2000; // Start after 2 seconds
    
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
