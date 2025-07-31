import { useEffect } from "react";
import { useAuth } from "./hooks/useAuth";
import { useGame } from "./lib/stores/useGame";
import { useAudio } from "./lib/stores/useAudio";
import Landing from "./components/Landing";
import Home from "./components/Home";
import SongSelect from "./components/SongSelect";
import CharacterSelect from "./components/CharacterSelect";
import HighScores from "./components/HighScores";
import Game from "./components/Game";
import AudioManager from "./components/AudioManager";
import "@fontsource/lato";

function App() {
  const { isAuthenticated, isLoading } = useAuth();
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

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-blue-900">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Landing />;
  }

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
      
      {phase === 'ready' && <Home />}
      {phase === 'songSelect' && <SongSelect />}
      {phase === 'characterSelect' && <CharacterSelect />}
      {phase === 'highScores' && <HighScores />}
      {(phase === 'playing' || phase === 'ended') && <Game />}
    </div>
  );
}

export default App;
