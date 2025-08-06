import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export type GamePhase = "ready" | "songSelect" | "characterSelect" | "highScores" | "playing" | "paused" | "ended";

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

interface Character {
  id: string;
  name: string;
  description: string;
  effect: string;
  ability: {
    type: 'combo_save' | 'health_freeze' | 'health_penalty' | 'score_boost' | 'none';
    duration?: number; // in seconds
    uses?: number; // number of times ability activates
    value?: number; // modifier value
  };
  modifier: {
    noteSpeedMultiplier: number;
    healthMultiplier: number;
    scoreMultiplier: number;
    hitWindowMultiplier: number;
  };
  color: string;
  image: string;
}

interface GameState {
  phase: GamePhase;
  selectedSong: SelectedSong | null;
  selectedCharacter: Character | null;
  expertFullCombos: string[]; // Track songs with expert full combos to unlock Master
  speedMultiplier: number; // Global speed multiplier (0.5 to 2.0)
  
  // Actions
  setPhase: (phase: GamePhase) => void;
  showSongSelect: () => void;
  showCharacterSelect: () => void;
  showHighScores: () => void;
  selectSong: (song: Song, difficulty: SongDifficulty) => void;
  setSelectedCharacter: (character: Character) => void;
  unlockMaster: (songId: string) => void;
  setSpeedMultiplier: (multiplier: number) => void;
  saveHighScore: (score: any) => void;
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
    selectedCharacter: {
      id: "ivy",
      name: "Ivy",
      description: "Combo protection specialist",
      effect: "Saves combo 5 times when you would lose it",
      ability: {
        type: 'combo_save',
        uses: 5
      },
      modifier: {
        noteSpeedMultiplier: 1.0,
        healthMultiplier: 1.0,
        scoreMultiplier: 1.0,
        hitWindowMultiplier: 1.0
      },
      color: "from-purple-600 to-blue-800",
      image: "/characters/ivy.png"
    },
    expertFullCombos: [],
    speedMultiplier: 1.0,
    
    setPhase: (phase) => {
      set(() => ({ phase }));
    },
    
    showSongSelect: () => {
      set(() => ({ phase: "songSelect" }));
    },

    showCharacterSelect: () => {
      set(() => ({ phase: "characterSelect" as GamePhase }));
    },

    showHighScores: () => {
      set(() => ({ phase: "highScores" as GamePhase }));
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

    setSelectedCharacter: (character) => {
      set(() => ({ selectedCharacter: character }));
    },

    setSpeedMultiplier: (multiplier) => {
      const clampedMultiplier = Math.max(0.5, Math.min(2.0, multiplier));
      set(() => ({ speedMultiplier: clampedMultiplier }));
      console.log("Speed multiplier set to:", clampedMultiplier);
    },

    saveHighScore: (scoreData) => {
      const highScores = JSON.parse(localStorage.getItem('tempoRushHighScores') || '[]');
      const newScore = {
        id: Date.now().toString(),
        playerName: "Player", // Default name, could be customizable
        timestamp: Date.now(),
        ...scoreData
      };
      highScores.push(newScore);
      highScores.sort((a: any, b: any) => b.score - a.score);
      
      // Keep only top 100 scores
      const trimmedScores = highScores.slice(0, 100);
      localStorage.setItem('tempoRushHighScores', JSON.stringify(trimmedScores));
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
        console.log("Pause called, current phase:", state.phase);
        if (state.phase === "playing") {
          console.log("Game paused - setting phase to paused");
          const newState = { ...state, phase: "paused" as GamePhase };
          console.log("New state being set:", newState);
          return newState;
        }
        console.log("Not pausing - phase is not playing");
        return state;
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
