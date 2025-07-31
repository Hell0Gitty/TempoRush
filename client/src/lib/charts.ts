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

// Generate expert patterns with varied, challenging patterns
const generateExpertPatterns = (startBeat: number, endBeat: number, bpm: number): Note[] => {
  const notes: Note[] = [];
  const patterns = [
    [0, 2, 1, 3], // Cross pattern
    [3, 1, 0, 2], // Reverse cross
    [0, 3, 2, 1], // Outside-in
    [1, 2, 3, 0], // Spiral
    [0, 1, 3, 2], // Skip pattern
    [2, 0, 1, 3], // Center-out
    [3, 2, 0, 1], // Descending cross
    [1, 0, 2, 3]  // Alternating sides
  ];
  
  let patternIndex = 0;
  let noteInPattern = 0;
  
  for (let beat = startBeat; beat < endBeat; beat += 0.5) { // 8th notes for playability
    const currentPattern = patterns[patternIndex % patterns.length];
    notes.push({
      time: beatToMs(beat, bpm),
      lane: currentPattern[noteInPattern % 4]
    });
    
    noteInPattern++;
    // Switch patterns every 8 notes
    if (noteInPattern % 8 === 0) {
      patternIndex++;
      noteInPattern = 0;
    }
  }
  return notes;
};

// Generate master patterns with extremely challenging, varied patterns
const generateMasterPatterns = (startBeat: number, endBeat: number, bpm: number): Note[] => {
  const notes: Note[] = [];
  const advancedPatterns = [
    [0, 3, 1, 2, 3, 0, 2, 1], // Complex crossover
    [1, 0, 3, 2, 0, 1, 2, 3], // Alternating pairs
    [2, 1, 0, 3, 1, 2, 3, 0], // Inward spiral
    [3, 0, 2, 1, 0, 3, 1, 2], // Diamond pattern
    [0, 2, 3, 1, 2, 0, 1, 3], // Skip and cross
    [1, 3, 0, 2, 3, 1, 2, 0], // Outside crosses
    [2, 0, 1, 3, 0, 2, 3, 1], // Center weave
    [3, 1, 2, 0, 1, 3, 0, 2]  // Corner bounce
  ];
  
  let patternIndex = 0;
  let noteInPattern = 0;
  let beat = startBeat;
  
  while (beat < endBeat) {
    const currentPattern = advancedPatterns[patternIndex % advancedPatterns.length];
    notes.push({
      time: beatToMs(beat, bpm),
      lane: currentPattern[noteInPattern % 8]
    });
    
    noteInPattern++;
    // Switch patterns every 12 notes for master difficulty
    if (noteInPattern % 12 === 0) {
      patternIndex++;
      noteInPattern = 0;
    }
    
    // Vary timing: mostly 8th notes with some 16th note bursts
    if (patternIndex % 3 === 2 && noteInPattern % 4 < 2) {
      beat += 0.25; // 16th notes for challenge
    } else {
      beat += 0.5; // 8th notes for stability
    }
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

// Another Me - Easy (140 BPM)
const anotherMeEasy: Chart = {
  songId: "4",
  difficulty: "Easy",
  bpm: 140,
  notes: generateEasyPatterns(4, 240, 140) // 4 to 240 beats = ~3.4 minutes
};

// Another Me - Normal (150 BPM)
const anotherMeNormal: Chart = {
  songId: "4",
  difficulty: "Normal",
  bpm: 150,
  notes: generateNormalPatterns(4, 180, 150) // 4 to 180 beats = ~3 minutes
};

// Another Me - Hard (160 BPM)
const anotherMeHard: Chart = {
  songId: "4",
  difficulty: "Hard",
  bpm: 160,
  notes: generateConsistent16thNotes(4, 400, 160) // 4 to 400 beats = ~3.5 minutes
};

// Another Me - Expert (175 BPM)
const anotherMeExpert: Chart = {
  songId: "4",
  difficulty: "Expert",
  bpm: 175,
  notes: generateExpertPatterns(8, 350, 175) // 8 to 350 beats = ~3.3 minutes
};

// Another Me - Master (190 BPM)
const anotherMeMaster: Chart = {
  songId: "4",
  difficulty: "Master",
  bpm: 190,
  notes: generateMasterPatterns(8, 300, 190) // 8 to 300 beats = ~3 minutes
};

// Chart registry
export const CHARTS = new Map<string, Chart>([
  ["1-Easy", gearsOfFateEasy],
  ["1-Normal", gearsOfFateNormal],
  ["1-Hard", gearsOfFateHard],
  ["1-Expert", gearsOfFateExpert],
  ["1-Master", gearsOfFateMaster],
  ["4-Easy", anotherMeEasy],
  ["4-Normal", anotherMeNormal],
  ["4-Hard", anotherMeHard],
  ["4-Expert", anotherMeExpert],
  ["4-Master", anotherMeMaster]
]);

export const getChart = (songId: string, difficulty: string): Chart | null => {
  return CHARTS.get(`${songId}-${difficulty}`) || null;
};