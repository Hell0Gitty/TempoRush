import { useState } from "react";
import { useGame } from "../lib/stores/useGame";

interface Character {
  id: string;
  name: string;
  description: string;
  effect: string;
  modifier: {
    noteSpeedMultiplier: number;
    healthMultiplier: number;
    scoreMultiplier: number;
    hitWindowMultiplier: number;
  };
  color: string;
  icon: string;
}

const CHARACTERS: Character[] = [
  {
    id: "normal",
    name: "Rhythm",
    description: "Balanced character for standard gameplay",
    effect: "No modifications - pure skill challenge",
    modifier: {
      noteSpeedMultiplier: 1.0,
      healthMultiplier: 1.0,
      scoreMultiplier: 1.0,
      hitWindowMultiplier: 1.0
    },
    color: "from-gray-500 to-gray-700",
    icon: "🎵"
  },
  {
    id: "speedster",
    name: "Speedster",
    description: "High-speed challenger",
    effect: "Faster notes, smaller hit window, higher scores",
    modifier: {
      noteSpeedMultiplier: 1.4,
      healthMultiplier: 0.8,
      scoreMultiplier: 1.3,
      hitWindowMultiplier: 0.8
    },
    color: "from-cyan-500 to-blue-700",
    icon: "⚡"
  },
  {
    id: "precision",
    name: "Precision",
    description: "Accuracy-focused character",
    effect: "Larger hit windows, lower health penalty",
    modifier: {
      noteSpeedMultiplier: 0.9,
      healthMultiplier: 1.2,
      scoreMultiplier: 0.9,
      hitWindowMultiplier: 1.3
    },
    color: "from-emerald-500 to-green-700",
    icon: "🎯"
  },
  {
    id: "endurance",
    name: "Endurance",
    description: "Survival specialist",
    effect: "More health, slower health loss, moderate scoring",
    modifier: {
      noteSpeedMultiplier: 1.0,
      healthMultiplier: 1.5,
      scoreMultiplier: 1.0,
      hitWindowMultiplier: 1.1
    },
    color: "from-orange-500 to-red-700",
    icon: "🛡️"
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
                <div className="text-4xl mb-3">{character.icon}</div>
                <h3 className="text-xl font-bold mb-2">{character.name}</h3>
                <p className="text-sm opacity-80 mb-4">{character.description}</p>
                
                <div className="text-xs space-y-1 mb-4">
                  <div className="font-semibold opacity-90">{character.effect}</div>
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