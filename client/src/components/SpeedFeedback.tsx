import { useRhythm } from "../lib/stores/useRhythm";

export default function SpeedFeedback() {
  const { speedFeedback } = useRhythm();

  if (!speedFeedback.visible) return null;

  const percentage = (speedFeedback.multiplier * 100).toFixed(0);
  const color = speedFeedback.multiplier === 1.0 ? 'text-white' : 
                speedFeedback.multiplier > 1.0 ? 'text-red-400' : 'text-blue-400';

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50">
      <div className="bg-black/60 backdrop-blur-md rounded-lg px-6 py-4 text-center animate-pulse">
        <div className={`text-4xl font-bold ${color} mb-2`}>
          {percentage}%
        </div>
        <div className="text-white/80 text-sm">
          Note Speed
        </div>
        {speedFeedback.multiplier === 1.0 && (
          <div className="text-green-400 text-xs mt-1">
            Reset to Default
          </div>
        )}
      </div>
    </div>
  );
}