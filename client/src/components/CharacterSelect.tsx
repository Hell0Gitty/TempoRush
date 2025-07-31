import { useState } from "react";
import { useGame } from "../lib/stores/useGame";

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
    image: "/characters/ivy.png"
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
    image: "/characters/winter.png"
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
    image: "/characters/scal.png"
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
    image: "/characters/lightren.png"
  }
];

export default function CharacterSelect() {
  const { restart, selectedCharacter, setSelectedCharacter } = useGame();
  const [hoveredCharacter, setHoveredCharacter] = useState<string | null>(null);

  const handleCharacterSelect = (character: Character) => {
    setSelectedCharacter(character);
  };

  const handleConfirm = () => {
    restart();
  };

  return (
    <div className="flex flex-col items-center justify-center h-full text-white p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
          Character Select
        </h1>
        <p className="text-lg opacity-80">Choose your playstyle modifier</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full mb-8">
        {CHARACTERS.map((character) => {
          const isSelected = selectedCharacter?.id === character.id;
          const isHovered = hoveredCharacter === character.id;
          
          return (
            <div
              key={character.id}
              onClick={() => handleCharacterSelect(character)}
              onMouseEnter={() => setHoveredCharacter(character.id)}
              onMouseLeave={() => setHoveredCharacter(null)}
              className={`p-6 rounded-lg cursor-pointer transition-all duration-300 border-2 relative ${
                isSelected 
                  ? `bg-gradient-to-br ${character.color} border-white scale-105 shadow-lg`
                  : isHovered
                    ? `bg-gradient-to-br ${character.color} border-white/60 scale-102`
                    : 'border-white/20 bg-black/20 hover:border-white/40'
              }`}
            >
              <div className="text-center">
                <div className="mb-3 h-24 flex items-center justify-center">
                  <img 
                    src={character.image} 
                    alt={character.name}
                    className="w-20 h-20 object-contain rounded-lg"
                    style={{
                      filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.3)) contrast(1.1) brightness(1.1)',
                      mixBlendMode: 'normal'
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{character.name}</h3>
                <p className="text-sm opacity-80 mb-4">{character.description}</p>
                
                <div className="text-xs space-y-1 mb-4">
                  <div className="font-semibold opacity-90 text-yellow-300">{character.effect}</div>
                  {character.ability.uses && (
                    <div className="text-cyan-300">Uses: {character.ability.uses}</div>
                  )}
                  {character.ability.duration && (
                    <div className="text-green-300">Duration: {character.ability.duration}s</div>
                  )}
                </div>

                {/* Stats */}
                <div className="text-xs space-y-1">
                  <div className="flex justify-between">
                    <span>Note Speed:</span>
                    <span className={character.modifier.noteSpeedMultiplier > 1 ? 'text-red-400' : character.modifier.noteSpeedMultiplier < 1 ? 'text-green-400' : 'text-white'}>
                      {(character.modifier.noteSpeedMultiplier * 100).toFixed(0)}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Health:</span>
                    <span className={character.modifier.healthMultiplier > 1 ? 'text-green-400' : character.modifier.healthMultiplier < 1 ? 'text-red-400' : 'text-white'}>
                      {(character.modifier.healthMultiplier * 100).toFixed(0)}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Score Bonus:</span>
                    <span className={character.modifier.scoreMultiplier > 1 ? 'text-green-400' : character.modifier.scoreMultiplier < 1 ? 'text-red-400' : 'text-white'}>
                      {(character.modifier.scoreMultiplier * 100).toFixed(0)}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Hit Window:</span>
                    <span className={character.modifier.hitWindowMultiplier > 1 ? 'text-green-400' : character.modifier.hitWindowMultiplier < 1 ? 'text-red-400' : 'text-white'}>
                      {(character.modifier.hitWindowMultiplier * 100).toFixed(0)}%
                    </span>
                  </div>
                </div>
              </div>

              {isSelected && (
                <div className="absolute top-2 right-2 text-white">
                  ✓
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex gap-4">
        <button
          onClick={restart}
          className="px-6 py-3 bg-gray-600 rounded-lg font-bold hover:bg-gray-500 transition-colors"
        >
          Back to Menu
        </button>
        
        <button
          onClick={handleConfirm}
          disabled={!selectedCharacter}
          className={`px-8 py-3 rounded-lg font-bold transition-all ${
            selectedCharacter
              ? 'bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 shadow-lg'
              : 'bg-gray-500 cursor-not-allowed opacity-50'
          }`}
        >
          {selectedCharacter ? `Play as ${selectedCharacter.name}` : 'Select a Character'}
        </button>
      </div>
    </div>
  );
}