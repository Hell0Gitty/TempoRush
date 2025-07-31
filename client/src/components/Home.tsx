import { useAuth } from "../hooks/useAuth";
import { useGame } from "../lib/stores/useGame";

export default function Home() {
  const { user } = useAuth();
  const { setPhase } = useGame();

  if (!user) return null;

  const progressPercentage = user.expInCurrentLevel ? 
    (user.expInCurrentLevel / (user.expNeededForNext || 1)) * 100 : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Header */}
      <div className="flex justify-between items-center p-6 bg-black/20">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            TEMPO RUSH
          </h1>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-right">
            <div className="text-sm opacity-80">Welcome back</div>
            <div className="font-bold">{user.firstName || user.email}</div>
          </div>
          <button 
            onClick={() => window.location.href = '/api/logout'}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-8">
        {/* User Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-purple-400 mb-2">Level {user.level}</div>
            <div className="text-sm opacity-80 mb-3">
              {user.experience} total EXP
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
              <div 
                className="bg-gradient-to-r from-purple-400 to-blue-400 h-3 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(progressPercentage, 100)}%` }}
              />
            </div>
            <div className="text-xs opacity-60">
              {user.expInCurrentLevel || 0} / {user.expNeededForNext || 100} EXP to Level {user.level + 1}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-green-400 mb-2">{user.totalScore.toLocaleString()}</div>
            <div className="text-sm opacity-80">Total Score</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-blue-400 mb-2">{user.songsPlayed}</div>
            <div className="text-sm opacity-80">Songs Played</div>
          </div>
        </div>

        {/* Unlocked Characters */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Your Characters</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { id: 'ivy', name: 'Ivy', level: 1, emoji: '🌿', color: 'green' },
              { id: 'scal', name: 'Scal', level: 5, emoji: '⚔️', color: 'purple' },
              { id: 'lightren', name: 'Lightren', level: 10, emoji: '⚡', color: 'yellow' },
              { id: 'winter', name: 'Winter', level: 20, emoji: '❄️', color: 'blue' },
            ].map(char => {
              const isUnlocked = user.unlockedCharacters.includes(char.id);
              const isSelected = user.selectedCharacter === char.id;
              
              return (
                <div 
                  key={char.id}
                  className={`rounded-lg p-4 border-2 transition-all ${
                    isUnlocked 
                      ? isSelected 
                        ? `bg-${char.color}-600/30 border-${char.color}-400` 
                        : `bg-${char.color}-600/10 border-${char.color}-600 hover:bg-${char.color}-600/20`
                      : 'bg-gray-600/20 border-gray-600 opacity-50'
                  }`}
                >
                  <div className="text-3xl mb-2">{char.emoji}</div>
                  <div className="font-bold text-sm">{char.name}</div>
                  <div className="text-xs opacity-80">
                    {isUnlocked ? (isSelected ? 'Selected' : 'Unlocked') : `Level ${char.level}`}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setPhase('songSelect')}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-xl font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Play Songs
          </button>
          
          <button
            onClick={() => setPhase('characterSelect')}
            className="px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white text-xl font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Select Character
          </button>
        </div>
      </div>
    </div>
  );
}