import {spotifyRequest} from "./SpotifyApiCalls"

// Funcion para fetch de top de algo del usuario canciones/artistas
export async function getTop(param) {
  const data = await spotifyRequest(`https://api.spotify.com/v1/me/top/${param}`)
  return data;
}

// Funcion para fetch basado en artista seleccionado
export async function artistSearch(artist) {
  const data = await spotifyRequest(`https://api.spotify.com/v1/artists/${artist.id}/top-tracks`)
  return data;
}

// Funcion para fetch de artistas
export async function getArtists(artist) {
  const data = await spotifyRequest(`https://api.spotify.com/v1/search?type=artist&q=${artist}&limit=50`)
  return data;
}
