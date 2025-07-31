import { sql } from 'drizzle-orm';
import {
  index,
  integer,
  jsonb,
  pgTable,
  serial,
  timestamp,
  varchar,
  boolean,
  text,
  real,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { z } from "zod";

// Session storage table for Replit Auth
export const sessions = pgTable(
  "sessions",
  {
    sid: varchar("sid").primaryKey(),
    sess: jsonb("sess").notNull(),
    expire: timestamp("expire").notNull(),
  },
  (table) => [index("IDX_session_expire").on(table.expire)],
);

// User table with progression system
export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: varchar("email").unique(),
  firstName: varchar("first_name"),
  lastName: varchar("last_name"),
  profileImageUrl: varchar("profile_image_url"),
  
  // Progression system
  level: integer("level").default(1).notNull(),
  experience: integer("experience").default(0).notNull(),
  totalScore: integer("total_score").default(0).notNull(),
  songsPlayed: integer("songs_played").default(0).notNull(),
  
  // Unlocked characters (stored as array of character IDs)
  unlockedCharacters: text("unlocked_characters").array().default(['ivy']).notNull(),
  selectedCharacter: varchar("selected_character").default('ivy').notNull(),
  
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// High scores table
export const highScores = pgTable("high_scores", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id").references(() => users.id).notNull(),
  songTitle: varchar("song_title").notNull(),
  difficulty: varchar("difficulty").notNull(),
  character: varchar("character").notNull(),
  score: integer("score").notNull(),
  accuracy: real("accuracy").notNull(),
  combo: integer("combo").notNull(),
  grade: varchar("grade").notNull(),
  passed: boolean("passed").notNull(),
  experience: integer("experience").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Relations
export const usersRelations = relations(users, ({ many }) => ({
  highScores: many(highScores),
}));

export const highScoresRelations = relations(highScores, ({ one }) => ({
  user: one(users, {
    fields: [highScores.userId],
    references: [users.id],
  }),
}));

// Types for Replit Auth
export type UpsertUser = typeof users.$inferInsert;
export type User = typeof users.$inferSelect;

// Types for high scores
export type InsertHighScore = typeof highScores.$inferInsert;
export type HighScore = typeof highScores.$inferSelect;

// Character unlock levels
export const CHARACTER_UNLOCK_LEVELS = {
  ivy: 1,      // Starting character
  scal: 5,     // Level 5
  lightren: 10, // Level 10
  winter: 20,   // Level 20
} as const;

// Experience calculation
export const calculateExperience = (score: number, accuracy: number, difficulty: string, passed: boolean): number => {
  let baseExp = Math.floor(score / 1000); // 1 EXP per 1000 points
  
  // Difficulty multipliers
  const difficultyMultipliers = {
    'Easy': 1.0,
    'Normal': 1.2,
    'Hard': 1.5,
    'Expert': 2.0,
    'Master': 2.5,
  };
  
  baseExp *= (difficultyMultipliers[difficulty as keyof typeof difficultyMultipliers] || 1.0);
  
  // Accuracy bonus
  if (accuracy >= 95) baseExp *= 1.5;
  else if (accuracy >= 85) baseExp *= 1.3;
  else if (accuracy >= 70) baseExp *= 1.1;
  
  // Pass bonus
  if (passed) baseExp *= 1.2;
  
  return Math.floor(baseExp);
};

// Level calculation
export const calculateLevel = (experience: number): number => {
  // Level formula: Level = floor(sqrt(experience / 100)) + 1
  // This means: Level 1 = 0-99 EXP, Level 2 = 100-399 EXP, Level 3 = 400-899 EXP, etc.
  return Math.floor(Math.sqrt(experience / 100)) + 1;
};

// Experience needed for next level
export const experienceToNextLevel = (currentLevel: number): number => {
  return (currentLevel * currentLevel) * 100;
};
