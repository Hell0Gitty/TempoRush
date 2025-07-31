import { useEffect, useRef, useState } from "react";
import { useGame } from "../lib/stores/useGame";
import { useRhythm } from "../lib/stores/useRhythm";
import GameCanvas from "./GameCanvas";
import GameUI from "./GameUI";
import FlashOverlay from "./FlashOverlay";
import SpeedFeedback from "./SpeedFeedback";
import VoiceLines from "./VoiceLines";
import ResultsScreen from "./ResultsScreen";
import { GameEngine } from "../lib/gameEngine";

export default function Game() {
  const { phase, restart, pause, resume, selectedSong, selectedCharacter, saveHighScore } = useGame();
  const { resetGame, score, accuracy, maxCombo, health } = useRhythm();
  const gameEngineRef = useRef<GameEngine | null>(null);
  const scoresSavedRef = useRef<boolean>(false);
  const [voiceLineResult, setVoiceLineResult] = useState<'complete' | 'failed' | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [resultVoiceLine, setResultVoiceLine] = useState<string>("");



  useEffect(() => {
    if (phase === 'playing' && !gameEngineRef.current) {
      resetGame(); // Initialize abilities and game state
      gameEngineRef.current = new GameEngine();
      gameEngineRef.current.start();
      scoresSavedRef.current = false; // Reset when starting a new game
    } else if (phase === 'paused' && gameEngineRef.current) {
      gameEngineRef.current.stop();
    } else if (phase === 'playing' && gameEngineRef.current) {
      // Resume game if engine exists
      gameEngineRef.current.start();
    } else if ((phase !== 'playing' && phase !== 'paused') && gameEngineRef.current) {
      gameEngineRef.current.stop();
      gameEngineRef.current = null;
    }

    return () => {
      if (gameEngineRef.current) {
        gameEngineRef.current.stop();
        gameEngineRef.current = null;
      }
    };
  }, [phase]);

  // Save high score and show results when game ends
  useEffect(() => {
    if (phase === 'ended' && !scoresSavedRef.current && selectedSong && selectedCharacter) {
      const highScoreData = {
        songTitle: selectedSong.title,
        difficulty: selectedSong.selectedDifficulty.level,
        character: selectedCharacter.name,
        score: score,
        accuracy: accuracy,
        combo: maxCombo
      };
      
      saveHighScore(highScoreData);
      scoresSavedRef.current = true;
      
      // Determine if song was completed or failed
      const gameResult = health > 0 ? 'complete' : 'failed';
      setVoiceLineResult(gameResult);
      
      // Get random voice line for results
      const CHARACTER_VOICE_LINES = {
        lightren: {
          complete: ["Nice. I knew it.", "Our completion was inevitable.", "...Huh. You're not as bad as I thought."],
          failed: ["Ah... there's always next time.", "...Hm.", "Sad, but we'll get better."]
        },
        scal: {
          complete: ["Huh! Didn't think you'd avoid that.", "You're pretty good!", "Nice!"],
          failed: ["Hm... Perhaps I made it a bit too hard.", "Try something easier, champ.", "Next time, we'll ace this."]
        },
        winter: {
          complete: ["Victory...", "Hah. Nice.", "You're... not bad."],
          failed: ["...cold.", "That's... saddening.", "Is... that all?"]
        },
        ivy: {
          complete: ["Nice, buddy.", "I knew I could count on you.", "Heh... I thought so."],
          failed: ["Hm...", "Really... I thought we did better.", "...no way."]
        }
      };
      
      const lines = CHARACTER_VOICE_LINES[selectedCharacter.id as keyof typeof CHARACTER_VOICE_LINES];
      if (lines) {
        const availableLines = lines[gameResult];
        const randomLine = availableLines[Math.floor(Math.random() * availableLines.length)];
        setResultVoiceLine(randomLine);
      }
      
      // Show results screen after a brief delay
      setTimeout(() => {
        setShowResults(true);
      }, 1000);
      
      console.log('High score saved:', highScoreData);
      console.log('Game result:', gameResult);
    }
  }, [phase, score, accuracy, maxCombo, health, selectedSong, selectedCharacter, saveHighScore]);

  // ESC and Enter key handling for pause/resume
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (phase === 'playing') {
          pause();
        } else if (phase === 'paused') {
          resume();
        }
      } else if (e.key === 'Enter' && phase === 'paused') {
        resume();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [phase, pause, resume]);

  const handleRestart = () => {
    if (gameEngineRef.current) {
      gameEngineRef.current.stop();
      gameEngineRef.current = null;
    }
    resetGame();
    restart();
    setVoiceLineResult(null); // Clear voice lines
    setShowResults(false); // Clear results screen
    setResultVoiceLine("");
  };

  const handleVoiceLineClose = () => {
    setVoiceLineResult(null);
  };

  const handleResultsNext = () => {
    setShowResults(false);
    setVoiceLineResult(null);
    setResultVoiceLine("");
    restart(); // Go back to song select
  };

  return (
    <div className="relative w-full h-full">
      <GameCanvas gameEngine={gameEngineRef.current} />
      <GameUI onPause={pause} />
      <FlashOverlay />
      <SpeedFeedback />
      <VoiceLines gameResult={voiceLineResult} onClose={handleVoiceLineClose} />
      
      {phase === 'paused' && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-40">
          <div className="text-white text-center">
            <div className="text-6xl font-bold mb-4">PAUSED</div>
            <div className="text-2xl">Press Enter to continue</div>
          </div>
        </div>
      )}
      
      {showResults && voiceLineResult && (
        <div className="absolute inset-0 z-50">
          <ResultsScreen 
            gameResult={voiceLineResult}
            voiceLine={resultVoiceLine}
            onNext={handleResultsNext}
          />
        </div>
      )}
    </div>
  );
}
