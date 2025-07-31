export class AudioEngine {
  private audioContext: AudioContext | null = null;
  private analyser: AnalyserNode | null = null;
  private dataArray: Uint8Array | null = null;

  constructor() {
    this.initializeAudio();
  }

  private async initializeAudio() {
    try {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      this.analyser = this.audioContext.createAnalyser();
      this.analyser.fftSize = 256;
      
      const bufferLength = this.analyser.frequencyBinCount;
      this.dataArray = new Uint8Array(bufferLength);
    } catch (error) {
      console.log("Audio context initialization failed:", error);
    }
  }

  getFrequencyData(): Uint8Array | null {
    if (!this.analyser || !this.dataArray) return null;
    
    this.analyser.getByteFrequencyData(this.dataArray);
    return this.dataArray;
  }

  detectBeat(): boolean {
    const frequencyData = this.getFrequencyData();
    if (!frequencyData) return false;

    // Simple beat detection based on low frequency energy
    let lowFreqEnergy = 0;
    for (let i = 0; i < 10; i++) {
      lowFreqEnergy += frequencyData[i];
    }

    // Threshold for beat detection (adjust as needed)
    return lowFreqEnergy > 1200;
  }

  connectAudioElement(audio: HTMLAudioElement) {
    if (!this.audioContext || !this.analyser) return;

    try {
      const source = this.audioContext.createMediaElementSource(audio);
      source.connect(this.analyser);
      this.analyser.connect(this.audioContext.destination);
    } catch (error) {
      console.log("Audio element connection failed:", error);
    }
  }
}
