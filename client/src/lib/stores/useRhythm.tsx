import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export interface Note {
  id: string;
  lane: number; // 0-3 for A, S, K, L
  y: number;
  time: number;
  hit: boolean;
}

interface RhythmState {
  score: number;
  combo: number;
  maxCombo: number;
  accuracy: number;
  health: number;
  notes: Note[];
  hitCounts: {
    perfect: number;
    good: number;
    miss: number;
  };
  flashIntensity: number; // 0-1 for screen flash effect
  
  // Actions
  addNote: (note: Note) => void;
  hitNote: (noteId: string, timing: 'perfect' | 'good' | 'miss') => void;
  updateNotes: (notes: Note[]) => void;
  resetGame: () => void;
  triggerFlash: (intensity?: number) => void;
  updateFlash: () => void;
}

export const useRhythm = create<RhythmState>()(
  subscribeWithSelector((set, get) => ({
    score: 0,
    combo: 0,
    maxCombo: 0,
    accuracy: 100,
    health: 100,
    notes: [],
    hitCounts: {
      perfect: 0,
      good: 0,
      miss: 0
    },
    flashIntensity: 0,

    addNote: (note) => {
      set((state) => ({
        notes: [...state.notes, note]
      }));
    },

    hitNote: (noteId, timing) => {
      set((state) => {
        const newNotes = state.notes.map(note => 
          note.id === noteId ? { ...note, hit: true } : note
        );

        let scoreIncrease = 0;
        let comboIncrease = 0;
        let healthChange = 0;

        switch (timing) {
          case 'perfect':
            scoreIncrease = 100 * (state.combo + 1);
            comboIncrease = 1;
            healthChange = 2;
            break;
          case 'good':
            scoreIncrease = 50 * (state.combo + 1);
            comboIncrease = 1;
            healthChange = 1;
            break;
          case 'miss':
            comboIncrease = -state.combo; // Reset combo
            healthChange = -3;
            break;
        }

        const newCombo = Math.max(0, state.combo + comboIncrease);
        const newHealth = Math.max(0, Math.min(100, state.health + healthChange));
        const newHitCounts = {
          ...state.hitCounts,
          [timing]: state.hitCounts[timing] + 1
        };

        const totalHits = newHitCounts.perfect + newHitCounts.good + newHitCounts.miss;
        const successfulHits = newHitCounts.perfect + newHitCounts.good;
        const newAccuracy = totalHits > 0 ? (successfulHits / totalHits) * 100 : 100;

        return {
          notes: newNotes,
          score: state.score + scoreIncrease,
          combo: newCombo,
          maxCombo: Math.max(state.maxCombo, newCombo),
          accuracy: newAccuracy,
          health: newHealth,
          hitCounts: newHitCounts
        };
      });
    },

    updateNotes: (notes) => {
      set({ notes });
    },

    resetGame: () => {
      set({
        score: 0,
        combo: 0,
        maxCombo: 0,
        accuracy: 100,
        health: 100,
        notes: [],
        hitCounts: {
          perfect: 0,
          good: 0,
          miss: 0
        },
        flashIntensity: 0
      });
    },

    triggerFlash: (intensity = 0.8) => {
      set({ flashIntensity: intensity });
    },

    updateFlash: () => {
      set((state) => ({
        flashIntensity: Math.max(0, state.flashIntensity - 0.04) // Fade out over ~1 second at 60fps
      }));
    }
  }))
);
