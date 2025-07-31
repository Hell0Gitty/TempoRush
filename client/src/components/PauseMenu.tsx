import { useGame } from "../lib/stores/useGame";
import { useRhythm } from "../lib/stores/useRhythm";

interface PauseMenuProps {
  onRestart: () => void;
}

export default function PauseMenu({ onRestart }: PauseMenuProps) {
  const { resume, showSongSelect } = useGame();
  const { resetGame } = useRhythm();

  const handleQuit = () => {
    resetGame();
    showSongSelect();
  };

  const handleRestart = () => {
    onRestart();
  };

  return (
    <div className="absolute inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50">
      <div className="bg-black/80 backdrop-blur-lg rounded-lg p-8 text-center text-white max-w-md w-full mx-4">
        <h2 className="text-3xl font-bold mb-2">Game Paused</h2>
        <p className="text-white/70 mb-8">Choose an option to continue:</p>
        
        <div className="space-y-4">
          <button
            onClick={resume}
            className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg font-bold hover:scale-105 transition-transform"
          >
            Continue
          </button>
          
          <button
            onClick={handleRestart}
            className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg font-bold hover:scale-105 transition-transform"
          >
            Restart Song
          </button>
          
          <button
            onClick={handleQuit}
            className="w-full px-6 py-3 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg font-bold hover:scale-105 transition-transform"
          >
            Quit to Song Select
          </button>
        </div>

        <div className="mt-6 pt-4 border-t border-white/20">
          <div className="text-sm text-white/60">
            <div className="font-bold mb-2">Controls:</div>
            <div className="space-y-1">
              <div>A, S, K, L - Hit notes</div>
              <div>↑/↓ or +/- - Adjust speed</div>
              <div>0 - Reset speed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}