import { useGame } from "../lib/stores/useGame";
import { useAudio } from "../lib/stores/useAudio";
import { useEffect } from "react";

export default function Menu() {
  const { setPhase } = useGame();
  const { playMenuMusic, initializeAudioContext } = useAudio();

  // Initialize audio context and trigger menu music on first user interaction
  useEffect(() => {
    const handleFirstClick = () => {
      initializeAudioContext();
      playMenuMusic();
      // Remove listener after first interaction
      document.removeEventListener('click', handleFirstClick);
    };
    
    document.addEventListener('click', handleFirstClick);
    return () => document.removeEventListener('click', handleFirstClick);
  }, [playMenuMusic, initializeAudioContext]);

  return (
    <div className="flex flex-col items-center justify-center h-full text-white">
      <div className="text-center mb-12">
        <h1 className="text-8xl font-black mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          TEMPO RUSH
        </h1>
        <p className="text-2xl font-light opacity-80">
          The Ultimate Rhythm Game Experience
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
        <button
          onClick={() => setPhase('songSelect')}
          className="group px-8 py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-xl font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
        >
          <div className="text-3xl mb-2">🎵</div>
          <div>Play Songs</div>
        </button>
        
        <button
          onClick={() => setPhase('characterSelect')}
          className="group px-8 py-6 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white text-xl font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
        >
          <div className="text-3xl mb-2">👤</div>
          <div>Characters</div>
        </button>
        
        <button
          onClick={() => setPhase('highScores')}
          className="group px-8 py-6 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white text-xl font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
        >
          <div className="text-3xl mb-2">🏆</div>
          <div>High Scores</div>
        </button>
        
        <button
          onClick={() => window.location.reload()}
          className="group px-8 py-6 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white text-xl font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
        >
          <div className="text-3xl mb-2">🔄</div>
          <div>Reset Game</div>
        </button>
      </div>

      <div className="mt-12 text-center">
        <p className="text-lg opacity-60 mb-4">
          Hit the rhythm with A, S, K, L keys • 7 epic tracks by Laur
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-lg">
          <div className="bg-green-600/20 border border-green-400 rounded-lg p-3">
            <div className="text-lg mb-1">🌿</div>
            <div className="text-xs font-bold">IVY</div>
          </div>
          <div className="bg-purple-600/20 border border-purple-400 rounded-lg p-3">
            <div className="text-lg mb-1">⚔️</div>
            <div className="text-xs font-bold">SCAL</div>
          </div>
          <div className="bg-yellow-600/20 border border-yellow-400 rounded-lg p-3">
            <div className="text-lg mb-1">⚡</div>
            <div className="text-xs font-bold">LIGHTREN</div>
          </div>
          <div className="bg-blue-600/20 border border-blue-400 rounded-lg p-3">
            <div className="text-lg mb-1">❄️</div>
            <div className="text-xs font-bold">WINTER</div>
          </div>
        </div>
      </div>
    </div>
  );
}