import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export type GamePhase = "ready" | "songSelect" | "playing" | "paused" | "ended";

interface SongDifficulty {
  level: 'Easy' | 'Normal' | 'Hard' | 'Expert' | 'Master';
  bpm: number;
  duration: string;
  noteSpeed: number;
  noteFrequency: number;
}

interface Song {
  id: string;
  title: string;
  artist: string;
  difficulties: SongDifficulty[];
  audioFile: string;
}

interface SelectedSong extends Song {
  selectedDifficulty: SongDifficulty;
}

interface GameState {
  phase: GamePhase;
  selectedSong: SelectedSong | null;
  expertFullCombos: string[]; // Track songs with expert full combos to unlock Master
  speedMultiplier: number; // Global speed multiplier (0.5 to 2.0)
  
  // Actions
  showSongSelect: () => void;
  selectSong: (song: Song, difficulty: SongDifficulty) => void;
  unlockMaster: (songId: string) => void;
  setSpeedMultiplier: (multiplier: number) => void;
  start: () => void;
  pause: () => void;
  resume: () => void;
  restart: () => void;
  end: () => void;
}

export const useGame = create<GameState>()(
  subscribeWithSelector((set) => ({
    phase: "ready",
    selectedSong: null,
    expertFullCombos: [],
    speedMultiplier: 1.0,
    
    showSongSelect: () => {
      set(() => ({ phase: "songSelect" }));
    },
    
    selectSong: (song, difficulty) => {
      set(() => ({ 
        selectedSong: {
          ...song,
          selectedDifficulty: difficulty
        }
      }));
    },
    
    unlockMaster: (songId) => {
      set((state) => ({
        expertFullCombos: [...state.expertFullCombos, songId]
      }));
    },

    setSpeedMultiplier: (multiplier) => {
      const clampedMultiplier = Math.max(0.5, Math.min(2.0, multiplier));
      set(() => ({ speedMultiplier: clampedMultiplier }));
      console.log("Speed multiplier set to:", clampedMultiplier);
    },
    
    start: () => {
      set((state) => {
        // Only transition from songSelect to playing
        if (state.phase === "songSelect" && state.selectedSong) {
          console.log("Game phase changed from songSelect to playing");
          return { phase: "playing" };
        }
        return {};
      });
    },

    pause: () => {
      set((state) => {
        if (state.phase === "playing") {
          console.log("Game paused");
          return { phase: "paused" };
        }
        return {};
      });
    },

    resume: () => {
      set((state) => {
        if (state.phase === "paused") {
          console.log("Game resumed");
          return { phase: "playing" };
        }
        return {};
      });
    },
    
    restart: () => {
      console.log("Game phase changed to ready (restart)");
      set(() => ({ phase: "ready", selectedSong: null }));
    },
    
    end: () => {
      set((state) => {
        // Only transition from playing to ended
        if (state.phase === "playing") {
          console.log("Game phase changed from playing to ended");
          return { phase: "ended" };
        }
        return {};
      });
    }
  }))
);
