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
// Well-spaced 16th note patterns with clear rhythm, ~80 notes total
const gearsOfFateHard: Chart = {
  songId: "1",
  difficulty: "Hard",
  bpm: 170,
  notes: [
    // Intro - spaced quarter and eighth notes (16 bars)
    { time: beatToMs(4, 170), lane: 0 }, { time: beatToMs(6, 170), lane: 1 }, { time: beatToMs(8, 170), lane: 2 }, { time: beatToMs(10, 170), lane: 3 },
    { time: beatToMs(12, 170), lane: 1 }, { time: beatToMs(14, 170), lane: 0 }, { time: beatToMs(16, 170), lane: 3 }, { time: beatToMs(18, 170), lane: 2 },
    
    // Verse 1 - introduce eighth notes (16 bars)
    { time: beatToMs(20, 170), lane: 0 }, { time: beatToMs(20.5, 170), lane: 1 }, { time: beatToMs(22, 170), lane: 2 }, { time: beatToMs(23, 170), lane: 3 },
    { time: beatToMs(24, 170), lane: 1 }, { time: beatToMs(24.5, 170), lane: 0 }, { time: beatToMs(26, 170), lane: 3 }, { time: beatToMs(27, 170), lane: 2 },
    { time: beatToMs(28, 170), lane: 0 }, { time: beatToMs(29, 170), lane: 2 }, { time: beatToMs(30, 170), lane: 1 }, { time: beatToMs(30.5, 170), lane: 3 },
    { time: beatToMs(32, 170), lane: 2 }, { time: beatToMs(33, 170), lane: 0 }, { time: beatToMs(34, 170), lane: 3 }, { time: beatToMs(35, 170), lane: 1 },
    
    // Pre-Chorus - add some 16th notes (8 bars)
    { time: beatToMs(36, 170), lane: 0 }, { time: beatToMs(36.25, 170), lane: 1 }, { time: beatToMs(36.5, 170), lane: 2 }, { time: beatToMs(37, 170), lane: 3 },
    { time: beatToMs(38, 170), lane: 1 }, { time: beatToMs(38.5, 170), lane: 0 }, { time: beatToMs(39, 170), lane: 3 }, { time: beatToMs(39.5, 170), lane: 2 },
    { time: beatToMs(40, 170), lane: 0 }, { time: beatToMs(40.25, 170), lane: 2 }, { time: beatToMs(40.75, 170), lane: 1 }, { time: beatToMs(41, 170), lane: 3 },
    { time: beatToMs(42, 170), lane: 2 }, { time: beatToMs(42.5, 170), lane: 0 }, { time: beatToMs(43, 170), lane: 3 }, { time: beatToMs(43.5, 170), lane: 1 },
    
    // Chorus - steady 16th note patterns (16 bars)
    { time: beatToMs(44, 170), lane: 0 }, { time: beatToMs(44.25, 170), lane: 1 }, { time: beatToMs(44.5, 170), lane: 2 }, { time: beatToMs(44.75, 170), lane: 3 },
    { time: beatToMs(45, 170), lane: 2 }, { time: beatToMs(45.5, 170), lane: 0 }, { time: beatToMs(46, 170), lane: 1 }, { time: beatToMs(46.5, 170), lane: 3 },
    { time: beatToMs(47, 170), lane: 0 }, { time: beatToMs(47.25, 170), lane: 3 }, { time: beatToMs(47.5, 170), lane: 1 }, { time: beatToMs(47.75, 170), lane: 2 },
    { time: beatToMs(48, 170), lane: 3 }, { time: beatToMs(48.5, 170), lane: 1 }, { time: beatToMs(49, 170), lane: 0 }, { time: beatToMs(49.5, 170), lane: 2 },
    
    { time: beatToMs(50, 170), lane: 0 }, { time: beatToMs(50.25, 170), lane: 2 }, { time: beatToMs(50.75, 170), lane: 1 }, { time: beatToMs(51, 170), lane: 3 },
    { time: beatToMs(52, 170), lane: 2 }, { time: beatToMs(52.5, 170), lane: 0 }, { time: beatToMs(53, 170), lane: 3 }, { time: beatToMs(53.5, 170), lane: 1 },
    { time: beatToMs(54, 170), lane: 0 }, { time: beatToMs(54.25, 170), lane: 1 }, { time: beatToMs(54.75, 170), lane: 2 }, { time: beatToMs(55, 170), lane: 3 },
    { time: beatToMs(56, 170), lane: 1 }, { time: beatToMs(56.5, 170), lane: 2 }, { time: beatToMs(57, 170), lane: 0 }, { time: beatToMs(57.5, 170), lane: 3 },
    
    // Final section with moderate complexity (6 bars)
    { time: beatToMs(14, 170), lane: 0 }, { time: beatToMs(14.25, 170), lane: 2 }, { time: beatToMs(14.5, 170), lane: 1 }, { time: beatToMs(14.75, 170), lane: 3 },
    { time: beatToMs(15, 170), lane: 2 }, { time: beatToMs(15.25, 170), lane: 0 }, { time: beatToMs(15.5, 170), lane: 3 }, { time: beatToMs(15.75, 170), lane: 1 },
    { time: beatToMs(16, 170), lane: 0 }, { time: beatToMs(16.25, 170), lane: 3 }, { time: beatToMs(16.5, 170), lane: 1 }, { time: beatToMs(16.75, 170), lane: 2 },

    // Bridge section (16 bars)
    { time: beatToMs(58, 170), lane: 0 }, { time: beatToMs(59, 170), lane: 2 }, { time: beatToMs(60, 170), lane: 1 }, { time: beatToMs(61, 170), lane: 3 },
    { time: beatToMs(62, 170), lane: 2 }, { time: beatToMs(63, 170), lane: 0 }, { time: beatToMs(64, 170), lane: 3 }, { time: beatToMs(65, 170), lane: 1 },
    { time: beatToMs(66, 170), lane: 0 }, { time: beatToMs(67, 170), lane: 2 }, { time: beatToMs(68, 170), lane: 1 }, { time: beatToMs(69, 170), lane: 3 },
    { time: beatToMs(70, 170), lane: 2 }, { time: beatToMs(71, 170), lane: 0 }, { time: beatToMs(72, 170), lane: 3 }, { time: beatToMs(73, 170), lane: 1 },
    
    // Verse 2 (32 bars)
    { time: beatToMs(74, 170), lane: 0 }, { time: beatToMs(74.5, 170), lane: 1 }, { time: beatToMs(76, 170), lane: 2 }, { time: beatToMs(77, 170), lane: 3 },
    { time: beatToMs(78, 170), lane: 1 }, { time: beatToMs(78.5, 170), lane: 0 }, { time: beatToMs(80, 170), lane: 3 }, { time: beatToMs(81, 170), lane: 2 },
    { time: beatToMs(82, 170), lane: 0 }, { time: beatToMs(83, 170), lane: 2 }, { time: beatToMs(84, 170), lane: 1 }, { time: beatToMs(84.5, 170), lane: 3 },
    { time: beatToMs(86, 170), lane: 2 }, { time: beatToMs(87, 170), lane: 0 }, { time: beatToMs(88, 170), lane: 3 }, { time: beatToMs(89, 170), lane: 1 },
    
    { time: beatToMs(90, 170), lane: 0 }, { time: beatToMs(90.25, 170), lane: 1 }, { time: beatToMs(90.5, 170), lane: 2 }, { time: beatToMs(91, 170), lane: 3 },
    { time: beatToMs(92, 170), lane: 1 }, { time: beatToMs(92.5, 170), lane: 0 }, { time: beatToMs(93, 170), lane: 3 }, { time: beatToMs(93.5, 170), lane: 2 },
    { time: beatToMs(94, 170), lane: 0 }, { time: beatToMs(94.25, 170), lane: 2 }, { time: beatToMs(94.75, 170), lane: 1 }, { time: beatToMs(95, 170), lane: 3 },
    { time: beatToMs(96, 170), lane: 2 }, { time: beatToMs(96.5, 170), lane: 0 }, { time: beatToMs(97, 170), lane: 3 }, { time: beatToMs(97.5, 170), lane: 1 },
    
    // Chorus 2 (32 bars)
    { time: beatToMs(98, 170), lane: 0 }, { time: beatToMs(98.25, 170), lane: 1 }, { time: beatToMs(98.5, 170), lane: 2 }, { time: beatToMs(98.75, 170), lane: 3 },
    { time: beatToMs(99, 170), lane: 2 }, { time: beatToMs(99.5, 170), lane: 0 }, { time: beatToMs(100, 170), lane: 1 }, { time: beatToMs(100.5, 170), lane: 3 },
    { time: beatToMs(101, 170), lane: 0 }, { time: beatToMs(101.25, 170), lane: 3 }, { time: beatToMs(101.5, 170), lane: 1 }, { time: beatToMs(101.75, 170), lane: 2 },
    { time: beatToMs(102, 170), lane: 3 }, { time: beatToMs(102.5, 170), lane: 1 }, { time: beatToMs(103, 170), lane: 0 }, { time: beatToMs(103.5, 170), lane: 2 },
    
    { time: beatToMs(104, 170), lane: 0 }, { time: beatToMs(104.25, 170), lane: 2 }, { time: beatToMs(104.75, 170), lane: 1 }, { time: beatToMs(105, 170), lane: 3 },
    { time: beatToMs(106, 170), lane: 2 }, { time: beatToMs(106.5, 170), lane: 0 }, { time: beatToMs(107, 170), lane: 3 }, { time: beatToMs(107.5, 170), lane: 1 },
    { time: beatToMs(108, 170), lane: 0 }, { time: beatToMs(108.25, 170), lane: 1 }, { time: beatToMs(108.75, 170), lane: 2 }, { time: beatToMs(109, 170), lane: 3 },
    { time: beatToMs(110, 170), lane: 1 }, { time: beatToMs(110.5, 170), lane: 2 }, { time: beatToMs(111, 170), lane: 0 }, { time: beatToMs(111.5, 170), lane: 3 },
    
    // Solo section (32 bars)
    { time: beatToMs(112, 170), lane: 0 }, { time: beatToMs(112.125, 170), lane: 1 }, { time: beatToMs(112.25, 170), lane: 2 }, { time: beatToMs(112.375, 170), lane: 3 },
    { time: beatToMs(113, 170), lane: 2 }, { time: beatToMs(113.5, 170), lane: 0 }, { time: beatToMs(114, 170), lane: 1 }, { time: beatToMs(114.5, 170), lane: 3 },
    { time: beatToMs(115, 170), lane: 0 }, { time: beatToMs(115.125, 170), lane: 3 }, { time: beatToMs(115.25, 170), lane: 1 }, { time: beatToMs(115.375, 170), lane: 2 },
    { time: beatToMs(116, 170), lane: 3 }, { time: beatToMs(116.5, 170), lane: 1 }, { time: beatToMs(117, 170), lane: 0 }, { time: beatToMs(117.5, 170), lane: 2 },
    
    { time: beatToMs(118, 170), lane: 0 }, { time: beatToMs(118.25, 170), lane: 2 }, { time: beatToMs(118.75, 170), lane: 1 }, { time: beatToMs(119, 170), lane: 3 },
    { time: beatToMs(120, 170), lane: 2 }, { time: beatToMs(120.5, 170), lane: 0 }, { time: beatToMs(121, 170), lane: 3 }, { time: beatToMs(121.5, 170), lane: 1 },
    { time: beatToMs(122, 170), lane: 0 }, { time: beatToMs(122.125, 170), lane: 1 }, { time: beatToMs(122.25, 170), lane: 2 }, { time: beatToMs(122.375, 170), lane: 3 },
    { time: beatToMs(123, 170), lane: 1 }, { time: beatToMs(123.5, 170), lane: 2 }, { time: beatToMs(124, 170), lane: 0 }, { time: beatToMs(124.5, 170), lane: 3 },
    
    // Final climax (32 bars)
    { time: beatToMs(125, 170), lane: 0 }, { time: beatToMs(125.125, 170), lane: 1 }, { time: beatToMs(125.25, 170), lane: 2 }, { time: beatToMs(125.375, 170), lane: 3 },
    { time: beatToMs(125.5, 170), lane: 2 }, { time: beatToMs(125.625, 170), lane: 1 }, { time: beatToMs(125.75, 170), lane: 0 }, { time: beatToMs(125.875, 170), lane: 3 },
    { time: beatToMs(126, 170), lane: 1 }, { time: beatToMs(126.125, 170), lane: 2 }, { time: beatToMs(126.25, 170), lane: 0 }, { time: beatToMs(126.375, 170), lane: 3 },
    { time: beatToMs(126.5, 170), lane: 2 }, { time: beatToMs(126.625, 170), lane: 1 }, { time: beatToMs(126.75, 170), lane: 0 }, { time: beatToMs(126.875, 170), lane: 3 },
    
    { time: beatToMs(127, 170), lane: 0 }, { time: beatToMs(127.25, 170), lane: 2 }, { time: beatToMs(127.5, 170), lane: 1 }, { time: beatToMs(127.75, 170), lane: 3 },
    { time: beatToMs(128, 170), lane: 2 }, { time: beatToMs(128.25, 170), lane: 0 }, { time: beatToMs(128.5, 170), lane: 3 }, { time: beatToMs(128.75, 170), lane: 1 },
    { time: beatToMs(129, 170), lane: 0 }, { time: beatToMs(129.25, 170), lane: 1 }, { time: beatToMs(129.5, 170), lane: 2 }, { time: beatToMs(129.75, 170), lane: 3 },
    { time: beatToMs(130, 170), lane: 1 }, { time: beatToMs(130.5, 170), lane: 2 }, { time: beatToMs(131, 170), lane: 0 }, { time: beatToMs(131.5, 170), lane: 3 },
    
    // Outro (16 bars)
    { time: beatToMs(132, 170), lane: 0 }, { time: beatToMs(134, 170), lane: 2 }, { time: beatToMs(136, 170), lane: 1 }, { time: beatToMs(138, 170), lane: 3 },
    { time: beatToMs(140, 170), lane: 2 }, { time: beatToMs(142, 170), lane: 0 }, { time: beatToMs(144, 170), lane: 3 }, { time: beatToMs(146, 170), lane: 1 },
    { time: beatToMs(148, 170), lane: 0 }, { time: beatToMs(150, 170), lane: 2 }, { time: beatToMs(152, 170), lane: 1 }, { time: beatToMs(154, 170), lane: 3 },
    { time: beatToMs(156, 170), lane: 2 }, { time: beatToMs(158, 170), lane: 0 }, { time: beatToMs(160, 170), lane: 3 }, { time: beatToMs(162, 170), lane: 1 }
  ]
};

// Gears of Fate - Expert (185 BPM)
// Spaced advanced patterns with clear rhythm sections, ~120 notes total
const gearsOfFateExpert: Chart = {
  songId: "1",
  difficulty: "Expert",
  bpm: 185,
  notes: [
    // Intro - well-spaced patterns (16 bars)
    { time: beatToMs(8, 185), lane: 0 }, { time: beatToMs(10, 185), lane: 1 }, { time: beatToMs(12, 185), lane: 2 }, { time: beatToMs(14, 185), lane: 3 },
    { time: beatToMs(16, 185), lane: 2 }, { time: beatToMs(18, 185), lane: 1 }, { time: beatToMs(20, 185), lane: 0 }, { time: beatToMs(22, 185), lane: 3 },
    
    // Verse - 16th note patterns (16 bars)  
    { time: beatToMs(24, 185), lane: 0 }, { time: beatToMs(24.25, 185), lane: 1 }, { time: beatToMs(24.5, 185), lane: 2 }, { time: beatToMs(24.75, 185), lane: 3 },
    { time: beatToMs(26, 185), lane: 2 }, { time: beatToMs(26.5, 185), lane: 0 }, { time: beatToMs(27, 185), lane: 1 }, { time: beatToMs(27.5, 185), lane: 3 },
    { time: beatToMs(28, 185), lane: 0 }, { time: beatToMs(28.25, 185), lane: 3 }, { time: beatToMs(28.5, 185), lane: 1 }, { time: beatToMs(28.75, 185), lane: 2 },
    { time: beatToMs(30, 185), lane: 3 }, { time: beatToMs(30.5, 185), lane: 1 }, { time: beatToMs(31, 185), lane: 0 }, { time: beatToMs(31.5, 185), lane: 2 },
    
    // Pre-Chorus - 32nd note bursts (8 bars)
    { time: beatToMs(32, 185), lane: 0 }, { time: beatToMs(32.0625, 185), lane: 1 }, { time: beatToMs(32.125, 185), lane: 2 }, { time: beatToMs(32.1875, 185), lane: 3 },
    { time: beatToMs(33, 185), lane: 2 }, { time: beatToMs(33.5, 185), lane: 0 }, { time: beatToMs(34, 185), lane: 3 }, { time: beatToMs(34.5, 185), lane: 1 },
    { time: beatToMs(35, 185), lane: 0 }, { time: beatToMs(35.0625, 185), lane: 2 }, { time: beatToMs(35.125, 185), lane: 1 }, { time: beatToMs(35.1875, 185), lane: 3 },
    { time: beatToMs(36, 185), lane: 2 }, { time: beatToMs(36.5, 185), lane: 0 }, { time: beatToMs(37, 185), lane: 3 }, { time: beatToMs(37.5, 185), lane: 1 },
    
    // Chorus - crossover patterns (16 bars)
    { time: beatToMs(40, 185), lane: 3 }, { time: beatToMs(40.25, 185), lane: 0 }, { time: beatToMs(40.5, 185), lane: 2 }, { time: beatToMs(40.75, 185), lane: 1 },
    { time: beatToMs(41, 185), lane: 3 }, { time: beatToMs(41.25, 185), lane: 1 }, { time: beatToMs(41.5, 185), lane: 0 }, { time: beatToMs(41.75, 185), lane: 2 },
    { time: beatToMs(42, 185), lane: 1 }, { time: beatToMs(42.25, 185), lane: 3 }, { time: beatToMs(42.5, 185), lane: 0 }, { time: beatToMs(42.75, 185), lane: 2 },
    { time: beatToMs(44, 185), lane: 0 }, { time: beatToMs(44.25, 185), lane: 2 }, { time: beatToMs(44.5, 185), lane: 1 }, { time: beatToMs(44.75, 185), lane: 3 },
    { time: beatToMs(45, 185), lane: 2 }, { time: beatToMs(45.25, 185), lane: 0 }, { time: beatToMs(45.5, 185), lane: 3 }, { time: beatToMs(45.75, 185), lane: 1 },
    
    // Bridge (16 bars)
    { time: beatToMs(48, 185), lane: 0 }, { time: beatToMs(49, 185), lane: 2 }, { time: beatToMs(50, 185), lane: 1 }, { time: beatToMs(51, 185), lane: 3 },
    { time: beatToMs(52, 185), lane: 2 }, { time: beatToMs(53, 185), lane: 0 }, { time: beatToMs(54, 185), lane: 3 }, { time: beatToMs(55, 185), lane: 1 },
    { time: beatToMs(56, 185), lane: 0 }, { time: beatToMs(56.25, 185), lane: 1 }, { time: beatToMs(56.5, 185), lane: 2 }, { time: beatToMs(56.75, 185), lane: 3 },
    { time: beatToMs(58, 185), lane: 2 }, { time: beatToMs(58.5, 185), lane: 0 }, { time: beatToMs(59, 185), lane: 3 }, { time: beatToMs(59.5, 185), lane: 1 },
    
    // Verse 2 with advanced patterns (32 bars)
    { time: beatToMs(60, 185), lane: 0 }, { time: beatToMs(60.25, 185), lane: 1 }, { time: beatToMs(60.5, 185), lane: 2 }, { time: beatToMs(60.75, 185), lane: 3 },
    { time: beatToMs(61, 185), lane: 2 }, { time: beatToMs(61.25, 185), lane: 1 }, { time: beatToMs(61.5, 185), lane: 0 }, { time: beatToMs(61.75, 185), lane: 3 },
    { time: beatToMs(62, 185), lane: 1 }, { time: beatToMs(62.25, 185), lane: 2 }, { time: beatToMs(62.5, 185), lane: 0 }, { time: beatToMs(62.75, 185), lane: 3 },
    { time: beatToMs(63, 185), lane: 2 }, { time: beatToMs(63.25, 185), lane: 1 }, { time: beatToMs(63.5, 185), lane: 0 }, { time: beatToMs(63.75, 185), lane: 3 },
    
    { time: beatToMs(64, 185), lane: 3 }, { time: beatToMs(64.0625, 185), lane: 0 }, { time: beatToMs(64.125, 185), lane: 2 }, { time: beatToMs(64.1875, 185), lane: 1 },
    { time: beatToMs(65, 185), lane: 3 }, { time: beatToMs(65.25, 185), lane: 1 }, { time: beatToMs(65.5, 185), lane: 0 }, { time: beatToMs(65.75, 185), lane: 2 },
    { time: beatToMs(66, 185), lane: 1 }, { time: beatToMs(66.0625, 185), lane: 3 }, { time: beatToMs(66.125, 185), lane: 0 }, { time: beatToMs(66.1875, 185), lane: 2 },
    { time: beatToMs(67, 185), lane: 1 }, { time: beatToMs(67.25, 185), lane: 2 }, { time: beatToMs(67.5, 185), lane: 3 }, { time: beatToMs(67.75, 185), lane: 0 },
    
    // Final chorus with technical sections (32 bars)
    { time: beatToMs(68, 185), lane: 0 }, { time: beatToMs(68.125, 185), lane: 1 }, { time: beatToMs(68.25, 185), lane: 2 }, { time: beatToMs(68.375, 185), lane: 3 },
    { time: beatToMs(68.5, 185), lane: 2 }, { time: beatToMs(68.625, 185), lane: 1 }, { time: beatToMs(68.75, 185), lane: 0 }, { time: beatToMs(68.875, 185), lane: 3 },
    { time: beatToMs(69, 185), lane: 1 }, { time: beatToMs(69.125, 185), lane: 2 }, { time: beatToMs(69.25, 185), lane: 0 }, { time: beatToMs(69.375, 185), lane: 3 },
    { time: beatToMs(69.5, 185), lane: 2 }, { time: beatToMs(69.625, 185), lane: 1 }, { time: beatToMs(69.75, 185), lane: 0 }, { time: beatToMs(69.875, 185), lane: 3 },
    
    { time: beatToMs(70, 185), lane: 0 }, { time: beatToMs(70.25, 185), lane: 2 }, { time: beatToMs(70.5, 185), lane: 1 }, { time: beatToMs(70.75, 185), lane: 3 },
    { time: beatToMs(71, 185), lane: 2 }, { time: beatToMs(71.25, 185), lane: 0 }, { time: beatToMs(71.5, 185), lane: 3 }, { time: beatToMs(71.75, 185), lane: 1 },
    { time: beatToMs(72, 185), lane: 0 }, { time: beatToMs(72.0625, 185), lane: 1 }, { time: beatToMs(72.125, 185), lane: 2 }, { time: beatToMs(72.1875, 185), lane: 3 },
    { time: beatToMs(73, 185), lane: 2 }, { time: beatToMs(73.25, 185), lane: 0 }, { time: beatToMs(73.5, 185), lane: 3 }, { time: beatToMs(73.75, 185), lane: 1 },
    
    // Solo section with intense patterns (32 bars)
    { time: beatToMs(74, 185), lane: 0 }, { time: beatToMs(74.03125, 185), lane: 2 }, { time: beatToMs(74.0625, 185), lane: 1 }, { time: beatToMs(74.09375, 185), lane: 3 },
    { time: beatToMs(74.125, 185), lane: 0 }, { time: beatToMs(74.15625, 185), lane: 2 }, { time: beatToMs(74.1875, 185), lane: 1 }, { time: beatToMs(74.21875, 185), lane: 3 },
    { time: beatToMs(75, 185), lane: 2 }, { time: beatToMs(75.5, 185), lane: 0 }, { time: beatToMs(76, 185), lane: 3 }, { time: beatToMs(76.5, 185), lane: 1 },
    { time: beatToMs(77, 185), lane: 0 }, { time: beatToMs(77.0625, 185), lane: 1 }, { time: beatToMs(77.125, 185), lane: 2 }, { time: beatToMs(77.1875, 185), lane: 3 },
    
    { time: beatToMs(78, 185), lane: 1 }, { time: beatToMs(78.25, 185), lane: 2 }, { time: beatToMs(78.5, 185), lane: 0 }, { time: beatToMs(78.75, 185), lane: 3 },
    { time: beatToMs(79, 185), lane: 2 }, { time: beatToMs(79.25, 185), lane: 1 }, { time: beatToMs(79.5, 185), lane: 0 }, { time: beatToMs(79.75, 185), lane: 3 },
    { time: beatToMs(80, 185), lane: 0 }, { time: beatToMs(80.03125, 185), lane: 2 }, { time: beatToMs(80.0625, 185), lane: 1 }, { time: beatToMs(80.09375, 185), lane: 3 },
    { time: beatToMs(81, 185), lane: 2 }, { time: beatToMs(81.25, 185), lane: 0 }, { time: beatToMs(81.5, 185), lane: 3 }, { time: beatToMs(81.75, 185), lane: 1 },
    
    // Final climax (32 bars)
    { time: beatToMs(82, 185), lane: 0 }, { time: beatToMs(82.03125, 185), lane: 1 }, { time: beatToMs(82.0625, 185), lane: 2 }, { time: beatToMs(82.09375, 185), lane: 3 },
    { time: beatToMs(82.125, 185), lane: 2 }, { time: beatToMs(82.15625, 185), lane: 1 }, { time: beatToMs(82.1875, 185), lane: 0 }, { time: beatToMs(82.21875, 185), lane: 3 },
    { time: beatToMs(82.25, 185), lane: 1 }, { time: beatToMs(82.28125, 185), lane: 3 }, { time: beatToMs(82.3125, 185), lane: 0 }, { time: beatToMs(82.34375, 185), lane: 2 },
    { time: beatToMs(82.375, 185), lane: 3 }, { time: beatToMs(82.40625, 185), lane: 2 }, { time: beatToMs(82.4375, 185), lane: 1 }, { time: beatToMs(82.46875, 185), lane: 0 },
    
    { time: beatToMs(83, 185), lane: 0 }, { time: beatToMs(83.25, 185), lane: 2 }, { time: beatToMs(83.5, 185), lane: 1 }, { time: beatToMs(83.75, 185), lane: 3 },
    { time: beatToMs(84, 185), lane: 2 }, { time: beatToMs(84.25, 185), lane: 0 }, { time: beatToMs(84.5, 185), lane: 3 }, { time: beatToMs(84.75, 185), lane: 1 },
    { time: beatToMs(85, 185), lane: 0 }, { time: beatToMs(85.125, 185), lane: 1 }, { time: beatToMs(85.25, 185), lane: 2 }, { time: beatToMs(85.375, 185), lane: 3 },
    { time: beatToMs(86, 185), lane: 1 }, { time: beatToMs(86.5, 185), lane: 2 }, { time: beatToMs(87, 185), lane: 0 }, { time: beatToMs(87.5, 185), lane: 3 },
    
    // Outro (16 bars)
    { time: beatToMs(88, 185), lane: 0 }, { time: beatToMs(90, 185), lane: 2 }, { time: beatToMs(92, 185), lane: 1 }, { time: beatToMs(94, 185), lane: 3 },
    { time: beatToMs(96, 185), lane: 2 }, { time: beatToMs(98, 185), lane: 0 }, { time: beatToMs(100, 185), lane: 3 }, { time: beatToMs(102, 185), lane: 1 },
    { time: beatToMs(104, 185), lane: 0 }, { time: beatToMs(106, 185), lane: 2 }, { time: beatToMs(108, 185), lane: 1 }, { time: beatToMs(110, 185), lane: 3 },
    { time: beatToMs(112, 185), lane: 2 }, { time: beatToMs(114, 185), lane: 0 }, { time: beatToMs(116, 185), lane: 3 }, { time: beatToMs(118, 185), lane: 1 }
  ]
};

// Gears of Fate - Master (210 BPM)  
// Spaced technical patterns for ultimate challenge, ~100 notes total
const gearsOfFateMaster: Chart = {
  songId: "1",
  difficulty: "Master",
  bpm: 210,
  notes: [
    // Intro - spaced technical opening (16 bars)
    { time: beatToMs(8, 210), lane: 0 }, { time: beatToMs(9, 210), lane: 1 }, { time: beatToMs(10, 210), lane: 2 }, { time: beatToMs(11, 210), lane: 3 },
    { time: beatToMs(12, 210), lane: 2 }, { time: beatToMs(13, 210), lane: 1 }, { time: beatToMs(14, 210), lane: 0 }, { time: beatToMs(15, 210), lane: 3 },
    
    // Verse - 32nd note patterns (16 bars)
    { time: beatToMs(16, 210), lane: 0 }, { time: beatToMs(16.03125, 210), lane: 1 }, { time: beatToMs(16.0625, 210), lane: 2 }, { time: beatToMs(16.09375, 210), lane: 3 },
    { time: beatToMs(17, 210), lane: 2 }, { time: beatToMs(17.5, 210), lane: 0 }, { time: beatToMs(18, 210), lane: 3 }, { time: beatToMs(18.5, 210), lane: 1 },
    { time: beatToMs(20, 210), lane: 0 }, { time: beatToMs(20.03125, 210), lane: 2 }, { time: beatToMs(20.0625, 210), lane: 1 }, { time: beatToMs(20.09375, 210), lane: 3 },
    { time: beatToMs(21, 210), lane: 2 }, { time: beatToMs(21.5, 210), lane: 0 }, { time: beatToMs(22, 210), lane: 3 }, { time: beatToMs(22.5, 210), lane: 1 },
    
    // Pre-Chorus - technical crossovers (8 bars)
    { time: beatToMs(24, 210), lane: 3 }, { time: beatToMs(24.0625, 210), lane: 0 }, { time: beatToMs(24.125, 210), lane: 2 }, { time: beatToMs(24.1875, 210), lane: 1 },
    { time: beatToMs(25, 210), lane: 3 }, { time: beatToMs(25.25, 210), lane: 1 }, { time: beatToMs(25.5, 210), lane: 0 }, { time: beatToMs(25.75, 210), lane: 2 },
    { time: beatToMs(26, 210), lane: 1 }, { time: beatToMs(26.0625, 210), lane: 3 }, { time: beatToMs(26.125, 210), lane: 0 }, { time: beatToMs(26.1875, 210), lane: 2 },
    { time: beatToMs(27, 210), lane: 1 }, { time: beatToMs(27.25, 210), lane: 2 }, { time: beatToMs(27.5, 210), lane: 3 }, { time: beatToMs(27.75, 210), lane: 0 },
    
    // Chorus - dense technical patterns (16 bars)
    { time: beatToMs(28, 210), lane: 0 }, { time: beatToMs(28.015625, 210), lane: 2 }, { time: beatToMs(28.03125, 210), lane: 1 }, { time: beatToMs(28.046875, 210), lane: 3 },
    { time: beatToMs(28.0625, 210), lane: 0 }, { time: beatToMs(28.078125, 210), lane: 3 }, { time: beatToMs(28.09375, 210), lane: 2 }, { time: beatToMs(28.109375, 210), lane: 1 },
    { time: beatToMs(29, 210), lane: 2 }, { time: beatToMs(29.25, 210), lane: 0 }, { time: beatToMs(29.5, 210), lane: 3 }, { time: beatToMs(29.75, 210), lane: 1 },
    { time: beatToMs(30, 210), lane: 0 }, { time: beatToMs(30.015625, 210), lane: 1 }, { time: beatToMs(30.03125, 210), lane: 2 }, { time: beatToMs(30.046875, 210), lane: 3 },
    { time: beatToMs(31, 210), lane: 2 }, { time: beatToMs(31.25, 210), lane: 1 }, { time: beatToMs(31.5, 210), lane: 0 }, { time: beatToMs(31.75, 210), lane: 3 },
    
    // Bridge section (16 bars)
    { time: beatToMs(35, 210), lane: 0 }, { time: beatToMs(36, 210), lane: 2 }, { time: beatToMs(37, 210), lane: 1 }, { time: beatToMs(38, 210), lane: 3 },
    { time: beatToMs(39, 210), lane: 2 }, { time: beatToMs(40, 210), lane: 0 }, { time: beatToMs(41, 210), lane: 3 }, { time: beatToMs(42, 210), lane: 1 },
    { time: beatToMs(43, 210), lane: 0 }, { time: beatToMs(43.03125, 210), lane: 1 }, { time: beatToMs(43.0625, 210), lane: 2 }, { time: beatToMs(43.09375, 210), lane: 3 },
    { time: beatToMs(44, 210), lane: 2 }, { time: beatToMs(44.5, 210), lane: 0 }, { time: beatToMs(45, 210), lane: 3 }, { time: beatToMs(45.5, 210), lane: 1 },
    
    // Verse 2 with insane patterns (32 bars)
    { time: beatToMs(46, 210), lane: 0 }, { time: beatToMs(46.015625, 210), lane: 1 }, { time: beatToMs(46.03125, 210), lane: 2 }, { time: beatToMs(46.046875, 210), lane: 3 },
    { time: beatToMs(46.0625, 210), lane: 2 }, { time: beatToMs(46.078125, 210), lane: 1 }, { time: beatToMs(46.09375, 210), lane: 0 }, { time: beatToMs(46.109375, 210), lane: 3 },
    { time: beatToMs(47, 210), lane: 1 }, { time: beatToMs(47.25, 210), lane: 2 }, { time: beatToMs(47.5, 210), lane: 0 }, { time: beatToMs(47.75, 210), lane: 3 },
    { time: beatToMs(48, 210), lane: 2 }, { time: beatToMs(48.015625, 210), lane: 1 }, { time: beatToMs(48.03125, 210), lane: 0 }, { time: beatToMs(48.046875, 210), lane: 3 },
    
    { time: beatToMs(49, 210), lane: 0 }, { time: beatToMs(49.25, 210), lane: 1 }, { time: beatToMs(49.5, 210), lane: 2 }, { time: beatToMs(49.75, 210), lane: 3 },
    { time: beatToMs(50, 210), lane: 2 }, { time: beatToMs(50.25, 210), lane: 1 }, { time: beatToMs(50.5, 210), lane: 0 }, { time: beatToMs(50.75, 210), lane: 3 },
    { time: beatToMs(51, 210), lane: 1 }, { time: beatToMs(51.015625, 210), lane: 2 }, { time: beatToMs(51.03125, 210), lane: 0 }, { time: beatToMs(51.046875, 210), lane: 3 },
    { time: beatToMs(52, 210), lane: 2 }, { time: beatToMs(52.25, 210), lane: 1 }, { time: beatToMs(52.5, 210), lane: 0 }, { time: beatToMs(52.75, 210), lane: 3 },
    
    // Final chorus with extreme patterns (32 bars)
    { time: beatToMs(53, 210), lane: 0 }, { time: beatToMs(53.015625, 210), lane: 2 }, { time: beatToMs(53.03125, 210), lane: 1 }, { time: beatToMs(53.046875, 210), lane: 3 },
    { time: beatToMs(53.0625, 210), lane: 0 }, { time: beatToMs(53.078125, 210), lane: 3 }, { time: beatToMs(53.09375, 210), lane: 2 }, { time: beatToMs(53.109375, 210), lane: 1 },
    { time: beatToMs(53.125, 210), lane: 2 }, { time: beatToMs(53.140625, 210), lane: 0 }, { time: beatToMs(53.15625, 210), lane: 3 }, { time: beatToMs(53.171875, 210), lane: 1 },
    { time: beatToMs(53.1875, 210), lane: 2 }, { time: beatToMs(53.203125, 210), lane: 1 }, { time: beatToMs(53.21875, 210), lane: 0 }, { time: beatToMs(53.234375, 210), lane: 3 },
    
    { time: beatToMs(54, 210), lane: 3 }, { time: beatToMs(54.015625, 210), lane: 0 }, { time: beatToMs(54.03125, 210), lane: 2 }, { time: beatToMs(54.046875, 210), lane: 1 },
    { time: beatToMs(54.0625, 210), lane: 3 }, { time: beatToMs(54.078125, 210), lane: 1 }, { time: beatToMs(54.09375, 210), lane: 0 }, { time: beatToMs(54.109375, 210), lane: 2 },
    { time: beatToMs(54.125, 210), lane: 1 }, { time: beatToMs(54.140625, 210), lane: 3 }, { time: beatToMs(54.15625, 210), lane: 0 }, { time: beatToMs(54.171875, 210), lane: 2 },
    { time: beatToMs(54.1875, 210), lane: 1 }, { time: beatToMs(54.203125, 210), lane: 2 }, { time: beatToMs(54.21875, 210), lane: 3 }, { time: beatToMs(54.234375, 210), lane: 0 },
    
    // Solo section with ultimate difficulty (32 bars)
    { time: beatToMs(55, 210), lane: 0 }, { time: beatToMs(55.015625, 210), lane: 1 }, { time: beatToMs(55.03125, 210), lane: 2 }, { time: beatToMs(55.046875, 210), lane: 3 },
    { time: beatToMs(55.0625, 210), lane: 2 }, { time: beatToMs(55.078125, 210), lane: 1 }, { time: beatToMs(55.09375, 210), lane: 0 }, { time: beatToMs(55.109375, 210), lane: 3 },
    { time: beatToMs(55.125, 210), lane: 1 }, { time: beatToMs(55.140625, 210), lane: 2 }, { time: beatToMs(55.15625, 210), lane: 0 }, { time: beatToMs(55.171875, 210), lane: 3 },
    { time: beatToMs(55.1875, 210), lane: 2 }, { time: beatToMs(55.203125, 210), lane: 1 }, { time: beatToMs(55.21875, 210), lane: 0 }, { time: beatToMs(55.234375, 210), lane: 3 },
    
    { time: beatToMs(56, 210), lane: 0 }, { time: beatToMs(56.25, 210), lane: 2 }, { time: beatToMs(56.5, 210), lane: 1 }, { time: beatToMs(56.75, 210), lane: 3 },
    { time: beatToMs(57, 210), lane: 2 }, { time: beatToMs(57.25, 210), lane: 0 }, { time: beatToMs(57.5, 210), lane: 3 }, { time: beatToMs(57.75, 210), lane: 1 },
    { time: beatToMs(58, 210), lane: 0 }, { time: beatToMs(58.015625, 210), lane: 1 }, { time: beatToMs(58.03125, 210), lane: 2 }, { time: beatToMs(58.046875, 210), lane: 3 },
    { time: beatToMs(59, 210), lane: 1 }, { time: beatToMs(59.5, 210), lane: 2 }, { time: beatToMs(60, 210), lane: 0 }, { time: beatToMs(60.5, 210), lane: 3 },
    
    // Final climax - ultimate challenge (32 bars)
    { time: beatToMs(61, 210), lane: 0 }, { time: beatToMs(61.015625, 210), lane: 1 }, { time: beatToMs(61.03125, 210), lane: 2 }, { time: beatToMs(61.046875, 210), lane: 3 },
    { time: beatToMs(61.0625, 210), lane: 2 }, { time: beatToMs(61.078125, 210), lane: 1 }, { time: beatToMs(61.09375, 210), lane: 0 }, { time: beatToMs(61.109375, 210), lane: 3 },
    { time: beatToMs(61.125, 210), lane: 1 }, { time: beatToMs(61.140625, 210), lane: 3 }, { time: beatToMs(61.15625, 210), lane: 0 }, { time: beatToMs(61.171875, 210), lane: 2 },
    { time: beatToMs(61.1875, 210), lane: 3 }, { time: beatToMs(61.203125, 210), lane: 2 }, { time: beatToMs(61.21875, 210), lane: 1 }, { time: beatToMs(61.234375, 210), lane: 0 },
    
    { time: beatToMs(62, 210), lane: 0 }, { time: beatToMs(62.03125, 210), lane: 2 }, { time: beatToMs(62.0625, 210), lane: 1 }, { time: beatToMs(62.09375, 210), lane: 3 },
    { time: beatToMs(62.125, 210), lane: 0 }, { time: beatToMs(62.15625, 210), lane: 3 }, { time: beatToMs(62.1875, 210), lane: 2 }, { time: beatToMs(62.21875, 210), lane: 1 },
    { time: beatToMs(62.25, 210), lane: 2 }, { time: beatToMs(62.28125, 210), lane: 0 }, { time: beatToMs(62.3125, 210), lane: 3 }, { time: beatToMs(62.34375, 210), lane: 1 },
    { time: beatToMs(62.375, 210), lane: 2 }, { time: beatToMs(62.40625, 210), lane: 1 }, { time: beatToMs(62.4375, 210), lane: 0 }, { time: beatToMs(62.46875, 210), lane: 3 },
    
    // Outro with final bursts (16 bars)
    { time: beatToMs(63, 210), lane: 0 }, { time: beatToMs(65, 210), lane: 2 }, { time: beatToMs(67, 210), lane: 1 }, { time: beatToMs(69, 210), lane: 3 },
    { time: beatToMs(71, 210), lane: 2 }, { time: beatToMs(73, 210), lane: 0 }, { time: beatToMs(75, 210), lane: 3 }, { time: beatToMs(77, 210), lane: 1 },
    { time: beatToMs(79, 210), lane: 0 }, { time: beatToMs(81, 210), lane: 2 }, { time: beatToMs(83, 210), lane: 1 }, { time: beatToMs(85, 210), lane: 3 },
    { time: beatToMs(87, 210), lane: 2 }, { time: beatToMs(89, 210), lane: 0 }, { time: beatToMs(91, 210), lane: 3 }, { time: beatToMs(93, 210), lane: 1 }
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