import spotifyRequest from "SpotifyApiCalls"

// Funcion para fetch basado en popularidad seleccionada
async function popularitySearch(popularity) {
  const data = await spotifyRequest(`https://api.spotify.com/v1/search/artists/${artist.id}/top-tracks`)
  return data;
}