import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { setupAuth, isAuthenticated } from "./replitAuth";
import { calculateExperience, calculateLevel, experienceToNextLevel } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Auth middleware
  await setupAuth(app);

  // Auth routes
  app.get('/api/auth/user', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      
      // Calculate experience to next level
      const expToNext = experienceToNextLevel(user.level);
      const currentLevelExp = user.level === 1 ? 0 : ((user.level - 1) * (user.level - 1)) * 100;
      const expInCurrentLevel = user.experience - currentLevelExp;
      const expNeededForNext = expToNext - currentLevelExp;
      
      res.json({
        ...user,
        expToNext,
        expInCurrentLevel,
        expNeededForNext
      });
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });

  // Save high score and handle progression
  app.post('/api/scores', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { songTitle, difficulty, character, score, accuracy, combo, grade, passed } = req.body;
      
      // Calculate experience earned
      const experience = calculateExperience(score, accuracy, difficulty, passed);
      
      // Save high score only if song was cleared
      let highScore = null;
      if (passed) {
        try {
          highScore = await storage.saveHighScore({
            userId,
            songTitle,
            difficulty,
            character,
            score,
            accuracy,
            combo,
            grade,
            passed,
            experience,
          });
        } catch (error) {
          console.log("Could not save high score (song not cleared)");
        }
      }
      
      // Add experience to user and check for level up
      const oldUser = await storage.getUser(userId);
      const updatedUser = await storage.addExperience(userId, experience);
      const newUnlockedCharacters = await storage.unlockCharacters(userId);
      
      // Check if level increased
      const leveledUp = oldUser && updatedUser.level > oldUser.level;
      const newCharactersUnlocked = newUnlockedCharacters.filter(char => 
        oldUser && !oldUser.unlockedCharacters.includes(char)
      );
      
      res.json({
        highScore,
        user: updatedUser,
        experience,
        leveledUp,
        newCharactersUnlocked,
        unlockedCharacters: newUnlockedCharacters
      });
    } catch (error) {
      console.error("Error saving score:", error);
      res.status(500).json({ message: "Failed to save score" });
    }
  });

  // Get user's high scores
  app.get('/api/scores/user', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const highScores = await storage.getUserHighScores(userId);
      res.json(highScores);
    } catch (error) {
      console.error("Error fetching user scores:", error);
      res.status(500).json({ message: "Failed to fetch scores" });
    }
  });

  // Get leaderboard for a song
  app.get('/api/leaderboard/:songTitle/:difficulty', async (req, res) => {
    try {
      const { songTitle, difficulty } = req.params;
      const leaderboard = await storage.getLeaderboard(songTitle, difficulty);
      res.json(leaderboard);
    } catch (error) {
      console.error("Error fetching leaderboard:", error);
      res.status(500).json({ message: "Failed to fetch leaderboard" });
    }
  });

  // Get all leaderboards organized by song
  app.get('/api/leaderboards', async (req, res) => {
    try {
      const leaderboards = await storage.getAllLeaderboards();
      res.json(leaderboards);
    } catch (error) {
      console.error("Error fetching all leaderboards:", error);
      res.status(500).json({ message: "Failed to fetch leaderboards" });
    }
  });

  // Set selected character
  app.post('/api/user/character', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { characterId } = req.body;
      
      const user = await storage.getUser(userId);
      if (!user || !user.unlockedCharacters.includes(characterId)) {
        return res.status(400).json({ message: "Character not unlocked" });
      }
      
      const updatedUser = await storage.setSelectedCharacter(userId, characterId);
      res.json(updatedUser);
    } catch (error) {
      console.error("Error setting character:", error);
      res.status(500).json({ message: "Failed to set character" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}