#!/bin/bash

# Tempo Rush - Deployment Script
# This script builds the application for static deployment

echo "Building Tempo Rush for deployment..."

# Clean previous build files from root (if any)
rm -f index.html
rm -rf assets

# Build the application
echo "Running build command..."
npm run build

# Copy built files to root directory for static deployment
echo "Copying static files to root directory..."
cp -r dist/public/* .

echo "Build complete! Files ready for deployment:"
echo "- index.html (main application)"
echo "- assets/ (bundled JavaScript and CSS)"
echo "- All game assets (sounds, textures, etc.)"

echo ""
echo "Deployment is now ready. The static files are in the root directory."