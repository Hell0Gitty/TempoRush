import { useGame } from "../lib/stores/useGame";

const AVAILABLE_SONGS = [
  {
    id: "1",
    title: "Electric Dreams",
    artist: "Synthwave Studios",
    difficulty: "Easy" as const,
    bpm: 128,
    duration: "3:24",
    audioFile: "/sounds/background.mp3"
  },
  {
    id: "2", 
    title: "Neon Nights",
    artist: "Cyberpunk Collective",
    difficulty: "Medium" as const,
    bpm: 140,
    duration: "4:12",
    audioFile: "/sounds/background.mp3"
  },
  {
    id: "3",
    title: "Digital Rush", 
    artist: "Future Bass Inc",
    difficulty: "Hard" as const,
    bpm: 174,
    duration: "3:56",
    audioFile: "/sounds/background.mp3"
  },
  {
    id: "4",
    title: "Retro Pulse",
    artist: "Arcade Legends",
    difficulty: "Easy" as const,
    bpm: 110,
    duration: "2:48",
    audioFile: "/sounds/background.mp3"
  }
];

export default function SongSelect() {
  const { selectSong, start, restart, selectedSong } = useGame();

  const handleSongSelect = (song: typeof AVAILABLE_SONGS[0]) => {
    selectSong(song);
  };

  const handlePlay = () => {
    if (selectedSong) {
      start();
    }
  };

  const handleBack = () => {
    restart();
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-400';
      case 'Medium': return 'text-yellow-400';
      case 'Hard': return 'text-red-400';
      default: return 'text-white';
    }
  };

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
            className={`p-6 rounded-lg cursor-pointer transition-all duration-300 border-2 ${
              selectedSong?.id === song.id
                ? 'border-pink-500 bg-pink-500/20 scale-105'
                : 'border-white/20 bg-black/20 hover:border-pink-400 hover:bg-pink-400/10'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">{song.title}</h3>
                <p className="text-sm opacity-70">{song.artist}</p>
              </div>
              <div className="text-right">
                <div className={`text-sm font-semibold ${getDifficultyColor(song.difficulty)}`}>
                  {song.difficulty}
                </div>
                <div className="text-xs opacity-60">{song.duration}</div>
              </div>
            </div>
            
            <div className="flex items-center justify-between text-xs opacity-60">
              <span>{song.bpm} BPM</span>
              <span>🎵</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleBack}
          className="px-6 py-3 bg-gray-600 rounded-lg font-bold hover:bg-gray-500 transition-colors"
        >
          Back
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
          {selectedSong ? `Play "${selectedSong.title}"` : 'Select a Song'}
        </button>
      </div>
    </div>
  );
}