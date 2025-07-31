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
    
    // Verse 3 (64 bars)
    { time: beatToMs(132, 170), lane: 0 }, { time: beatToMs(133, 170), lane: 2 }, { time: beatToMs(134, 170), lane: 1 }, { time: beatToMs(135, 170), lane: 3 },
    { time: beatToMs(136, 170), lane: 2 }, { time: beatToMs(137, 170), lane: 0 }, { time: beatToMs(138, 170), lane: 3 }, { time: beatToMs(139, 170), lane: 1 },
    { time: beatToMs(140, 170), lane: 0 }, { time: beatToMs(140.5, 170), lane: 1 }, { time: beatToMs(141, 170), lane: 2 }, { time: beatToMs(141.5, 170), lane: 3 },
    { time: beatToMs(142, 170), lane: 2 }, { time: beatToMs(142.5, 170), lane: 0 }, { time: beatToMs(143, 170), lane: 3 }, { time: beatToMs(143.5, 170), lane: 1 },
    
    { time: beatToMs(144, 170), lane: 0 }, { time: beatToMs(144.25, 170), lane: 1 }, { time: beatToMs(144.5, 170), lane: 2 }, { time: beatToMs(144.75, 170), lane: 3 },
    { time: beatToMs(145, 170), lane: 2 }, { time: beatToMs(145.5, 170), lane: 0 }, { time: beatToMs(146, 170), lane: 1 }, { time: beatToMs(146.5, 170), lane: 3 },
    { time: beatToMs(147, 170), lane: 0 }, { time: beatToMs(147.25, 170), lane: 3 }, { time: beatToMs(147.5, 170), lane: 1 }, { time: beatToMs(147.75, 170), lane: 2 },
    { time: beatToMs(148, 170), lane: 3 }, { time: beatToMs(148.5, 170), lane: 1 }, { time: beatToMs(149, 170), lane: 0 }, { time: beatToMs(149.5, 170), lane: 2 },
    
    { time: beatToMs(150, 170), lane: 0 }, { time: beatToMs(150.25, 170), lane: 2 }, { time: beatToMs(150.75, 170), lane: 1 }, { time: beatToMs(151, 170), lane: 3 },
    { time: beatToMs(152, 170), lane: 2 }, { time: beatToMs(152.5, 170), lane: 0 }, { time: beatToMs(153, 170), lane: 3 }, { time: beatToMs(153.5, 170), lane: 1 },
    { time: beatToMs(154, 170), lane: 0 }, { time: beatToMs(154.25, 170), lane: 1 }, { time: beatToMs(154.75, 170), lane: 2 }, { time: beatToMs(155, 170), lane: 3 },
    { time: beatToMs(156, 170), lane: 1 }, { time: beatToMs(156.5, 170), lane: 2 }, { time: beatToMs(157, 170), lane: 0 }, { time: beatToMs(157.5, 170), lane: 3 },
    
    { time: beatToMs(158, 170), lane: 0 }, { time: beatToMs(158.125, 170), lane: 1 }, { time: beatToMs(158.25, 170), lane: 2 }, { time: beatToMs(158.375, 170), lane: 3 },
    { time: beatToMs(159, 170), lane: 2 }, { time: beatToMs(159.5, 170), lane: 0 }, { time: beatToMs(160, 170), lane: 1 }, { time: beatToMs(160.5, 170), lane: 3 },
    { time: beatToMs(161, 170), lane: 0 }, { time: beatToMs(161.125, 170), lane: 3 }, { time: beatToMs(161.25, 170), lane: 1 }, { time: beatToMs(161.375, 170), lane: 2 },
    { time: beatToMs(162, 170), lane: 3 }, { time: beatToMs(162.5, 170), lane: 1 }, { time: beatToMs(163, 170), lane: 0 }, { time: beatToMs(163.5, 170), lane: 2 },
    
    // Chorus 3 (64 bars)
    { time: beatToMs(164, 170), lane: 0 }, { time: beatToMs(164.25, 170), lane: 1 }, { time: beatToMs(164.5, 170), lane: 2 }, { time: beatToMs(164.75, 170), lane: 3 },
    { time: beatToMs(165, 170), lane: 2 }, { time: beatToMs(165.5, 170), lane: 0 }, { time: beatToMs(166, 170), lane: 1 }, { time: beatToMs(166.5, 170), lane: 3 },
    { time: beatToMs(167, 170), lane: 0 }, { time: beatToMs(167.25, 170), lane: 3 }, { time: beatToMs(167.5, 170), lane: 1 }, { time: beatToMs(167.75, 170), lane: 2 },
    { time: beatToMs(168, 170), lane: 3 }, { time: beatToMs(168.5, 170), lane: 1 }, { time: beatToMs(169, 170), lane: 0 }, { time: beatToMs(169.5, 170), lane: 2 },
    
    { time: beatToMs(170, 170), lane: 0 }, { time: beatToMs(170.25, 170), lane: 2 }, { time: beatToMs(170.75, 170), lane: 1 }, { time: beatToMs(171, 170), lane: 3 },
    { time: beatToMs(172, 170), lane: 2 }, { time: beatToMs(172.5, 170), lane: 0 }, { time: beatToMs(173, 170), lane: 3 }, { time: beatToMs(173.5, 170), lane: 1 },
    { time: beatToMs(174, 170), lane: 0 }, { time: beatToMs(174.25, 170), lane: 1 }, { time: beatToMs(174.75, 170), lane: 2 }, { time: beatToMs(175, 170), lane: 3 },
    { time: beatToMs(176, 170), lane: 1 }, { time: beatToMs(176.5, 170), lane: 2 }, { time: beatToMs(177, 170), lane: 0 }, { time: beatToMs(177.5, 170), lane: 3 },
    
    { time: beatToMs(178, 170), lane: 0 }, { time: beatToMs(178.125, 170), lane: 1 }, { time: beatToMs(178.25, 170), lane: 2 }, { time: beatToMs(178.375, 170), lane: 3 },
    { time: beatToMs(179, 170), lane: 2 }, { time: beatToMs(179.5, 170), lane: 0 }, { time: beatToMs(180, 170), lane: 1 }, { time: beatToMs(180.5, 170), lane: 3 },
    { time: beatToMs(181, 170), lane: 0 }, { time: beatToMs(181.125, 170), lane: 3 }, { time: beatToMs(181.25, 170), lane: 1 }, { time: beatToMs(181.375, 170), lane: 2 },
    { time: beatToMs(182, 170), lane: 3 }, { time: beatToMs(182.5, 170), lane: 1 }, { time: beatToMs(183, 170), lane: 0 }, { time: beatToMs(183.5, 170), lane: 2 },
    
    // Bridge 2 (32 bars)
    { time: beatToMs(184, 170), lane: 0 }, { time: beatToMs(185, 170), lane: 2 }, { time: beatToMs(186, 170), lane: 1 }, { time: beatToMs(187, 170), lane: 3 },
    { time: beatToMs(188, 170), lane: 2 }, { time: beatToMs(189, 170), lane: 0 }, { time: beatToMs(190, 170), lane: 3 }, { time: beatToMs(191, 170), lane: 1 },
    { time: beatToMs(192, 170), lane: 0 }, { time: beatToMs(192.25, 170), lane: 1 }, { time: beatToMs(192.5, 170), lane: 2 }, { time: beatToMs(192.75, 170), lane: 3 },
    { time: beatToMs(194, 170), lane: 2 }, { time: beatToMs(194.5, 170), lane: 0 }, { time: beatToMs(195, 170), lane: 3 }, { time: beatToMs(195.5, 170), lane: 1 },
    
    { time: beatToMs(196, 170), lane: 0 }, { time: beatToMs(196.25, 170), lane: 1 }, { time: beatToMs(196.75, 170), lane: 2 }, { time: beatToMs(197, 170), lane: 3 },
    { time: beatToMs(198, 170), lane: 1 }, { time: beatToMs(198.5, 170), lane: 2 }, { time: beatToMs(199, 170), lane: 0 }, { time: beatToMs(199.5, 170), lane: 3 },
    { time: beatToMs(200, 170), lane: 0 }, { time: beatToMs(200.5, 170), lane: 2 }, { time: beatToMs(201, 170), lane: 1 }, { time: beatToMs(201.5, 170), lane: 3 },
    { time: beatToMs(202, 170), lane: 2 }, { time: beatToMs(202.5, 170), lane: 0 }, { time: beatToMs(203, 170), lane: 3 }, { time: beatToMs(203.5, 170), lane: 1 },
    
    // Final epic section (64 bars)
    { time: beatToMs(204, 170), lane: 0 }, { time: beatToMs(204.125, 170), lane: 1 }, { time: beatToMs(204.25, 170), lane: 2 }, { time: beatToMs(204.375, 170), lane: 3 },
    { time: beatToMs(204.5, 170), lane: 2 }, { time: beatToMs(204.625, 170), lane: 1 }, { time: beatToMs(204.75, 170), lane: 0 }, { time: beatToMs(204.875, 170), lane: 3 },
    { time: beatToMs(205, 170), lane: 1 }, { time: beatToMs(205.125, 170), lane: 2 }, { time: beatToMs(205.25, 170), lane: 0 }, { time: beatToMs(205.375, 170), lane: 3 },
    { time: beatToMs(205.5, 170), lane: 2 }, { time: beatToMs(205.625, 170), lane: 1 }, { time: beatToMs(205.75, 170), lane: 0 }, { time: beatToMs(205.875, 170), lane: 3 },
    
    { time: beatToMs(206, 170), lane: 0 }, { time: beatToMs(206.25, 170), lane: 2 }, { time: beatToMs(206.5, 170), lane: 1 }, { time: beatToMs(206.75, 170), lane: 3 },
    { time: beatToMs(207, 170), lane: 2 }, { time: beatToMs(207.25, 170), lane: 0 }, { time: beatToMs(207.5, 170), lane: 3 }, { time: beatToMs(207.75, 170), lane: 1 },
    { time: beatToMs(208, 170), lane: 0 }, { time: beatToMs(208.125, 170), lane: 1 }, { time: beatToMs(208.25, 170), lane: 2 }, { time: beatToMs(208.375, 170), lane: 3 },
    { time: beatToMs(209, 170), lane: 1 }, { time: beatToMs(209.5, 170), lane: 2 }, { time: beatToMs(210, 170), lane: 0 }, { time: beatToMs(210.5, 170), lane: 3 },
    
    { time: beatToMs(211, 170), lane: 0 }, { time: beatToMs(211.25, 170), lane: 2 }, { time: beatToMs(211.75, 170), lane: 1 }, { time: beatToMs(212, 170), lane: 3 },
    { time: beatToMs(213, 170), lane: 2 }, { time: beatToMs(213.5, 170), lane: 0 }, { time: beatToMs(214, 170), lane: 3 }, { time: beatToMs(214.5, 170), lane: 1 },
    { time: beatToMs(215, 170), lane: 0 }, { time: beatToMs(215.25, 170), lane: 1 }, { time: beatToMs(215.75, 170), lane: 2 }, { time: beatToMs(216, 170), lane: 3 },
    { time: beatToMs(217, 170), lane: 1 }, { time: beatToMs(217.5, 170), lane: 2 }, { time: beatToMs(218, 170), lane: 0 }, { time: beatToMs(218.5, 170), lane: 3 },
    
    // Breakdown section (32 bars)
    { time: beatToMs(220, 170), lane: 0 }, { time: beatToMs(222, 170), lane: 2 }, { time: beatToMs(224, 170), lane: 1 }, { time: beatToMs(226, 170), lane: 3 },
    { time: beatToMs(228, 170), lane: 2 }, { time: beatToMs(230, 170), lane: 0 }, { time: beatToMs(232, 170), lane: 3 }, { time: beatToMs(234, 170), lane: 1 },
    { time: beatToMs(236, 170), lane: 0 }, { time: beatToMs(236.5, 170), lane: 1 }, { time: beatToMs(237, 170), lane: 2 }, { time: beatToMs(237.5, 170), lane: 3 },
    { time: beatToMs(238, 170), lane: 2 }, { time: beatToMs(238.5, 170), lane: 0 }, { time: beatToMs(239, 170), lane: 3 }, { time: beatToMs(239.5, 170), lane: 1 },
    
    { time: beatToMs(240, 170), lane: 0 }, { time: beatToMs(240.25, 170), lane: 1 }, { time: beatToMs(240.5, 170), lane: 2 }, { time: beatToMs(240.75, 170), lane: 3 },
    { time: beatToMs(241, 170), lane: 2 }, { time: beatToMs(241.5, 170), lane: 0 }, { time: beatToMs(242, 170), lane: 1 }, { time: beatToMs(242.5, 170), lane: 3 },
    { time: beatToMs(243, 170), lane: 0 }, { time: beatToMs(243.25, 170), lane: 3 }, { time: beatToMs(243.5, 170), lane: 1 }, { time: beatToMs(243.75, 170), lane: 2 },
    { time: beatToMs(244, 170), lane: 3 }, { time: beatToMs(244.5, 170), lane: 1 }, { time: beatToMs(245, 170), lane: 0 }, { time: beatToMs(245.5, 170), lane: 2 },
    
    // Buildup to finale (32 bars)
    { time: beatToMs(246, 170), lane: 0 }, { time: beatToMs(246.125, 170), lane: 1 }, { time: beatToMs(246.25, 170), lane: 2 }, { time: beatToMs(246.375, 170), lane: 3 },
    { time: beatToMs(247, 170), lane: 2 }, { time: beatToMs(247.5, 170), lane: 0 }, { time: beatToMs(248, 170), lane: 1 }, { time: beatToMs(248.5, 170), lane: 3 },
    { time: beatToMs(249, 170), lane: 0 }, { time: beatToMs(249.125, 170), lane: 3 }, { time: beatToMs(249.25, 170), lane: 1 }, { time: beatToMs(249.375, 170), lane: 2 },
    { time: beatToMs(250, 170), lane: 3 }, { time: beatToMs(250.5, 170), lane: 1 }, { time: beatToMs(251, 170), lane: 0 }, { time: beatToMs(251.5, 170), lane: 2 },
    
    { time: beatToMs(252, 170), lane: 0 }, { time: beatToMs(252.25, 170), lane: 2 }, { time: beatToMs(252.75, 170), lane: 1 }, { time: beatToMs(253, 170), lane: 3 },
    { time: beatToMs(254, 170), lane: 2 }, { time: beatToMs(254.5, 170), lane: 0 }, { time: beatToMs(255, 170), lane: 3 }, { time: beatToMs(255.5, 170), lane: 1 },
    { time: beatToMs(256, 170), lane: 0 }, { time: beatToMs(256.125, 170), lane: 1 }, { time: beatToMs(256.25, 170), lane: 2 }, { time: beatToMs(256.375, 170), lane: 3 },
    { time: beatToMs(257, 170), lane: 1 }, { time: beatToMs(257.5, 170), lane: 2 }, { time: beatToMs(258, 170), lane: 0 }, { time: beatToMs(258.5, 170), lane: 3 },
    
    // Grand finale (64 bars to end)
    { time: beatToMs(260, 170), lane: 0 }, { time: beatToMs(260.125, 170), lane: 1 }, { time: beatToMs(260.25, 170), lane: 2 }, { time: beatToMs(260.375, 170), lane: 3 },
    { time: beatToMs(260.5, 170), lane: 2 }, { time: beatToMs(260.625, 170), lane: 1 }, { time: beatToMs(260.75, 170), lane: 0 }, { time: beatToMs(260.875, 170), lane: 3 },
    { time: beatToMs(261, 170), lane: 1 }, { time: beatToMs(261.125, 170), lane: 2 }, { time: beatToMs(261.25, 170), lane: 0 }, { time: beatToMs(261.375, 170), lane: 3 },
    { time: beatToMs(261.5, 170), lane: 2 }, { time: beatToMs(261.625, 170), lane: 1 }, { time: beatToMs(261.75, 170), lane: 0 }, { time: beatToMs(261.875, 170), lane: 3 },
    
    { time: beatToMs(262, 170), lane: 0 }, { time: beatToMs(262.25, 170), lane: 2 }, { time: beatToMs(262.5, 170), lane: 1 }, { time: beatToMs(262.75, 170), lane: 3 },
    { time: beatToMs(263, 170), lane: 2 }, { time: beatToMs(263.25, 170), lane: 0 }, { time: beatToMs(263.5, 170), lane: 3 }, { time: beatToMs(263.75, 170), lane: 1 },
    { time: beatToMs(264, 170), lane: 0 }, { time: beatToMs(264.125, 170), lane: 1 }, { time: beatToMs(264.25, 170), lane: 2 }, { time: beatToMs(264.375, 170), lane: 3 },
    { time: beatToMs(265, 170), lane: 1 }, { time: beatToMs(265.5, 170), lane: 2 }, { time: beatToMs(266, 170), lane: 0 }, { time: beatToMs(266.5, 170), lane: 3 },
    
    // Continuous patterns to beat 450+ (about 3 minutes)
    { time: beatToMs(270, 170), lane: 0 }, { time: beatToMs(272, 170), lane: 2 }, { time: beatToMs(274, 170), lane: 1 }, { time: beatToMs(276, 170), lane: 3 },
    { time: beatToMs(278, 170), lane: 2 }, { time: beatToMs(280, 170), lane: 0 }, { time: beatToMs(282, 170), lane: 3 }, { time: beatToMs(284, 170), lane: 1 },
    { time: beatToMs(286, 170), lane: 0 }, { time: beatToMs(288, 170), lane: 2 }, { time: beatToMs(290, 170), lane: 1 }, { time: beatToMs(292, 170), lane: 3 },
    { time: beatToMs(294, 170), lane: 2 }, { time: beatToMs(296, 170), lane: 0 }, { time: beatToMs(298, 170), lane: 3 }, { time: beatToMs(300, 170), lane: 1 },
    
    { time: beatToMs(302, 170), lane: 0 }, { time: beatToMs(304, 170), lane: 2 }, { time: beatToMs(306, 170), lane: 1 }, { time: beatToMs(308, 170), lane: 3 },
    { time: beatToMs(310, 170), lane: 2 }, { time: beatToMs(312, 170), lane: 0 }, { time: beatToMs(314, 170), lane: 3 }, { time: beatToMs(316, 170), lane: 1 },
    { time: beatToMs(318, 170), lane: 0 }, { time: beatToMs(320, 170), lane: 2 }, { time: beatToMs(322, 170), lane: 1 }, { time: beatToMs(324, 170), lane: 3 },
    { time: beatToMs(326, 170), lane: 2 }, { time: beatToMs(328, 170), lane: 0 }, { time: beatToMs(330, 170), lane: 3 }, { time: beatToMs(332, 170), lane: 1 },
    
    // Extended patterns to beat 400+
    { time: beatToMs(334, 170), lane: 0 }, { time: beatToMs(334.5, 170), lane: 1 }, { time: beatToMs(335, 170), lane: 2 }, { time: beatToMs(335.5, 170), lane: 3 },
    { time: beatToMs(336, 170), lane: 2 }, { time: beatToMs(336.5, 170), lane: 0 }, { time: beatToMs(337, 170), lane: 3 }, { time: beatToMs(337.5, 170), lane: 1 },
    { time: beatToMs(338, 170), lane: 0 }, { time: beatToMs(338.5, 170), lane: 2 }, { time: beatToMs(339, 170), lane: 1 }, { time: beatToMs(339.5, 170), lane: 3 },
    { time: beatToMs(340, 170), lane: 2 }, { time: beatToMs(340.5, 170), lane: 0 }, { time: beatToMs(341, 170), lane: 3 }, { time: beatToMs(341.5, 170), lane: 1 },
    
    { time: beatToMs(342, 170), lane: 0 }, { time: beatToMs(344, 170), lane: 2 }, { time: beatToMs(346, 170), lane: 1 }, { time: beatToMs(348, 170), lane: 3 },
    { time: beatToMs(350, 170), lane: 2 }, { time: beatToMs(352, 170), lane: 0 }, { time: beatToMs(354, 170), lane: 3 }, { time: beatToMs(356, 170), lane: 1 },
    { time: beatToMs(358, 170), lane: 0 }, { time: beatToMs(360, 170), lane: 2 }, { time: beatToMs(362, 170), lane: 1 }, { time: beatToMs(364, 170), lane: 3 },
    { time: beatToMs(366, 170), lane: 2 }, { time: beatToMs(368, 170), lane: 0 }, { time: beatToMs(370, 170), lane: 3 }, { time: beatToMs(372, 170), lane: 1 },
    
    { time: beatToMs(374, 170), lane: 0 }, { time: beatToMs(376, 170), lane: 2 }, { time: beatToMs(378, 170), lane: 1 }, { time: beatToMs(380, 170), lane: 3 },
    { time: beatToMs(382, 170), lane: 2 }, { time: beatToMs(384, 170), lane: 0 }, { time: beatToMs(386, 170), lane: 3 }, { time: beatToMs(388, 170), lane: 1 },
    { time: beatToMs(390, 170), lane: 0 }, { time: beatToMs(392, 170), lane: 2 }, { time: beatToMs(394, 170), lane: 1 }, { time: beatToMs(396, 170), lane: 3 },
    { time: beatToMs(398, 170), lane: 2 }, { time: beatToMs(400, 170), lane: 0 }, { time: beatToMs(402, 170), lane: 3 }, { time: beatToMs(404, 170), lane: 1 },
    
    // Final climax section extending to beat 450+ (about 3 minutes)
    { time: beatToMs(406, 170), lane: 0 }, { time: beatToMs(408, 170), lane: 2 }, { time: beatToMs(410, 170), lane: 1 }, { time: beatToMs(412, 170), lane: 3 },
    { time: beatToMs(414, 170), lane: 2 }, { time: beatToMs(416, 170), lane: 0 }, { time: beatToMs(418, 170), lane: 3 }, { time: beatToMs(420, 170), lane: 1 },
    { time: beatToMs(422, 170), lane: 0 }, { time: beatToMs(424, 170), lane: 2 }, { time: beatToMs(426, 170), lane: 1 }, { time: beatToMs(428, 170), lane: 3 },
    { time: beatToMs(430, 170), lane: 2 }, { time: beatToMs(432, 170), lane: 0 }, { time: beatToMs(434, 170), lane: 3 }, { time: beatToMs(436, 170), lane: 1 },
    
    { time: beatToMs(438, 170), lane: 0 }, { time: beatToMs(440, 170), lane: 2 }, { time: beatToMs(442, 170), lane: 1 }, { time: beatToMs(444, 170), lane: 3 },
    { time: beatToMs(446, 170), lane: 2 }, { time: beatToMs(448, 170), lane: 0 }, { time: beatToMs(450, 170), lane: 3 }, { time: beatToMs(452, 170), lane: 1 },
    
    // Outro (final notes)
    { time: beatToMs(454, 170), lane: 0 }, { time: beatToMs(456, 170), lane: 2 }, { time: beatToMs(458, 170), lane: 1 }, { time: beatToMs(460, 170), lane: 3 },
    { time: beatToMs(462, 170), lane: 2 }, { time: beatToMs(464, 170), lane: 0 }, { time: beatToMs(466, 170), lane: 3 }, { time: beatToMs(468, 170), lane: 1 },
    { time: beatToMs(470, 170), lane: 0 }
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
    
    // Extended sections to cover full song length
    { time: beatToMs(88, 185), lane: 0 }, { time: beatToMs(90, 185), lane: 2 }, { time: beatToMs(92, 185), lane: 1 }, { time: beatToMs(94, 185), lane: 3 },
    { time: beatToMs(96, 185), lane: 2 }, { time: beatToMs(98, 185), lane: 0 }, { time: beatToMs(100, 185), lane: 3 }, { time: beatToMs(102, 185), lane: 1 },
    { time: beatToMs(104, 185), lane: 0 }, { time: beatToMs(106, 185), lane: 2 }, { time: beatToMs(108, 185), lane: 1 }, { time: beatToMs(110, 185), lane: 3 },
    { time: beatToMs(112, 185), lane: 2 }, { time: beatToMs(114, 185), lane: 0 }, { time: beatToMs(116, 185), lane: 3 }, { time: beatToMs(118, 185), lane: 1 },
    
    // Verse 3 (64 bars)
    { time: beatToMs(120, 185), lane: 0 }, { time: beatToMs(120.25, 185), lane: 1 }, { time: beatToMs(120.5, 185), lane: 2 }, { time: beatToMs(120.75, 185), lane: 3 },
    { time: beatToMs(121, 185), lane: 2 }, { time: beatToMs(121.5, 185), lane: 0 }, { time: beatToMs(122, 185), lane: 1 }, { time: beatToMs(122.5, 185), lane: 3 },
    { time: beatToMs(123, 185), lane: 0 }, { time: beatToMs(123.25, 185), lane: 3 }, { time: beatToMs(123.5, 185), lane: 1 }, { time: beatToMs(123.75, 185), lane: 2 },
    { time: beatToMs(124, 185), lane: 3 }, { time: beatToMs(124.5, 185), lane: 1 }, { time: beatToMs(125, 185), lane: 0 }, { time: beatToMs(125.5, 185), lane: 2 },
    
    { time: beatToMs(126, 185), lane: 0 }, { time: beatToMs(126.0625, 185), lane: 1 }, { time: beatToMs(126.125, 185), lane: 2 }, { time: beatToMs(126.1875, 185), lane: 3 },
    { time: beatToMs(127, 185), lane: 2 }, { time: beatToMs(127.5, 185), lane: 0 }, { time: beatToMs(128, 185), lane: 3 }, { time: beatToMs(128.5, 185), lane: 1 },
    { time: beatToMs(129, 185), lane: 0 }, { time: beatToMs(129.0625, 185), lane: 3 }, { time: beatToMs(129.125, 185), lane: 1 }, { time: beatToMs(129.1875, 185), lane: 2 },
    { time: beatToMs(130, 185), lane: 3 }, { time: beatToMs(130.5, 185), lane: 1 }, { time: beatToMs(131, 185), lane: 0 }, { time: beatToMs(131.5, 185), lane: 2 },
    
    // Chorus 3 with technical patterns (64 bars)
    { time: beatToMs(132, 185), lane: 0 }, { time: beatToMs(132.03125, 185), lane: 2 }, { time: beatToMs(132.0625, 185), lane: 1 }, { time: beatToMs(132.09375, 185), lane: 3 },
    { time: beatToMs(132.125, 185), lane: 0 }, { time: beatToMs(132.15625, 185), lane: 2 }, { time: beatToMs(132.1875, 185), lane: 1 }, { time: beatToMs(132.21875, 185), lane: 3 },
    { time: beatToMs(133, 185), lane: 2 }, { time: beatToMs(133.5, 185), lane: 0 }, { time: beatToMs(134, 185), lane: 3 }, { time: beatToMs(134.5, 185), lane: 1 },
    { time: beatToMs(135, 185), lane: 0 }, { time: beatToMs(135.0625, 185), lane: 1 }, { time: beatToMs(135.125, 185), lane: 2 }, { time: beatToMs(135.1875, 185), lane: 3 },
    
    { time: beatToMs(136, 185), lane: 1 }, { time: beatToMs(136.25, 185), lane: 2 }, { time: beatToMs(136.5, 185), lane: 0 }, { time: beatToMs(136.75, 185), lane: 3 },
    { time: beatToMs(137, 185), lane: 2 }, { time: beatToMs(137.25, 185), lane: 1 }, { time: beatToMs(137.5, 185), lane: 0 }, { time: beatToMs(137.75, 185), lane: 3 },
    { time: beatToMs(138, 185), lane: 0 }, { time: beatToMs(138.03125, 185), lane: 2 }, { time: beatToMs(138.0625, 185), lane: 1 }, { time: beatToMs(138.09375, 185), lane: 3 },
    { time: beatToMs(139, 185), lane: 2 }, { time: beatToMs(139.25, 185), lane: 0 }, { time: beatToMs(139.5, 185), lane: 3 }, { time: beatToMs(139.75, 185), lane: 1 },
    
    // Extended patterns continuing to beat 350+
    { time: beatToMs(140, 185), lane: 0 }, { time: beatToMs(142, 185), lane: 2 }, { time: beatToMs(144, 185), lane: 1 }, { time: beatToMs(146, 185), lane: 3 },
    { time: beatToMs(148, 185), lane: 2 }, { time: beatToMs(150, 185), lane: 0 }, { time: beatToMs(152, 185), lane: 3 }, { time: beatToMs(154, 185), lane: 1 },
    { time: beatToMs(156, 185), lane: 0 }, { time: beatToMs(158, 185), lane: 2 }, { time: beatToMs(160, 185), lane: 1 }, { time: beatToMs(162, 185), lane: 3 },
    { time: beatToMs(164, 185), lane: 2 }, { time: beatToMs(166, 185), lane: 0 }, { time: beatToMs(168, 185), lane: 3 }, { time: beatToMs(170, 185), lane: 1 },
    
    { time: beatToMs(172, 185), lane: 0 }, { time: beatToMs(174, 185), lane: 2 }, { time: beatToMs(176, 185), lane: 1 }, { time: beatToMs(178, 185), lane: 3 },
    { time: beatToMs(180, 185), lane: 2 }, { time: beatToMs(182, 185), lane: 0 }, { time: beatToMs(184, 185), lane: 3 }, { time: beatToMs(186, 185), lane: 1 },
    { time: beatToMs(188, 185), lane: 0 }, { time: beatToMs(190, 185), lane: 2 }, { time: beatToMs(192, 185), lane: 1 }, { time: beatToMs(194, 185), lane: 3 },
    { time: beatToMs(196, 185), lane: 2 }, { time: beatToMs(198, 185), lane: 0 }, { time: beatToMs(200, 185), lane: 3 }, { time: beatToMs(202, 185), lane: 1 },
    
    { time: beatToMs(204, 185), lane: 0 }, { time: beatToMs(206, 185), lane: 2 }, { time: beatToMs(208, 185), lane: 1 }, { time: beatToMs(210, 185), lane: 3 },
    { time: beatToMs(212, 185), lane: 2 }, { time: beatToMs(214, 185), lane: 0 }, { time: beatToMs(216, 185), lane: 3 }, { time: beatToMs(218, 185), lane: 1 },
    { time: beatToMs(220, 185), lane: 0 }, { time: beatToMs(222, 185), lane: 2 }, { time: beatToMs(224, 185), lane: 1 }, { time: beatToMs(226, 185), lane: 3 },
    { time: beatToMs(228, 185), lane: 2 }, { time: beatToMs(230, 185), lane: 0 }, { time: beatToMs(232, 185), lane: 3 }, { time: beatToMs(234, 185), lane: 1 },
    
    { time: beatToMs(236, 185), lane: 0 }, { time: beatToMs(238, 185), lane: 2 }, { time: beatToMs(240, 185), lane: 1 }, { time: beatToMs(242, 185), lane: 3 },
    { time: beatToMs(244, 185), lane: 2 }, { time: beatToMs(246, 185), lane: 0 }, { time: beatToMs(248, 185), lane: 3 }, { time: beatToMs(250, 185), lane: 1 },
    { time: beatToMs(252, 185), lane: 0 }, { time: beatToMs(254, 185), lane: 2 }, { time: beatToMs(256, 185), lane: 1 }, { time: beatToMs(258, 185), lane: 3 },
    { time: beatToMs(260, 185), lane: 2 }, { time: beatToMs(262, 185), lane: 0 }, { time: beatToMs(264, 185), lane: 3 }, { time: beatToMs(266, 185), lane: 1 },
    
    { time: beatToMs(268, 185), lane: 0 }, { time: beatToMs(270, 185), lane: 2 }, { time: beatToMs(272, 185), lane: 1 }, { time: beatToMs(274, 185), lane: 3 },
    { time: beatToMs(276, 185), lane: 2 }, { time: beatToMs(278, 185), lane: 0 }, { time: beatToMs(280, 185), lane: 3 }, { time: beatToMs(282, 185), lane: 1 },
    { time: beatToMs(284, 185), lane: 0 }, { time: beatToMs(286, 185), lane: 2 }, { time: beatToMs(288, 185), lane: 1 }, { time: beatToMs(290, 185), lane: 3 },
    { time: beatToMs(292, 185), lane: 2 }, { time: beatToMs(294, 185), lane: 0 }, { time: beatToMs(296, 185), lane: 3 }, { time: beatToMs(298, 185), lane: 1 },
    
    { time: beatToMs(300, 185), lane: 0 }, { time: beatToMs(302, 185), lane: 2 }, { time: beatToMs(304, 185), lane: 1 }, { time: beatToMs(306, 185), lane: 3 },
    { time: beatToMs(308, 185), lane: 2 }, { time: beatToMs(310, 185), lane: 0 }, { time: beatToMs(312, 185), lane: 3 }, { time: beatToMs(314, 185), lane: 1 },
    { time: beatToMs(316, 185), lane: 0 }, { time: beatToMs(318, 185), lane: 2 }, { time: beatToMs(320, 185), lane: 1 }, { time: beatToMs(322, 185), lane: 3 },
    { time: beatToMs(324, 185), lane: 2 }, { time: beatToMs(326, 185), lane: 0 }, { time: beatToMs(328, 185), lane: 3 }, { time: beatToMs(330, 185), lane: 1 },
    
    { time: beatToMs(332, 185), lane: 0 }, { time: beatToMs(334, 185), lane: 2 }, { time: beatToMs(336, 185), lane: 1 }, { time: beatToMs(338, 185), lane: 3 },
    { time: beatToMs(340, 185), lane: 2 }, { time: beatToMs(342, 185), lane: 0 }, { time: beatToMs(344, 185), lane: 3 }, { time: beatToMs(346, 185), lane: 1 },
    { time: beatToMs(348, 185), lane: 0 }, { time: beatToMs(350, 185), lane: 2 }, { time: beatToMs(352, 185), lane: 1 }, { time: beatToMs(354, 185), lane: 3 },
    { time: beatToMs(356, 185), lane: 2 }, { time: beatToMs(358, 185), lane: 0 }, { time: beatToMs(360, 185), lane: 3 }, { time: beatToMs(362, 185), lane: 1 },
    
    { time: beatToMs(364, 185), lane: 0 }, { time: beatToMs(366, 185), lane: 2 }, { time: beatToMs(368, 185), lane: 1 }, { time: beatToMs(370, 185), lane: 3 },
    { time: beatToMs(372, 185), lane: 2 }, { time: beatToMs(374, 185), lane: 0 }, { time: beatToMs(376, 185), lane: 3 }, { time: beatToMs(378, 185), lane: 1 },
    { time: beatToMs(380, 185), lane: 0 }, { time: beatToMs(382, 185), lane: 2 }, { time: beatToMs(384, 185), lane: 1 }, { time: beatToMs(386, 185), lane: 3 },
    { time: beatToMs(388, 185), lane: 2 }, { time: beatToMs(390, 185), lane: 0 }, { time: beatToMs(392, 185), lane: 3 }, { time: beatToMs(394, 185), lane: 1 },
    
    // Final outro
    { time: beatToMs(396, 185), lane: 0 }, { time: beatToMs(398, 185), lane: 2 }, { time: beatToMs(400, 185), lane: 1 }, { time: beatToMs(402, 185), lane: 3 }
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
    
    // Extended Master difficulty to full song length  
    { time: beatToMs(63, 210), lane: 0 }, { time: beatToMs(65, 210), lane: 2 }, { time: beatToMs(67, 210), lane: 1 }, { time: beatToMs(69, 210), lane: 3 },
    { time: beatToMs(71, 210), lane: 2 }, { time: beatToMs(73, 210), lane: 0 }, { time: beatToMs(75, 210), lane: 3 }, { time: beatToMs(77, 210), lane: 1 },
    { time: beatToMs(79, 210), lane: 0 }, { time: beatToMs(81, 210), lane: 2 }, { time: beatToMs(83, 210), lane: 1 }, { time: beatToMs(85, 210), lane: 3 },
    { time: beatToMs(87, 210), lane: 2 }, { time: beatToMs(89, 210), lane: 0 }, { time: beatToMs(91, 210), lane: 3 }, { time: beatToMs(93, 210), lane: 1 },
    
    // Continued extreme patterns (120+ bars)
    { time: beatToMs(95, 210), lane: 0 }, { time: beatToMs(95.015625, 210), lane: 1 }, { time: beatToMs(95.03125, 210), lane: 2 }, { time: beatToMs(95.046875, 210), lane: 3 },
    { time: beatToMs(95.0625, 210), lane: 2 }, { time: beatToMs(95.078125, 210), lane: 1 }, { time: beatToMs(95.09375, 210), lane: 0 }, { time: beatToMs(95.109375, 210), lane: 3 },
    { time: beatToMs(96, 210), lane: 1 }, { time: beatToMs(96.25, 210), lane: 2 }, { time: beatToMs(96.5, 210), lane: 0 }, { time: beatToMs(96.75, 210), lane: 3 },
    { time: beatToMs(97, 210), lane: 2 }, { time: beatToMs(97.015625, 210), lane: 1 }, { time: beatToMs(97.03125, 210), lane: 0 }, { time: beatToMs(97.046875, 210), lane: 3 },
    
    { time: beatToMs(98, 210), lane: 0 }, { time: beatToMs(98.25, 210), lane: 1 }, { time: beatToMs(98.5, 210), lane: 2 }, { time: beatToMs(98.75, 210), lane: 3 },
    { time: beatToMs(99, 210), lane: 2 }, { time: beatToMs(99.25, 210), lane: 1 }, { time: beatToMs(99.5, 210), lane: 0 }, { time: beatToMs(99.75, 210), lane: 3 },
    { time: beatToMs(100, 210), lane: 1 }, { time: beatToMs(100.015625, 210), lane: 2 }, { time: beatToMs(100.03125, 210), lane: 0 }, { time: beatToMs(100.046875, 210), lane: 3 },
    { time: beatToMs(101, 210), lane: 2 }, { time: beatToMs(101.25, 210), lane: 1 }, { time: beatToMs(101.5, 210), lane: 0 }, { time: beatToMs(101.75, 210), lane: 3 },
    
    // Additional extreme patterns continuing 
    { time: beatToMs(102, 210), lane: 0 }, { time: beatToMs(104, 210), lane: 2 }, { time: beatToMs(106, 210), lane: 1 }, { time: beatToMs(108, 210), lane: 3 },
    { time: beatToMs(110, 210), lane: 2 }, { time: beatToMs(112, 210), lane: 0 }, { time: beatToMs(114, 210), lane: 3 }, { time: beatToMs(116, 210), lane: 1 },
    { time: beatToMs(118, 210), lane: 0 }, { time: beatToMs(120, 210), lane: 2 }, { time: beatToMs(122, 210), lane: 1 }, { time: beatToMs(124, 210), lane: 3 },
    { time: beatToMs(126, 210), lane: 2 }, { time: beatToMs(128, 210), lane: 0 }, { time: beatToMs(130, 210), lane: 3 }, { time: beatToMs(132, 210), lane: 1 },
    
    { time: beatToMs(134, 210), lane: 0 }, { time: beatToMs(136, 210), lane: 2 }, { time: beatToMs(138, 210), lane: 1 }, { time: beatToMs(140, 210), lane: 3 },
    { time: beatToMs(142, 210), lane: 2 }, { time: beatToMs(144, 210), lane: 0 }, { time: beatToMs(146, 210), lane: 3 }, { time: beatToMs(148, 210), lane: 1 },
    { time: beatToMs(150, 210), lane: 0 }, { time: beatToMs(152, 210), lane: 2 }, { time: beatToMs(154, 210), lane: 1 }, { time: beatToMs(156, 210), lane: 3 },
    { time: beatToMs(158, 210), lane: 2 }, { time: beatToMs(160, 210), lane: 0 }, { time: beatToMs(162, 210), lane: 3 }, { time: beatToMs(164, 210), lane: 1 },
    
    { time: beatToMs(166, 210), lane: 0 }, { time: beatToMs(168, 210), lane: 2 }, { time: beatToMs(170, 210), lane: 1 }, { time: beatToMs(172, 210), lane: 3 },
    { time: beatToMs(174, 210), lane: 2 }, { time: beatToMs(176, 210), lane: 0 }, { time: beatToMs(178, 210), lane: 3 }, { time: beatToMs(180, 210), lane: 1 },
    { time: beatToMs(182, 210), lane: 0 }, { time: beatToMs(184, 210), lane: 2 }, { time: beatToMs(186, 210), lane: 1 }, { time: beatToMs(188, 210), lane: 3 },
    { time: beatToMs(190, 210), lane: 2 }, { time: beatToMs(192, 210), lane: 0 }, { time: beatToMs(194, 210), lane: 3 }, { time: beatToMs(196, 210), lane: 1 },
    
    { time: beatToMs(198, 210), lane: 0 }, { time: beatToMs(200, 210), lane: 2 }, { time: beatToMs(202, 210), lane: 1 }, { time: beatToMs(204, 210), lane: 3 },
    { time: beatToMs(206, 210), lane: 2 }, { time: beatToMs(208, 210), lane: 0 }, { time: beatToMs(210, 210), lane: 3 }, { time: beatToMs(212, 210), lane: 1 },
    { time: beatToMs(214, 210), lane: 0 }, { time: beatToMs(216, 210), lane: 2 }, { time: beatToMs(218, 210), lane: 1 }, { time: beatToMs(220, 210), lane: 3 },
    { time: beatToMs(222, 210), lane: 2 }, { time: beatToMs(224, 210), lane: 0 }, { time: beatToMs(226, 210), lane: 3 }, { time: beatToMs(228, 210), lane: 1 },
    
    { time: beatToMs(230, 210), lane: 0 }, { time: beatToMs(232, 210), lane: 2 }, { time: beatToMs(234, 210), lane: 1 }, { time: beatToMs(236, 210), lane: 3 },
    { time: beatToMs(238, 210), lane: 2 }, { time: beatToMs(240, 210), lane: 0 }, { time: beatToMs(242, 210), lane: 3 }, { time: beatToMs(244, 210), lane: 1 },
    { time: beatToMs(246, 210), lane: 0 }, { time: beatToMs(248, 210), lane: 2 }, { time: beatToMs(250, 210), lane: 1 }, { time: beatToMs(252, 210), lane: 3 },
    { time: beatToMs(254, 210), lane: 2 }, { time: beatToMs(256, 210), lane: 0 }, { time: beatToMs(258, 210), lane: 3 }, { time: beatToMs(260, 210), lane: 1 },
    
    { time: beatToMs(262, 210), lane: 0 }, { time: beatToMs(264, 210), lane: 2 }, { time: beatToMs(266, 210), lane: 1 }, { time: beatToMs(268, 210), lane: 3 },
    { time: beatToMs(270, 210), lane: 2 }, { time: beatToMs(272, 210), lane: 0 }, { time: beatToMs(274, 210), lane: 3 }, { time: beatToMs(276, 210), lane: 1 },
    { time: beatToMs(278, 210), lane: 0 }, { time: beatToMs(280, 210), lane: 2 }, { time: beatToMs(282, 210), lane: 1 }, { time: beatToMs(284, 210), lane: 3 },
    { time: beatToMs(286, 210), lane: 2 }, { time: beatToMs(288, 210), lane: 0 }, { time: beatToMs(290, 210), lane: 3 }, { time: beatToMs(292, 210), lane: 1 },
    
    { time: beatToMs(294, 210), lane: 0 }, { time: beatToMs(296, 210), lane: 2 }, { time: beatToMs(298, 210), lane: 1 }, { time: beatToMs(300, 210), lane: 3 },
    { time: beatToMs(302, 210), lane: 2 }, { time: beatToMs(304, 210), lane: 0 }, { time: beatToMs(306, 210), lane: 3 }, { time: beatToMs(308, 210), lane: 1 },
    { time: beatToMs(310, 210), lane: 0 }, { time: beatToMs(312, 210), lane: 2 }, { time: beatToMs(314, 210), lane: 1 }, { time: beatToMs(316, 210), lane: 3 },
    { time: beatToMs(318, 210), lane: 2 }, { time: beatToMs(320, 210), lane: 0 }, { time: beatToMs(322, 210), lane: 3 }, { time: beatToMs(324, 210), lane: 1 },
    
    // Final outro
    { time: beatToMs(326, 210), lane: 0 }, { time: beatToMs(328, 210), lane: 2 }, { time: beatToMs(330, 210), lane: 1 }, { time: beatToMs(332, 210), lane: 3 }
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