import { useState, useEffect } from "react";
import { useGame } from "../lib/stores/useGame";
import { useAuth } from "../hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "../lib/queryClient";

interface Character {
  id: string;
  name: string;
  description: string;
  effect: string;
  ability: {
    type: 'combo_save' | 'health_freeze' | 'health_penalty' | 'score_boost' | 'none';
    duration?: number;
    uses?: number;
    value?: number;
  };
  modifier: {
    noteSpeedMultiplier: number;
    healthMultiplier: number;
    scoreMultiplier: number;
    hitWindowMultiplier: number;
  };
  color: string;
  image: string;
  stats: {
    difficulty: string;
    rarity: string;
    element: string;
    power: number;
    defense: number;
    speed: number;
    luck: number;
  };
  lore: string;
  specialNotes: string;
}

const CHARACTERS: Character[] = [
  {
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
    image: "/characters/ivy.png",
    stats: {
      difficulty: 'Beginner',
      rarity: 'Common',
      element: 'Nature',
      power: 7,
      defense: 8,
      speed: 6,
      luck: 5
    },
    lore: 'A gentle forest guardian who protects those who venture into rhythm. Her connection to nature allows her to sense the perfect moment to preserve a combo, making her ideal for beginners learning the flow of music.',
    specialNotes: 'Perfect for new players who want to maintain long combos while learning complex patterns.'
  },
  {
    id: "winter",
    name: "Winter",
    description: "Health preservation expert",
    effect: "Freezes health bar for 5 seconds when activated",
    ability: {
      type: 'health_freeze',
      duration: 5,
      uses: 3
    },
    modifier: {
      noteSpeedMultiplier: 1.0,
      healthMultiplier: 1.0,
      scoreMultiplier: 1.0,
      hitWindowMultiplier: 1.0
    },
    color: "from-blue-400 to-cyan-600",
    image: "/characters/winter.png",
    stats: {
      difficulty: 'Intermediate',
      rarity: 'Rare',
      element: 'Ice',
      power: 6,
      defense: 9,
      speed: 5,
      luck: 7
    },
    lore: 'Born from the eternal winter, she commands ice and time itself. Her mastery over frozen moments allows her to halt the flow of damage, giving players precious seconds to recover.',
    specialNotes: 'Excellent for surviving difficult sections and maintaining health during intense gameplay.'
  },
  {
    id: "scal",
    name: "Scal",
    description: "High-risk challenger",
    effect: "Takes -5 HP instead of -3 HP when missing notes",
    ability: {
      type: 'health_penalty',
      value: 2 // Additional damage
    },
    modifier: {
      noteSpeedMultiplier: 1.1,
      healthMultiplier: 1.0,
      scoreMultiplier: 1.4,
      hitWindowMultiplier: 0.9
    },
    color: "from-green-600 to-emerald-800",
    image: "/characters/scal.png",
    stats: {
      difficulty: 'Expert',
      rarity: 'Epic',
      element: 'Shadow',
      power: 10,
      defense: 3,
      speed: 9,
      luck: 8
    },
    lore: 'A mysterious warrior who thrives on danger and chaos. Her snake companions whisper secrets of risk and reward, doubling the stakes of every note played.',
    specialNotes: 'High-risk, high-reward character for expert players seeking maximum scores.'
  },
  {
    id: "lightren",
    name: "Lightren",
    description: "Score enhancement specialist",
    effect: "Points give extra for 5 seconds when activated",
    ability: {
      type: 'score_boost',
      duration: 5,
      uses: 3,
      value: 2.0 // 2x score multiplier
    },
    modifier: {
      noteSpeedMultiplier: 1.0,
      healthMultiplier: 1.0,
      scoreMultiplier: 1.0,
      hitWindowMultiplier: 1.0
    },
    color: "from-yellow-400 to-orange-600",
    image: "/characters/lightren.png",
    stats: {
      difficulty: 'Advanced',
      rarity: 'Legendary',
      element: 'Light',
      power: 8,
      defense: 7,
      speed: 8,
      luck: 9
    },
    lore: 'A radiant being who channels pure light and harmony. Her luminous presence amplifies the power of every note, creating cascading score multipliers that reward skilled players.',
    specialNotes: 'Balanced character with powerful score enhancement for achieving high rankings.'
  }
];

export default function CharacterSelect() {
  const { restart, selectedCharacter, setSelectedCharacter } = useGame();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set default character if none selected
    if (!selectedCharacter) {
      setSelectedCharacter(CHARACTERS[0]);
    } else {
      // Find current character index
      const index = CHARACTERS.findIndex(char => char.id === selectedCharacter.id);
      if (index !== -1) {
        setCurrentIndex(index);
      }
    }
  }, [selectedCharacter, setSelectedCharacter]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        setCurrentIndex(prev => {
          const newIndex = prev > 0 ? prev - 1 : CHARACTERS.length - 1;
          setSelectedCharacter(CHARACTERS[newIndex]);
          return newIndex;
        });
      } else if (event.key === 'ArrowRight') {
        setCurrentIndex(prev => {
          const newIndex = prev < CHARACTERS.length - 1 ? prev + 1 : 0;
          setSelectedCharacter(CHARACTERS[newIndex]);
          return newIndex;
        });
      } else if (event.key === 'Enter') {
        handleConfirm();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setSelectedCharacter]);

  const { user } = useAuth();
  
  const setCharacterMutation = useMutation({
    mutationFn: async (characterId: string) => {
      return await apiRequest("POST", "/api/user/character", { characterId });
    },
    onSuccess: () => {
      restart();
    },
  });

  const handleConfirm = () => {
    if (user && user.unlockedCharacters && user.unlockedCharacters.includes(currentCharacter.id)) {
      setCharacterMutation.mutate(currentCharacter.id);
    }
  };

  const isCharacterUnlocked = (characterId: string) => {
    return user?.unlockedCharacters?.includes(characterId) || false;
  };

  const getRequiredLevel = (characterId: string) => {
    const CHARACTER_UNLOCK_LEVELS = {
      ivy: 1,
      scal: 5,
      lightren: 10,
      winter: 20,
    };
    return CHARACTER_UNLOCK_LEVELS[characterId as keyof typeof CHARACTER_UNLOCK_LEVELS] || 1;
  };

  const currentCharacter = CHARACTERS[currentIndex];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Common': return 'text-gray-400';
      case 'Rare': return 'text-blue-400';
      case 'Epic': return 'text-purple-400';
      case 'Legendary': return 'text-yellow-400';
      default: return 'text-white';
    }
  };

  const getStatBar = (value: number, max: number = 10) => {
    const percentage = (value / max) * 100;
    return (
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    );
  };

  return (
    <div className="flex h-full text-white bg-gradient-to-br from-purple-900/20 to-blue-900/20">
      {/* Left Side - Character Display */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center">
          <div className="relative mb-8">
            <div className={`absolute inset-0 bg-gradient-to-br ${currentCharacter.color} blur-3xl opacity-30 rounded-full`} />
            <img 
              src={currentCharacter.image} 
              alt={currentCharacter.name}
              className="relative w-80 h-80 object-contain character-select-image mx-auto"
            />
          </div>
          
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
            {currentCharacter.name}
          </h1>
          

        </div>
      </div>

      {/* Right Side - Character Information */}
      <div className="flex-1 p-8 bg-black/20 backdrop-blur-sm">
        <div className="max-w-lg mx-auto">
          <h2 className="text-3xl font-bold mb-6">Character Details</h2>
          
          {/* Description */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2 text-purple-400">Description</h3>
            <p className="text-lg opacity-90">{currentCharacter.description}</p>
          </div>

          {/* Ability */}
          <div className="mb-6 p-4 bg-purple-900/30 rounded-lg border border-purple-500/30">
            <h3 className="text-xl font-bold mb-2 text-purple-400">Special Ability</h3>
            <p className="text-lg font-semibold mb-1">{currentCharacter.description}</p>
            <p className="opacity-80">{currentCharacter.effect}</p>
          </div>

          {/* Stats */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4 text-purple-400">Stats</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span>Power</span>
                  <span className="text-purple-400">{currentCharacter.stats.power}/10</span>
                </div>
                {getStatBar(currentCharacter.stats.power)}
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span>Defense</span>
                  <span className="text-blue-400">{currentCharacter.stats.defense}/10</span>
                </div>
                {getStatBar(currentCharacter.stats.defense)}
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span>Speed</span>
                  <span className="text-green-400">{currentCharacter.stats.speed}/10</span>
                </div>
                {getStatBar(currentCharacter.stats.speed)}
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span>Luck</span>
                  <span className="text-yellow-400">{currentCharacter.stats.luck}/10</span>
                </div>
                {getStatBar(currentCharacter.stats.luck)}
              </div>
            </div>
          </div>

          {/* Lore */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2 text-purple-400">Lore</h3>
            <p className="opacity-80 leading-relaxed">{currentCharacter.lore}</p>
          </div>

          {/* Special Notes */}
          <div className="mb-8 p-3 bg-blue-900/20 rounded-lg border border-blue-500/30">
            <h3 className="text-lg font-bold mb-2 text-blue-400">Player Notes</h3>
            <p className="opacity-80">{currentCharacter.specialNotes}</p>
          </div>

          {/* Navigation and Controls */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm opacity-60">
              <span>← Previous</span>
              <span>{currentIndex + 1} / {CHARACTERS.length}</span>
              <span>Next →</span>
            </div>
            
            {isCharacterUnlocked(currentCharacter.id) ? (
              <button
                onClick={handleConfirm}
                disabled={setCharacterMutation.isPending}
                className="w-full px-6 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 text-xl disabled:opacity-50"
              >
                {setCharacterMutation.isPending ? 'Selecting...' : `Start Game with ${currentCharacter.name}`}
              </button>
            ) : (
              <div className="w-full px-6 py-4 bg-gray-700 text-gray-400 font-bold rounded-lg text-xl text-center">
                🔒 Unlock at Level {getRequiredLevel(currentCharacter.id)}
                <div className="text-sm mt-1 opacity-80">
                  Current Level: {(user as any)?.level || 1}
                </div>
              </div>
            )}
            
            <p className="text-center text-sm opacity-60">
              Use ← → arrow keys to browse • Enter to confirm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}