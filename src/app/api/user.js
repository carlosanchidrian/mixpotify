import {spotifyRequest} from "./SpotifyApiCalls"

// Funcion para fetch de top de algo del usuario canciones/artistas
export async function getTop(param) {
  const data = await spotifyRequest(`https://api.spotify.com/v1/me/top/${param}`)
  return data;
}

