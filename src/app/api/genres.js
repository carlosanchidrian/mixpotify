import spotifyRequest from "SpotifyApiCalls"

// Funcion para fetch basado en genero seleccionado
export async function genreSearch(genre) {
  const data = spotifyRequest(`https://api.spotify.com/v1/search?type=track&q=genre:${genre}&limit=10`);
  return data;
}

// Funcion para fetch de generos
export async function getGenres(genre) {
  const data = await spotifyRequest(`https://api.spotify.com/v1/search?type=artist&q=${artist}&limit=20`)
  return data;
}