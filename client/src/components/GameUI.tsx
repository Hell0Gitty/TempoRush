import { useRhythm } from "../lib/stores/useRhythm";
import { useAudio } from "../lib/stores/useAudio";
import { useGame } from "../lib/stores/useGame";
import { useEffect } from "react";

interface GameUIProps {
  onPause: () => void;
}

export default function GameUI({ onPause }: GameUIProps) {
  const { score, combo, accuracy, health, abilityUses, activeAbilities, abilityVoiceLine, activateAbility, updateActiveAbilities, clearAbilityVoiceLine } = useRhythm();
  const { toggleMute, isMuted } = useAudio();
  const { selectedSong, selectedCharacter } = useGame();

  // Update active abilities timer
  useEffect(() => {
    const interval = setInterval(() => {
      updateActiveAbilities();
    }, 100);
    return () => clearInterval(interval);
  }, [updateActiveAbilities]);

  // Handle ability activation (Return key for Winter/Lightren abilities)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedCharacter) return;
      
      if (e.key === 'Enter') {
        const abilityType = selectedCharacter.ability.type;
        if ((abilityType === 'health_freeze' || abilityType === 'score_boost') && 
            (abilityUses[abilityType] || 0) > 0) {
          activateAbility(abilityType);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCharacter, abilityUses, activateAbility]);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Top UI */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-start text-white pointer-events-auto">
        <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4">
          <div className="text-2xl font-bold">Score: {score.toLocaleString()}</div>
          <div className="text-lg">Combo: {combo}x</div>
          <div className="text-sm opacity-80">Accuracy: {accuracy.toFixed(1)}%</div>
        </div>

        {/* Now Playing */}
        {selectedSong && (
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-sm opacity-60">Now Playing</div>
            <div className="font-bold">{selectedSong.title}</div>
            <div className="text-sm opacity-80">{selectedSong.artist}</div>
            <div className="text-xs opacity-60">{selectedSong.selectedDifficulty.level} • {selectedSong.selectedDifficulty.bpm} BPM</div>
          </div>
        )}

        <div className="flex gap-2">
          <button
            onClick={toggleMute}
            className="bg-black/30 backdrop-blur-sm rounded-lg p-2 hover:bg-black/40 transition-colors"
          >
            {isMuted ? '🔇' : '🔊'}
          </button>
          <button
            onClick={onPause}
            className="bg-black/30 backdrop-blur-sm rounded-lg px-4 py-2 hover:bg-black/40 transition-colors"
          >
            Pause
          </button>
        </div>
      </div>

      {/* Health Bar */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 pointer-events-auto">
        <div className="bg-black/30 backdrop-blur-sm rounded-full px-4 py-2">
          <div className="flex items-center gap-2">
            <span className="text-white text-sm font-semibold">Health:</span>
            <div className="w-32 h-2 bg-red-900 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-300 ${
                  activeAbilities.healthFreeze 
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse' 
                    : 'bg-gradient-to-r from-red-500 to-green-500'
                }`}
                style={{ width: `${health}%` }}
              />
            </div>
            {activeAbilities.healthFreeze && (
              <span className="text-cyan-300 text-xs animate-pulse">FROZEN</span>
            )}
          </div>
        </div>
      </div>

      {/* Character Ability */}
      {selectedCharacter && (
        <div className="absolute top-20 left-4 bg-black/30 backdrop-blur-sm rounded-lg p-3 text-white pointer-events-auto">
          <div className="text-sm font-bold mb-2 flex items-center gap-2">
            <img 
              src={selectedCharacter.image} 
              alt={selectedCharacter.name}
              className="w-10 h-10 object-contain character-image"
            />
            {selectedCharacter.name}
          </div>
          
          {/* Ability info */}
          <div className="text-xs mb-2 opacity-80">{selectedCharacter.effect}</div>
          
          {/* Ability uses and activation */}
          {selectedCharacter.ability.type === 'combo_save' && (
            <div className="text-sm">
              <span className="text-yellow-300">Combo Saves: </span>
              <span className="font-bold">{abilityUses['combo_save'] || 0}</span>
            </div>
          )}
          
          {(selectedCharacter.ability.type === 'health_freeze' || selectedCharacter.ability.type === 'score_boost') && (
            <div className="space-y-1">
              <button
                onClick={() => activateAbility(selectedCharacter.ability.type)}
                disabled={(abilityUses[selectedCharacter.ability.type] || 0) <= 0}
                className={`px-3 py-1 rounded text-xs font-bold transition-all ${
                  (abilityUses[selectedCharacter.ability.type] || 0) > 0
                    ? 'bg-blue-600 hover:bg-blue-500 text-white'
                    : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                }`}
              >
                Enter - Activate ({abilityUses[selectedCharacter.ability.type] || 0} left)
              </button>
              
              {selectedCharacter.ability.type === 'score_boost' && activeAbilities.scoreBoost && (
                <div className="text-xs text-yellow-300 animate-pulse">
                  SCORE BOOST ACTIVE!
                </div>
              )}
            </div>
          )}
          
          {selectedCharacter.ability.type === 'health_penalty' && (
            <div className="text-sm text-red-300">
              Extra Risk: -5 HP on miss
            </div>
          )}
        </div>
      )}

      {/* Speed Control Instructions */}
      <div className="absolute bottom-32 right-4 bg-black/30 backdrop-blur-sm rounded-lg p-3 text-white text-sm">
        <div className="font-bold mb-1">Speed Controls:</div>
        <div>↑/+ : Faster</div>
        <div>↓/- : Slower</div>
        <div>0 : Reset</div>
      </div>

      {/* Key indicators at bottom */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex gap-4">
          {[
            { key: 'A', color: 'bg-red-500' },
            { key: 'S', color: 'bg-green-500' },
            { key: 'K', color: 'bg-blue-500' },
            { key: 'L', color: 'bg-yellow-500' }
          ].map(({ key, color }) => (
            <div key={key} className={`w-16 h-16 ${color} rounded-lg flex items-center justify-center font-bold text-xl text-white shadow-lg`}>
              {key}
            </div>
          ))}
        </div>
      </div>

      {/* Ability Voice Line */}
      {abilityVoiceLine && selectedCharacter && (
        <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 pointer-events-none">
          <div className="bg-black/80 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3 animate-bounce">
            <img 
              src={selectedCharacter.image} 
              alt={selectedCharacter.name}
              className="w-12 h-12 object-contain character-image"
            />
            <div className="text-white font-bold text-lg">
              "{abilityVoiceLine}"
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
