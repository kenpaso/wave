import os
import json
import time
import spotipy
import lyricsgenius as lg
from dotenv import load_dotenv
load_dotenv()
spotipy_client_id = os.getenv('SPOTIPY_CLIENT_ID')
spotipy_secret = os.getenv('SPOTIPY_CLIENT_SECRET')
spotipy_redirect_uri = os.getenv('SPOTIPY_REDIRECT_URI')
genius_access_token = os.getenv('GENIUS_ACCESS_TOKEN')

scope = 'user-read-currently-playing'

oauth_object = spotipy.SpotifyOAuth(client_id=spotipy_client_id, 
                                    client_secret=spotipy_secret,
                                    redirect_uri=spotipy_redirect_uri,
                                    scope=scope)

token_dict = oauth_object.get_cached_token()
token = token_dict['access_token']

# spotify object
spotify_object = spotipy.Spotify(auth=token)

#genius object
genius = lg.Genius(genius_access_token)

current = spotify_object.currently_playing()
prev_track_id = None
# print(current)


while True:

    current_track = spotify_object.currently_playing()
    if current_track is not None and current_track["is_playing"]:
        current_track_id = current_track["item"]["id"]

        if current_track_id != prev_track_id:
            print("SONG CHANGED")
            print(current_track_id)
            prev_track_id = current_track_id
            status = current_track['currently_playing_type']

            if status == 'track':
                artist_name = current_track['item']['album']['artists'][0]['name']
                song_title = current_track['item']['name']
                length = current_track['item']['duration_ms']
                progress = current_track['progress_ms']
                time_left = int((length - progress) / 1000)
                song = genius.search_song(title=song_title, artist=artist_name)
                if song is None:
                    print(F"No genius data for {song_title}")
                else:
                    print(song)
                    lyrics = song.lyrics
                    print(lyrics)
               
            elif status == 'ad':
                time.sleep(30)


    
