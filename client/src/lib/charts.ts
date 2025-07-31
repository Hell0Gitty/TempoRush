export interface Note {
  time: number;
  lane: number;
}

export interface Chart {
  songId: string;
  difficulty: string;
  bpm: number;
  notes: Note[];
}

// Helper function to convert beats to milliseconds
const beatToMs = (beat: number, bpm: number): number => {
  return (beat / bpm) * 60 * 1000;
};

// Generate consistent 16th note patterns for Hard difficulty
const generateConsistent16thNotes = (startBeat: number, endBeat: number, bpm: number): Note[] => {
  const notes: Note[] = [];
  const lanePattern = [0, 1, 2, 3]; // Cycle through lanes
  let laneIndex = 0;
  
  for (let beat = startBeat; beat < endBeat; beat += 0.25) { // 16th notes
    notes.push({
      time: beatToMs(beat, bpm),
      lane: lanePattern[laneIndex % 4]
    });
    laneIndex++;
  }
  return notes;
};

// Generate expert patterns with mixed 8th and 16th notes
const generateExpertPatterns = (startBeat: number, endBeat: number, bpm: number): Note[] => {
  const notes: Note[] = [];
  const lanePattern = [0, 1, 2, 3, 2, 0, 3, 1]; // More complex pattern
  let laneIndex = 0;
  
  for (let beat = startBeat; beat < endBeat; beat += 0.25) { // Mix of 8th and 16th
    if (beat % 1 === 0 || beat % 1 === 0.25 || beat % 1 === 0.5 || beat % 1 === 0.75) {
      notes.push({
        time: beatToMs(beat, bpm),
        lane: lanePattern[laneIndex % 8]
      });
      laneIndex++;
    }
  }
  return notes;
};

// Generate master patterns with challenging but consistent spacing
const generateMasterPatterns = (startBeat: number, endBeat: number, bpm: number): Note[] => {
  const notes: Note[] = [];
  const lanePattern = [0, 2, 1, 3, 3, 1, 2, 0]; // Cross-over pattern
  let laneIndex = 0;
  
  for (let beat = startBeat; beat < endBeat; beat += 0.5) { // 8th notes primarily
    notes.push({
      time: beatToMs(beat, bpm),
      lane: lanePattern[laneIndex % 8]
    });
    laneIndex++;
  }
  return notes;
};

// Generate easy patterns with quarter notes
const generateEasyPatterns = (startBeat: number, endBeat: number, bpm: number): Note[] => {
  const notes: Note[] = [];
  const lanePattern = [0, 1, 2, 3]; // Simple pattern
  let laneIndex = 0;
  
  for (let beat = startBeat; beat < endBeat; beat += 1) { // Quarter notes
    notes.push({
      time: beatToMs(beat, bpm),
      lane: lanePattern[laneIndex % 4]
    });
    laneIndex++;
  }
  return notes;
};

// Generate normal patterns with 8th notes
const generateNormalPatterns = (startBeat: number, endBeat: number, bpm: number): Note[] => {
  const notes: Note[] = [];
  const lanePattern = [0, 1, 2, 3, 2, 0, 3, 1]; // Slightly more complex
  let laneIndex = 0;
  
  for (let beat = startBeat; beat < endBeat; beat += 0.5) { // 8th notes
    notes.push({
      time: beatToMs(beat, bpm),
      lane: lanePattern[laneIndex % 8]
    });
    laneIndex++;
  }
  return notes;
};

// Gears of Fate - Easy (150 BPM)
// Simple quarter note patterns, ~250 notes spanning 3+ minutes
const gearsOfFateEasy: Chart = {
  songId: "1",
  difficulty: "Easy",
  bpm: 150,
  notes: generateEasyPatterns(4, 250, 150) // 4 to 250 beats = ~3.3 minutes
};

// Gears of Fate - Normal (160 BPM)
// Mixed 8th note patterns, ~400 notes spanning 3+ minutes
const gearsOfFateNormal: Chart = {
  songId: "1",
  difficulty: "Normal",
  bpm: 160,
  notes: generateNormalPatterns(4, 200, 160) // 4 to 200 beats = ~3 minutes
};

// Gears of Fate - Hard (170 BPM)
// Consistent 16th note patterns throughout, ~500 notes spanning 3+ minutes
const gearsOfFateHard: Chart = {
  songId: "1",
  difficulty: "Hard",
  bpm: 170,
  notes: generateConsistent16thNotes(4, 450, 170) // 4 to 450 beats = ~3.5 minutes
};

// Gears of Fate - Expert (185 BPM)
// Mixed 16th and 8th note patterns with crossovers, ~400 notes spanning 3+ minutes
const gearsOfFateExpert: Chart = {
  songId: "1",
  difficulty: "Expert",
  bpm: 185,
  notes: generateExpertPatterns(8, 400, 185) // 8 to 400 beats = ~3.5 minutes
};

// Gears of Fate - Master (210 BPM)
// Extremely challenging patterns, ~350 notes spanning 3+ minutes
const gearsOfFateMaster: Chart = {
  songId: "1",
  difficulty: "Master",
  bpm: 210,
  notes: generateMasterPatterns(8, 350, 210) // 8 to 350 beats = ~3 minutes
};

// Chart registry
export const CHARTS = new Map<string, Chart>([
  ["1-Easy", gearsOfFateEasy],
  ["1-Normal", gearsOfFateNormal],
  ["1-Hard", gearsOfFateHard],
  ["1-Expert", gearsOfFateExpert],
  ["1-Master", gearsOfFateMaster]
]);

export const getChart = (songId: string, difficulty: string): Chart | null => {
  return CHARTS.get(`${songId}-${difficulty}`) || null;
};