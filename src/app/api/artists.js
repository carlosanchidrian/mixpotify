import {spotifyRequest} from "./SpotifyApiCalls"

// Funcion para fetch basado en artista seleccionado
export async function artistSearch(artist) {
  console.log(artist);
  const data = await spotifyRequest(`https://api.spotify.com/v1/artists/${artist.id}/top-tracks`)
  return data;
}

// Funcion para fetch de artistas
export async function getArtists(artist) {
  const data = await spotifyRequest(`https://api.spotify.com/v1/search?type=artist&q=${artist}&limit=20`)
  return data;
}
