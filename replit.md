# Tempo Rush - Rhythm Game

## Overview

Tempo Rush is a full-stack rhythm game built with React, TypeScript, and Express. The application features a 4-lane rhythm game where players hit keys (A, S, K, L) in time with falling notes. The game includes a comprehensive song selection system with multiple difficulty levels (Easy, Normal, Hard, Expert, Master) and features tracks by Laur. The frontend uses Canvas for game rendering with centered lanes and animated backgrounds, Zustand for state management, and Tailwind CSS with Radix UI components for styling. The backend provides a REST API foundation using Express with Drizzle ORM for database operations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with separate client and server directories, sharing common types and schemas through a shared folder. The architecture is designed as a single-page application with a Node.js backend API.

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and production builds
- **State Management**: Zustand with subscribeWithSelector middleware
- **Styling**: Tailwind CSS with custom design system variables
- **UI Components**: Radix UI primitives with custom styling
- **Game Rendering**: HTML5 Canvas with custom game engine
- **Audio**: Web Audio API for background music and sound effects

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Structure**: REST endpoints with /api prefix
- **Build Tool**: esbuild for production bundling

## Key Components

### Game Engine
The core game logic is implemented in a custom GameEngine class that handles:
- Canvas rendering with centered lanes and animated gradient backgrounds
- Note spawning and movement physics with difficulty-based speeds
- Input handling for keyboard events (A, S, K, L keys)
- Collision detection for note hits
- Particle effects for visual feedback
- Score calculation and combo tracking

### Song Selection System
- **Multi-tier selection**: Song selection followed by difficulty selection
- **Five difficulty levels**: Easy, Normal, Hard, Expert, Master
- **Master unlock system**: Master difficulty unlocks after Expert full combo
- **Laur track collection**: Features Gears of Fate, Grievious Lady, Viyella's Destiny, Another Me, Glacier, Luminous Era
- **Difficulty-specific parameters**: Each level has unique BPM, note speed, and frequency

### State Management Stores
- **useGame**: Manages game phases (ready, songSelect, playing, ended), song/difficulty selection, and expert full combo tracking
- **useRhythm**: Handles game mechanics like score, combo, notes, and hit detection
- **useAudio**: Controls background music, sound effects, and mute functionality

### Database Schema
Currently defines a basic user table with:
- Serial ID primary key
- Unique username field
- Password field for authentication
- Zod validation schemas for type safety

### UI System
- Comprehensive component library based on Radix UI
- Custom Tailwind configuration with CSS custom properties
- Responsive design with mobile-first approach
- Dark mode support through CSS variables

## Data Flow

1. **Game Initialization**: Audio files are loaded and game stores are initialized
2. **Game Loop**: GameEngine runs requestAnimationFrame loop updating note positions
3. **Input Handling**: Keyboard events trigger hit detection and score updates
4. **State Updates**: Zustand stores manage reactive state changes across components
5. **Rendering**: Canvas updates for game visuals, React re-renders for UI elements

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React 18, React DOM, React Query for data fetching
- **UI Libraries**: Radix UI components, Lucide icons, class-variance-authority
- **3D Graphics**: Three.js with React Three Fiber and Drei helpers
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **State Management**: Zustand for client state
- **Audio**: Web Audio API (built-in browser functionality)

### Backend Dependencies
- **Database**: Neon Database serverless PostgreSQL
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Server**: Express.js with middleware for JSON/URL encoding
- **Development**: tsx for TypeScript execution, esbuild for bundling

### Development Tools
- **TypeScript**: Full type safety across frontend and backend
- **Vite**: Development server with HMR and production builds
- **ESBuild**: Fast bundling for production deployment
- **GLSL Support**: Shader loading for potential 3D graphics features

## Deployment Strategy

The application is configured for production deployment with:

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` command

### Environment Configuration
- **DATABASE_URL**: Required environment variable for Neon Database connection
- **NODE_ENV**: Controls production vs development behavior
- **Static Assets**: Frontend build served from `/dist/public`

### Server Configuration
- Express serves static files in production
- Vite development middleware in development only
- Error handling middleware for API routes
- Request logging with performance metrics

The application is designed to be deployed as a single Node.js process that serves both the API and static frontend files, making it suitable for platforms like Railway, Vercel, or traditional VPS hosting.

## Recent Changes

### July 31, 2025
- **Enhanced Pause System**: Replaced restart button with comprehensive pause menu featuring Continue, Restart Song, and Quit options accessible via Escape key or pause button
- **Speed Control Instructions**: Added visible on-screen instructions for speed controls (↑/↓, +/-, 0 to reset) during gameplay and in pause menu
- **Note Speed Increase**: Increased default note speeds across all difficulties by 50% for faster, more challenging gameplay (Easy: 300, Normal: 400, Hard: 500, Expert: 600, Master: 700 pixels/sec)
- **White Block Notes**: Changed note shapes from musical note design to simple white blocks for cleaner visual appearance
- **Extended Another Me Charts**: Fixed chart duration to cover full 3:47 song length across all difficulty levels (was cutting short)
- **Artist Credit Correction**: Updated Grievous Lady artist from "Team Grimoire vs Laur" to just "Laur" as requested
- **Interactive ESC Key**: ESC key now toggles between pause/resume functionality for better user control
- **Menu Functionality Fix**: Added proper pointer-events and cursor styling to ensure pause menu buttons are clickable
- **New Songs Added**: Expanded music library with "Glacier" and "Luminous Era" by Laur
- **Speed Control System**: Moved speed adjustment controls to song selection screen with preset buttons and fine-tuning options