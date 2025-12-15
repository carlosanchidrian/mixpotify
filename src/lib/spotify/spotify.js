import { getAccessToken } from "@/lib/auth"

export async function generatePlaylist(preferences) {
  const { artists, genres, decades, popularity, playlists, selectedTracks } = preferences;
  const token = getAccessToken();
  const headers = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  };

  let allTracks = [];

  // 1. Obtener top tracks de artistas seleccionados
  for (const artist of artists) {
    const tracks = await fetch(
      `https://api.spotify.com/v1/artists/${artist.id}/top-tracks`,
      {
        headers
      }
    );
    const data = await tracks.json();
    console.log('Response data:', data);
    allTracks.push(...data.tracks);
  }

  // 2. Buscar por géneros
  for (const genre of genres) {
    const results = await fetch(
      `https://api.spotify.com/v1/search?type=track&q=genre:${genre}&limit=50`,
      {
        headers
      }
    );
    const data = await results.json();
    allTracks.push(...data.tracks.items);
  }

  // 3. Añadir canciones seleccionadas
  if (selectedTracks.length > 0) {
      allTracks.push(...selectedTracks)
  }

  // 4. Añadir canciones de playlists seleccionadas
  for (const playlist of playlists) {
    const tracks = await fetch(
      `https://api.spotify.com/v1/playlists/${playlist.id}`,
      {
        headers
      }
    );
    const data = await tracks.json();
    console.log('Response data:', data.tracks.items);
    data.tracks.items.map(item =>
      allTracks.push(item.track)
    );

  }

  // 5. Filtrar por década
  if (decades.length > 0) {
    allTracks = allTracks.filter(track => {
      const year = new Date(track.album.release_date).getFullYear();
      return decades.some(decade => {
        const decadeStart = parseInt(decade);
        return year >= decadeStart && year < decadeStart + 10;
      });
    });
  }

  // 6. Filtrar por popularidad
  if (popularity) {
    const { min, max } = popularity;
    allTracks = allTracks.filter(
      track => track.popularity >= min && track.popularity <= max
    );
  }

  // 6. Eliminar duplicados y limitar a 30 canciones
  const uniqueTracks = Array.from(
    new Map(allTracks.map(track => [track.id, track])).values())//.slice(0, 30);
  // console.log(uniqueTracks);
  return uniqueTracks;
}