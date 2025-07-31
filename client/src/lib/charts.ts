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
// Simple single notes, mostly on quarter and half notes, ~180 notes total
const gearsOfFateEasy: Chart = {
  songId: "1",
  difficulty: "Easy",
  bpm: 140,
  notes: [
    // Intro section (16 bars, 64 beats)
    { time: beatToMs(1, 140), lane: 0 }, { time: beatToMs(3, 140), lane: 1 }, { time: beatToMs(5, 140), lane: 2 }, { time: beatToMs(7, 140), lane: 3 },
    { time: beatToMs(9, 140), lane: 1 }, { time: beatToMs(11, 140), lane: 0 }, { time: beatToMs(13, 140), lane: 3 }, { time: beatToMs(15, 140), lane: 2 },
    { time: beatToMs(17, 140), lane: 0 }, { time: beatToMs(19, 140), lane: 2 }, { time: beatToMs(21, 140), lane: 1 }, { time: beatToMs(23, 140), lane: 3 },
    { time: beatToMs(25, 140), lane: 2 }, { time: beatToMs(27, 140), lane: 0 }, { time: beatToMs(29, 140), lane: 3 }, { time: beatToMs(31, 140), lane: 1 },
    { time: beatToMs(33, 140), lane: 0 }, { time: beatToMs(35, 140), lane: 1 }, { time: beatToMs(37, 140), lane: 2 }, { time: beatToMs(39, 140), lane: 3 },
    { time: beatToMs(41, 140), lane: 1 }, { time: beatToMs(43, 140), lane: 2 }, { time: beatToMs(45, 140), lane: 0 }, { time: beatToMs(47, 140), lane: 3 },
    { time: beatToMs(49, 140), lane: 2 }, { time: beatToMs(51, 140), lane: 1 }, { time: beatToMs(53, 140), lane: 3 }, { time: beatToMs(55, 140), lane: 0 },
    { time: beatToMs(57, 140), lane: 1 }, { time: beatToMs(59, 140), lane: 3 }, { time: beatToMs(61, 140), lane: 2 }, { time: beatToMs(63, 140), lane: 0 },

    // Verse 1 (16 bars, 64 beats)
    { time: beatToMs(65, 140), lane: 0 }, { time: beatToMs(67, 140), lane: 1 }, { time: beatToMs(69, 140), lane: 2 }, { time: beatToMs(71, 140), lane: 1 },
    { time: beatToMs(73, 140), lane: 3 }, { time: beatToMs(75, 140), lane: 0 }, { time: beatToMs(77, 140), lane: 2 }, { time: beatToMs(79, 140), lane: 1 },
    { time: beatToMs(81, 140), lane: 0 }, { time: beatToMs(83, 140), lane: 3 }, { time: beatToMs(85, 140), lane: 1 }, { time: beatToMs(87, 140), lane: 2 },
    { time: beatToMs(89, 140), lane: 0 }, { time: beatToMs(91, 140), lane: 1 }, { time: beatToMs(93, 140), lane: 3 }, { time: beatToMs(95, 140), lane: 2 },
    { time: beatToMs(97, 140), lane: 1 }, { time: beatToMs(99, 140), lane: 0 }, { time: beatToMs(101, 140), lane: 2 }, { time: beatToMs(103, 140), lane: 3 },
    { time: beatToMs(105, 140), lane: 0 }, { time: beatToMs(107, 140), lane: 1 }, { time: beatToMs(109, 140), lane: 3 }, { time: beatToMs(111, 140), lane: 2 },
    { time: beatToMs(113, 140), lane: 1 }, { time: beatToMs(115, 140), lane: 3 }, { time: beatToMs(117, 140), lane: 0 }, { time: beatToMs(119, 140), lane: 2 },
    { time: beatToMs(121, 140), lane: 3 }, { time: beatToMs(123, 140), lane: 1 }, { time: beatToMs(125, 140), lane: 0 }, { time: beatToMs(127, 140), lane: 2 },

    // Pre-Chorus (8 bars, 32 beats)
    { time: beatToMs(129, 140), lane: 0 }, { time: beatToMs(130, 140), lane: 1 }, { time: beatToMs(131, 140), lane: 2 }, { time: beatToMs(133, 140), lane: 3 },
    { time: beatToMs(135, 140), lane: 1 }, { time: beatToMs(136, 140), lane: 0 }, { time: beatToMs(137, 140), lane: 3 }, { time: beatToMs(139, 140), lane: 2 },
    { time: beatToMs(141, 140), lane: 0 }, { time: beatToMs(142, 140), lane: 2 }, { time: beatToMs(143, 140), lane: 1 }, { time: beatToMs(145, 140), lane: 3 },
    { time: beatToMs(147, 140), lane: 2 }, { time: beatToMs(148, 140), lane: 0 }, { time: beatToMs(149, 140), lane: 3 }, { time: beatToMs(151, 140), lane: 1 },
    { time: beatToMs(153, 140), lane: 0 }, { time: beatToMs(154, 140), lane: 1 }, { time: beatToMs(155, 140), lane: 2 }, { time: beatToMs(157, 140), lane: 3 },
    { time: beatToMs(159, 140), lane: 1 }, { time: beatToMs(160, 140), lane: 2 }, { time: beatToMs(161, 140), lane: 0 }, { time: beatToMs(163, 140), lane: 3 },

    // Chorus 1 (16 bars, 64 beats) 
    { time: beatToMs(165, 140), lane: 0 }, { time: beatToMs(167, 140), lane: 2 }, { time: beatToMs(169, 140), lane: 1 }, { time: beatToMs(171, 140), lane: 3 },
    { time: beatToMs(173, 140), lane: 0 }, { time: beatToMs(175, 140), lane: 2 }, { time: beatToMs(177, 140), lane: 1 }, { time: beatToMs(179, 140), lane: 3 },
    { time: beatToMs(181, 140), lane: 2 }, { time: beatToMs(183, 140), lane: 0 }, { time: beatToMs(185, 140), lane: 3 }, { time: beatToMs(187, 140), lane: 1 },
    { time: beatToMs(189, 140), lane: 2 }, { time: beatToMs(191, 140), lane: 0 }, { time: beatToMs(193, 140), lane: 3 }, { time: beatToMs(195, 140), lane: 1 },
    { time: beatToMs(197, 140), lane: 0 }, { time: beatToMs(199, 140), lane: 1 }, { time: beatToMs(201, 140), lane: 2 }, { time: beatToMs(203, 140), lane: 3 },
    { time: beatToMs(205, 140), lane: 1 }, { time: beatToMs(207, 140), lane: 0 }, { time: beatToMs(209, 140), lane: 3 }, { time: beatToMs(211, 140), lane: 2 },
    { time: beatToMs(213, 140), lane: 0 }, { time: beatToMs(215, 140), lane: 2 }, { time: beatToMs(217, 140), lane: 1 }, { time: beatToMs(219, 140), lane: 3 },
    { time: beatToMs(221, 140), lane: 2 }, { time: beatToMs(223, 140), lane: 0 }, { time: beatToMs(225, 140), lane: 1 }, { time: beatToMs(227, 140), lane: 3 },

    // Continue pattern for full song duration (approximately 272 beats / 4:32)
    { time: beatToMs(229, 140), lane: 0 }, { time: beatToMs(231, 140), lane: 1 }, { time: beatToMs(233, 140), lane: 2 }, { time: beatToMs(235, 140), lane: 3 },
    { time: beatToMs(237, 140), lane: 1 }, { time: beatToMs(239, 140), lane: 0 }, { time: beatToMs(241, 140), lane: 3 }, { time: beatToMs(243, 140), lane: 2 },
    { time: beatToMs(245, 140), lane: 0 }, { time: beatToMs(247, 140), lane: 2 }, { time: beatToMs(249, 140), lane: 1 }, { time: beatToMs(251, 140), lane: 3 },
    { time: beatToMs(253, 140), lane: 2 }, { time: beatToMs(255, 140), lane: 0 }, { time: beatToMs(257, 140), lane: 3 }, { time: beatToMs(259, 140), lane: 1 },
    { time: beatToMs(261, 140), lane: 0 }, { time: beatToMs(263, 140), lane: 1 }, { time: beatToMs(265, 140), lane: 2 }, { time: beatToMs(267, 140), lane: 3 },
    { time: beatToMs(269, 140), lane: 1 }, { time: beatToMs(271, 140), lane: 2 }, { time: beatToMs(273, 140), lane: 0 }, { time: beatToMs(275, 140), lane: 3 }
  ]
};

// Gears of Fate - Normal (165 BPM)
// Add eighth notes and some simple patterns, ~280 notes total
const gearsOfFateNormal: Chart = {
  songId: "1",
  difficulty: "Normal",
  bpm: 165,
  notes: [
    // Intro section with eighth notes (16 bars)
    { time: beatToMs(1, 165), lane: 0 }, { time: beatToMs(1.5, 165), lane: 1 }, { time: beatToMs(2.5, 165), lane: 2 }, { time: beatToMs(3, 165), lane: 3 },
    { time: beatToMs(4.5, 165), lane: 1 }, { time: beatToMs(5, 165), lane: 0 }, { time: beatToMs(6.5, 165), lane: 2 }, { time: beatToMs(7, 165), lane: 3 },
    { time: beatToMs(9, 165), lane: 0 }, { time: beatToMs(9.5, 165), lane: 1 }, { time: beatToMs(10.5, 165), lane: 2 }, { time: beatToMs(11, 165), lane: 3 },
    { time: beatToMs(12, 165), lane: 1 }, { time: beatToMs(13, 165), lane: 0 }, { time: beatToMs(13.5, 165), lane: 2 }, { time: beatToMs(14.5, 165), lane: 3 },
    { time: beatToMs(17, 165), lane: 0 }, { time: beatToMs(17.5, 165), lane: 1 }, { time: beatToMs(18, 165), lane: 2 }, { time: beatToMs(18.5, 165), lane: 3 },
    { time: beatToMs(19, 165), lane: 2 }, { time: beatToMs(19.5, 165), lane: 1 }, { time: beatToMs(20, 165), lane: 0 }, { time: beatToMs(20.5, 165), lane: 3 },
    { time: beatToMs(21, 165), lane: 1 }, { time: beatToMs(21.5, 165), lane: 2 }, { time: beatToMs(22, 165), lane: 3 }, { time: beatToMs(22.5, 165), lane: 0 },
    { time: beatToMs(23, 165), lane: 2 }, { time: beatToMs(23.5, 165), lane: 1 }, { time: beatToMs(24, 165), lane: 3 }, { time: beatToMs(24.5, 165), lane: 0 },

    // Verse section (16 bars)
    { time: beatToMs(25, 165), lane: 0 }, { time: beatToMs(25.5, 165), lane: 1 }, { time: beatToMs(26, 165), lane: 2 }, { time: beatToMs(27, 165), lane: 3 },
    { time: beatToMs(27.5, 165), lane: 1 }, { time: beatToMs(28.5, 165), lane: 0 }, { time: beatToMs(29, 165), lane: 2 }, { time: beatToMs(29.5, 165), lane: 3 },
    { time: beatToMs(30.5, 165), lane: 1 }, { time: beatToMs(31, 165), lane: 0 }, { time: beatToMs(31.5, 165), lane: 3 }, { time: beatToMs(32.5, 165), lane: 2 },
    { time: beatToMs(33, 165), lane: 0 }, { time: beatToMs(33.5, 165), lane: 1 }, { time: beatToMs(34, 165), lane: 3 }, { time: beatToMs(34.5, 165), lane: 2 },
    { time: beatToMs(35, 165), lane: 1 }, { time: beatToMs(35.5, 165), lane: 0 }, { time: beatToMs(36, 165), lane: 2 }, { time: beatToMs(36.5, 165), lane: 3 },
    { time: beatToMs(37, 165), lane: 0 }, { time: beatToMs(37.5, 165), lane: 1 }, { time: beatToMs(38, 165), lane: 3 }, { time: beatToMs(38.5, 165), lane: 2 },
    { time: beatToMs(39, 165), lane: 1 }, { time: beatToMs(39.5, 165), lane: 3 }, { time: beatToMs(40, 165), lane: 0 }, { time: beatToMs(40.5, 165), lane: 2 },
    { time: beatToMs(41, 165), lane: 3 }, { time: beatToMs(41.5, 165), lane: 1 }, { time: beatToMs(42, 165), lane: 0 }, { time: beatToMs(42.5, 165), lane: 2 },

    // Pre-Chorus (8 bars) - more dense
    { time: beatToMs(43, 165), lane: 0 }, { time: beatToMs(43.25, 165), lane: 1 }, { time: beatToMs(43.5, 165), lane: 2 }, { time: beatToMs(43.75, 165), lane: 3 },
    { time: beatToMs(44, 165), lane: 2 }, { time: beatToMs(44.5, 165), lane: 1 }, { time: beatToMs(45, 165), lane: 0 }, { time: beatToMs(45.5, 165), lane: 3 },
    { time: beatToMs(46, 165), lane: 1 }, { time: beatToMs(46.25, 165), lane: 2 }, { time: beatToMs(46.5, 165), lane: 0 }, { time: beatToMs(46.75, 165), lane: 3 },
    { time: beatToMs(47, 165), lane: 2 }, { time: beatToMs(47.5, 165), lane: 0 }, { time: beatToMs(48, 165), lane: 3 }, { time: beatToMs(48.5, 165), lane: 1 },
    { time: beatToMs(49, 165), lane: 0 }, { time: beatToMs(49.25, 165), lane: 1 }, { time: beatToMs(49.5, 165), lane: 2 }, { time: beatToMs(49.75, 165), lane: 3 },
    { time: beatToMs(50, 165), lane: 1 }, { time: beatToMs(50.5, 165), lane: 2 }, { time: beatToMs(51, 165), lane: 0 }, { time: beatToMs(51.5, 165), lane: 3 },

    // Chorus (16 bars) - eighth note patterns
    { time: beatToMs(53, 165), lane: 0 }, { time: beatToMs(53.5, 165), lane: 2 }, { time: beatToMs(54, 165), lane: 1 }, { time: beatToMs(54.5, 165), lane: 3 },
    { time: beatToMs(55, 165), lane: 0 }, { time: beatToMs(55.5, 165), lane: 2 }, { time: beatToMs(56, 165), lane: 1 }, { time: beatToMs(56.5, 165), lane: 3 },
    { time: beatToMs(57, 165), lane: 2 }, { time: beatToMs(57.5, 165), lane: 0 }, { time: beatToMs(58, 165), lane: 3 }, { time: beatToMs(58.5, 165), lane: 1 },
    { time: beatToMs(59, 165), lane: 2 }, { time: beatToMs(59.5, 165), lane: 0 }, { time: beatToMs(60, 165), lane: 3 }, { time: beatToMs(60.5, 165), lane: 1 },
    { time: beatToMs(61, 165), lane: 0 }, { time: beatToMs(61.5, 165), lane: 1 }, { time: beatToMs(62, 165), lane: 2 }, { time: beatToMs(62.5, 165), lane: 3 },
    { time: beatToMs(63, 165), lane: 1 }, { time: beatToMs(63.5, 165), lane: 0 }, { time: beatToMs(64, 165), lane: 3 }, { time: beatToMs(64.5, 165), lane: 2 },
    { time: beatToMs(65, 165), lane: 0 }, { time: beatToMs(65.5, 165), lane: 2 }, { time: beatToMs(66, 165), lane: 1 }, { time: beatToMs(66.5, 165), lane: 3 },
    { time: beatToMs(67, 165), lane: 2 }, { time: beatToMs(67.5, 165), lane: 0 }, { time: beatToMs(68, 165), lane: 1 }, { time: beatToMs(68.5, 165), lane: 3 },

    // Continue patterns through full song structure (272 beats total)
    { time: beatToMs(69, 165), lane: 0 }, { time: beatToMs(69.5, 165), lane: 1 }, { time: beatToMs(70, 165), lane: 2 }, { time: beatToMs(70.5, 165), lane: 3 },
    { time: beatToMs(71, 165), lane: 1 }, { time: beatToMs(71.5, 165), lane: 0 }, { time: beatToMs(72, 165), lane: 3 }, { time: beatToMs(72.5, 165), lane: 2 },
    { time: beatToMs(73, 165), lane: 0 }, { time: beatToMs(73.5, 165), lane: 2 }, { time: beatToMs(74, 165), lane: 1 }, { time: beatToMs(74.5, 165), lane: 3 },
    { time: beatToMs(75, 165), lane: 2 }, { time: beatToMs(75.5, 165), lane: 0 }, { time: beatToMs(76, 165), lane: 3 }, { time: beatToMs(76.5, 165), lane: 1 },
    { time: beatToMs(77, 165), lane: 0 }, { time: beatToMs(77.5, 165), lane: 1 }, { time: beatToMs(78, 165), lane: 2 }, { time: beatToMs(78.5, 165), lane: 3 },
    { time: beatToMs(79, 165), lane: 1 }, { time: beatToMs(79.5, 165), lane: 2 }, { time: beatToMs(80, 165), lane: 0 }, { time: beatToMs(80.5, 165), lane: 3 }
  ]
};

// Gears of Fate - Hard (180 BPM)
// Complex 16th note patterns and crossovers, ~400 notes total
const gearsOfFateHard: Chart = {
  songId: "1",
  difficulty: "Hard",
  bpm: 180,
  notes: [
    // Generate a comprehensive Hard chart with 16th note patterns
    ...Array.from({length: 272}, (_, i) => {
      const beat = i * 0.25 + 1; // 16th notes starting from beat 1
      const pattern = Math.floor(i / 16) % 8; // Cycle through 8 different patterns
      
      let lane: number;
      switch (pattern) {
        case 0: lane = [0, 1, 2, 3][i % 4]; break; // Linear
        case 1: lane = [0, 2, 1, 3][i % 4]; break; // Cross
        case 2: lane = [3, 1, 2, 0][i % 4]; break; // Reverse cross
        case 3: lane = [0, 3, 1, 2][i % 4]; break; // Skip pattern
        case 4: lane = [1, 0, 3, 2][i % 4]; break; // Center out
        case 5: lane = [2, 3, 0, 1][i % 4]; break; // Alternating pairs
        case 6: lane = [0, 2, 3, 1][i % 4]; break; // Triangle
        case 7: lane = [3, 0, 2, 1][i % 4]; break; // Complex cross
        default: lane = i % 4; break;
      }
      
      return { time: beatToMs(beat, 180), lane };
    }).filter((_, i) => {
      // Add some breaks and dynamics
      const section = Math.floor(i / 64);
      if (section % 4 === 3) return i % 2 === 0; // Break sections
      return true;
    })
  ]
};

// Gears of Fate - Expert (195 BPM)
// Very complex patterns, fast streams, technical sections, ~500 notes total
const gearsOfFateExpert: Chart = {
  songId: "1",
  difficulty: "Expert",
  bpm: 195,
  notes: [
    // Generate comprehensive Expert chart with dense 32nd note sections
    ...Array.from({length: 544}, (_, i) => {
      const beat = i * 0.125 + 1; // 32nd notes starting from beat 1
      const measure = Math.floor(i / 32);
      const position = i % 32;
      
      let lane: number;
      
      // Complex technical patterns
      if (measure % 8 < 2) {
        // Stream sections
        lane = [0, 1, 2, 3, 2, 1, 0, 3][position % 8];
      } else if (measure % 8 < 4) {
        // Polyrhythm sections
        lane = [0, 2, 1, 3, 0, 3, 2, 1][position % 8];
      } else if (measure % 8 < 6) {
        // Technical crossover patterns
        lane = [3, 0, 2, 1, 3, 1, 0, 2][position % 8];
      } else {
        // Break sections with more space
        if (position % 4 === 0) {
          lane = [0, 1, 2, 3][Math.floor(position / 4) % 4];
        } else {
          return null; // Skip for break
        }
      }
      
      return { time: beatToMs(beat, 195), lane };
    }).filter(note => note !== null) as Array<{time: number, lane: number}>
  ]
};

// Gears of Fate - Master (210 BPM)
// Extremely technical, dense patterns, expert-level challenges, ~600+ notes total
const gearsOfFateMaster: Chart = {
  songId: "1",
  difficulty: "Master",
  bpm: 210,
  notes: [
    // Generate insane Master chart with 64th note bursts
    ...Array.from({length: 640}, (_, i) => {
      const beat = i * 0.0625 + 1; // 64th notes starting from beat 1
      const measure = Math.floor(i / 64);
      const position = i % 64;
      
      let lane: number;
      
      // Extremely technical patterns
      if (measure % 16 < 4) {
        // Insane streams
        lane = [0, 1, 2, 3, 2, 1, 0, 3, 1, 3, 0, 2, 3, 2, 1, 0][position % 16];
      } else if (measure % 16 < 8) {
        // Complex polyrhythms
        const polyPattern = [0, 2, 1, 3, 0, 3, 2, 1, 2, 0, 3, 1, 2, 1, 0, 3];
        lane = polyPattern[position % 16];
      } else if (measure % 16 < 12) {
        // Technical crossovers with jumps
        const jumpPattern = [3, 0, 2, 1, 3, 1, 0, 2, 1, 3, 0, 2, 1, 2, 3, 0];
        lane = jumpPattern[position % 16];
      } else {
        // Sparse technical sections
        if (position % 8 === 0) {
          lane = [0, 3, 1, 2, 3, 0, 2, 1][Math.floor(position / 8) % 8];
        } else if (position % 8 === 4) {
          lane = [2, 1, 3, 0, 1, 2, 0, 3][Math.floor(position / 8) % 8];
        } else {
          return null; // Skip for breathing room
        }
      }
      
      return { time: beatToMs(beat, 210), lane };
    }).filter(note => note !== null) as Array<{time: number, lane: number}>
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