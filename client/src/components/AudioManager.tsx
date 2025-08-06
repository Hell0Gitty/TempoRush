import { useEffect } from "react";
import { useAudio } from "../lib/stores/useAudio";
import { useGame } from "../lib/stores/useGame";

export default function AudioManager() {
  const { backgroundMusic, menuMusic, isMuted, setMenuMusic, playMenuMusic, stopMenuMusic } = useAudio();
  const { phase } = useGame();

  // Load menu music and start immediately when ready
  useEffect(() => {
    const audio = new Audio('/menu-music.mp3');
    audio.preload = 'auto';
    audio.volume = 0.15; // Set quieter volume immediately
    
    // Start playing as soon as it's loaded
    audio.addEventListener('canplaythrough', () => {
      setMenuMusic(audio);
      // Start playing immediately if we're in a menu phase
      const currentPhase = useGame.getState().phase;
      const isMenuPhase = ['ready', 'songSelect', 'characterSelect', 'highScores'].includes(currentPhase);
      if (isMenuPhase && !useAudio.getState().isMuted) {
        audio.currentTime = 0;
        audio.loop = true;
        audio.play().catch(console.log);
      }
    });
    
    setMenuMusic(audio);
  }, [setMenuMusic]);

  // Handle background music during gameplay
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

  // Handle menu music for menu screens
  useEffect(() => {
    if (!menuMusic) return;

    const isMenuPhase = ['ready', 'songSelect', 'characterSelect', 'highScores'].includes(phase);
    
    if (isMenuPhase && !isMuted) {
      playMenuMusic();
    } else {
      stopMenuMusic();
    }

    return () => {
      stopMenuMusic();
    };
  }, [menuMusic, phase, isMuted, playMenuMusic, stopMenuMusic]);

  // Handle stopping menu music when preview is playing
  const { isPreviewPlaying } = useAudio();
  useEffect(() => {
    if (!menuMusic) return;
    
    if (isPreviewPlaying) {
      stopMenuMusic();
    } else {
      const isMenuPhase = ['ready', 'songSelect', 'characterSelect', 'highScores'].includes(phase);
      if (isMenuPhase && !isMuted) {
        playMenuMusic();
      }
    }
  }, [isPreviewPlaying, menuMusic, phase, isMuted, playMenuMusic, stopMenuMusic]);

  return null;
}
