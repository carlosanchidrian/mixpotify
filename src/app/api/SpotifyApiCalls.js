// Always use server by default

// Generar playlist combinando resultados de búsqueda
async function generatePlaylist(preferences) {
  let tracks = []

  // 1. Buscar por artistas seleccionados
  for (const artist of preferences.artists) {
    const artistTracks = await fetch(`/artists/${artist.id}/top-tracks`)
    tracks.push(...artistTracks.tracks)
  }

  // 2. Buscar por géneros
  for (const genre of preferences.genres) {
    const genreTracks = await fetch(`/search?type=track&q=genre:${genre}&limit=10`)
    tracks.push(...genreTracks.tracks.items)
  }

  // 3. Filtrar por década, popularidad, etc.
  tracks = tracks.filter(track => {
    return track.popularity >= preferences.minPopularity &&
           track.popularity <= preferences.maxPopularity
  })

  return tracks
}

// Funcion para fetch basado en Genero seleccionado
async function genreSearch({genre}){
    const data = fetch(`https://api.spotify.com/v1/search?type=track&q=genre:${genre}&limit=50`);
    return data;
}

// Funcion para fetch basado en Artista seleccionado
async function genreSearch({artist}){
    const data = await fetch(`https://api.spotify.com/v1/search/artists/${artist.id}/top-tracks`)
    return data;
}