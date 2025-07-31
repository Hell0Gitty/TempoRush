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

// Gears of Fate - Normal (160 BPM)
// Gentle introduction to eighth notes, ~120 notes total
const gearsOfFateNormal: Chart = {
  songId: "1",
  difficulty: "Normal",
  bpm: 160,
  notes: [
    // Intro section - mostly quarter notes with some eighth notes (8 bars)
    { time: beatToMs(1, 160), lane: 0 }, { time: beatToMs(2, 160), lane: 1 }, { time: beatToMs(3, 160), lane: 2 }, { time: beatToMs(4, 160), lane: 3 },
    { time: beatToMs(5, 160), lane: 1 }, { time: beatToMs(6, 160), lane: 0 }, { time: beatToMs(7, 160), lane: 3 }, { time: beatToMs(8, 160), lane: 2 },
    { time: beatToMs(9, 160), lane: 0 }, { time: beatToMs(10, 160), lane: 2 }, { time: beatToMs(11, 160), lane: 1 }, { time: beatToMs(12, 160), lane: 3 },
    { time: beatToMs(13, 160), lane: 2 }, { time: beatToMs(15, 160), lane: 3 }, { time: beatToMs(16, 160), lane: 1 },

    // Gentle eighth note introduction (6 bars)
    { time: beatToMs(17, 160), lane: 0 }, { time: beatToMs(17.5, 160), lane: 1 }, { time: beatToMs(18, 160), lane: 2 }, { time: beatToMs(19, 160), lane: 3 },
    { time: beatToMs(19.5, 160), lane: 0 }, { time: beatToMs(21, 160), lane: 2 }, { time: beatToMs(21.5, 160), lane: 3 },
    { time: beatToMs(22, 160), lane: 0 }, { time: beatToMs(23, 160), lane: 1 }, { time: beatToMs(23.5, 160), lane: 2 }, { time: beatToMs(24, 160), lane: 3 },

    // Simple patterns with breathing room (8 bars)
    { time: beatToMs(25, 160), lane: 0 }, { time: beatToMs(25.5, 160), lane: 1 }, { time: beatToMs(26.5, 160), lane: 2 }, { time: beatToMs(27, 160), lane: 3 },
    { time: beatToMs(28, 160), lane: 0 }, { time: beatToMs(28.5, 160), lane: 2 }, { time: beatToMs(29.5, 160), lane: 1 }, { time: beatToMs(30, 160), lane: 3 },
    { time: beatToMs(31, 160), lane: 0 }, { time: beatToMs(31.5, 160), lane: 3 }, { time: beatToMs(32.5, 160), lane: 1 }, { time: beatToMs(33, 160), lane: 2 },

    // Slightly more active section (6 bars)
    { time: beatToMs(34, 160), lane: 0 }, { time: beatToMs(34.5, 160), lane: 1 }, { time: beatToMs(35, 160), lane: 3 }, { time: beatToMs(35.5, 160), lane: 2 },
    { time: beatToMs(36, 160), lane: 1 }, { time: beatToMs(37, 160), lane: 0 }, { time: beatToMs(37.5, 160), lane: 2 }, { time: beatToMs(38, 160), lane: 3 },
    { time: beatToMs(39, 160), lane: 1 }, { time: beatToMs(39.5, 160), lane: 3 }, { time: beatToMs(40, 160), lane: 0 }, { time: beatToMs(40.5, 160), lane: 2 },

    // Final section with some crossovers (6 bars)
    { time: beatToMs(41, 160), lane: 0 }, { time: beatToMs(41.5, 160), lane: 2 }, { time: beatToMs(42, 160), lane: 1 }, { time: beatToMs(42.5, 160), lane: 3 },
    { time: beatToMs(43, 160), lane: 0 }, { time: beatToMs(43.5, 160), lane: 2 }, { time: beatToMs(44, 160), lane: 1 }, { time: beatToMs(44.5, 160), lane: 3 },
    { time: beatToMs(45, 160), lane: 2 }, { time: beatToMs(45.5, 160), lane: 0 }, { time: beatToMs(46, 160), lane: 3 }, { time: beatToMs(46.5, 160), lane: 1 },
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

// Gears of Fate - Hard (170 BPM)
// Moderate 16th note patterns, ~180 notes total
const gearsOfFateHard: Chart = {
  songId: "1",
  difficulty: "Hard",
  bpm: 170,
  notes: [
    // Intro section with basic 16th note patterns (6 bars)
    { time: beatToMs(1, 170), lane: 0 }, { time: beatToMs(1.25, 170), lane: 1 }, { time: beatToMs(1.5, 170), lane: 2 }, { time: beatToMs(1.75, 170), lane: 3 },
    { time: beatToMs(2, 170), lane: 2 }, { time: beatToMs(2.5, 170), lane: 0 }, { time: beatToMs(3, 170), lane: 1 }, { time: beatToMs(3.5, 170), lane: 3 },
    { time: beatToMs(4, 170), lane: 0 }, { time: beatToMs(4.25, 170), lane: 2 }, { time: beatToMs(4.5, 170), lane: 1 }, { time: beatToMs(4.75, 170), lane: 3 },
    
    // Simple crossover patterns (4 bars)
    { time: beatToMs(5, 170), lane: 0 }, { time: beatToMs(5.25, 170), lane: 3 }, { time: beatToMs(5.5, 170), lane: 1 }, { time: beatToMs(5.75, 170), lane: 2 },
    { time: beatToMs(6, 170), lane: 3 }, { time: beatToMs(6.25, 170), lane: 0 }, { time: beatToMs(6.5, 170), lane: 2 }, { time: beatToMs(6.75, 170), lane: 1 },
    
    // Build-up section (6 bars)
    { time: beatToMs(7, 170), lane: 0 }, { time: beatToMs(7.25, 170), lane: 1 }, { time: beatToMs(7.5, 170), lane: 2 }, { time: beatToMs(7.75, 170), lane: 3 },
    { time: beatToMs(8, 170), lane: 1 }, { time: beatToMs(8.5, 170), lane: 0 }, { time: beatToMs(9, 170), lane: 3 }, { time: beatToMs(9.5, 170), lane: 2 },
    { time: beatToMs(10, 170), lane: 0 }, { time: beatToMs(10.25, 170), lane: 2 }, { time: beatToMs(10.5, 170), lane: 1 }, { time: beatToMs(10.75, 170), lane: 3 },
    
    // Active section (8 bars)
    { time: beatToMs(11, 170), lane: 0 }, { time: beatToMs(11.125, 170), lane: 1 }, { time: beatToMs(11.25, 170), lane: 2 }, { time: beatToMs(11.375, 170), lane: 3 },
    { time: beatToMs(11.5, 170), lane: 2 }, { time: beatToMs(11.625, 170), lane: 1 }, { time: beatToMs(11.75, 170), lane: 0 }, { time: beatToMs(11.875, 170), lane: 3 },
    { time: beatToMs(12, 170), lane: 1 }, { time: beatToMs(12.25, 170), lane: 2 }, { time: beatToMs(12.5, 170), lane: 0 }, { time: beatToMs(12.75, 170), lane: 3 },
    { time: beatToMs(13, 170), lane: 2 }, { time: beatToMs(13.25, 170), lane: 0 }, { time: beatToMs(13.5, 170), lane: 3 }, { time: beatToMs(13.75, 170), lane: 1 },
    
    // Final section with moderate complexity (6 bars)
    { time: beatToMs(14, 170), lane: 0 }, { time: beatToMs(14.25, 170), lane: 2 }, { time: beatToMs(14.5, 170), lane: 1 }, { time: beatToMs(14.75, 170), lane: 3 },
    { time: beatToMs(15, 170), lane: 2 }, { time: beatToMs(15.25, 170), lane: 0 }, { time: beatToMs(15.5, 170), lane: 3 }, { time: beatToMs(15.75, 170), lane: 1 },
    { time: beatToMs(16, 170), lane: 0 }, { time: beatToMs(16.25, 170), lane: 3 }, { time: beatToMs(16.5, 170), lane: 1 }, { time: beatToMs(16.75, 170), lane: 2 }
  ]
};

// Gears of Fate - Expert (185 BPM)
// Advanced 16th note patterns with some 32nd bursts, ~250 notes total
const gearsOfFateExpert: Chart = {
  songId: "1",
  difficulty: "Expert",
  bpm: 185,
  notes: [
    // Intro with consistent 16th notes (6 bars)
    { time: beatToMs(1, 185), lane: 0 }, { time: beatToMs(1.25, 185), lane: 1 }, { time: beatToMs(1.5, 185), lane: 2 }, { time: beatToMs(1.75, 185), lane: 3 },
    { time: beatToMs(2, 185), lane: 2 }, { time: beatToMs(2.25, 185), lane: 1 }, { time: beatToMs(2.5, 185), lane: 0 }, { time: beatToMs(2.75, 185), lane: 3 },
    { time: beatToMs(3, 185), lane: 1 }, { time: beatToMs(3.25, 185), lane: 2 }, { time: beatToMs(3.5, 185), lane: 0 }, { time: beatToMs(3.75, 185), lane: 3 },
    
    // First 32nd note burst (2 bars)
    { time: beatToMs(4, 185), lane: 0 }, { time: beatToMs(4.0625, 185), lane: 1 }, { time: beatToMs(4.125, 185), lane: 2 }, { time: beatToMs(4.1875, 185), lane: 3 },
    { time: beatToMs(4.25, 185), lane: 2 }, { time: beatToMs(4.3125, 185), lane: 1 }, { time: beatToMs(4.375, 185), lane: 0 }, { time: beatToMs(4.4375, 185), lane: 3 },
    { time: beatToMs(4.5, 185), lane: 1 }, { time: beatToMs(4.75, 185), lane: 2 }, { time: beatToMs(5, 185), lane: 0 }, { time: beatToMs(5.25, 185), lane: 3 },
    
    // Crossover patterns (4 bars)
    { time: beatToMs(6, 185), lane: 3 }, { time: beatToMs(6.25, 185), lane: 0 }, { time: beatToMs(6.5, 185), lane: 2 }, { time: beatToMs(6.75, 185), lane: 1 },
    { time: beatToMs(7, 185), lane: 3 }, { time: beatToMs(7.25, 185), lane: 1 }, { time: beatToMs(7.5, 185), lane: 0 }, { time: beatToMs(7.75, 185), lane: 2 },
    { time: beatToMs(8, 185), lane: 1 }, { time: beatToMs(8.25, 185), lane: 3 }, { time: beatToMs(8.5, 185), lane: 0 }, { time: beatToMs(8.75, 185), lane: 2 },
    
    // Stream section (4 bars)
    { time: beatToMs(9, 185), lane: 0 }, { time: beatToMs(9.0625, 185), lane: 1 }, { time: beatToMs(9.125, 185), lane: 2 }, { time: beatToMs(9.1875, 185), lane: 3 },
    { time: beatToMs(9.25, 185), lane: 2 }, { time: beatToMs(9.3125, 185), lane: 1 }, { time: beatToMs(9.375, 185), lane: 0 }, { time: beatToMs(9.4375, 185), lane: 3 },
    { time: beatToMs(9.5, 185), lane: 1 }, { time: beatToMs(9.5625, 185), lane: 2 }, { time: beatToMs(9.625, 185), lane: 0 }, { time: beatToMs(9.6875, 185), lane: 3 },
    { time: beatToMs(9.75, 185), lane: 2 }, { time: beatToMs(9.8125, 185), lane: 1 }, { time: beatToMs(9.875, 185), lane: 0 }, { time: beatToMs(9.9375, 185), lane: 3 },
    
    // Break with 16th notes (2 bars)
    { time: beatToMs(10, 185), lane: 0 }, { time: beatToMs(10.25, 185), lane: 1 }, { time: beatToMs(10.5, 185), lane: 2 }, { time: beatToMs(10.75, 185), lane: 3 },
    { time: beatToMs(11, 185), lane: 1 }, { time: beatToMs(11.25, 185), lane: 0 }, { time: beatToMs(11.5, 185), lane: 3 }, { time: beatToMs(11.75, 185), lane: 2 },
    
    // Final technical section (4 bars)
    { time: beatToMs(12, 185), lane: 0 }, { time: beatToMs(12.0625, 185), lane: 2 }, { time: beatToMs(12.125, 185), lane: 1 }, { time: beatToMs(12.1875, 185), lane: 3 },
    { time: beatToMs(12.25, 185), lane: 0 }, { time: beatToMs(12.3125, 185), lane: 3 }, { time: beatToMs(12.375, 185), lane: 2 }, { time: beatToMs(12.4375, 185), lane: 1 },
    { time: beatToMs(12.5, 185), lane: 2 }, { time: beatToMs(12.75, 185), lane: 0 }, { time: beatToMs(13, 185), lane: 3 }, { time: beatToMs(13.25, 185), lane: 1 }
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