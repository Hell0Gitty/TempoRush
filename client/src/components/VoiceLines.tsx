import { useEffect, useState } from "react";
import { useGame } from "../lib/stores/useGame";

interface VoiceLinesProps {
  gameResult: 'complete' | 'failed' | null;
  onClose: () => void;
}

const CHARACTER_VOICE_LINES = {
  lightren: {
    complete: [
      "Nice. I knew it.",
      "Our completion was inevitable.",
      "...Huh. You're not as bad as I thought."
    ],
    failed: [
      "Ah... there's always next time.",
      "...Hm.",
      "Sad, but we'll get better."
    ]
  },
  scal: {
    complete: [
      "Huh! Didn't think you'd avoid that.",
      "You're pretty good!",
      "Nice!"
    ],
    failed: [
      "Hm... Perhaps I made it a bit too hard.",
      "Try something easier, champ.",
      "Next time, we'll ace this."
    ]
  },
  winter: {
    complete: [
      "Victory...",
      "Hah. Nice.",
      "You're... not bad."
    ],
    failed: [
      "...cold.",
      "That's... saddening.",
      "Is... that all?"
    ]
  },
  ivy: {
    complete: [
      "Nice, buddy.",
      "I knew I could count on you.",
      "Heh... I thought so."
    ],
    failed: [
      "Hm...",
      "Really... I thought we did better.",
      "...no way."
    ]
  }
};

export default function VoiceLines({ gameResult, onClose }: VoiceLinesProps) {
  const { selectedCharacter } = useGame();
  const [currentLine, setCurrentLine] = useState<string>("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!gameResult || !selectedCharacter) return;

    const lines = CHARACTER_VOICE_LINES[selectedCharacter.id as keyof typeof CHARACTER_VOICE_LINES];
    if (!lines) return;

    const availableLines = lines[gameResult];
    const randomLine = availableLines[Math.floor(Math.random() * availableLines.length)];
    
    setCurrentLine(randomLine);
    setIsVisible(true);

    // Auto-close after 4 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 500); // Wait for fade out
    }, 4000);

    return () => clearTimeout(timer);
  }, [gameResult, selectedCharacter, onClose]);

  if (!gameResult || !selectedCharacter || !currentLine) return null;

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-500 ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`}>
      <div className="absolute inset-0 bg-black/20" onClick={() => {
        setIsVisible(false);
        setTimeout(onClose, 500);
      }} />
      
      <div className={`relative bg-black/80 backdrop-blur-sm rounded-xl p-6 max-w-md mx-4 transform transition-all duration-500 ${
        isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
      }`}>
        {/* Character portrait */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <img 
              src={selectedCharacter.image} 
              alt={selectedCharacter.name}
              className="w-24 h-24 object-contain character-image"
            />
          </div>
          
          {/* Speech bubble */}
          <div className="flex-1">
            <div className="bg-white/10 rounded-lg p-3 relative">
              {/* Speech bubble arrow */}
              <div className="absolute left-0 top-3 w-0 h-0 border-t-4 border-b-4 border-r-8 border-transparent border-r-white/10 transform -translate-x-2" />
              
              <div className="text-sm font-semibold text-white/60 mb-1">
                {selectedCharacter.name}
              </div>
              <div className="text-white text-lg leading-relaxed">
                {currentLine}
              </div>
            </div>
          </div>
        </div>
        
        {/* Close button */}
        <button
          onClick={() => {
            setIsVisible(false);
            setTimeout(onClose, 500);
          }}
          className="absolute top-2 right-2 text-white/40 hover:text-white/80 transition-colors"
        >
          ✕
        </button>
      </div>
    </div>
  );
}