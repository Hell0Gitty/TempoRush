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
    const { successSound, isMuted } = get();
    if (successSound) {
      // If sound is muted, don't play anything
      if (isMuted) {
        console.log("Success sound skipped (muted)");
        return;
      }
      
      successSound.currentTime = 0;
      successSound.play().catch(error => {
        console.log("Success sound play prevented:", error);
      });
    }
  },
  
  playMenuMusic: () => {
    const { menuMusic, isMuted, isPreviewPlaying } = get();
    if (menuMusic && !isMuted && !isPreviewPlaying) {
      menuMusic.currentTime = 0;
      menuMusic.loop = true;
      menuMusic.volume = 0.15; // Much quieter volume for background
      menuMusic.play().catch(error => {
        console.log("Menu music play prevented:", error);
      });
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
