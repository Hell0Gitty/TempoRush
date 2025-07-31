import { useGame } from "../lib/stores/useGame";
import { useRhythm } from "../lib/stores/useRhythm";

interface PauseMenuProps {
  onRestart: () => void;
}

export default function PauseMenu({ onRestart }: PauseMenuProps) {
  const { resume, showSongSelect } = useGame();
  const { resetGame } = useRhythm();

  const handleQuit = () => {
    console.log("Quit button clicked");
    resetGame();
    showSongSelect();
  };

  const handleRestart = () => {
    console.log("Restart button clicked");
    onRestart();
  };

  const handleContinue = () => {
    console.log("Continue button clicked");
    resume();
  };

  // Add click event debugging
  const handleClick = (e: React.MouseEvent, action: string) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(`${action} button click event fired`);
    
    switch(action) {
      case 'continue':
        handleContinue();
        break;
      case 'restart':
        handleRestart();
        break;
      case 'quit':
        handleQuit();
        break;
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center pointer-events-auto"
      style={{ zIndex: 9999 }}
      onClick={(e) => e.stopPropagation()}
    >
      <div 
        className="bg-black/80 backdrop-blur-lg rounded-lg p-8 text-center text-white max-w-md w-full mx-4 pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl font-bold mb-2">Game Paused</h2>
        <p className="text-white/70 mb-8">Choose an option to continue:</p>
        
        <div className="space-y-4">
          <button
            onClick={(e) => handleClick(e, 'continue')}
            onMouseDown={() => console.log("Continue button mousedown")}
            className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg font-bold hover:scale-105 transition-transform cursor-pointer select-none"
            style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
          >
            Continue
          </button>
          
          <button
            onClick={(e) => handleClick(e, 'restart')}
            onMouseDown={() => console.log("Restart button mousedown")}
            className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg font-bold hover:scale-105 transition-transform cursor-pointer select-none"
            style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
          >
            Restart Song
          </button>
          
          <button
            onClick={(e) => handleClick(e, 'quit')}
            onMouseDown={() => console.log("Quit button mousedown")}
            className="w-full px-6 py-3 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg font-bold hover:scale-105 transition-transform cursor-pointer select-none"
            style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
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