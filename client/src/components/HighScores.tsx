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
  grade: string;
  timestamp: number;
}

export default function HighScores() {
  const { restart } = useGame();
  const [highScores, setHighScores] = useState<HighScore[]>([]);
  const [selectedSong, setSelectedSong] = useState<string>("all");

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

  // Group scores by song and difficulty, keeping only top 10 per group
  const groupedScores = highScores.reduce((acc, score) => {
    if (!acc[score.songTitle]) {
      acc[score.songTitle] = {};
    }
    if (!acc[score.songTitle][score.difficulty]) {
      acc[score.songTitle][score.difficulty] = [];
    }
    if (acc[score.songTitle][score.difficulty].length < 10) {
      acc[score.songTitle][score.difficulty].push(score);
    }
    return acc;
  }, {} as { [songTitle: string]: { [difficulty: string]: HighScore[] } });

  const songs = Object.keys(groupedScores).sort();
  const difficulties = ["Easy", "Normal", "Hard", "Expert", "Master"];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-400 bg-green-900/20 border-green-600';
      case 'Normal': return 'text-blue-400 bg-blue-900/20 border-blue-600';
      case 'Hard': return 'text-yellow-400 bg-yellow-900/20 border-yellow-600';
      case 'Expert': return 'text-red-400 bg-red-900/20 border-red-600';
      case 'Master': return 'text-purple-400 bg-purple-900/20 border-purple-600';
      default: return 'text-white bg-gray-900/20 border-gray-600';
    }
  };

  const getCharacterEmoji = (character: string) => {
    switch (character) {
      case 'ivy': return '🌿';
      case 'scal': return '⚔️';
      case 'lightren': return '⚡';
      case 'winter': return '❄️';
      default: return '👤';
    }
  };

  const getRankIcon = (position: number) => {
    switch (position) {
      case 1: return '🥇';
      case 2: return '🥈';
      case 3: return '🥉';
      default: return `#${position}`;
    }
  };

  const formatScore = (score: number) => {
    return score.toLocaleString().padStart(8, '0');
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString();
  };

  const songsToDisplay = selectedSong === "all" ? songs : [selectedSong];

  return (
    <div className="flex flex-col h-full text-white overflow-hidden">
      {/* Header */}
      <div className="p-6 bg-black/20 backdrop-blur-sm">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
            🏆 High Scores
          </h1>
          <button
            onClick={() => restart()}
            className="px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded-lg transition-colors"
          >
            Back to Menu
          </button>
        </div>

        {/* Song Filter */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedSong("all")}
            className={`px-4 py-2 rounded-lg font-bold transition-colors ${
              selectedSong === "all"
                ? "bg-purple-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            All Songs
          </button>
          {songs.map((song) => (
            <button
              key={song}
              onClick={() => setSelectedSong(song)}
              className={`px-4 py-2 rounded-lg font-bold transition-colors ${
                selectedSong === song
                  ? "bg-purple-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {song}
            </button>
          ))}
        </div>

        <div className="mt-4 text-sm opacity-80">
          Only cleared songs appear on leaderboards • Top 10 scores per difficulty
        </div>
      </div>

      {/* Leaderboards */}
      <div className="flex-1 overflow-y-auto p-6">
        {songs.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎵</div>
            <div className="text-2xl font-bold mb-2">No High Scores Yet!</div>
            <div className="text-lg opacity-80">Be the first to clear a song and claim your spot on the leaderboard!</div>
          </div>
        ) : (
          <div className="space-y-8">
            {songsToDisplay.map((songTitle) => {
              const songData = groupedScores[songTitle];
              if (!songData) return null;

              return (
                <div key={songTitle} className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                  <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    {songTitle}
                  </h2>

                  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {difficulties.map((difficulty) => {
                      const scores = songData[difficulty];
                      if (!scores || scores.length === 0) return null;

                      return (
                        <div key={difficulty} className={`border rounded-lg p-4 ${getDifficultyColor(difficulty)}`}>
                          <h3 className="text-xl font-bold mb-4 text-center">
                            {difficulty}
                          </h3>

                          <div className="space-y-2">
                            {scores.map((score, index) => (
                              <div
                                key={score.id}
                                className="flex items-center justify-between p-3 rounded-lg bg-black/20"
                              >
                                <div className="flex items-center gap-3">
                                  <div className="text-lg font-bold min-w-[2rem]">
                                    {getRankIcon(index + 1)}
                                  </div>
                                  <div>
                                    <div className="font-bold">
                                      {formatScore(score.score)}
                                    </div>
                                    <div className="text-sm opacity-80 flex items-center gap-2">
                                      <span>{getCharacterEmoji(score.character)} {score.character}</span>
                                      <span>•</span>
                                      <span>{score.accuracy.toFixed(1)}%</span>
                                      <span>•</span>
                                      <span>{score.grade}</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="text-right text-sm opacity-60">
                                  <div>Combo: {score.combo}</div>
                                  <div>{formatDate(score.timestamp)}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}