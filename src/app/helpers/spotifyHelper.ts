import * as startOfDay from "date-fns";

import { IMusica } from "../interfaces/IMusica";
import { IPlaylist } from "../interfaces/IPlaylist";
import { newMusica, newPlaylist } from "./factories";

export function SpotifySinglePlaylistParaPlaylist(playlist: SpotifyApi.SinglePlaylistResponse ): IPlaylist {
  if (!playlist)
    return newPlaylist();

  return {
    id: playlist.id,
    nome: playlist.name,
    imagemUrl: playlist.images.shift().url,
    musicas: []
  }

}

export function SpotifyTrackParaMusica(spotifyTrack: SpotifyApi.TrackObjectFull) : IMusica{

  if (!spotifyTrack)
    return newMusica();

  const msParaMinutos = (ms: number) => {
    const data = startOfDay.addMilliseconds(new Date(0), ms);
    return startOfDay.format(data, 'mm:ss');
  }

  return {
    id: spotifyTrack.uri,
    titulo: spotifyTrack.name,
    album: {
      id: spotifyTrack.id,
      imagemUrl: spotifyTrack.album.images.shift().url,
      nome: spotifyTrack.album.name
    },
    artistas: spotifyTrack.artists.map(artista => ({
      id: artista.id,
      nome: artista.name
    })),
    tempo: msParaMinutos(spotifyTrack.duration_ms),
  }
}

