import { create } from "zustand";

interface AudioState {
  backgroundMusic: HTMLAudioElement | null;
  menuMusic: HTMLAudioElement | null;
  successSound: HTMLAudioElement | null;
  isMuted: boolean;
  isPreviewPlaying: boolean;
  
  // Setter functions
  setBackgroundMusic: (music: HTMLAudioElement) => void;
  setMenuMusic: (music: HTMLAudioElement) => void;
  setSuccessSound: (sound: HTMLAudioElement) => void;
  setPreviewPlaying: (playing: boolean) => void;
  
  // Control functions
  toggleMute: () => void;
  playSuccess: () => void;
  playMenuMusic: () => void;
  stopMenuMusic: () => void;
}

export const useAudio = create<AudioState>((set, get) => ({
  backgroundMusic: null,
  menuMusic: null,
  successSound: null,
  isMuted: false, // Start with sound ON by default
  isPreviewPlaying: false,
  
  setBackgroundMusic: (music) => set({ backgroundMusic: music }),
  setMenuMusic: (music) => set({ menuMusic: music }),
  setSuccessSound: (sound) => set({ successSound: sound }),
  setPreviewPlaying: (playing) => set({ isPreviewPlaying: playing }),
  
  toggleMute: () => {
    const { isMuted } = get();
    const newMutedState = !isMuted;
    
    // Just update the muted state
    set({ isMuted: newMutedState });
    
    // Log the change
    console.log(`Sound ${newMutedState ? 'muted' : 'unmuted'}`);
  },
  
  playSuccess: () => {
    const { isMuted } = get();
    if (isMuted) {
      return;
    }
    
    // Generate keyboard click sound using Web Audio API
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      // Create a brief click sound similar to keyboard typing
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      // Quick high-frequency click sound
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.01);
      
      // Quick attack and fast decay for crisp click
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.001);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.03);
      
      oscillator.type = 'triangle';
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.03);
    } catch (error) {
      console.log("Keyboard click sound failed:", error);
    }
  },
  
  playMenuMusic: () => {
    const { menuMusic, isMuted, isPreviewPlaying } = get();
    if (menuMusic && !isMuted && !isPreviewPlaying) {
      menuMusic.currentTime = 0;
      menuMusic.loop = true;
      menuMusic.volume = 0.15; // Much quieter volume for background
      
      // Add user interaction check for autoplay policies
      const playPromise = menuMusic.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Menu music play prevented (autoplay policy):", error.message);
          // Don't log full error object to avoid clutter
        });
      }
    }
  },
  
  stopMenuMusic: () => {
    const { menuMusic } = get();
    if (menuMusic) {
      menuMusic.pause();
      menuMusic.currentTime = 0;
    }
  }
}));
