import { spotifyRequest } from "./SpotifyApiCalls"

// Funcion para fetch de top tracks del usuario (primeras 50)
export async function getUserTracks() {
    const data = await spotifyRequest('https://api.spotify.com/v1/me/top/tracks?limit=50&offset=0')
    return data;
}

// Funcion para fetch basado en track seleccionado ??? TODO
export async function playlistSearch(track) {
    const data = await spotifyRequest(`https://api.spotify.com/v1/tracks/${track.id}`)
    return data;
}

// Funcion para fetch de playlist por busqueda basada en nombre
export async function getTracks(track) {
    const data = await spotifyRequest(`https://api.spotify.com/v1/search?type=track&q=${track}&limit=50`)
    return data;
}
