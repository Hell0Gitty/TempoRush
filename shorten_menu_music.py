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
    
    # The "rise up" section typically happens in the latter part of the track
    # Let's cut the track to about 60-80% of its original length to remove the build-up
    # and keep the main rhythmic section for looping
    
    # Cut to approximately first 70% of the track (removing the rise up section)
    cut_point = int(total_duration * 0.7)
    shortened_audio = audio[:cut_point]
    
    # Add a fade out at the end for smooth looping
    fade_duration = 2000  # 2 seconds fade
    shortened_audio = shortened_audio.fade_out(fade_duration)
    
    print(f"Shortened duration: {len(shortened_audio)/1000:.2f} seconds")
    print(f"Removed: {(total_duration - len(shortened_audio))/1000:.2f} seconds")
    
    # Export the shortened version
    print(f"Exporting shortened version to {output_file}...")
    shortened_audio.export(output_file, format="mp3", bitrate="192k")
    
    print("✓ Shortened SURR3AL menu music created successfully!")
    print("The 'rise up' section has been removed for a more suitable menu background track.")

if __name__ == "__main__":
    shorten_surr3al()