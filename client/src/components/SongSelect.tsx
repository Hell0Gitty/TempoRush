import { useState, useRef, useEffect } from "react";
import { useGame } from "../lib/stores/useGame";
import { useAudio } from "../lib/stores/useAudio";

const AVAILABLE_SONGS = [
  {
    id: "1",
    title: "Gears of Fate",
    artist: "Laur",
    audioFile: "/sounds/gears-of-fate.mp3",
    difficulties: [
      { level: "Easy" as const, bpm: 140, duration: "4:32", noteSpeed: 200, noteFrequency: 1500 },
      { level: "Normal" as const, bpm: 165, duration: "4:32", noteSpeed: 250, noteFrequency: 1200 },
      { level: "Hard" as const, bpm: 180, duration: "4:32", noteSpeed: 300, noteFrequency: 1000 },
      { level: "Expert" as const, bpm: 195, duration: "4:32", noteSpeed: 350, noteFrequency: 800 },
      { level: "Master" as const, bpm: 210, duration: "4:32", noteSpeed: 400, noteFrequency: 600 }
    ]
  },
  {
    id: "2", 
    title: "Grievous Lady",
    artist: "Laur",
    audioFile: "/sounds/grievous-lady.mp3",
    difficulties: [
      { level: "Easy" as const, bpm: 150, duration: "3:58", noteSpeed: 200, noteFrequency: 1500 },
      { level: "Normal" as const, bpm: 170, duration: "3:58", noteSpeed: 250, noteFrequency: 1200 },
      { level: "Hard" as const, bpm: 190, duration: "3:58", noteSpeed: 300, noteFrequency: 1000 },
      { level: "Expert" as const, bpm: 210, duration: "3:58", noteSpeed: 350, noteFrequency: 800 },
      { level: "Master" as const, bpm: 230, duration: "3:58", noteSpeed: 400, noteFrequency: 600 }
    ]
  },
  {
    id: "3",
    title: "Viyella's Destiny", 
    artist: "Laur",
    audioFile: "/sounds/viyellas-destiny.mp3",
    difficulties: [
      { level: "Easy" as const, bpm: 120, duration: "4:15", noteSpeed: 200, noteFrequency: 1500 },
      { level: "Normal" as const, bpm: 140, duration: "4:15", noteSpeed: 250, noteFrequency: 1200 },
      { level: "Hard" as const, bpm: 160, duration: "4:15", noteSpeed: 300, noteFrequency: 1000 },
      { level: "Expert" as const, bpm: 180, duration: "4:15", noteSpeed: 350, noteFrequency: 800 },
      { level: "Master" as const, bpm: 200, duration: "4:15", noteSpeed: 400, noteFrequency: 600 }
    ]
  },
  {
    id: "4",
    title: "Another Me",
    artist: "Laur",
    audioFile: "/sounds/another-me.mp3",
    difficulties: [
      { level: "Easy" as const, bpm: 130, duration: "3:47", noteSpeed: 200, noteFrequency: 1500 },
      { level: "Normal" as const, bpm: 158, duration: "3:47", noteSpeed: 250, noteFrequency: 1200 },
      { level: "Hard" as const, bpm: 175, duration: "3:47", noteSpeed: 300, noteFrequency: 1000 },
      { level: "Expert" as const, bpm: 190, duration: "3:47", noteSpeed: 350, noteFrequency: 800 },
      { level: "Master" as const, bpm: 205, duration: "3:47", noteSpeed: 400, noteFrequency: 600 }
    ]
  }
];

export default function SongSelect() {
  const { selectSong, start, restart, selectedSong, expertFullCombos } = useGame();
  const { isMuted } = useAudio();
  const [selectedSongId, setSelectedSongId] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const previewAudioRef = useRef<HTMLAudioElement | null>(null);
  const [isPreviewPlaying, setIsPreviewPlaying] = useState(false);

  const currentSong = AVAILABLE_SONGS.find(song => song.id === selectedSongId);

  // Cleanup preview audio on unmount
  useEffect(() => {
    return () => {
      if (previewAudioRef.current) {
        previewAudioRef.current.pause();
        previewAudioRef.current = null;
      }
    };
  }, []);

  const playPreview = (audioFile: string) => {
    if (isMuted) return; // Don't play if sound is muted
    
    // Stop any currently playing preview
    if (previewAudioRef.current) {
      previewAudioRef.current.pause();
    }
    
    // Create new audio for preview
    const audio = new Audio(audioFile);
    audio.volume = 0.4; // Lower volume for preview
    audio.currentTime = 30; // Start 30 seconds into the song for better preview
    
    previewAudioRef.current = audio;
    setIsPreviewPlaying(true);
    
    // Play for 10 seconds only
    audio.play().catch(console.log);
    
    // Stop after 10 seconds
    setTimeout(() => {
      if (previewAudioRef.current === audio) {
        audio.pause();
        setIsPreviewPlaying(false);
      }
    }, 10000);
  };

  const stopPreview = () => {
    if (previewAudioRef.current) {
      previewAudioRef.current.pause();
      previewAudioRef.current = null;
      setIsPreviewPlaying(false);
    }
  };

  const handleSongSelect = (song: typeof AVAILABLE_SONGS[0]) => {
    setSelectedSongId(song.id);
    setSelectedDifficulty(null);
  };

  const handleDifficultySelect = (difficulty: typeof AVAILABLE_SONGS[0]['difficulties'][0]) => {
    if (currentSong) {
      setSelectedDifficulty(difficulty.level);
      selectSong(currentSong, difficulty);
    }
  };

  const handlePlay = () => {
    if (selectedSong) {
      start();
    }
  };

  const handleBack = () => {
    if (selectedDifficulty && currentSong) {
      setSelectedDifficulty(null);
    } else {
      setSelectedSongId(null);
      restart();
    }
  };

  const getDifficultyColor = (level: string) => {
    switch (level) {
      case 'Easy': return 'text-green-400 bg-green-400/20 border-green-400';
      case 'Normal': return 'text-blue-400 bg-blue-400/20 border-blue-400';
      case 'Hard': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400';
      case 'Expert': return 'text-red-400 bg-red-400/20 border-red-400';
      case 'Master': return 'text-purple-400 bg-purple-400/20 border-purple-400';
      default: return 'text-white bg-white/20 border-white';
    }
  };

  const isMasterUnlocked = (songId: string) => {
    return expertFullCombos.includes(songId);
  };

  // Song selection view
  if (!selectedSongId) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-white p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
            Select Your Song
          </h1>
          <p className="text-lg opacity-80">Choose a track to start your rhythm challenge</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full mb-8">
          {AVAILABLE_SONGS.map((song) => (
            <div
              key={song.id}
              onClick={() => handleSongSelect(song)}
              onMouseEnter={() => playPreview(song.audioFile)}
              onMouseLeave={stopPreview}
              className="p-6 rounded-lg cursor-pointer transition-all duration-300 border-2 border-white/20 bg-black/20 hover:border-pink-400 hover:bg-pink-400/10 relative"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{song.title}</h3>
                  <p className="text-sm opacity-70">{song.artist}</p>
                </div>
                <div className="text-right">
                  <div className="text-xs opacity-60">
                    {song.difficulties.length} difficulties
                  </div>
                  {isMasterUnlocked(song.id) && (
                    <div className="text-xs text-purple-400">Master Unlocked!</div>
                  )}
                </div>
              </div>
              
              <div className="flex items-center justify-between text-xs opacity-60">
                <span>🎵 {song.artist}</span>
                <span>→</span>
              </div>
              
              {/* Preview indicator */}
              <div className="absolute top-2 right-2 opacity-60">
                <span className="text-xs">Hover to preview</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleBack}
            className="px-6 py-3 bg-gray-600 rounded-lg font-bold hover:bg-gray-500 transition-colors"
          >
            Back to Menu
          </button>
        </div>
      </div>
    );
  }

  // Difficulty selection view
  return (
    <div className="flex flex-col items-center justify-center h-full text-white p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
          {currentSong?.title}
        </h1>
        <p className="text-lg opacity-80 mb-4">by {currentSong?.artist}</p>
        <p className="text-sm opacity-60">Select your difficulty level</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl w-full mb-8">
        {currentSong?.difficulties.map((difficulty, index) => {
          const isLocked = difficulty.level === 'Master' && !isMasterUnlocked(currentSong.id);
          const isSelected = selectedDifficulty === difficulty.level;
          
          return (
            <div
              key={difficulty.level}
              onClick={() => !isLocked && handleDifficultySelect(difficulty)}
              className={`p-6 rounded-lg cursor-pointer transition-all duration-300 border-2 relative ${
                isLocked 
                  ? 'border-gray-600 bg-gray-800/50 opacity-50 cursor-not-allowed'
                  : isSelected
                    ? `${getDifficultyColor(difficulty.level)} scale-105`
                    : `border-white/20 bg-black/20 hover:${getDifficultyColor(difficulty.level).split(' ')[1]} hover:border-current`
              }`}
            >
              {isLocked && (
                <div className="absolute top-2 right-2 text-xs text-gray-400">
                  🔒
                </div>
              )}
              
              <div className="text-center">
                <div className={`text-lg font-bold mb-2 ${getDifficultyColor(difficulty.level).split(' ')[0]}`}>
                  {difficulty.level}
                </div>
                <div className="text-sm opacity-80 mb-1">{difficulty.bpm} BPM</div>
                <div className="text-xs opacity-60">{difficulty.duration}</div>
                
                {isLocked && (
                  <div className="text-xs text-gray-400 mt-2">
                    Full combo Expert to unlock
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleBack}
          className="px-6 py-3 bg-gray-600 rounded-lg font-bold hover:bg-gray-500 transition-colors"
        >
          {selectedDifficulty ? 'Change Difficulty' : 'Back to Songs'}
        </button>
        
        <button
          onClick={handlePlay}
          disabled={!selectedSong}
          className={`px-8 py-3 rounded-lg font-bold transition-all ${
            selectedSong
              ? 'bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 shadow-lg'
              : 'bg-gray-500 cursor-not-allowed opacity-50'
          }`}
        >
          {selectedSong ? `Play ${selectedSong.selectedDifficulty.level}` : 'Select a Difficulty'}
        </button>
      </div>
    </div>
  );
}