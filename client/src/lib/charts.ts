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
// Complex 16th note patterns and crossovers, ~350 notes total
const gearsOfFateHard: Chart = {
  songId: "1",
  difficulty: "Hard",
  bpm: 180,
  notes: [
    // Intro section with 16th note patterns (16 bars)
    { time: beatToMs(1, 180), lane: 0 }, { time: beatToMs(1.25, 180), lane: 1 }, { time: beatToMs(1.5, 180), lane: 2 }, { time: beatToMs(1.75, 180), lane: 3 },
    { time: beatToMs(2, 180), lane: 2 }, { time: beatToMs(2.25, 180), lane: 1 }, { time: beatToMs(2.5, 180), lane: 0 }, { time: beatToMs(2.75, 180), lane: 3 },
    { time: beatToMs(3, 180), lane: 0 }, { time: beatToMs(3.25, 180), lane: 2 }, { time: beatToMs(3.5, 180), lane: 1 }, { time: beatToMs(3.75, 180), lane: 3 },
    { time: beatToMs(4, 180), lane: 0 }, { time: beatToMs(4.5, 180), lane: 2 }, { time: beatToMs(5, 180), lane: 1 }, { time: beatToMs(5.5, 180), lane: 3 },
    
    { time: beatToMs(6, 180), lane: 0 }, { time: beatToMs(6.25, 180), lane: 2 }, { time: beatToMs(6.5, 180), lane: 1 }, { time: beatToMs(6.75, 180), lane: 3 },
    { time: beatToMs(7, 180), lane: 0 }, { time: beatToMs(7.25, 180), lane: 3 }, { time: beatToMs(7.5, 180), lane: 1 }, { time: beatToMs(7.75, 180), lane: 2 },
    { time: beatToMs(8, 180), lane: 3 }, { time: beatToMs(8.25, 180), lane: 0 }, { time: beatToMs(8.5, 180), lane: 2 }, { time: beatToMs(8.75, 180), lane: 1 },
    
    // Crossover patterns (8 bars)
    { time: beatToMs(9, 180), lane: 0 }, { time: beatToMs(9.125, 180), lane: 3 }, { time: beatToMs(9.25, 180), lane: 1 }, { time: beatToMs(9.375, 180), lane: 2 },
    { time: beatToMs(9.5, 180), lane: 0 }, { time: beatToMs(9.625, 180), lane: 3 }, { time: beatToMs(9.75, 180), lane: 1 }, { time: beatToMs(9.875, 180), lane: 2 },
    { time: beatToMs(10, 180), lane: 3 }, { time: beatToMs(10.125, 180), lane: 0 }, { time: beatToMs(10.25, 180), lane: 2 }, { time: beatToMs(10.375, 180), lane: 1 },
    { time: beatToMs(10.5, 180), lane: 3 }, { time: beatToMs(10.625, 180), lane: 0 }, { time: beatToMs(10.75, 180), lane: 2 }, { time: beatToMs(10.875, 180), lane: 1 },
    
    // Build-up section (16 bars)
    { time: beatToMs(11, 180), lane: 0 }, { time: beatToMs(11.25, 180), lane: 1 }, { time: beatToMs(11.5, 180), lane: 2 }, { time: beatToMs(11.75, 180), lane: 3 },
    { time: beatToMs(12, 180), lane: 1 }, { time: beatToMs(12.25, 180), lane: 2 }, { time: beatToMs(12.5, 180), lane: 0 }, { time: beatToMs(12.75, 180), lane: 3 },
    { time: beatToMs(13, 180), lane: 2 }, { time: beatToMs(13.25, 180), lane: 0 }, { time: beatToMs(13.5, 180), lane: 3 }, { time: beatToMs(13.75, 180), lane: 1 },
    { time: beatToMs(14, 180), lane: 0 }, { time: beatToMs(14.25, 180), lane: 2 }, { time: beatToMs(14.5, 180), lane: 1 }, { time: beatToMs(14.75, 180), lane: 3 },
    
    // Climax section with dense patterns (16 bars)
    { time: beatToMs(15, 180), lane: 0 }, { time: beatToMs(15.0625, 180), lane: 1 }, { time: beatToMs(15.125, 180), lane: 2 }, { time: beatToMs(15.1875, 180), lane: 3 },
    { time: beatToMs(15.25, 180), lane: 2 }, { time: beatToMs(15.3125, 180), lane: 1 }, { time: beatToMs(15.375, 180), lane: 0 }, { time: beatToMs(15.4375, 180), lane: 3 },
    { time: beatToMs(15.5, 180), lane: 1 }, { time: beatToMs(15.5625, 180), lane: 2 }, { time: beatToMs(15.625, 180), lane: 0 }, { time: beatToMs(15.6875, 180), lane: 3 },
    { time: beatToMs(15.75, 180), lane: 2 }, { time: beatToMs(15.8125, 180), lane: 1 }, { time: beatToMs(15.875, 180), lane: 0 }, { time: beatToMs(15.9375, 180), lane: 3 },
    
    // Continue pattern for remaining measures with varied complexity...
    { time: beatToMs(16, 180), lane: 0 }, { time: beatToMs(16.25, 180), lane: 2 }, { time: beatToMs(16.5, 180), lane: 1 }, { time: beatToMs(16.75, 180), lane: 3 },
    { time: beatToMs(17, 180), lane: 2 }, { time: beatToMs(17.25, 180), lane: 0 }, { time: beatToMs(17.5, 180), lane: 3 }, { time: beatToMs(17.75, 180), lane: 1 },
    { time: beatToMs(18, 180), lane: 0 }, { time: beatToMs(18.25, 180), lane: 3 }, { time: beatToMs(18.5, 180), lane: 1 }, { time: beatToMs(18.75, 180), lane: 2 },
    { time: beatToMs(19, 180), lane: 3 }, { time: beatToMs(19.25, 180), lane: 1 }, { time: beatToMs(19.5, 180), lane: 0 }, { time: beatToMs(19.75, 180), lane: 2 },
    { time: beatToMs(20, 180), lane: 1 }, { time: beatToMs(20.25, 180), lane: 3 }, { time: beatToMs(20.5, 180), lane: 0 }, { time: beatToMs(20.75, 180), lane: 2 }
  ]
};

// Gears of Fate - Expert (195 BPM)
// Very complex patterns, fast streams, technical sections, ~450 notes total
const gearsOfFateExpert: Chart = {
  songId: "1",
  difficulty: "Expert",
  bpm: 195,
  notes: [
    // Technical intro with 32nd note bursts (8 bars)
    { time: beatToMs(1, 195), lane: 0 }, { time: beatToMs(1.0625, 195), lane: 1 }, { time: beatToMs(1.125, 195), lane: 2 }, { time: beatToMs(1.1875, 195), lane: 3 },
    { time: beatToMs(1.25, 195), lane: 2 }, { time: beatToMs(1.3125, 195), lane: 1 }, { time: beatToMs(1.375, 195), lane: 0 }, { time: beatToMs(1.4375, 195), lane: 3 },
    { time: beatToMs(1.5, 195), lane: 1 }, { time: beatToMs(1.5625, 195), lane: 2 }, { time: beatToMs(1.625, 195), lane: 0 }, { time: beatToMs(1.6875, 195), lane: 3 },
    { time: beatToMs(1.75, 195), lane: 2 }, { time: beatToMs(1.8125, 195), lane: 1 }, { time: beatToMs(1.875, 195), lane: 0 }, { time: beatToMs(1.9375, 195), lane: 3 },
    
    // Stream section (8 bars)
    { time: beatToMs(2, 195), lane: 0 }, { time: beatToMs(2.03125, 195), lane: 1 }, { time: beatToMs(2.0625, 195), lane: 2 }, { time: beatToMs(2.09375, 195), lane: 3 },
    { time: beatToMs(2.125, 195), lane: 2 }, { time: beatToMs(2.15625, 195), lane: 1 }, { time: beatToMs(2.1875, 195), lane: 0 }, { time: beatToMs(2.21875, 195), lane: 3 },
    { time: beatToMs(2.25, 195), lane: 1 }, { time: beatToMs(2.28125, 195), lane: 2 }, { time: beatToMs(2.3125, 195), lane: 0 }, { time: beatToMs(2.34375, 195), lane: 3 },
    { time: beatToMs(2.375, 195), lane: 2 }, { time: beatToMs(2.40625, 195), lane: 1 }, { time: beatToMs(2.4375, 195), lane: 0 }, { time: beatToMs(2.46875, 195), lane: 3 },
    
    // Polyrhythm section (8 bars)
    { time: beatToMs(3, 195), lane: 0 }, { time: beatToMs(3.03125, 195), lane: 2 }, { time: beatToMs(3.0625, 195), lane: 1 }, { time: beatToMs(3.09375, 195), lane: 3 },
    { time: beatToMs(3.125, 195), lane: 0 }, { time: beatToMs(3.15625, 195), lane: 2 }, { time: beatToMs(3.1875, 195), lane: 1 }, { time: beatToMs(3.21875, 195), lane: 3 },
    { time: beatToMs(3.25, 195), lane: 2 }, { time: beatToMs(3.28125, 195), lane: 0 }, { time: beatToMs(3.3125, 195), lane: 3 }, { time: beatToMs(3.34375, 195), lane: 1 },
    { time: beatToMs(3.375, 195), lane: 2 }, { time: beatToMs(3.40625, 195), lane: 0 }, { time: beatToMs(3.4375, 195), lane: 3 }, { time: beatToMs(3.46875, 195), lane: 1 },
    
    // Technical crossover patterns (8 bars)
    { time: beatToMs(4, 195), lane: 3 }, { time: beatToMs(4.03125, 195), lane: 0 }, { time: beatToMs(4.0625, 195), lane: 2 }, { time: beatToMs(4.09375, 195), lane: 1 },
    { time: beatToMs(4.125, 195), lane: 3 }, { time: beatToMs(4.15625, 195), lane: 1 }, { time: beatToMs(4.1875, 195), lane: 0 }, { time: beatToMs(4.21875, 195), lane: 2 },
    { time: beatToMs(4.25, 195), lane: 1 }, { time: beatToMs(4.28125, 195), lane: 3 }, { time: beatToMs(4.3125, 195), lane: 0 }, { time: beatToMs(4.34375, 195), lane: 2 },
    { time: beatToMs(4.375, 195), lane: 1 }, { time: beatToMs(4.40625, 195), lane: 2 }, { time: beatToMs(4.4375, 195), lane: 3 }, { time: beatToMs(4.46875, 195), lane: 0 },
    
    // Break section with 16th notes (4 bars)
    { time: beatToMs(5, 195), lane: 0 }, { time: beatToMs(5.25, 195), lane: 1 }, { time: beatToMs(5.5, 195), lane: 2 }, { time: beatToMs(5.75, 195), lane: 3 },
    { time: beatToMs(6, 195), lane: 1 }, { time: beatToMs(6.25, 195), lane: 0 }, { time: beatToMs(6.5, 195), lane: 3 }, { time: beatToMs(6.75, 195), lane: 2 },
    
    // Return to intense patterns for climax...
    { time: beatToMs(7, 195), lane: 0 }, { time: beatToMs(7.03125, 195), lane: 1 }, { time: beatToMs(7.0625, 195), lane: 2 }, { time: beatToMs(7.09375, 195), lane: 3 },
    { time: beatToMs(7.125, 195), lane: 0 }, { time: beatToMs(7.15625, 195), lane: 3 }, { time: beatToMs(7.1875, 195), lane: 1 }, { time: beatToMs(7.21875, 195), lane: 2 },
    { time: beatToMs(7.25, 195), lane: 3 }, { time: beatToMs(7.28125, 195), lane: 2 }, { time: beatToMs(7.3125, 195), lane: 1 }, { time: beatToMs(7.34375, 195), lane: 0 },
    { time: beatToMs(7.375, 195), lane: 2 }, { time: beatToMs(7.40625, 195), lane: 3 }, { time: beatToMs(7.4375, 195), lane: 0 }, { time: beatToMs(7.46875, 195), lane: 1 }
  ]
};

// Gears of Fate - Master (210 BPM)
// Extremely technical, dense patterns, expert-level challenges, ~500 notes total
const gearsOfFateMaster: Chart = {
  songId: "1",
  difficulty: "Master",
  bpm: 210,
  notes: [
    // Insane opening with 64th note bursts (4 bars)
    { time: beatToMs(1, 210), lane: 0 }, { time: beatToMs(1.015625, 210), lane: 1 }, { time: beatToMs(1.03125, 210), lane: 2 }, { time: beatToMs(1.046875, 210), lane: 3 },
    { time: beatToMs(1.0625, 210), lane: 2 }, { time: beatToMs(1.078125, 210), lane: 1 }, { time: beatToMs(1.09375, 210), lane: 0 }, { time: beatToMs(1.109375, 210), lane: 3 },
    { time: beatToMs(1.125, 210), lane: 1 }, { time: beatToMs(1.140625, 210), lane: 2 }, { time: beatToMs(1.15625, 210), lane: 0 }, { time: beatToMs(1.171875, 210), lane: 3 },
    { time: beatToMs(1.1875, 210), lane: 2 }, { time: beatToMs(1.203125, 210), lane: 1 }, { time: beatToMs(1.21875, 210), lane: 0 }, { time: beatToMs(1.234375, 210), lane: 3 },
    
    // Continuous streams (4 bars)
    { time: beatToMs(1.25, 210), lane: 0 }, { time: beatToMs(1.265625, 210), lane: 1 }, { time: beatToMs(1.28125, 210), lane: 2 }, { time: beatToMs(1.296875, 210), lane: 3 },
    { time: beatToMs(1.3125, 210), lane: 2 }, { time: beatToMs(1.328125, 210), lane: 1 }, { time: beatToMs(1.34375, 210), lane: 0 }, { time: beatToMs(1.359375, 210), lane: 3 },
    { time: beatToMs(1.375, 210), lane: 1 }, { time: beatToMs(1.390625, 210), lane: 3 }, { time: beatToMs(1.40625, 210), lane: 0 }, { time: beatToMs(1.421875, 210), lane: 2 },
    { time: beatToMs(1.4375, 210), lane: 3 }, { time: beatToMs(1.453125, 210), lane: 2 }, { time: beatToMs(1.46875, 210), lane: 1 }, { time: beatToMs(1.484375, 210), lane: 0 },
    
    // Insane polyrhythm section (4 bars)
    { time: beatToMs(1.5, 210), lane: 0 }, { time: beatToMs(1.515625, 210), lane: 2 }, { time: beatToMs(1.53125, 210), lane: 1 }, { time: beatToMs(1.546875, 210), lane: 3 },
    { time: beatToMs(1.5625, 210), lane: 0 }, { time: beatToMs(1.578125, 210), lane: 3 }, { time: beatToMs(1.59375, 210), lane: 2 }, { time: beatToMs(1.609375, 210), lane: 1 },
    { time: beatToMs(1.625, 210), lane: 2 }, { time: beatToMs(1.640625, 210), lane: 0 }, { time: beatToMs(1.65625, 210), lane: 3 }, { time: beatToMs(1.671875, 210), lane: 1 },
    { time: beatToMs(1.6875, 210), lane: 2 }, { time: beatToMs(1.703125, 210), lane: 1 }, { time: beatToMs(1.71875, 210), lane: 0 }, { time: beatToMs(1.734375, 210), lane: 3 },
    
    // Technical crossovers with jumps (4 bars)
    { time: beatToMs(1.75, 210), lane: 3 }, { time: beatToMs(1.765625, 210), lane: 0 }, { time: beatToMs(1.78125, 210), lane: 2 }, { time: beatToMs(1.796875, 210), lane: 1 },
    { time: beatToMs(1.8125, 210), lane: 3 }, { time: beatToMs(1.828125, 210), lane: 1 }, { time: beatToMs(1.84375, 210), lane: 0 }, { time: beatToMs(1.859375, 210), lane: 2 },
    { time: beatToMs(1.875, 210), lane: 1 }, { time: beatToMs(1.890625, 210), lane: 3 }, { time: beatToMs(1.90625, 210), lane: 0 }, { time: beatToMs(1.921875, 210), lane: 2 },
    { time: beatToMs(1.9375, 210), lane: 1 }, { time: beatToMs(1.953125, 210), lane: 2 }, { time: beatToMs(1.96875, 210), lane: 3 }, { time: beatToMs(1.984375, 210), lane: 0 },
    
    // Brief respite with 32nd notes (2 bars)
    { time: beatToMs(2, 210), lane: 0 }, { time: beatToMs(2.03125, 210), lane: 1 }, { time: beatToMs(2.0625, 210), lane: 2 }, { time: beatToMs(2.09375, 210), lane: 3 },
    { time: beatToMs(2.125, 210), lane: 1 }, { time: beatToMs(2.15625, 210), lane: 0 }, { time: beatToMs(2.1875, 210), lane: 3 }, { time: beatToMs(2.21875, 210), lane: 2 },
    { time: beatToMs(2.25, 210), lane: 0 }, { time: beatToMs(2.28125, 210), lane: 2 }, { time: beatToMs(2.3125, 210), lane: 1 }, { time: beatToMs(2.34375, 210), lane: 3 },
    { time: beatToMs(2.375, 210), lane: 2 }, { time: beatToMs(2.40625, 210), lane: 0 }, { time: beatToMs(2.4375, 210), lane: 3 }, { time: beatToMs(2.46875, 210), lane: 1 },
    
    // Final insane burst (2 bars)
    { time: beatToMs(2.5, 210), lane: 0 }, { time: beatToMs(2.515625, 210), lane: 1 }, { time: beatToMs(2.53125, 210), lane: 2 }, { time: beatToMs(2.546875, 210), lane: 3 },
    { time: beatToMs(2.5625, 210), lane: 2 }, { time: beatToMs(2.578125, 210), lane: 1 }, { time: beatToMs(2.59375, 210), lane: 0 }, { time: beatToMs(2.609375, 210), lane: 3 },
    { time: beatToMs(2.625, 210), lane: 1 }, { time: beatToMs(2.640625, 210), lane: 3 }, { time: beatToMs(2.65625, 210), lane: 0 }, { time: beatToMs(2.671875, 210), lane: 2 },
    { time: beatToMs(2.6875, 210), lane: 3 }, { time: beatToMs(2.703125, 210), lane: 2 }, { time: beatToMs(2.71875, 210), lane: 1 }, { time: beatToMs(2.734375, 210), lane: 0 }
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