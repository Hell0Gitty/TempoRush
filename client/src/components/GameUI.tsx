import { useRhythm } from "../lib/stores/useRhythm";
import { useAudio } from "../lib/stores/useAudio";
import { useGame } from "../lib/stores/useGame";

interface GameUIProps {
  onRestart: () => void;
}

export default function GameUI({ onRestart }: GameUIProps) {
  const { score, combo, accuracy, health } = useRhythm();
  const { toggleMute, isMuted } = useAudio();
  const { selectedSong } = useGame();

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Top UI */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-start text-white pointer-events-auto">
        <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4">
          <div className="text-2xl font-bold">Score: {score.toLocaleString()}</div>
          <div className="text-lg">Combo: {combo}x</div>
          <div className="text-sm opacity-80">Accuracy: {accuracy.toFixed(1)}%</div>
        </div>

        {/* Now Playing */}
        {selectedSong && (
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-sm opacity-60">Now Playing</div>
            <div className="font-bold">{selectedSong.title}</div>
            <div className="text-sm opacity-80">{selectedSong.artist}</div>
            <div className="text-xs opacity-60">{selectedSong.difficulty} • {selectedSong.bpm} BPM</div>
          </div>
        )}

        <div className="flex gap-2">
          <button
            onClick={toggleMute}
            className="bg-black/30 backdrop-blur-sm rounded-lg p-2 hover:bg-black/40 transition-colors"
          >
            {isMuted ? '🔇' : '🔊'}
          </button>
          <button
            onClick={onRestart}
            className="bg-black/30 backdrop-blur-sm rounded-lg px-4 py-2 hover:bg-black/40 transition-colors"
          >
            Restart
          </button>
        </div>
      </div>

      {/* Health Bar */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 pointer-events-auto">
        <div className="bg-black/30 backdrop-blur-sm rounded-full px-4 py-2">
          <div className="flex items-center gap-2">
            <span className="text-white text-sm font-semibold">Health:</span>
            <div className="w-32 h-2 bg-red-900 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-red-500 to-green-500 transition-all duration-300"
                style={{ width: `${health}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Key indicators at bottom */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex gap-4">
          {[
            { key: 'A', color: 'bg-red-500' },
            { key: 'S', color: 'bg-green-500' },
            { key: 'K', color: 'bg-blue-500' },
            { key: 'L', color: 'bg-yellow-500' }
          ].map(({ key, color }) => (
            <div key={key} className={`w-16 h-16 ${color} rounded-lg flex items-center justify-center font-bold text-xl text-white shadow-lg`}>
              {key}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
