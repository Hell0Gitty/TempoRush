import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export type GamePhase = "ready" | "songSelect" | "playing" | "ended";

interface Song {
  id: string;
  title: string;
  artist: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  bpm: number;
  duration: string;
  audioFile: string;
}

interface GameState {
  phase: GamePhase;
  selectedSong: Song | null;
  
  // Actions
  showSongSelect: () => void;
  selectSong: (song: Song) => void;
  start: () => void;
  restart: () => void;
  end: () => void;
}

export const useGame = create<GameState>()(
  subscribeWithSelector((set) => ({
    phase: "ready",
    selectedSong: null,
    
    showSongSelect: () => {
      set(() => ({ phase: "songSelect" }));
    },
    
    selectSong: (song) => {
      set(() => ({ selectedSong: song }));
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
