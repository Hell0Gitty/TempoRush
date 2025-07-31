export interface GameConfig {
  noteSpeed: number;
  laneCount: number;
  hitZoneHeight: number;
  perfectHitRange: number;
  goodHitRange: number;
}

export interface HitTiming {
  type: 'perfect' | 'good' | 'miss';
  score: number;
  comboMultiplier: number;
}

export interface GameStats {
  totalNotes: number;
  perfectHits: number;
  goodHits: number;
  misses: number;
  maxCombo: number;
  finalScore: number;
  accuracy: number;
}

export type GamePhase = 'ready' | 'playing' | 'ended';

export interface Lane {
  index: number;
  key: string;
  color: string;
  x: number;
  width: number;
}
