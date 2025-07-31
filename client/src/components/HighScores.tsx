import { useState, useEffect } from "react";
import { useGame } from "../lib/stores/useGame";

interface HighScore {
  id: string;
  playerName: string;
  songTitle: string;
  difficulty: string;
  score: number;
  accuracy: number;
  combo: number;
  character: string;
  timestamp: number;
}

export default function HighScores() {
  const { restart } = useGame();
  const [highScores, setHighScores] = useState<HighScore[]>([]);
  const [selectedSong, setSelectedSong] = useState<string>("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");

  useEffect(() => {
    loadHighScores();
  }, []);

  const loadHighScores = () => {
    const saved = localStorage.getItem('tempoRushHighScores');
    if (saved) {
      const scores = JSON.parse(saved);
      setHighScores(scores.sort((a: HighScore, b: HighScore) => b.score - a.score));
    }
  };

  const filteredScores = highScores.filter(score => {
    if (selectedSong !== "all" && score.songTitle !== selectedSong) return false;
    if (selectedDifficulty !== "all" && score.difficulty !== selectedDifficulty) return false;
    return true;
  }).slice(0, 20); // Show top 20

  const uniqueSongs = Array.from(new Set(highScores.map(score => score.songTitle)));
  const difficulties = ["Easy", "Normal", "Hard", "Expert", "Master"];

  const formatScore = (score: number) => {
    return score.toLocaleString();
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString();
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-400';
      case 'Normal': return 'text-blue-400';
      case 'Hard': return 'text-yellow-400';
      case 'Expert': return 'text-red-400';
      case 'Master': return 'text-purple-400';
      default: return 'text-white';
    }
  };

  const getCharacterColor = (character: string) => {
    switch (character) {
      case 'Speedster': return 'text-cyan-400';
      case 'Precision': return 'text-emerald-400';
      case 'Endurance': return 'text-orange-400';
      default: return 'text-white';
    }
  };

  return (
    <div className="flex flex-col items-center justify-start h-full text-white p-8 overflow-y-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
          High Scores
        </h1>
        <p className="text-lg opacity-80">Top performances across all songs</p>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6 flex-wrap justify-center">
        <div className="flex flex-col items-center">
          <label className="text-sm opacity-70 mb-2">Song</label>
          <select
            value={selectedSong}
            onChange={(e) => setSelectedSong(e.target.value)}
            className="px-3 py-2 bg-gray-800 rounded-lg border border-gray-600 text-white"
          >
            <option value="all">All Songs</option>
            {uniqueSongs.map(song => (
              <option key={song} value={song}>{song}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col items-center">
          <label className="text-sm opacity-70 mb-2">Difficulty</label>
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="px-3 py-2 bg-gray-800 rounded-lg border border-gray-600 text-white"
          >
            <option value="all">All Difficulties</option>
            {difficulties.map(diff => (
              <option key={diff} value={diff}>{diff}</option>
            ))}
          </select>
        </div>
      </div>

      {/* High Scores Table */}
      <div className="w-full max-w-6xl bg-black/30 backdrop-blur-sm rounded-lg overflow-hidden">
        {filteredScores.length === 0 ? (
          <div className="p-8 text-center">
            <p className="text-lg opacity-70">No high scores yet!</p>
            <p className="text-sm opacity-50 mt-2">Play some songs to see your scores here</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-800/50">
                <tr>
                  <th className="px-4 py-3 text-left">#</th>
                  <th className="px-4 py-3 text-left">Player</th>
                  <th className="px-4 py-3 text-left">Song</th>
                  <th className="px-4 py-3 text-left">Difficulty</th>
                  <th className="px-4 py-3 text-left">Character</th>
                  <th className="px-4 py-3 text-right">Score</th>
                  <th className="px-4 py-3 text-right">Accuracy</th>
                  <th className="px-4 py-3 text-right">Max Combo</th>
                  <th className="px-4 py-3 text-right">Date</th>
                </tr>
              </thead>
              <tbody>
                {filteredScores.map((score, index) => (
                  <tr key={score.id} className="border-t border-gray-700/50 hover:bg-gray-800/30">
                    <td className="px-4 py-3 font-bold text-yellow-400">#{index + 1}</td>
                    <td className="px-4 py-3">{score.playerName}</td>
                    <td className="px-4 py-3">{score.songTitle}</td>
                    <td className={`px-4 py-3 font-bold ${getDifficultyColor(score.difficulty)}`}>
                      {score.difficulty}
                    </td>
                    <td className={`px-4 py-3 font-bold ${getCharacterColor(score.character)}`}>
                      {score.character}
                    </td>
                    <td className="px-4 py-3 text-right font-bold text-green-400">
                      {formatScore(score.score)}
                    </td>
                    <td className="px-4 py-3 text-right">{score.accuracy.toFixed(1)}%</td>
                    <td className="px-4 py-3 text-right">{score.combo}</td>
                    <td className="px-4 py-3 text-right text-sm opacity-70">
                      {formatDate(score.timestamp)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="mt-8">
        <button
          onClick={restart}
          className="px-6 py-3 bg-gray-600 rounded-lg font-bold hover:bg-gray-500 transition-colors"
        >
          Back to Menu
        </button>
      </div>
    </div>
  );
}