import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Components/Login';
import { getHashFromUrl } from './Spotify/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Components/Player';
import { useDataLayerValue } from './Dal/DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  const [{token}, dispatch] = useDataLayerValue();

  useEffect( () => {
    const hash = getHashFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    if(_token) {
      
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        });
      });

      spotify.getPlaylist('37i9dQZEVXcT0zhRgHUMev')
      .then(response => 
        dispatch({
          type: 'SET_ACTIVE_PLAYLIST',
          active_playlist: response,
      }));

      dispatch({
        type: 'SET_SPOTIFY',
        spotify : spotify
      });

      spotify.getPlaylist('37i9dQZEVXcT0zhRgHUMev')
      .then(response => dispatch({
        type: 'SET_TRACK',
        track : response.tracks.items[0].track,
      }));

    }
   
  }, []);

  //console.log('user', user);
  //console.log('I have a token', token);

  return (
    <div className="app">
      {
        token ?
          <Player spotify={spotify}/>
          : <Login/>
      }
      
    </div>
  );
}

export default App;
