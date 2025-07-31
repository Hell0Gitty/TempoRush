import { useEffect } from "react";
import { useGame } from "./lib/stores/useGame";
import { useAudio } from "./lib/stores/useAudio";
import Menu from "./components/Menu";
import SongSelect from "./components/SongSelect";
import Game from "./components/Game";
import AudioManager from "./components/AudioManager";
import "@fontsource/lato";

function App() {
  const { phase, selectedSong } = useGame();
  const { setBackgroundMusic, setSuccessSound } = useAudio();

  // Initialize success sound effect only
  useEffect(() => {
    const successSound = new Audio('/sounds/success.mp3');
    setSuccessSound(successSound);
  }, [setSuccessSound]);

  // Load selected song's audio file
  useEffect(() => {
    if (selectedSong?.audioFile) {
      console.log("Loading song audio:", selectedSong.audioFile);
      const bgMusic = new Audio(selectedSong.audioFile);
      bgMusic.loop = true;
      bgMusic.volume = 0.6;
      
      // Add error handling for audio loading
      bgMusic.onerror = (e) => {
        console.error("Failed to load audio file:", selectedSong.audioFile, e);
      };
      
      bgMusic.onloadeddata = () => {
        console.log("Audio file loaded successfully:", selectedSong.audioFile);
      };
      
      setBackgroundMusic(bgMusic);
    }
  }, [selectedSong?.audioFile, setBackgroundMusic]);

  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      position: 'relative', 
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: 'Lato, sans-serif'
    }}>
      <AudioManager />
      
      {phase === 'ready' && <Menu />}
      {phase === 'songSelect' && <SongSelect />}
      {(phase === 'playing' || phase === 'ended') && <Game />}
    </div>
  );
}

export default App;
