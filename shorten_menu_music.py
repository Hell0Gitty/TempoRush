#!/usr/bin/env python3

from pydub import AudioSegment
import os

def shorten_surr3al():
    """
    Shorten the SURR3AL track by removing the 'rise up' section.
    This will create a shorter version suitable for menu background music.
    """
    
    # Load the original SURR3AL track
    input_file = "attached_assets/[Project_ RUSHER OST] RISK - SURR3AL_1754007859588.mp3"
    output_file = "client/public/menu-music.mp3"
    
    print("Loading SURR3AL track...")
    audio = AudioSegment.from_mp3(input_file)
    
    # Get total duration in milliseconds
    total_duration = len(audio)
    print(f"Original duration: {total_duration/1000:.2f} seconds")
    
    # Remove the build-up at the beginning of the track
    # Skip the intro build-up and start from where the main rhythm kicks in
    # This is typically around 15-30 seconds into electronic tracks
    
    # Start from 20 seconds in to skip the intro build-up
    start_point = 20 * 1000  # 20 seconds in milliseconds
    
    # Take from 20 seconds to about 2 minutes for a good loop length
    end_point = 140 * 1000  # 2 minutes 20 seconds in milliseconds
    
    # Make sure we don't exceed the original length
    if end_point > total_duration:
        end_point = total_duration
    
    shortened_audio = audio[start_point:end_point]
    
    # Add a fade in at the beginning and fade out at the end for smooth looping
    fade_duration = 1500  # 1.5 seconds fade
    shortened_audio = shortened_audio.fade_in(fade_duration).fade_out(fade_duration)
    
    print(f"Shortened duration: {len(shortened_audio)/1000:.2f} seconds")
    print(f"Removed: {(total_duration - len(shortened_audio))/1000:.2f} seconds")
    
    # Export the shortened version
    print(f"Exporting shortened version to {output_file}...")
    shortened_audio.export(output_file, format="mp3", bitrate="192k")
    
    print("✓ Shortened SURR3AL menu music created successfully!")
    print("The 'rise up' section has been removed for a more suitable menu background track.")

if __name__ == "__main__":
    shorten_surr3al()