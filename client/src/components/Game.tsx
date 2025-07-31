import { useEffect, useRef } from "react";
import { useGame } from "../lib/stores/useGame";
import { useRhythm } from "../lib/stores/useRhythm";
import GameCanvas from "./GameCanvas";
import GameUI from "./GameUI";
import FlashOverlay from "./FlashOverlay";
import SpeedFeedback from "./SpeedFeedback";
import { GameEngine } from "../lib/gameEngine";

export default function Game() {
  const { phase, restart } = useGame();
  const { resetGame } = useRhythm();
  const gameEngineRef = useRef<GameEngine | null>(null);

  useEffect(() => {
    if (phase === 'playing' && !gameEngineRef.current) {
      gameEngineRef.current = new GameEngine();
      gameEngineRef.current.start();
    } else if (phase !== 'playing' && gameEngineRef.current) {
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
      <GameUI onRestart={handleRestart} />
      <FlashOverlay />
      <SpeedFeedback />
      
      {phase === 'ended' && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Game Over!</h2>
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
