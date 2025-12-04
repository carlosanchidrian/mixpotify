import { getAccessToken } from "@/lib/auth"

export async function spotifyRequest(url) {
  const token = getAccessToken();

  if (!token) {
    // Intentar refrescar token
    const newToken = await refreshAccessToken();
    if (!newToken) {
      // Redirigir a login
      window.location.href = '/';
      return;
    }
  }

  const response = await fetch(url, {
    headers: { 'Authorization': `Bearer ${token}` }
  });

  if (response.status === 401) {
    // Token expirado, refrescar
    const newToken = await refreshAccessToken();
    // Reintentar petición
  }

  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }

  return response.json();
}

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