// Chart data for "Gears of Fate" by Laur
// Time is in milliseconds from the start of the song

interface ChartNote {
  time: number; // When the note should be hit (in ms)
  lane: number; // 0-3 for lanes A, S, K, L
}

interface Chart {
  songId: string;
  difficulty: string;
  bpm: number;
  notes: ChartNote[];
}

// Helper function to calculate note timing based on BPM
const beatToMs = (beat: number, bpm: number) => (beat * 60000) / bpm;

// Gears of Fate - Easy (140 BPM)
// Simple single notes, mostly on quarter notes
const gearsOfFateEasy: Chart = {
  songId: "1",
  difficulty: "Easy",
  bpm: 140,
  notes: [
    // Intro section (8 beats)
    { time: beatToMs(1, 140), lane: 0 }, // A
    { time: beatToMs(3, 140), lane: 1 }, // S
    { time: beatToMs(5, 140), lane: 2 }, // K
    { time: beatToMs(7, 140), lane: 3 }, // L
    
    // Main melody section
    { time: beatToMs(9, 140), lane: 0 },
    { time: beatToMs(11, 140), lane: 1 },
    { time: beatToMs(13, 140), lane: 2 },
    { time: beatToMs(15, 140), lane: 1 },
    { time: beatToMs(17, 140), lane: 0 },
    { time: beatToMs(19, 140), lane: 3 },
    { time: beatToMs(21, 140), lane: 2 },
    { time: beatToMs(23, 140), lane: 1 },
    
    // Building section
    { time: beatToMs(25, 140), lane: 0 },
    { time: beatToMs(26, 140), lane: 1 },
    { time: beatToMs(27, 140), lane: 2 },
    { time: beatToMs(29, 140), lane: 3 },
    { time: beatToMs(31, 140), lane: 2 },
    { time: beatToMs(33, 140), lane: 1 },
    { time: beatToMs(35, 140), lane: 0 },
    { time: beatToMs(37, 140), lane: 3 },
    
    // Climax section
    { time: beatToMs(41, 140), lane: 0 },
    { time: beatToMs(42, 140), lane: 2 },
    { time: beatToMs(43, 140), lane: 1 },
    { time: beatToMs(44, 140), lane: 3 },
    { time: beatToMs(45, 140), lane: 0 },
    { time: beatToMs(46, 140), lane: 2 },
    { time: beatToMs(47, 140), lane: 1 },
    { time: beatToMs(48, 140), lane: 3 },
    
    // Ending
    { time: beatToMs(49, 140), lane: 0 },
    { time: beatToMs(51, 140), lane: 1 },
    { time: beatToMs(53, 140), lane: 2 },
    { time: beatToMs(55, 140), lane: 3 },
    { time: beatToMs(57, 140), lane: 1 },
    { time: beatToMs(59, 140), lane: 2 },
    { time: beatToMs(61, 140), lane: 0 },
    { time: beatToMs(63, 140), lane: 3 }
  ]
};

// Gears of Fate - Normal (165 BPM)
// Add eighth notes and some simple patterns
const gearsOfFateNormal: Chart = {
  songId: "1",
  difficulty: "Normal",
  bpm: 165,
  notes: [
    // Intro with eighth notes
    { time: beatToMs(1, 165), lane: 0 },
    { time: beatToMs(1.5, 165), lane: 1 },
    { time: beatToMs(2.5, 165), lane: 2 },
    { time: beatToMs(3, 165), lane: 3 },
    { time: beatToMs(4.5, 165), lane: 1 },
    { time: beatToMs(5, 165), lane: 0 },
    { time: beatToMs(6.5, 165), lane: 2 },
    { time: beatToMs(7, 165), lane: 3 },
    
    // Main section with patterns
    { time: beatToMs(9, 165), lane: 0 },
    { time: beatToMs(9.5, 165), lane: 1 },
    { time: beatToMs(10.5, 165), lane: 2 },
    { time: beatToMs(11, 165), lane: 3 },
    { time: beatToMs(12, 165), lane: 1 },
    { time: beatToMs(13, 165), lane: 0 },
    { time: beatToMs(13.5, 165), lane: 2 },
    { time: beatToMs(14.5, 165), lane: 3 },
    { time: beatToMs(15, 165), lane: 1 },
    
    // Faster section
    { time: beatToMs(17, 165), lane: 0 },
    { time: beatToMs(17.5, 165), lane: 1 },
    { time: beatToMs(18, 165), lane: 2 },
    { time: beatToMs(18.5, 165), lane: 3 },
    { time: beatToMs(19, 165), lane: 2 },
    { time: beatToMs(19.5, 165), lane: 1 },
    { time: beatToMs(20, 165), lane: 0 },
    { time: beatToMs(20.5, 165), lane: 3 },
    
    // Climax with more density
    { time: beatToMs(25, 165), lane: 0 },
    { time: beatToMs(25.25, 165), lane: 1 },
    { time: beatToMs(25.5, 165), lane: 2 },
    { time: beatToMs(25.75, 165), lane: 3 },
    { time: beatToMs(26, 165), lane: 2 },
    { time: beatToMs(26.5, 165), lane: 1 },
    { time: beatToMs(27, 165), lane: 0 },
    { time: beatToMs(27.5, 165), lane: 3 },
    { time: beatToMs(28, 165), lane: 1 },
    { time: beatToMs(28.5, 165), lane: 2 },
    
    // Final section
    { time: beatToMs(33, 165), lane: 0 },
    { time: beatToMs(34, 165), lane: 1 },
    { time: beatToMs(35, 165), lane: 2 },
    { time: beatToMs(36, 165), lane: 3 },
    { time: beatToMs(37, 165), lane: 1 },
    { time: beatToMs(38, 165), lane: 0 },
    { time: beatToMs(39, 165), lane: 2 },
    { time: beatToMs(40, 165), lane: 3 }
  ]
};

// Gears of Fate - Hard (180 BPM)
// More complex patterns, 16th notes, crossovers
const gearsOfFateHard: Chart = {
  songId: "1",
  difficulty: "Hard",
  bpm: 180,
  notes: [
    // Intro with 16th note bursts
    { time: beatToMs(1, 180), lane: 0 },
    { time: beatToMs(1.25, 180), lane: 1 },
    { time: beatToMs(1.5, 180), lane: 2 },
    { time: beatToMs(1.75, 180), lane: 3 },
    { time: beatToMs(2.5, 180), lane: 2 },
    { time: beatToMs(2.75, 180), lane: 1 },
    { time: beatToMs(3, 180), lane: 0 },
    { time: beatToMs(3.5, 180), lane: 3 },
    
    // Complex patterns
    { time: beatToMs(5, 180), lane: 0 },
    { time: beatToMs(5.25, 180), lane: 2 },
    { time: beatToMs(5.5, 180), lane: 1 },
    { time: beatToMs(5.75, 180), lane: 3 },
    { time: beatToMs(6, 180), lane: 0 },
    { time: beatToMs(6.5, 180), lane: 2 },
    { time: beatToMs(7, 180), lane: 1 },
    { time: beatToMs(7.25, 180), lane: 3 },
    { time: beatToMs(7.5, 180), lane: 0 },
    { time: beatToMs(7.75, 180), lane: 2 },
    
    // Crossover section
    { time: beatToMs(9, 180), lane: 0 },
    { time: beatToMs(9.125, 180), lane: 3 },
    { time: beatToMs(9.25, 180), lane: 1 },
    { time: beatToMs(9.375, 180), lane: 2 },
    { time: beatToMs(9.5, 180), lane: 0 },
    { time: beatToMs(9.625, 180), lane: 3 },
    { time: beatToMs(9.75, 180), lane: 1 },
    { time: beatToMs(9.875, 180), lane: 2 },
    
    // Fast alternating patterns
    { time: beatToMs(13, 180), lane: 0 },
    { time: beatToMs(13.125, 180), lane: 2 },
    { time: beatToMs(13.25, 180), lane: 0 },
    { time: beatToMs(13.375, 180), lane: 2 },
    { time: beatToMs(13.5, 180), lane: 1 },
    { time: beatToMs(13.625, 180), lane: 3 },
    { time: beatToMs(13.75, 180), lane: 1 },
    { time: beatToMs(13.875, 180), lane: 3 },
    
    // Climax section with dense patterns
    { time: beatToMs(17, 180), lane: 0 },
    { time: beatToMs(17.0625, 180), lane: 1 },
    { time: beatToMs(17.125, 180), lane: 2 },
    { time: beatToMs(17.1875, 180), lane: 3 },
    { time: beatToMs(17.25, 180), lane: 2 },
    { time: beatToMs(17.3125, 180), lane: 1 },
    { time: beatToMs(17.375, 180), lane: 0 },
    { time: beatToMs(17.4375, 180), lane: 3 },
    { time: beatToMs(17.5, 180), lane: 1 },
    { time: beatToMs(17.5625, 180), lane: 2 },
    { time: beatToMs(17.625, 180), lane: 0 },
    { time: beatToMs(17.6875, 180), lane: 3 },
    { time: beatToMs(17.75, 180), lane: 2 },
    { time: beatToMs(17.8125, 180), lane: 1 },
    { time: beatToMs(17.875, 180), lane: 0 },
    { time: beatToMs(17.9375, 180), lane: 3 }
  ]
};

// Gears of Fate - Expert (195 BPM)
// Very complex patterns, fast streams, technical sections
const gearsOfFateExpert: Chart = {
  songId: "1",
  difficulty: "Expert",
  bpm: 195,
  notes: [
    // Technical intro
    { time: beatToMs(1, 195), lane: 0 },
    { time: beatToMs(1.0625, 195), lane: 1 },
    { time: beatToMs(1.125, 195), lane: 2 },
    { time: beatToMs(1.1875, 195), lane: 3 },
    { time: beatToMs(1.25, 195), lane: 2 },
    { time: beatToMs(1.3125, 195), lane: 1 },
    { time: beatToMs(1.375, 195), lane: 0 },
    { time: beatToMs(1.4375, 195), lane: 3 },
    { time: beatToMs(1.5, 195), lane: 1 },
    { time: beatToMs(1.5625, 195), lane: 2 },
    { time: beatToMs(1.625, 195), lane: 0 },
    { time: beatToMs(1.6875, 195), lane: 3 },
    { time: beatToMs(1.75, 195), lane: 2 },
    { time: beatToMs(1.8125, 195), lane: 1 },
    { time: beatToMs(1.875, 195), lane: 0 },
    { time: beatToMs(1.9375, 195), lane: 3 },
    
    // Stream section
    { time: beatToMs(5, 195), lane: 0 },
    { time: beatToMs(5.03125, 195), lane: 1 },
    { time: beatToMs(5.0625, 195), lane: 2 },
    { time: beatToMs(5.09375, 195), lane: 3 },
    { time: beatToMs(5.125, 195), lane: 2 },
    { time: beatToMs(5.15625, 195), lane: 1 },
    { time: beatToMs(5.1875, 195), lane: 0 },
    { time: beatToMs(5.21875, 195), lane: 3 },
    { time: beatToMs(5.25, 195), lane: 1 },
    { time: beatToMs(5.28125, 195), lane: 2 },
    { time: beatToMs(5.3125, 195), lane: 0 },
    { time: beatToMs(5.34375, 195), lane: 3 },
    { time: beatToMs(5.375, 195), lane: 2 },
    { time: beatToMs(5.40625, 195), lane: 1 },
    { time: beatToMs(5.4375, 195), lane: 0 },
    { time: beatToMs(5.46875, 195), lane: 3 },
    
    // Polyrhythm section
    { time: beatToMs(9, 195), lane: 0 },
    { time: beatToMs(9.03125, 195), lane: 2 },
    { time: beatToMs(9.0625, 195), lane: 1 },
    { time: beatToMs(9.09375, 195), lane: 3 },
    { time: beatToMs(9.125, 195), lane: 0 },
    { time: beatToMs(9.15625, 195), lane: 2 },
    { time: beatToMs(9.1875, 195), lane: 1 },
    { time: beatToMs(9.21875, 195), lane: 3 },
    { time: beatToMs(9.25, 195), lane: 2 },
    { time: beatToMs(9.28125, 195), lane: 0 },
    { time: beatToMs(9.3125, 195), lane: 3 },
    { time: beatToMs(9.34375, 195), lane: 1 },
    { time: beatToMs(9.375, 195), lane: 2 },
    { time: beatToMs(9.40625, 195), lane: 0 },
    { time: beatToMs(9.4375, 195), lane: 3 },
    { time: beatToMs(9.46875, 195), lane: 1 }
  ]
};

// Gears of Fate - Master (210 BPM)
// Extremely technical, dense patterns, expert-level challenges
const gearsOfFateMaster: Chart = {
  songId: "1",
  difficulty: "Master",
  bpm: 210,
  notes: [
    // Insane opening
    { time: beatToMs(1, 210), lane: 0 },
    { time: beatToMs(1.015625, 210), lane: 1 },
    { time: beatToMs(1.03125, 210), lane: 2 },
    { time: beatToMs(1.046875, 210), lane: 3 },
    { time: beatToMs(1.0625, 210), lane: 2 },
    { time: beatToMs(1.078125, 210), lane: 1 },
    { time: beatToMs(1.09375, 210), lane: 0 },
    { time: beatToMs(1.109375, 210), lane: 3 },
    { time: beatToMs(1.125, 210), lane: 1 },
    { time: beatToMs(1.140625, 210), lane: 2 },
    { time: beatToMs(1.15625, 210), lane: 0 },
    { time: beatToMs(1.171875, 210), lane: 3 },
    { time: beatToMs(1.1875, 210), lane: 2 },
    { time: beatToMs(1.203125, 210), lane: 1 },
    { time: beatToMs(1.21875, 210), lane: 0 },
    { time: beatToMs(1.234375, 210), lane: 3 },
    { time: beatToMs(1.25, 210), lane: 1 },
    { time: beatToMs(1.265625, 210), lane: 2 },
    { time: beatToMs(1.28125, 210), lane: 0 },
    { time: beatToMs(1.296875, 210), lane: 3 },
    { time: beatToMs(1.3125, 210), lane: 2 },
    { time: beatToMs(1.328125, 210), lane: 1 },
    { time: beatToMs(1.34375, 210), lane: 0 },
    { time: beatToMs(1.359375, 210), lane: 3 },
    { time: beatToMs(1.375, 210), lane: 1 },
    { time: beatToMs(1.390625, 210), lane: 2 },
    { time: beatToMs(1.40625, 210), lane: 0 },
    { time: beatToMs(1.421875, 210), lane: 3 },
    { time: beatToMs(1.4375, 210), lane: 2 },
    { time: beatToMs(1.453125, 210), lane: 1 },
    { time: beatToMs(1.46875, 210), lane: 0 },
    { time: beatToMs(1.484375, 210), lane: 3 }
  ]
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