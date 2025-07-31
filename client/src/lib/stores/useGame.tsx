import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export type GamePhase = "ready" | "songSelect" | "playing" | "ended";

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
  
  // Actions
  showSongSelect: () => void;
  selectSong: (song: Song, difficulty: SongDifficulty) => void;
  unlockMaster: (songId: string) => void;
  start: () => void;
  restart: () => void;
  end: () => void;
}

export const useGame = create<GameState>()(
  subscribeWithSelector((set) => ({
    phase: "ready",
    selectedSong: null,
    expertFullCombos: [],
    
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
    
    start: () => {
      set((state) => {
        // Only transition from songSelect to playing
        if (state.phase === "songSelect" && state.selectedSong) {
          return { phase: "playing" };
        }
        return {};
      });
    },
    
    restart: () => {
      set(() => ({ phase: "ready", selectedSong: null }));
    },
    
    end: () => {
      set((state) => {
        // Only transition from playing to ended
        if (state.phase === "playing") {
          return { phase: "ended" };
        }
        return {};
      });
    }
  }))
);
