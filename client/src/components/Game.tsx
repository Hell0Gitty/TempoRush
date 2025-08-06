import { useEffect, useRef, useState } from "react";
import { useGame } from "../lib/stores/useGame";
import { useRhythm } from "../lib/stores/useRhythm";
import GameCanvas from "./GameCanvas";
import GameUI from "./GameUI";
import FlashOverlay from "./FlashOverlay";
import SpeedFeedback from "./SpeedFeedback";
import ResultsScreen from "./ResultsScreen";
import MobileControls from "./MobileControls";
import PauseMenu from "./PauseMenu";
import { GameEngine } from "../lib/gameEngine";

export default function Game() {
  const gameStore = useGame();
  const { phase, restart, pause, resume, selectedSong, selectedCharacter, saveHighScore } = gameStore;
  const { resetGame, score, accuracy, maxCombo, health } = useRhythm();
  
  // Debug phase changes
  console.log("Game component - Current phase:", phase);
  console.log("Store object:", gameStore);
  const gameEngineRef = useRef<GameEngine | null>(null);
  
  // Watch for phase changes
  useEffect(() => {
    console.log("Phase changed to:", phase);
    console.log("Full store state:", useGame.getState());
  }, [phase]);
  
  // Manual phase check
  useEffect(() => {
    const interval = setInterval(() => {
      const currentPhase = useGame.getState().phase;
      if (currentPhase !== phase) {
        console.log("MISMATCH: Component phase:", phase, "Store phase:", currentPhase);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [phase]);
  const scoresSavedRef = useRef<boolean>(false);
  const [showResults, setShowResults] = useState(false);
  const [gameResult, setGameResult] = useState<'complete' | 'failed' | null>(null);



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
      
      // Determine if song was completed or failed based on grade (C or above is pass)
      const result = health > 0 && accuracy >= 70 ? 'complete' : 'failed';
      setGameResult(result);
      
      // Show results screen immediately
      setShowResults(true);
      
      console.log('High score saved:', highScoreData);
      console.log('Game result:', result);
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
    setShowResults(false);
    setGameResult(null);
  };

  const handleResultsNext = () => {
    setShowResults(false);
    setGameResult(null);
    restart(); // Go back to song select
  };

  return (
    <div className="relative w-full h-full">
      <GameCanvas gameEngine={gameEngineRef.current} />
      <GameUI onPause={pause} />
      <FlashOverlay />
      <SpeedFeedback />
      <MobileControls 
        gameEngine={gameEngineRef.current} 
        isVisible={phase === 'playing'} 
      />
      
      {/* Debug Phase Display */}
      <div className="absolute top-4 right-4 bg-red-500 text-white p-2 text-sm z-50">
        Phase: {phase}
      </div>
      
      {phase === 'paused' && (
        <>
          <div className="absolute top-16 right-4 bg-yellow-500 text-black p-2 text-sm z-50">
            PAUSE MENU SHOULD RENDER
          </div>
          <PauseMenu onRestart={handleRestart} />
        </>
      )}
      
      {showResults && gameResult && (
        <div className="absolute inset-0 z-50">
          <ResultsScreen 
            gameResult={gameResult}
            onNext={handleResultsNext}
          />
        </div>
      )}
    </div>
  );
}
