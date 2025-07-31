import { useGame } from "../lib/stores/useGame";
import { useRhythm } from "../lib/stores/useRhythm";

interface PauseMenuProps {
  onRestart: () => void;
}

export default function PauseMenu({ onRestart }: PauseMenuProps) {
  const { resume, showSongSelect } = useGame();
  const { resetGame } = useRhythm();

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10000,
      }}
    >
      <div 
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          padding: '40px',
          borderRadius: '12px',
          color: 'white',
          textAlign: 'center',
          maxWidth: '400px',
          width: '90%',
        }}
      >
        <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>PAUSED</h2>
        
        <button
          onClick={() => {
            console.log("Continue clicked directly");
            resume();
          }}
          style={{
            width: '100%',
            padding: '15px',
            marginBottom: '15px',
            backgroundColor: '#22c55e',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '18px',
            cursor: 'pointer',
          }}
        >
          Continue
        </button>
        
        <button
          onClick={() => {
            console.log("Restart clicked directly");
            onRestart();
          }}
          style={{
            width: '100%',
            padding: '15px',
            marginBottom: '15px',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '18px',
            cursor: 'pointer',
          }}
        >
          Restart Song
        </button>
        
        <button
          onClick={() => {
            console.log("Quit clicked directly");
            resetGame();
            showSongSelect();
          }}
          style={{
            width: '100%',
            padding: '15px',
            backgroundColor: '#ef4444',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '18px',
            cursor: 'pointer',
          }}
        >
          Quit to Song Select
        </button>
      </div>
    </div>
  );
}