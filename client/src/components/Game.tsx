import { useEffect, useRef } from "react";
import { useGame } from "../lib/stores/useGame";
import { useRhythm } from "../lib/stores/useRhythm";
import GameCanvas from "./GameCanvas";
import GameUI from "./GameUI";
import FlashOverlay from "./FlashOverlay";
import SpeedFeedback from "./SpeedFeedback";
import PauseMenu from "./PauseMenu";
import { GameEngine } from "../lib/gameEngine";

export default function Game() {
  const { phase, restart, pause, selectedSong, selectedCharacter, saveHighScore } = useGame();
  const { resetGame, score, accuracy, maxCombo } = useRhythm();
  const gameEngineRef = useRef<GameEngine | null>(null);
  const scoresSavedRef = useRef<boolean>(false);



  useEffect(() => {
    if (phase === 'playing' && !gameEngineRef.current) {
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

  // Save high score when game ends
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
      console.log('High score saved:', highScoreData);
    }
  }, [phase, score, accuracy, maxCombo, selectedSong, selectedCharacter, saveHighScore]);

  const handleRestart = () => {
    if (gameEngineRef.current) {
      gameEngineRef.current.stop();
      gameEngineRef.current = null;
    }
    resetGame();
    restart();
  };

  return (
    <div className="relative w-full h-full">
      <GameCanvas gameEngine={gameEngineRef.current} />
      <GameUI onPause={pause} />
      <FlashOverlay />
      <SpeedFeedback />
      
      {phase === 'paused' && (
        <PauseMenu onRestart={handleRestart} />
      )}
      
      {phase === 'ended' && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 text-center text-white max-w-md">
            <h2 className="text-3xl font-bold mb-4">Game Over!</h2>
            
            <div className="mb-6 space-y-2 text-lg">
              <div className="flex justify-between">
                <span>Final Score:</span>
                <span className="font-bold text-green-400">{score.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Accuracy:</span>
                <span className="font-bold">{accuracy.toFixed(1)}%</span>
              </div>
              <div className="flex justify-between">
                <span>Max Combo:</span>
                <span className="font-bold text-yellow-400">{maxCombo}</span>
              </div>
              <div className="flex justify-between">
                <span>Character:</span>
                <span className="font-bold text-cyan-400">{selectedCharacter?.name}</span>
              </div>
            </div>
            
            <div className="mb-4 text-sm text-green-300">
              ✓ High score saved!
            </div>
            
            <button
              onClick={handleRestart}
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg font-bold hover:scale-105 transition-transform"
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
