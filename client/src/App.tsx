import { useEffect } from "react";
import { useGame } from "./lib/stores/useGame";
import { useAudio } from "./lib/stores/useAudio";
import Menu from "./components/Menu";
import Game from "./components/Game";
import AudioManager from "./components/AudioManager";
import "@fontsource/inter";

function App() {
  const { phase } = useGame();
  const { setBackgroundMusic, setHitSound, setSuccessSound } = useAudio();

  // Initialize audio files
  useEffect(() => {
    const bgMusic = new Audio('/sounds/background.mp3');
    const hitSound = new Audio('/sounds/hit.mp3');
    const successSound = new Audio('/sounds/success.mp3');
    
    bgMusic.loop = true;
    bgMusic.volume = 0.6;
    
    setBackgroundMusic(bgMusic);
    setHitSound(hitSound);
    setSuccessSound(successSound);
  }, [setBackgroundMusic, setHitSound, setSuccessSound]);

  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      position: 'relative', 
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: 'Inter, sans-serif'
    }}>
      <AudioManager />
      
      {phase === 'ready' && <Menu />}
      {(phase === 'playing' || phase === 'ended') && <Game />}
    </div>
  );
}

export default App;
