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

def remove_background_edges(input_path, output_path):
    """Remove background by making edge colors transparent"""
    try:
        # Open image
        img = Image.open(input_path)
        img = img.convert("RGBA")
        
        # Get the colors at the corners (likely background)
        width, height = img.size
        corners = [
            img.getpixel((0, 0)),
            img.getpixel((width-1, 0)),
            img.getpixel((0, height-1)),
            img.getpixel((width-1, height-1))
        ]
        
        # Find most common corner color (background)
        bg_color = max(set(corners), key=corners.count)
        
        # Create mask for background removal
        data = img.getdata()
        new_data = []
        
        for item in data:
            # Check if pixel is similar to background color
            if abs(item[0] - bg_color[0]) < 30 and abs(item[1] - bg_color[1]) < 30 and abs(item[2] - bg_color[2]) < 30:
                new_data.append((item[0], item[1], item[2], 0))  # Make transparent
            else:
                new_data.append(item)  # Keep original
        
        # Update image data
        img.putdata(new_data)
        
        # Save as PNG with transparency
        img.save(output_path, "PNG")
        
        print(f"✓ Processed (edge method): {input_path} -> {output_path}")
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
            # Try edge detection method first
            if remove_background_edges(input_path, output_path):
                success_count += 1
            # If that fails, try simple color method
            elif remove_background_simple(input_path, output_path):
                success_count += 1
        else:
            print(f"✗ File not found: {input_path}")
    
    print(f"\nBackground removal complete! Processed {success_count}/{len(characters)} images.")

if __name__ == "__main__":
    main()