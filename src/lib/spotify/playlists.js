import { spotifyRequest, spotifyPost } from "./SpotifyApiCalls"

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

// Crear playlist y añadir tracks
export async function guardarPlaylist(body, tracks) {
  // 1. Obtener user id
  const me = await spotifyRequest("https://api.spotify.com/v1/me");
  const user_id = me.id;

  // 2. Crear playlist
  const created = await spotifyPost(
    `https://api.spotify.com/v1/users/${user_id}/playlists`,
    body
  );
  const playlistId = created.id;

  // 3. Obtener URIs y trocear si hay más de 100
  const uris = tracks.map(t => t.uri).filter(Boolean);
  const chunks = chunk(uris, 100); // máximo 100 por request

  // 4. Añadir cada chunk a la playlist
  for (const part of chunks) {
    await spotifyPost(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
      { uris: part }
    );
  }

  return { playlistId };
}

// Divide tracks en segmentos de 100 (maximo de spotify para añadir a playlist por peticion)
function chunk(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}
