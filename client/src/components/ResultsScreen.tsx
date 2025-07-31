import { useGame } from "../lib/stores/useGame";
import { useRhythm } from "../lib/stores/useRhythm";

interface ResultsScreenProps {
  gameResult: 'complete' | 'failed';
  voiceLine: string;
  onNext: () => void;
}

export default function ResultsScreen({ gameResult, voiceLine, onNext }: ResultsScreenProps) {
  const { selectedSong, selectedCharacter, restart } = useGame();
  const { score, accuracy, maxCombo, hitCounts, health } = useRhythm();

  if (!selectedSong || !selectedCharacter) return null;

  const totalNotes = hitCounts.perfect + hitCounts.good + hitCounts.miss;
  const isFullCombo = hitCounts.miss === 0 && totalNotes > 0;
  const isAllPerfect = hitCounts.good === 0 && hitCounts.miss === 0 && totalNotes > 0;

  const getRankColor = () => {
    if (isAllPerfect) return 'text-yellow-300';
    if (isFullCombo) return 'text-purple-300';
    if (accuracy >= 95) return 'text-green-300';
    if (accuracy >= 85) return 'text-blue-300';
    if (accuracy >= 70) return 'text-orange-300';
    if (accuracy >= 60) return 'text-yellow-500';
    return 'text-red-300';
  };

  const isPass = () => {
    return health > 0 && accuracy >= 70; // B grade or above with health remaining
  };

  const getRankText = () => {
    if (isAllPerfect) return 'ALL PERFECT!!';
    if (isFullCombo) return 'FULL COMBO!';
    if (accuracy >= 95) return 'S';
    if (accuracy >= 85) return 'A';
    if (accuracy >= 70) return 'B';
    if (accuracy >= 60) return 'C';
    return 'D';
  };

  return (
    <div className="flex h-full bg-gradient-to-br from-purple-900/40 to-blue-900/40 text-white">
      {/* Left Side - Character and Voice Line */}
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="relative mb-8">
          <div className={`absolute inset-0 bg-gradient-to-br ${selectedCharacter.color} blur-3xl opacity-30 rounded-full`} />
          <img 
            src={selectedCharacter.image} 
            alt={selectedCharacter.name}
            className="relative w-96 h-96 object-contain character-image mx-auto"
          />
        </div>
        
        {/* Voice Line Speech Bubble */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-md relative">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white/10" />
          <div className="text-center">
            <div className="text-lg font-bold mb-2 text-purple-300">{selectedCharacter.name}</div>
            <div className="text-xl italic">"{voiceLine}"</div>
          </div>
        </div>
      </div>

      {/* Right Side - Results */}
      <div className="flex-1 p-8 bg-black/20 backdrop-blur-sm">
        <div className="max-w-2xl mx-auto">
          {/* Song Info */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">{selectedSong.title}</h1>
            <div className="flex items-center justify-center gap-4 text-lg">
              <span className="bg-yellow-600 px-3 py-1 rounded font-bold">
                {selectedSong.selectedDifficulty.level.toUpperCase()}
              </span>
              <span>by {selectedSong.artist}</span>
            </div>
          </div>

          {/* Score Section */}
          <div className="mb-8">
            <div className="text-6xl font-bold mb-4 text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              SCORE
            </div>
            <div className="bg-white/10 rounded-lg p-6 text-center">
              <div className="text-5xl font-bold mb-4">{score.toLocaleString().padStart(8, '0')}</div>
              <div className="text-lg opacity-80">Character: {selectedCharacter.name}</div>
            </div>
          </div>

          {/* Combo and Rank */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                COMBO
              </div>
              <div className="text-4xl font-bold mb-2">{maxCombo}</div>
              <div className={`text-lg font-bold ${getRankColor()}`}>
                {getRankText()}
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-yellow-300">PERFECT</span>
                  <span className="font-bold">{hitCounts.perfect.toString().padStart(4, '0')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-300">GOOD</span>
                  <span className="font-bold">{hitCounts.good.toString().padStart(4, '0')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-red-300">MISS</span>
                  <span className="font-bold">{hitCounts.miss.toString().padStart(4, '0')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-300">ACCURACY</span>
                  <span className="font-bold">{accuracy.toFixed(1)}%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Result Status */}
          <div className="text-center mb-8">
            <div className={`text-2xl font-bold ${isPass() ? 'text-green-400' : 'text-red-400'}`}>
              {isPass() ? 'SONG CLEAR!' : 'SONG FAILED'}
            </div>
            <div className="text-lg opacity-80 mt-2">
              {isPass() ? `Grade: ${getRankText()} (${accuracy.toFixed(1)}%) - PASS` : `Grade: ${getRankText()} (${accuracy.toFixed(1)}%) - FAILED`}
            </div>
            {health > 0 && (
              <div className="text-lg opacity-80 mt-1">
                Remaining Health: {health}%
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => restart()}
              className="px-6 py-3 bg-gray-600 text-white font-bold rounded-lg hover:bg-gray-500 transition-colors"
            >
              Song Select
            </button>
            
            <button
              onClick={onNext}
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-bold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}