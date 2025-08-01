import { useEffect, useState } from "react";
import { useGame } from "../lib/stores/useGame";
import { useRhythm } from "../lib/stores/useRhythm";

interface MobileControlsProps {
  gameEngine: any | null;
  isVisible: boolean;
}

export default function MobileControls({ gameEngine, isVisible }: MobileControlsProps) {
  const [isMobile, setIsMobile] = useState(false);
  const { selectedCharacter } = useGame();
  const { abilityUses, activateAbility } = useRhythm();

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        (window.innerWidth <= 768 && 'ontouchstart' in window);
      setIsMobile(isMobileDevice);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleTouchStart = (lane: number) => {
    if (!gameEngine) return;
    
    const keys = ['a', 's', 'k', 'l'];
    const key = keys[lane];
    
    // Simulate key press
    gameEngine.handleMobileInput(key, true);
  };

  const handleTouchEnd = (lane: number) => {
    if (!gameEngine) return;
    
    const keys = ['a', 's', 'k', 'l'];
    const key = keys[lane];
    
    // Simulate key release
    gameEngine.handleMobileInput(key, false);
  };

  const handleAbilityActivation = () => {
    if (!selectedCharacter) return;
    
    const abilityType = selectedCharacter.ability.type;
    const remainingUses = abilityUses[abilityType] || 0;
    
    if ((abilityType === 'health_freeze' || abilityType === 'score_boost') && remainingUses > 0) {
      activateAbility(abilityType);
    }
  };

  if (!isMobile || !isVisible) return null;

  const laneColors = ['bg-red-500', 'bg-green-500', 'bg-blue-500', 'bg-yellow-500'];
  const keys = ['A', 'S', 'K', 'L'];

  // Check if character has an activatable ability
  const hasActivatableAbility = selectedCharacter && 
    (selectedCharacter.ability.type === 'health_freeze' || selectedCharacter.ability.type === 'score_boost');
  const abilityUseCount = selectedCharacter ? (abilityUses[selectedCharacter.ability.type] || 0) : 0;

  return (
    <div className="absolute bottom-0 left-0 right-0 z-30">
      {/* Ability button for mobile (if applicable) */}
      {hasActivatableAbility && abilityUseCount > 0 && (
        <div className="absolute -top-16 right-4">
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg mobile-control-btn"
            onTouchStart={(e) => {
              e.preventDefault();
              handleAbilityActivation();
            }}
            onClick={handleAbilityActivation}
            style={{ touchAction: 'none' }}
          >
            {selectedCharacter?.name} ({abilityUseCount})
          </button>
        </div>
      )}
      
      <div className="flex h-20 max-w-2xl mx-auto">
        {keys.map((key, index) => (
          <button
            key={index}
            className={`flex-1 ${laneColors[index]} text-white font-bold text-2xl border border-white/20 select-none mobile-control-btn active:scale-95 transition-transform`}
            onTouchStart={(e) => {
              e.preventDefault();
              handleTouchStart(index);
            }}
            onTouchEnd={(e) => {
              e.preventDefault();
              handleTouchEnd(index);
            }}
            onMouseDown={(e) => {
              e.preventDefault();
              handleTouchStart(index);
            }}
            onMouseUp={(e) => {
              e.preventDefault();
              handleTouchEnd(index);
            }}
            onMouseLeave={(e) => {
              e.preventDefault();
              handleTouchEnd(index);
            }}
            style={{ touchAction: 'none' }}
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  );
}