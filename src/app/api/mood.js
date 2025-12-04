import spotifyRequest from "SpotifyApiCalls"

// Funcion para fetch basado en mood seleccionado
async function moodSearch(mood) {
  const data = await spotifyRequest(`https://api.spotify.com/v1/search/artists/${artist.id}/top-tracks`)
  return data;
}

// Funcion para fetch de moods
export async function getMoods(mood) {
  const data = await spotifyRequest(`https://api.spotify.com/v1/search?type=artist&q=${artist}&limit=20`)
  return data;
}