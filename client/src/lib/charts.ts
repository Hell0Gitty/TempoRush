export interface Note {
  time: number;
  lane: number;
  isHold?: boolean;
  holdDuration?: number; // Duration in milliseconds
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

// Generate hold notes for added complexity - strategically placed to avoid overlap
const generateHoldNotes = (regularNotes: Note[], startBeat: number, endBeat: number, bpm: number, density: number = 0.1): Note[] => {
  const notes: Note[] = [];
  const holdDurations = [1000, 1500, 2000, 2500, 3000]; // Various hold lengths in ms
  
  // Create time map of regular notes by lane to avoid overlaps
  const laneOccupancy: { [lane: number]: number[] } = { 0: [], 1: [], 2: [], 3: [] };
  regularNotes.forEach(note => {
    laneOccupancy[note.lane].push(note.time);
  });
  
  for (let beat = startBeat; beat < endBeat; beat += 6 + Math.random() * 12) {
    if (Math.random() < density) {
      const lane = Math.floor(Math.random() * 4);
      const duration = holdDurations[Math.floor(Math.random() * holdDurations.length)];
      const time = beatToMs(beat, bpm);
      
      // Check if this lane is clear for the hold duration
      const isLaneClear = !laneOccupancy[lane].some(noteTime => 
        Math.abs(noteTime - time) < duration + 500 // 500ms buffer
      );
      
      if (isLaneClear) {
        notes.push({
          time: time,
          lane: lane,
          isHold: true,
          holdDuration: duration
        });
      }
    }
  }
  
  return notes;
};

// Combine regular notes with strategically placed hold notes
const combineWithHolds = (regularNotes: Note[], startBeat: number, endBeat: number, bpm: number, density: number): Note[] => {
  const holdNotes = generateHoldNotes(regularNotes, startBeat, endBeat, bpm, density);
  return [...regularNotes, ...holdNotes].sort((a, b) => a.time - b.time);
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
  notes: combineWithHolds(
    generateEasyPatterns(4, 250, 150),
    4, 250, 150, 0.05
  )
};

// Gears of Fate - Normal (160 BPM)
// Mixed 8th note patterns, ~400 notes spanning 3+ minutes
const gearsOfFateNormal: Chart = {
  songId: "1",
  difficulty: "Normal",
  bpm: 160,
  notes: combineWithHolds(
    generateNormalPatterns(4, 200, 160),
    4, 200, 160, 0.08
  )
};

// Gears of Fate - Hard (170 BPM)
// Consistent 16th note patterns throughout, ~500 notes spanning 3+ minutes
const gearsOfFateHard: Chart = {
  songId: "1",
  difficulty: "Hard",
  bpm: 170,
  notes: combineWithHolds(
    generateConsistent16thNotes(4, 450, 170),
    4, 450, 170, 0.1
  )
};

// Gears of Fate - Expert (185 BPM)
// Mixed 16th and 8th note patterns with crossovers, ~400 notes spanning 3+ minutes
const gearsOfFateExpert: Chart = {
  songId: "1",
  difficulty: "Expert",
  bpm: 185,
  notes: combineWithHolds(
    generateExpertPatterns(8, 400, 185),
    8, 400, 185, 0.12
  )
};

// Gears of Fate - Master (210 BPM)
// Extremely challenging patterns, ~350 notes spanning 3+ minutes
const gearsOfFateMaster: Chart = {
  songId: "1",
  difficulty: "Master",
  bpm: 210,
  notes: combineWithHolds(
    generateMasterPatterns(8, 350, 210),
    8, 350, 210, 0.15
  )
};

// Another Me - Easy (130 BPM) - Full 3:47 duration
const anotherMeEasy: Chart = {
  songId: "4",
  difficulty: "Easy",
  bpm: 130,
  notes: generateEasyPatterns(4, 492, 130) // 3:47 duration (492 beats at 130 BPM)
};

// Another Me - Normal (158 BPM) - Full 3:47 duration
const anotherMeNormal: Chart = {
  songId: "4",
  difficulty: "Normal",
  bpm: 158,
  notes: generateNormalPatterns(4, 598, 158) // 3:47 duration (598 beats at 158 BPM)
};

// Another Me - Hard (175 BPM) - Full 3:47 duration
const anotherMeHard: Chart = {
  songId: "4",
  difficulty: "Hard",
  bpm: 175,
  notes: generateConsistent16thNotes(4, 662, 175) // 3:47 duration (662 beats at 175 BPM)
};

// Another Me - Expert (190 BPM) - Full 3:47 duration
const anotherMeExpert: Chart = {
  songId: "4",
  difficulty: "Expert",
  bpm: 190,
  notes: combineWithHolds(
    generateExpertPatterns(8, 719, 190), // 3:47 duration (719 beats at 190 BPM)
    8, 719, 190, 0.12
  )
};

// Another Me - Master (205 BPM) - Full 3:47 duration
const anotherMeMaster: Chart = {
  songId: "4",
  difficulty: "Master",
  bpm: 205,
  notes: combineWithHolds(
    generateMasterPatterns(8, 776, 205), // 3:47 duration (776 beats at 205 BPM)
    8, 776, 205, 0.15
  )
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
  notes: generateConsistent16thNotes(4, 520, 160) // 4 to 520 beats = ~5.2 minutes (extended)
};

// Viyella's Destiny - Expert (180 BPM)
const viyellaDestinyExpert: Chart = {
  songId: "3",
  difficulty: "Expert",
  bpm: 180,
  notes: combineWithHolds(
    generateViyellaExpertPatterns(8, 600, 180),
    8, 600, 180, 0.12
  )
};

// Viyella's Destiny - Master (200 BPM)
const viyellaDestinyMaster: Chart = {
  songId: "3",
  difficulty: "Master",
  bpm: 200,
  notes: combineWithHolds(
    generateViyellaMasterPatterns(8, 550, 200),
    8, 550, 200, 0.15
  )
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

// Glacier - Easy (135 BPM) - Full 4:18 duration
const glacierEasy: Chart = {
  songId: "5",
  difficulty: "Easy",
  bpm: 135,
  notes: generateEasyPatterns(4, 580, 135) // 4:18 duration (580 beats at 135 BPM)
};

// Glacier - Normal (160 BPM) - Full 4:18 duration
const glacierNormal: Chart = {
  songId: "5",
  difficulty: "Normal",
  bpm: 160,
  notes: generateNormalPatterns(4, 688, 160) // 4:18 duration (688 beats at 160 BPM)
};

// Glacier - Hard (180 BPM) - Full 4:18 duration
const glacierHard: Chart = {
  songId: "5",
  difficulty: "Hard",
  bpm: 180,
  notes: generateConsistent16thNotes(4, 774, 180) // 4:18 duration (774 beats at 180 BPM)
};

// Glacier - Expert (200 BPM) - Full 4:18 duration
const glacierExpert: Chart = {
  songId: "5",
  difficulty: "Expert",
  bpm: 200,
  notes: combineWithHolds(
    generateExpertPatterns(8, 860, 200), // 4:18 duration (860 beats at 200 BPM)
    8, 860, 200, 0.12
  )
};

// Glacier - Master (220 BPM) - Full 4:18 duration
const glacierMaster: Chart = {
  songId: "5",
  difficulty: "Master",
  bpm: 220,
  notes: combineWithHolds(
    generateMasterPatterns(8, 946, 220), // 4:18 duration (946 beats at 220 BPM)
    8, 946, 220, 0.15
  )
};

// Luminous Era - Easy (140 BPM)
const luminousEraEasy: Chart = {
  songId: "6",
  difficulty: "Easy",
  bpm: 140,
  notes: generateEasyPatterns(4, 260, 140) // 3:52 duration
};

// Luminous Era - Normal (165 BPM)
const luminousEraNormal: Chart = {
  songId: "6",
  difficulty: "Normal",
  bpm: 165,
  notes: generateNormalPatterns(4, 220, 165)
};

// Luminous Era - Hard (185 BPM)
const luminousEraHard: Chart = {
  songId: "6",
  difficulty: "Hard",
  bpm: 185,
  notes: generateConsistent16thNotes(4, 390, 185)
};

// Luminous Era - Expert (205 BPM)
const luminousEraExpert: Chart = {
  songId: "6",
  difficulty: "Expert",
  bpm: 205,
  notes: combineWithHolds(
    generateExpertPatterns(8, 420, 205),
    8, 420, 205, 0.12
  )
};

// Luminous Era - Master (225 BPM)
const luminousEraMaster: Chart = {
  songId: "6",
  difficulty: "Master",
  bpm: 225,
  notes: combineWithHolds(
    generateMasterPatterns(8, 450, 225),
    8, 450, 225, 0.15
  )
};

// Absolute Queen - Easy (140 BPM) - Adjusted to 3:30 duration
const absoluteQueenEasy: Chart = {
  songId: "7",
  difficulty: "Easy",
  bpm: 140,
  notes: generateEasyPatterns(4, 490, 140) // 3:30 duration (490 beats at 140 BPM)
};

// Absolute Queen - Normal (165 BPM) - Adjusted to 3:30 duration
const absoluteQueenNormal: Chart = {
  songId: "7",
  difficulty: "Normal",
  bpm: 165,
  notes: generateNormalPatterns(4, 578, 165) // 3:30 duration (578 beats at 165 BPM)
};

// Absolute Queen - Hard (185 BPM) - Adjusted to 3:30 duration
const absoluteQueenHard: Chart = {
  songId: "7",
  difficulty: "Hard",
  bpm: 185,
  notes: generateConsistent16thNotes(4, 648, 185) // 3:30 duration (648 beats at 185 BPM)
};

// Absolute Queen - Expert (205 BPM) - Adjusted to 3:30 duration
const absoluteQueenExpert: Chart = {
  songId: "7",
  difficulty: "Expert",
  bpm: 205,
  notes: combineWithHolds(
    generateExpertPatterns(8, 718, 205), // 3:30 duration (718 beats at 205 BPM)
    8, 718, 205, 0.12
  )
};

// Absolute Queen - Master (225 BPM) - Adjusted to 3:30 duration
const absoluteQueenMaster: Chart = {
  songId: "7",
  difficulty: "Master",
  bpm: 225,
  notes: combineWithHolds(
    generateMasterPatterns(8, 788, 225), // 3:30 duration (788 beats at 225 BPM)
    8, 788, 225, 0.15
  )
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
  ["4-Master", anotherMeMaster],
  ["5-Easy", glacierEasy],
  ["5-Normal", glacierNormal],
  ["5-Hard", glacierHard],
  ["5-Expert", glacierExpert],
  ["5-Master", glacierMaster],
  ["6-Easy", luminousEraEasy],
  ["6-Normal", luminousEraNormal],
  ["6-Hard", luminousEraHard],
  ["6-Expert", luminousEraExpert],
  ["6-Master", luminousEraMaster],
  ["7-Easy", absoluteQueenEasy],
  ["7-Normal", absoluteQueenNormal],
  ["7-Hard", absoluteQueenHard],
  ["7-Expert", absoluteQueenExpert],
  ["7-Master", absoluteQueenMaster]
]);

export const getChart = (songId: string, difficulty: string): Chart | null => {
  return CHARTS.get(`${songId}-${difficulty}`) || null;
};