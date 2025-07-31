import { useEffect } from "react";
import { useAudio } from "../lib/stores/useAudio";
import { useGame } from "../lib/stores/useGame";

export default function AudioManager() {
  const { backgroundMusic, isMuted } = useAudio();
  const { phase } = useGame();

  useEffect(() => {
    if (!backgroundMusic) return;

    if (phase === 'playing' && !isMuted) {
      backgroundMusic.currentTime = 0;
      backgroundMusic.play().catch(console.log);
    } else {
      backgroundMusic.pause();
    }

    return () => {
      backgroundMusic.pause();
    };
  }, [backgroundMusic, phase, isMuted]);

  return null;
}
