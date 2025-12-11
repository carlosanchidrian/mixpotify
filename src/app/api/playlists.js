import { spotifyRequest } from "./SpotifyApiCalls"

// Funcion para fetch de playlist del usuario (primeras 50)
export async function getUserPlaylists() {
  const data = await spotifyRequest('https://api.spotify.com/v1/me/playlists?limit=50&offset=0')
  return data;
}

// Funcion para fetch basado en playlist seleccionado
export async function playlistSearch(playlist) {
  const data = await spotifyRequest(`https://api.spotify.com/v1/playlists/${playlist.id}`)
  return data;
}

// Funcion para fetch de playlist por busqueda basada en nombre
export async function getPlaylists(playlist) {
  const data = await spotifyRequest(`https://api.spotify.com/v1/search?type=playlist&q=${playlist}&limit=50`)
  return data;
}
