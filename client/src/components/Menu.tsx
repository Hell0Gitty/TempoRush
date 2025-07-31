import { useGame } from "../lib/stores/useGame";
import { useAudio } from "../lib/stores/useAudio";

export default function Menu() {
  const { showSongSelect } = useGame();
  const { toggleMute, isMuted } = useAudio();

  const handleStart = () => {
    showSongSelect();
  };

  return (
    <div className="flex flex-col items-center justify-center h-full text-white">
      <div className="text-center mb-8">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
          TEMPO RUSH
        </h1>
        <p className="text-xl mb-4 opacity-80">
          Hit the beats with perfect timing!
        </p>
        
        <div className="mb-6 p-4 bg-red-900/30 border border-red-500/50 rounded-lg backdrop-blur-sm">
          <p className="text-sm text-red-200 font-semibold">
            ⚠️ Warning: This game contains flashing lights that may trigger seizures in individuals with photosensitive epilepsy.
          </p>
        </div>
        
        <div className="mb-8 p-6 bg-black/20 rounded-lg backdrop-blur-sm">
          <h3 className="text-lg font-semibold mb-4">Controls:</h3>
          <div className="flex gap-4 justify-center">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center font-bold text-xl mb-2">A</div>
              <div className="text-sm">Lane 1</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center font-bold text-xl mb-2">S</div>
              <div className="text-sm">Lane 2</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center font-bold text-xl mb-2">K</div>
              <div className="text-sm">Lane 3</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center font-bold text-xl mb-2">L</div>
              <div className="text-sm">Lane 4</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <button
          onClick={handleStart}
          className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg font-bold text-xl hover:scale-105 transition-transform shadow-lg"
        >
          START GAME
        </button>
        
        <button
          onClick={toggleMute}
          className="px-6 py-2 bg-black/30 rounded-lg hover:bg-black/40 transition-colors"
        >
          Sound: {isMuted ? 'OFF' : 'ON'}
        </button>
      </div>
    </div>
  );
}
