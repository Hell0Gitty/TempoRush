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

// Generate varied 16th note patterns for Hard difficulty
const generateConsistent16thNotes = (startBeat: number, endBeat: number, bpm: number): Note[] => {
  const notes: Note[] = [];
  const sequences = [
    [0, 1, 2, 3, 2, 1, 0, 3, 1, 2, 3, 0], // Flowing pattern
    [3, 0, 2, 1, 0, 3, 1, 2, 3, 1, 0, 2], // Cross flow
    [1, 2, 0, 3, 2, 1, 3, 0, 2, 0, 1, 3], // Weaving
    [2, 3, 1, 0, 3, 2, 0, 1, 3, 1, 2, 0], // Spiral dance
    [0, 2, 1, 3, 2, 0, 3, 1, 0, 3, 2, 1], // Diamond flow
    [3, 1, 0, 2, 1, 3, 2, 0, 1, 2, 3, 0], // Bounce sequence
    [1, 0, 3, 2, 0, 1, 2, 3, 0, 2, 1, 3], // Alternating cross
    [2, 0, 3, 1, 0, 2, 1, 3, 2, 3, 0, 1], // Center burst
    [0, 3, 1, 2, 3, 0, 2, 1, 3, 2, 0, 1], // Outside sweep
    [1, 3, 2, 0, 3, 1, 0, 2, 1, 0, 3, 2]  // Complex weave
  ];
  
  let sequenceIndex = 0;
  let noteInSequence = 0;
  
  for (let beat = startBeat; beat < endBeat; beat += 0.25) { // 16th notes
    const currentSequence = sequences[sequenceIndex % sequences.length];
    notes.push({
      time: beatToMs(beat, bpm),
      lane: currentSequence[noteInSequence % 12]
    });
    
    noteInSequence++;
    // Switch sequences every 20 notes for variety
    if (noteInSequence % 20 === 0) {
      sequenceIndex++;
      noteInSequence = 0;
    }
  }
  return notes;
};

// Generate expert patterns with varied, challenging patterns
const generateExpertPatterns = (startBeat: number, endBeat: number, bpm: number): Note[] => {
  const notes: Note[] = [];
  const patterns = [
    [0, 2, 3, 1, 0, 3, 2, 1, 0, 1], // Complex crossover flow
    [3, 1, 0, 2, 1, 3, 2, 0, 3, 0], // Diamond weave
    [1, 0, 3, 2, 0, 1, 2, 3, 1, 2], // Alternating spiral
    [2, 3, 1, 0, 3, 2, 0, 1, 2, 0], // Outside-in cascade
    [0, 1, 3, 2, 1, 0, 2, 3, 0, 3], // Skip and bounce
    [3, 0, 2, 1, 0, 3, 1, 2, 3, 2], // Reverse diamond
    [1, 2, 0, 3, 2, 1, 3, 0, 1, 3], // Center burst flow
    [2, 0, 1, 3, 0, 2, 3, 1, 2, 1], // Flowing cross
    [0, 3, 1, 2, 3, 0, 2, 1, 0, 2], // Wave pattern
    [3, 2, 0, 1, 2, 3, 1, 0, 3, 1]  // Descending weave
  ];
  
  let patternIndex = 0;
  let noteInPattern = 0;
  let beat = startBeat;
  
  while (beat < endBeat) {
    const currentPattern = patterns[patternIndex % patterns.length];
    notes.push({
      time: beatToMs(beat, bpm),
      lane: currentPattern[noteInPattern % 10]
    });
    
    noteInPattern++;
    // Switch patterns every 14 notes for variety
    if (noteInPattern % 14 === 0) {
      patternIndex++;
      noteInPattern = 0;
    }
    
    // Mix of 8th and 16th notes for Expert challenge
    if (patternIndex % 4 === 3 && noteInPattern % 6 < 3) {
      beat += 0.25; // 16th notes for intensity
    } else {
      beat += 0.5; // 8th notes for flow
    }
  }
  return notes;
};

// Generate Viyella-specific expert patterns with melodic flows
const generateViyellaExpertPatterns = (startBeat: number, endBeat: number, bpm: number): Note[] => {
  const notes: Note[] = [];
  const melodicPatterns = [
    [0, 1, 2, 3, 2, 1, 0, 2, 3, 1, 0, 3], // Ascending melody cascade
    [3, 2, 1, 0, 1, 2, 3, 1, 0, 2, 3, 0], // Descending harmony flow
    [1, 0, 2, 1, 3, 2, 0, 3, 1, 2, 0, 1], // Gentle weaving melody
    [2, 3, 0, 1, 2, 0, 3, 1, 0, 3, 2, 1], // Emotional chord progression
    [0, 2, 1, 3, 0, 1, 3, 2, 1, 0, 3, 2], // Tender piano-like pattern
    [3, 1, 2, 0, 3, 2, 1, 0, 2, 1, 3, 0], // Sorrowful descending line
    [1, 3, 0, 2, 1, 0, 2, 3, 0, 1, 2, 3], // Hope rising pattern
    [2, 0, 3, 1, 2, 3, 0, 1, 3, 0, 1, 2], // Destiny's call motif
    [0, 3, 2, 1, 0, 2, 1, 3, 2, 3, 0, 1], // Emotional climax
    [3, 0, 1, 2, 3, 1, 0, 2, 1, 2, 3, 0]  // Final resolution
  ];
  
  let patternIndex = 0;
  let noteInPattern = 0;
  let beat = startBeat;
  
  while (beat < endBeat) {
    const currentPattern = melodicPatterns[patternIndex % melodicPatterns.length];
    notes.push({
      time: beatToMs(beat, bpm),
      lane: currentPattern[noteInPattern % 12]
    });
    
    noteInPattern++;
    // Longer pattern sections for emotional flow
    if (noteInPattern % 18 === 0) {
      patternIndex++;
      noteInPattern = 0;
    }
    
    // Varied timing for emotional emphasis
    if (patternIndex % 5 === 4 && noteInPattern % 8 < 4) {
      beat += 0.25; // Emotional 16th note runs
    } else if (patternIndex % 7 === 6) {
      beat += 0.75; // Slower, contemplative sections
    } else {
      beat += 0.5; // Standard 8th note flow
    }
  }
  return notes;
};

// Generate master patterns with extremely challenging, varied patterns
const generateMasterPatterns = (startBeat: number, endBeat: number, bpm: number): Note[] => {
  const notes: Note[] = [];
  const advancedPatterns = [
    [0, 3, 1, 2, 3, 0, 2, 1, 0, 1, 3, 2], // Complex crossover cascade
    [1, 0, 3, 2, 0, 1, 2, 3, 1, 2, 0, 3], // Alternating spiral flow
    [2, 1, 0, 3, 1, 2, 3, 0, 2, 0, 1, 3], // Inward spiral burst
    [3, 0, 2, 1, 0, 3, 1, 2, 3, 2, 0, 1], // Diamond weave advanced
    [0, 2, 3, 1, 2, 0, 1, 3, 0, 3, 2, 1], // Skip and cross complex
    [1, 3, 0, 2, 3, 1, 2, 0, 1, 0, 3, 2], // Outside crosses flow
    [2, 0, 1, 3, 0, 2, 3, 1, 2, 1, 0, 3], // Center weave storm
    [3, 1, 2, 0, 1, 3, 0, 2, 3, 0, 1, 2], // Corner bounce cascade
    [0, 1, 3, 0, 2, 1, 3, 2, 0, 3, 1, 0], // Triple cross pattern
    [2, 3, 0, 1, 3, 2, 1, 0, 2, 0, 3, 1]  // Master finale weave
  ];
  
  let patternIndex = 0;
  let noteInPattern = 0;
  let beat = startBeat;
  
  while (beat < endBeat) {
    const currentPattern = advancedPatterns[patternIndex % advancedPatterns.length];
    notes.push({
      time: beatToMs(beat, bpm),
      lane: currentPattern[noteInPattern % 12]
    });
    
    noteInPattern++;
    // Switch patterns every 16 notes for master difficulty
    if (noteInPattern % 16 === 0) {
      patternIndex++;
      noteInPattern = 0;
    }
    
    // Advanced timing: mix of 8th, 16th, and triplet feels
    if (patternIndex % 5 === 4 && noteInPattern % 8 < 4) {
      beat += 0.25; // 16th note bursts
    } else if (patternIndex % 7 === 6 && noteInPattern % 6 < 2) {
      beat += 0.33; // Triplet feel sections
    } else {
      beat += 0.5; // 8th notes for flow
    }
  }
  return notes;
};

// Generate Viyella-specific master patterns with emotional complexity
const generateViyellaMasterPatterns = (startBeat: number, endBeat: number, bpm: number): Note[] => {
  const notes: Note[] = [];
  const destinyPatterns = [
    [0, 1, 2, 3, 2, 1, 0, 3, 1, 2, 0, 3, 2, 1], // Fate's ascending spiral
    [3, 2, 1, 0, 1, 2, 3, 0, 2, 1, 3, 0, 1, 2], // Destiny's descending call
    [1, 0, 3, 2, 0, 1, 2, 3, 1, 0, 2, 3, 0, 1], // Emotional crossroads
    [2, 3, 0, 1, 3, 2, 1, 0, 3, 1, 0, 2, 1, 3], // Sorrowful harmony weave
    [0, 2, 1, 3, 2, 0, 3, 1, 0, 3, 2, 1, 3, 0], // Hope and despair dance
    [3, 1, 0, 2, 1, 3, 0, 2, 3, 0, 1, 2, 0, 3], // Viyella's lament flow
    [1, 2, 3, 0, 2, 1, 0, 3, 2, 0, 3, 1, 2, 0], // Destiny's final embrace
    [2, 0, 3, 1, 0, 2, 1, 3, 0, 3, 1, 2, 3, 1], // Tragic beauty cascade
    [0, 3, 1, 2, 3, 0, 2, 1, 3, 2, 0, 1, 0, 2], // Melancholic resolution
    [3, 0, 2, 1, 0, 3, 1, 2, 0, 1, 3, 2, 1, 0]  // Eternal destiny motif
  ];
  
  let patternIndex = 0;
  let noteInPattern = 0;
  let beat = startBeat;
  
  while (beat < endBeat) {
    const currentPattern = destinyPatterns[patternIndex % destinyPatterns.length];
    notes.push({
      time: beatToMs(beat, bpm),
      lane: currentPattern[noteInPattern % 14]
    });
    
    noteInPattern++;
    // Extended pattern sections for emotional storytelling
    if (noteInPattern % 20 === 0) {
      patternIndex++;
      noteInPattern = 0;
    }
    
    // Complex timing variations for Master difficulty
    if (patternIndex % 6 === 5 && noteInPattern % 10 < 5) {
      beat += 0.25; // Intense 16th note emotional climaxes
    } else if (patternIndex % 8 === 7 && noteInPattern % 6 < 2) {
      beat += 0.33; // Triplet feel for emotional depth
    } else if (patternIndex % 9 === 8) {
      beat += 0.75; // Slow, contemplative master sections
    } else {
      beat += 0.5; // Standard flow
    }
  }
  return notes;
};

// Generate easy patterns with varied, musical sequences
const generateEasyPatterns = (startBeat: number, endBeat: number, bpm: number): Note[] => {
  const notes: Note[] = [];
  const sequences = [
    [0, 2, 1, 3, 0, 3, 2, 1], // Simple cross
    [1, 0, 3, 2, 1, 2, 0, 3], // Gentle weave
    [2, 1, 0, 2, 3, 1, 0, 3], // Center focus
    [0, 1, 2, 0, 3, 2, 1, 3], // Ascending steps
    [3, 1, 2, 0, 1, 3, 0, 2], // Outside-in
    [0, 3, 1, 2, 3, 0, 2, 1], // Diamond shape
    [1, 2, 3, 1, 0, 2, 3, 0], // Skip pattern
    [2, 0, 3, 1, 2, 3, 0, 1]  // Alternating pairs
  ];
  
  let sequenceIndex = 0;
  let noteInSequence = 0;
  
  for (let beat = startBeat; beat < endBeat; beat += 1) { // Quarter notes
    const currentSequence = sequences[sequenceIndex % sequences.length];
    notes.push({
      time: beatToMs(beat, bpm),
      lane: currentSequence[noteInSequence % 8]
    });
    
    noteInSequence++;
    // Switch sequences every 12 notes for variety
    if (noteInSequence % 12 === 0) {
      sequenceIndex++;
      noteInSequence = 0;
    }
  }
  return notes;
};

// Generate normal patterns with varied 8th note sequences
const generateNormalPatterns = (startBeat: number, endBeat: number, bpm: number): Note[] => {
  const notes: Note[] = [];
  const sequences = [
    [0, 1, 2, 3, 2, 1, 0, 3, 1, 2], // Wave pattern
    [3, 0, 2, 1, 3, 2, 0, 1, 2, 3], // Zigzag
    [1, 3, 0, 2, 1, 0, 3, 2, 0, 1], // Cross weave
    [2, 0, 1, 3, 0, 2, 3, 1, 3, 0], // Center spiral
    [0, 2, 3, 1, 2, 0, 1, 3, 2, 1], // Skip dance
    [3, 1, 0, 2, 3, 0, 1, 2, 1, 3], // Bounce pattern
    [1, 0, 2, 3, 1, 3, 0, 2, 3, 2], // Diagonal flow
    [2, 3, 1, 0, 2, 1, 3, 0, 1, 2], // Reverse spiral
    [0, 3, 2, 1, 0, 1, 2, 3, 0, 2], // Figure-8
    [3, 2, 0, 1, 3, 1, 2, 0, 2, 3]  // Complex weave
  ];
  
  let sequenceIndex = 0;
  let noteInSequence = 0;
  
  for (let beat = startBeat; beat < endBeat; beat += 0.5) { // 8th notes
    const currentSequence = sequences[sequenceIndex % sequences.length];
    notes.push({
      time: beatToMs(beat, bpm),
      lane: currentSequence[noteInSequence % 10]
    });
    
    noteInSequence++;
    // Switch sequences every 16 notes for variety
    if (noteInSequence % 16 === 0) {
      sequenceIndex++;
      noteInSequence = 0;
    }
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
  notes: generateExpertPatterns(8, 380, 175) // 8 to 380 beats = ~3.6 minutes
};

// Another Me - Master (190 BPM)
const anotherMeMaster: Chart = {
  songId: "4",
  difficulty: "Master",
  bpm: 190,
  notes: generateMasterPatterns(8, 350, 190) // 8 to 350 beats = ~3.3 minutes
};

// Viyella's Destiny - Easy (120 BPM)
const viyellaDestinyEasy: Chart = {
  songId: "3",
  difficulty: "Easy",
  bpm: 120,
  notes: generateEasyPatterns(4, 260, 120) // 4 to 260 beats = ~4.3 minutes
};

// Viyella's Destiny - Normal (140 BPM)
const viyellaDestinyNormal: Chart = {
  songId: "3",
  difficulty: "Normal",
  bpm: 140,
  notes: generateNormalPatterns(4, 210, 140) // 4 to 210 beats = ~3.7 minutes
};

// Viyella's Destiny - Hard (160 BPM)
const viyellaDestinyHard: Chart = {
  songId: "3",
  difficulty: "Hard",
  bpm: 160,
  notes: generateConsistent16thNotes(4, 420, 160) // 4 to 420 beats = ~4.2 minutes
};

// Viyella's Destiny - Expert (180 BPM)
const viyellaDestinyExpert: Chart = {
  songId: "3",
  difficulty: "Expert",
  bpm: 180,
  notes: generateViyellaExpertPatterns(8, 400, 180) // 8 to 400 beats = ~4.4 minutes
};

// Viyella's Destiny - Master (200 BPM)
const viyellaDestinyMaster: Chart = {
  songId: "3",
  difficulty: "Master",
  bpm: 200,
  notes: generateViyellaMasterPatterns(8, 380, 200) // 8 to 380 beats = ~3.8 minutes
};

// Grievous Lady - Easy (150 BPM)
const grievousLadyEasy: Chart = {
  songId: "2",
  difficulty: "Easy",
  bpm: 150,
  notes: generateEasyPatterns(4, 230, 150) // 4 to 230 beats = ~3.8 minutes
};

// Grievous Lady - Normal (170 BPM)
const grievousLadyNormal: Chart = {
  songId: "2",
  difficulty: "Normal",
  bpm: 170,
  notes: generateNormalPatterns(4, 190, 170) // 4 to 190 beats = ~3.3 minutes
};

// Grievous Lady - Hard (190 BPM)
const grievousLadyHard: Chart = {
  songId: "2",
  difficulty: "Hard",
  bpm: 190,
  notes: generateConsistent16thNotes(4, 380, 190) // 4 to 380 beats = ~3.8 minutes
};

// Grievous Lady - Expert (210 BPM)
const grievousLadyExpert: Chart = {
  songId: "2",
  difficulty: "Expert",
  bpm: 210,
  notes: generateExpertPatterns(8, 350, 210) // 8 to 350 beats = ~3.3 minutes
};

// Grievous Lady - Master (230 BPM)
const grievousLadyMaster: Chart = {
  songId: "2",
  difficulty: "Master",
  bpm: 230,
  notes: generateMasterPatterns(8, 320, 230) // 8 to 320 beats = ~2.8 minutes
};

// Chart registry
export const CHARTS = new Map<string, Chart>([
  ["1-Easy", gearsOfFateEasy],
  ["1-Normal", gearsOfFateNormal],
  ["1-Hard", gearsOfFateHard],
  ["1-Expert", gearsOfFateExpert],
  ["1-Master", gearsOfFateMaster],
  ["2-Easy", grievousLadyEasy],
  ["2-Normal", grievousLadyNormal],
  ["2-Hard", grievousLadyHard],
  ["2-Expert", grievousLadyExpert],
  ["2-Master", grievousLadyMaster],
  ["3-Easy", viyellaDestinyEasy],
  ["3-Normal", viyellaDestinyNormal],
  ["3-Hard", viyellaDestinyHard],
  ["3-Expert", viyellaDestinyExpert],
  ["3-Master", viyellaDestinyMaster],
  ["4-Easy", anotherMeEasy],
  ["4-Normal", anotherMeNormal],
  ["4-Hard", anotherMeHard],
  ["4-Expert", anotherMeExpert],
  ["4-Master", anotherMeMaster]
]);

export const getChart = (songId: string, difficulty: string): Chart | null => {
  return CHARTS.get(`${songId}-${difficulty}`) || null;
};