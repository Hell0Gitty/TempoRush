import {
  users,
  highScores,
  type User,
  type UpsertUser,
  type InsertHighScore,
  type HighScore,
  CHARACTER_UNLOCK_LEVELS,
  calculateExperience,
  calculateLevel,
  experienceToNextLevel,
} from "@shared/schema";
import { db } from "./db";
import { eq, desc, and } from "drizzle-orm";

// Interface for storage operations
export interface IStorage {
  // User operations for Replit Auth
  getUser(id: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;
  
  // Progression operations
  addExperience(userId: string, experience: number): Promise<User>;
  unlockCharacters(userId: string): Promise<string[]>;
  setSelectedCharacter(userId: string, characterId: string): Promise<User>;
  
  // High score operations
  saveHighScore(highScore: InsertHighScore): Promise<HighScore>;
  getUserHighScores(userId: string): Promise<HighScore[]>;
  getLeaderboard(songTitle: string, difficulty: string): Promise<HighScore[]>;
}

export class DatabaseStorage implements IStorage {
  // User operations for Replit Auth
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .onConflictDoUpdate({
        target: users.id,
        set: {
          ...userData,
          updatedAt: new Date(),
        },
      })
      .returning();
    return user;
  }

  // Progression operations
  async addExperience(userId: string, experience: number): Promise<User> {
    const user = await this.getUser(userId);
    if (!user) throw new Error("User not found");

    const newExperience = user.experience + experience;
    const newLevel = calculateLevel(newExperience);
    const newTotalScore = user.totalScore + Math.floor(experience * 10); // Convert EXP back to rough score
    const newSongsPlayed = user.songsPlayed + 1;

    const [updatedUser] = await db
      .update(users)
      .set({
        experience: newExperience,
        level: newLevel,
        totalScore: newTotalScore,
        songsPlayed: newSongsPlayed,
        updatedAt: new Date(),
      })
      .where(eq(users.id, userId))
      .returning();

    return updatedUser;
  }

  async unlockCharacters(userId: string): Promise<string[]> {
    const user = await this.getUser(userId);
    if (!user) throw new Error("User not found");

    const newUnlockedCharacters = new Set(user.unlockedCharacters);
    
    // Check each character unlock level
    Object.entries(CHARACTER_UNLOCK_LEVELS).forEach(([characterId, requiredLevel]) => {
      if (user.level >= requiredLevel) {
        newUnlockedCharacters.add(characterId);
      }
    });

    const updatedCharacters = Array.from(newUnlockedCharacters);
    
    // Only update if new characters were unlocked
    if (updatedCharacters.length > user.unlockedCharacters.length) {
      await db
        .update(users)
        .set({
          unlockedCharacters: updatedCharacters,
          updatedAt: new Date(),
        })
        .where(eq(users.id, userId));
    }

    return updatedCharacters;
  }

  async setSelectedCharacter(userId: string, characterId: string): Promise<User> {
    const [updatedUser] = await db
      .update(users)
      .set({
        selectedCharacter: characterId,
        updatedAt: new Date(),
      })
      .where(eq(users.id, userId))
      .returning();

    return updatedUser;
  }

  // High score operations
  async saveHighScore(highScoreData: InsertHighScore): Promise<HighScore> {
    const [highScore] = await db
      .insert(highScores)
      .values(highScoreData)
      .returning();
    return highScore;
  }

  async getUserHighScores(userId: string): Promise<HighScore[]> {
    return await db
      .select()
      .from(highScores)
      .where(eq(highScores.userId, userId))
      .orderBy(desc(highScores.createdAt));
  }

  async getLeaderboard(songTitle: string, difficulty: string): Promise<HighScore[]> {
    return await db
      .select()
      .from(highScores)
      .where(and(
        eq(highScores.songTitle, songTitle),
        eq(highScores.difficulty, difficulty)
      ))
      .orderBy(desc(highScores.score))
      .limit(10);
  }
}

export const storage = new DatabaseStorage();