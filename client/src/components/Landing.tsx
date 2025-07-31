export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
      <div className="text-center text-white max-w-4xl mx-auto px-8">
        {/* Game Title */}
        <div className="mb-8">
          <h1 className="text-8xl font-black mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            TEMPO RUSH
          </h1>
          <p className="text-2xl font-light opacity-80">
            The Ultimate Rhythm Game Experience
          </p>
        </div>

        {/* Game Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-4xl mb-4">🎵</div>
            <h3 className="text-xl font-bold mb-2">7 Epic Tracks</h3>
            <p className="opacity-80">Experience Laur's incredible music collection</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2">Level Up System</h3>
            <p className="opacity-80">Gain experience and unlock new characters</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-4xl mb-4">👤</div>
            <h3 className="text-xl font-bold mb-2">4 Unique Characters</h3>
            <p className="opacity-80">Each with special abilities and voice lines</p>
          </div>
        </div>

        {/* Character Unlock Preview */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Character Unlock System</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-green-600/20 border border-green-400 rounded-lg p-4">
              <div className="text-2xl mb-2">🌿</div>
              <div className="text-sm font-bold">IVY</div>
              <div className="text-xs opacity-80">Level 1 (Start)</div>
            </div>
            <div className="bg-purple-600/20 border border-purple-400 rounded-lg p-4">
              <div className="text-2xl mb-2">⚔️</div>
              <div className="text-sm font-bold">SCAL</div>
              <div className="text-xs opacity-80">Level 5</div>
            </div>
            <div className="bg-yellow-600/20 border border-yellow-400 rounded-lg p-4">
              <div className="text-2xl mb-2">⚡</div>
              <div className="text-sm font-bold">LIGHTREN</div>
              <div className="text-xs opacity-80">Level 10</div>
            </div>
            <div className="bg-blue-600/20 border border-blue-400 rounded-lg p-4">
              <div className="text-2xl mb-2">❄️</div>
              <div className="text-sm font-bold">WINTER</div>
              <div className="text-xs opacity-80">Level 20</div>
            </div>
          </div>
        </div>

        {/* Login Button */}
        <div className="space-y-4">
          <button
            onClick={() => window.location.href = '/api/login'}
            className="px-12 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-xl font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Start Playing - Sign In
          </button>
          <p className="text-sm opacity-60">
            Sign in with your Replit account to save your progress and compete on leaderboards
          </p>
        </div>
      </div>
    </div>
  );
}