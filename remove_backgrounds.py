#!/usr/bin/env python3
"""
Script to remove backgrounds from character images using PIL
"""

import os
from PIL import Image, ImageChops
import numpy as np

def remove_background_simple(input_path, output_path):
    """Remove background using color-based transparency"""
    try:
        # Open image
        img = Image.open(input_path)
        img = img.convert("RGBA")
        
        # Get image data
        data = img.getdata()
        
        # Create new data with transparency
        new_data = []
        for item in data:
            # Check if pixel is close to white/light background
            if item[0] > 240 and item[1] > 240 and item[2] > 240:  # White-ish
                new_data.append((item[0], item[1], item[2], 0))  # Make transparent
            elif item[0] > 200 and item[1] > 200 and item[2] > 200:  # Light gray
                new_data.append((item[0], item[1], item[2], 50))  # Semi-transparent
            else:
                new_data.append(item)  # Keep original
        
        # Update image data
        img.putdata(new_data)
        
        # Save as PNG with transparency
        img.save(output_path, "PNG")
        
        print(f"✓ Processed: {input_path} -> {output_path}")
        return True
    except Exception as e:
        print(f"✗ Error processing {input_path}: {e}")
        return False

def remove_background_advanced(input_path, output_path):
    """Advanced background removal preserving character details"""
    try:
        # Open image
        img = Image.open(input_path)
        img = img.convert("RGBA")
        
        # Get image data as array for easier processing
        data = img.getdata()
        new_data = []
        
        # Sample multiple edge points for better background detection
        width, height = img.size
        edge_samples = []
        for i in range(0, width, max(1, width//10)):
            edge_samples.append(img.getpixel((i, 0)))  # Top edge
            edge_samples.append(img.getpixel((i, height-1)))  # Bottom edge
        for i in range(0, height, max(1, height//10)):
            edge_samples.append(img.getpixel((0, i)))  # Left edge
            edge_samples.append(img.getpixel((width-1, i)))  # Right edge
        
        # Find most common background colors
        bg_colors = {}
        for color in edge_samples:
            rgb = color[:3]
            if rgb in bg_colors:
                bg_colors[rgb] += 1
            else:
                bg_colors[rgb] = 1
        
        # Get dominant background color
        bg_color = max(bg_colors, key=bg_colors.get)
        
        for item in data:
            r, g, b = item[:3]
            
            # More precise background detection
            color_diff = abs(r - bg_color[0]) + abs(g - bg_color[1]) + abs(b - bg_color[2])
            
            # Very similar to background color - make transparent
            if color_diff < 25:
                new_data.append((r, g, b, 0))
            # Somewhat similar - make semi-transparent
            elif color_diff < 60:
                new_data.append((r, g, b, 100))
            # Keep original with full opacity
            else:
                new_data.append((r, g, b, 255))
        
        # Update image data
        img.putdata(new_data)
        
        # Save as PNG with transparency
        img.save(output_path, "PNG")
        
        print(f"✓ Processed (advanced method): {input_path} -> {output_path}")
        return True
    except Exception as e:
        print(f"✗ Error processing {input_path}: {e}")
        return False

def main():
    # Input and output directories
    input_dir = "attached_assets"
    output_dir = "client/public/characters"
    
    # Create output directory if it doesn't exist
    os.makedirs(output_dir, exist_ok=True)
    
    # Character files to process (from attached_assets)
    characters = [
        ("Ivy_1753996705463.png", "ivy.png"),
        ("Winter_1753996720672.png", "winter.png"), 
        ("Scal_1753996713989.png", "scal.png"),
        ("Lightren_1753996709305.png", "lightren.png")
    ]
    
    print("Starting background removal process...")
    
    # Process each character image
    success_count = 0
    for source_file, target_file in characters:
        input_path = os.path.join(input_dir, source_file)
        output_path = os.path.join(output_dir, target_file)
        
        if os.path.exists(input_path):
            # Try advanced method first
            if remove_background_advanced(input_path, output_path):
                success_count += 1
            # If that fails, try simple color method
            elif remove_background_simple(input_path, output_path):
                success_count += 1
        else:
            print(f"✗ File not found: {input_path}")
    
    print(f"\nBackground removal complete! Processed {success_count}/{len(characters)} images.")

if __name__ == "__main__":
    main()