import { create } from "zustand";

interface AudioState {
  backgroundMusic: HTMLAudioElement | null;
  menuMusic: HTMLAudioElement | null;
  successSound: HTMLAudioElement | null;
  isMuted: boolean;
  
  // Setter functions
  setBackgroundMusic: (music: HTMLAudioElement) => void;
  setMenuMusic: (music: HTMLAudioElement) => void;
  setSuccessSound: (sound: HTMLAudioElement) => void;
  
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
  
  setBackgroundMusic: (music) => set({ backgroundMusic: music }),
  setMenuMusic: (music) => set({ menuMusic: music }),
  setSuccessSound: (sound) => set({ successSound: sound }),
  
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
    const { menuMusic, isMuted } = get();
    if (menuMusic && !isMuted) {
      menuMusic.currentTime = 0;
      menuMusic.loop = true;
      menuMusic.volume = 0.3; // Lower volume for background
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
