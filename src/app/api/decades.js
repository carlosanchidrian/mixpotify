import spotifyRequest from "SpotifyApiCalls"

// Funcion para fetch basado en decada seleccionada
async function decadeSearch(decade) {
  const data = await spotifyRequest(`https://api.spotify.com/v1/search/artists/${artist.id}/top-tracks`)
  return data;
}

// Funcion para fetch de decadas
export async function getDecades(decade) {
  const data = await spotifyRequest(`https://api.spotify.com/v1/search?type=artist&q=${artist}&limit=20`)
  return data;
}