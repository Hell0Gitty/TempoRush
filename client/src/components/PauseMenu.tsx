import { useGame } from "../lib/stores/useGame";
import { useRhythm } from "../lib/stores/useRhythm";

interface PauseMenuProps {
  onRestart: () => void;
}

export default function PauseMenu({ onRestart }: PauseMenuProps) {
  const { resume, showSongSelect } = useGame();
  const { resetGame } = useRhythm();

  console.log("PauseMenu rendering");

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-black/90 p-10 rounded-xl text-white text-center max-w-md w-5/6">
        <h2 className="text-4xl font-bold mb-6">PAUSED</h2>
        
        <div className="text-sm mb-6 opacity-80">
          Speed Controls: ↑/↓, +/-, 0 to reset
        </div>
        
        <div className="space-y-4">
          <button
            onClick={() => {
              console.log("Continue clicked");
              resume();
            }}
            className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg text-lg transition-colors"
          >
            Continue
          </button>
          
          <button
            onClick={() => {
              console.log("Restart clicked");
              onRestart();
            }}
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-lg transition-colors"
          >
            Restart Song
          </button>
          
          <button
            onClick={() => {
              console.log("Quit clicked");
              resetGame();
              showSongSelect();
            }}
            className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg text-lg transition-colors"
          >
            Quit to Song Select
          </button>
        </div>
      </div>
    </div>
  );
}