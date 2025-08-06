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
  // Force explicit phase subscription
  const phase = useGame((state) => state.phase);
  const restart = useGame((state) => state.restart);
  const pause = useGame((state) => state.pause);
  const resume = useGame((state) => state.resume);
  const selectedSong = useGame((state) => state.selectedSong);
  const selectedCharacter = useGame((state) => state.selectedCharacter);
  const saveHighScore = useGame((state) => state.saveHighScore);
  const { resetGame, score, accuracy, maxCombo, health } = useRhythm();
  const gameEngineRef = useRef<GameEngine | null>(null);
  const scoresSavedRef = useRef<boolean>(false);

  // Test store subscription
  useEffect(() => {
    console.log("Game component mounted, current phase:", phase);
    const unsubscribe = useGame.subscribe(
      (state) => state.phase,
      (phase) =>
        console.log("Store subscription detected phase change:", phase),
    );
    return unsubscribe;
  }, []);


  const [showResults, setShowResults] = useState(false);
  const [gameResult, setGameResult] = useState<"complete" | "failed" | null>(
    null,
  );

  useEffect(() => {
    console.log("useEffect:43 - Game phase changed to:", phase);
    if (phase === "playing" && !gameEngineRef.current) {
      resetGame(); // Initialize abilities and game state
      gameEngineRef.current = new GameEngine();
      gameEngineRef.current.start();
      scoresSavedRef.current = false; // Reset when starting a new game
    } else if (phase === "paused" && gameEngineRef.current) {
      gameEngineRef.current.stop();
    } else if (phase === "playing" && gameEngineRef.current) {
      // Resume game if engine exists
      gameEngineRef.current.start();
    } else if (
      phase !== "playing" &&
      phase !== "paused" &&
      gameEngineRef.current
    ) {
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
    if (
      phase === "ended" &&
      !scoresSavedRef.current &&
      selectedSong &&
      selectedCharacter
    ) {
      const highScoreData = {
        songTitle: selectedSong.title,
        difficulty: selectedSong.selectedDifficulty.level,
        character: selectedCharacter.name,
        score: score,
        accuracy: accuracy,
        combo: maxCombo,
      };

      saveHighScore(highScoreData);
      scoresSavedRef.current = true;

      // Determine if song was completed or failed based on grade (C or above is pass)
      const result = health > 0 && accuracy >= 70 ? "complete" : "failed";
      setGameResult(result);

      // Show results screen immediately
      setShowResults(true);

      console.log("High score saved:", highScoreData);
      console.log("Game result:", result);
    }
  }, [
    phase,
    score,
    accuracy,
    maxCombo,
    health,
    selectedSong,
    selectedCharacter,
    saveHighScore,
  ]);

  // ESC and Enter key handling for pause/resume
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (phase === "playing") {
          pause();
        } else if (phase === "paused") {
          resume();
        }
      } else if (e.key === "Enter" && phase === "paused") {
        resume();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [phase, pause, resume]);

  const handleRestart = () => {
    if (gameEngineRef.current) {
      gameEngineRef.current.stop();
      gameEngineRef.current = null;
    }
    resetGame();
    // Restart to playing phase directly (don't go to menu)
    useGame.getState().setPhase('playing');
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
        isVisible={phase === "playing"}
      />

      {phase === "paused" && <PauseMenu onRestart={handleRestart} />}

      {showResults && gameResult && (
        <div className="absolute inset-0 z-50">
          <ResultsScreen gameResult={gameResult} onNext={handleResultsNext} />
        </div>
      )}
    </div>
  );
}
