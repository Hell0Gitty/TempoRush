import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { useGame } from "./useGame";

export interface Note {
  id: string;
  lane: number; // 0-3 for A, S, K, L
  y: number;
  time: number;
  hit: boolean;
  hitTime?: number; // When the note was hit (for visual feedback timing)
  isHold?: boolean;
  holdDuration?: number; // Duration in milliseconds
  holdStartTime?: number; // When the hold started being pressed
  holdActive?: boolean; // Whether the hold is currently being held
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
  speedFeedback: { visible: boolean; multiplier: number; }; // Speed change feedback
  
  // Character abilities
  abilityUses: { [abilityType: string]: number }; // Track remaining uses
  activeAbilities: { 
    healthFreeze?: { endTime: number };
    scoreBoost?: { endTime: number; multiplier: number };
  };
  abilityVoiceLine: string | null; // Current ability voice line
  
  // Actions
  addNote: (note: Note) => void;
  hitNote: (noteId: string, timing: 'perfect' | 'good' | 'miss') => void;
  startHoldNote: (noteId: string) => void;
  endHoldNote: (noteId: string, timing: 'perfect' | 'good' | 'miss') => void;
  updateNotes: (notes: Note[]) => void;
  resetGame: () => void;
  triggerFlash: (intensity?: number) => void;
  updateFlash: () => void;
  showSpeedFeedback: (multiplier: number) => void;
  activateAbility: (abilityType: string) => void;
  updateActiveAbilities: () => void;
  clearAbilityVoiceLine: () => void;
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
    speedFeedback: { visible: false, multiplier: 1.0 },
    abilityUses: {},
    activeAbilities: {},
    abilityVoiceLine: null,

    addNote: (note) => {
      set((state) => ({
        notes: [...state.notes, note]
      }));
    },

    hitNote: (noteId, timing) => {
      set((state) => {
        const newNotes = state.notes.map(note => 
          note.id === noteId ? { ...note, hit: true, hitTime: Date.now() } : note
        );

        // Get character modifiers from imported useGame
        const gameState = useGame.getState();
        const character = gameState.selectedCharacter;
        const scoreMultiplier = character?.modifier.scoreMultiplier || 1.0;
        const healthMultiplier = character?.modifier.healthMultiplier || 1.0;

        let scoreIncrease = 0;
        let comboIncrease = 0;
        let healthChange = 0;

        switch (timing) {
          case 'perfect':
            scoreIncrease = Math.floor(100 * (state.combo + 1) * scoreMultiplier);
            comboIncrease = 1;
            healthChange = Math.floor(2 * healthMultiplier);
            break;
          case 'good':
            scoreIncrease = Math.floor(50 * (state.combo + 1) * scoreMultiplier);
            comboIncrease = 1;
            healthChange = Math.floor(1 * healthMultiplier);
            break;
          case 'miss':
            // Check for Ivy's combo save ability
            const gameState = useGame.getState();
            const character = gameState.selectedCharacter;
            
            if (character?.ability.type === 'combo_save' && state.abilityUses['combo_save'] > 0) {
              // Use one combo save
              set((s) => ({
                abilityUses: { ...s.abilityUses, combo_save: (s.abilityUses['combo_save'] || 0) - 1 }
              }));
              comboIncrease = 0; // Keep combo instead of resetting
              console.log('Combo saved! Uses remaining:', (state.abilityUses['combo_save'] || 0) - 1);
            } else {
              comboIncrease = -state.combo; // Reset combo
            }
            
            // Apply Scal's extra damage
            let baseDamage = 3;
            if (character?.ability.type === 'health_penalty') {
              baseDamage += character.ability.value || 0;
            }
            
            // Check for Winter's health freeze
            const isHealthFrozen = state.activeAbilities.healthFreeze && 
              Date.now() < state.activeAbilities.healthFreeze.endTime;
            
            healthChange = isHealthFrozen ? 0 : Math.floor(-baseDamage / healthMultiplier);
            break;
        }

        // Apply score boost if active
        let finalScoreIncrease = scoreIncrease;
        if (state.activeAbilities.scoreBoost && Date.now() < state.activeAbilities.scoreBoost.endTime) {
          finalScoreIncrease *= state.activeAbilities.scoreBoost.multiplier;
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
          score: state.score + finalScoreIncrease,
          combo: newCombo,
          maxCombo: Math.max(state.maxCombo, newCombo),
          accuracy: newAccuracy,
          health: newHealth,
          hitCounts: newHitCounts
        };
      });
    },

    startHoldNote: (noteId) => {
      set((state) => ({
        notes: state.notes.map(note => 
          note.id === noteId ? { ...note, holdActive: true, holdStartTime: Date.now() } : note
        )
      }));
    },

    endHoldNote: (noteId, timing) => {
      set((state) => {
        const note = state.notes.find(n => n.id === noteId);
        if (!note) return state;

        const holdDuration = Date.now() - (note.holdStartTime || 0);
        const expectedDuration = note.holdDuration || 1000;
        const holdRatio = Math.min(holdDuration / expectedDuration, 1.0);

        let scoreIncrease = 0;
        let comboIncrease = 0;
        let healthChange = 0;

        // Score based on how well the hold was maintained
        if (timing === 'perfect' && holdRatio > 0.8) {
          scoreIncrease = Math.floor(200 * holdRatio * (state.combo + 1));
          comboIncrease = 1;
          healthChange = 3;
        } else if (timing === 'good' && holdRatio > 0.5) {
          scoreIncrease = Math.floor(100 * holdRatio * (state.combo + 1));
          comboIncrease = 1;
          healthChange = 2;
        } else {
          comboIncrease = -state.combo; // Reset combo
          healthChange = -5;
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
          notes: state.notes.map(n => n.id === noteId ? { ...n, hit: true } : n),
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
      // Initialize ability uses based on selected character
      const gameState = useGame.getState();
      const character = gameState.selectedCharacter;
      const initialAbilityUses: { [key: string]: number } = {};
      
      if (character?.ability.uses) {
        initialAbilityUses[character.ability.type] = character.ability.uses;
        console.log(`Initialized ${character.name} ability: ${character.ability.type} with ${character.ability.uses} uses`);
      } else if (character) {
        console.log(`Character ${character.name} has no ability uses to initialize (ability type: ${character.ability.type})`);
      }
      
      console.log('Initial ability uses:', initialAbilityUses);
      
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
        flashIntensity: 0,
        speedFeedback: { visible: false, multiplier: 1.0 },
        abilityUses: initialAbilityUses,
        activeAbilities: {},
        abilityVoiceLine: null
      });
    },

    triggerFlash: (intensity = 0.8) => {
      set({ flashIntensity: intensity });
    },

    updateFlash: () => {
      set((state) => ({
        flashIntensity: Math.max(0, state.flashIntensity - 0.04) // Fade out over ~1 second at 60fps
      }));
    },

    showSpeedFeedback: (multiplier) => {
      set({ speedFeedback: { visible: true, multiplier } });
      
      // Hide after 2 seconds
      setTimeout(() => {
        set((state) => ({ 
          speedFeedback: { ...state.speedFeedback, visible: false } 
        }));
      }, 2000);
    },

    activateAbility: (abilityType) => {
      set((state) => {
        const gameState = useGame.getState();
        const character = gameState.selectedCharacter;
        
        if (!character || character.ability.type !== abilityType) return state;
        if ((state.abilityUses[abilityType] || 0) <= 0) return state;
        
        const newAbilityUses = {
          ...state.abilityUses,
          [abilityType]: (state.abilityUses[abilityType] || 0) - 1
        };
        
        const newActiveAbilities = { ...state.activeAbilities };
        
        // Character-specific voice lines
        const abilityVoiceLines = {
          winter: "I'll save you.",
          scal: "Hiyah! Go, my snakes!",
          ivy: "Ha! We got this!",
          lightren: "Let me light the way."
        };
        
        const voiceLine = abilityVoiceLines[character.id as keyof typeof abilityVoiceLines] || "";
        
        if (abilityType === 'health_freeze' && character.ability.duration) {
          newActiveAbilities.healthFreeze = {
            endTime: Date.now() + character.ability.duration * 1000
          };
          console.log(`Health freeze activated for ${character.ability.duration} seconds`);
        } else if (abilityType === 'score_boost' && character.ability.duration && character.ability.value) {
          newActiveAbilities.scoreBoost = {
            endTime: Date.now() + character.ability.duration * 1000,
            multiplier: character.ability.value
          };
          console.log(`Score boost activated: ${character.ability.value}x for ${character.ability.duration} seconds`);
        }
        
        // Auto-clear voice line after 2 seconds
        setTimeout(() => {
          set((s) => ({ ...s, abilityVoiceLine: null }));
        }, 2000);
        
        return {
          ...state,
          abilityUses: newAbilityUses,
          activeAbilities: newActiveAbilities,
          abilityVoiceLine: voiceLine
        };
      });
    },

    updateActiveAbilities: () => {
      set((state) => {
        const now = Date.now();
        const newActiveAbilities = { ...state.activeAbilities };
        
        // Clean up expired abilities
        if (newActiveAbilities.healthFreeze && now >= newActiveAbilities.healthFreeze.endTime) {
          delete newActiveAbilities.healthFreeze;
          console.log('Health freeze expired');
        }
        if (newActiveAbilities.scoreBoost && now >= newActiveAbilities.scoreBoost.endTime) {
          delete newActiveAbilities.scoreBoost;
          console.log('Score boost expired');
        }
        
        return { ...state, activeAbilities: newActiveAbilities };
      });
    },

    clearAbilityVoiceLine: () => {
      set({ abilityVoiceLine: null });
    }
  }))
);
