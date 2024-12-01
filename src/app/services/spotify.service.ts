import { IUser } from './../interfaces/IUser';
import { Injectable } from '@angular/core';

import Spotify from 'spotify-web-api-js'
import { environment } from '../../environments/environment.development';
import { SpotifySinglePlaylistParaPlaylist, SpotifyTrackParaMusica } from '../helpers/spotifyHelper';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {



  spotifyApi: Spotify.SpotifyWebApiJs = null;
  user: IUser;
  constructor() {
    this.spotifyApi = new Spotify();
  }

  async InitializeService(){
    if(!!this.user)
      return true;

    const token = localStorage.getItem('token');
    if(!token)
      return false;

    try {
      this.defineAccessToken(token);
      await this.getUser();
      return true;
    } catch (error) {
      return false;
    }
  }

  async getUser(){
    const userInfo = await this.spotifyApi.getMe();
    console.log(userInfo)
  }

  getLoginUrl(){
    const authEndpoint = `${environment.authEndpoint}?`;
    const clientId = `client_id=${environment.client_id}&`;
    const redirectUrl = `redirect_uri=${environment.redirect_url}&`;
    const scopes = `scopes=${environment.scopes}&`
    const response_type = `response_type=token&show_dialog=true`
    return authEndpoint + clientId + redirectUrl + scopes + response_type;
  }

  getTokenUrlCallBack(){
    console.log('teste')
      const params = window.location.hash.substring(1).split('&');
      console.log(params)
      return params[0].split('=')[1];
  }

  defineAccessToken(token: string)
  {
    this.spotifyApi.setAccessToken(token);
    console.log(token)
    localStorage.setItem('token', token);
  }

  async getRecommendations(offset = 0, limit = 50) {
    const playlistSpotify = await this.spotifyApi.getPlaylist('3tcq8qw5W5HE7sTtAksLNM')

    if(!playlistSpotify)
      return null

    const playlist = SpotifySinglePlaylistParaPlaylist(playlistSpotify);

    const musicasSpotify = await this.spotifyApi.getPlaylistTracks('3tcq8qw5W5HE7sTtAksLNM', { offset, limit });
    playlist.musicas = musicasSpotify.items.map(musica => SpotifyTrackParaMusica(musica.track as SpotifyApi.TrackObjectFull))
    console.log(playlist)

    return playlist
  }
}
