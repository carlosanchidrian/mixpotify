"use client"

import ArtistWidget from "../widgets/ArtistWidget";
import GenreWidget from "../widgets/GenreWidget";
import PopularityWidget from "../widgets/PopularityWidget";
import Preferences from "./Preferences";
import PlaylistDisplay from "./PlaylistDisplay";
import DecadeWidget from "../widgets/DecadeWidget";
import PlaylistWidget from "../widgets/PlaylistsWidget";
import TracksWidget from "../widgets/TracksWidget";
import { useState } from "react";
import { logout } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function WidgetBox() {
    const [artists, setArtists] = useState([]);
    const [genres, setGenres] = useState([]);
    const [popularity, setPopularity] = useState({
        min: 0,
        max: 100
    })
    const [decades, setDecades] = useState([]);
    const [playlists, setPlaylists] = useState([]);
    const [selectedTracks, setSelectedTracks] = useState([]);

    const [preferences, setPreferences] = useState({
        artists: [],
        genres: [],
        decades: [],
        popularity: {
            min: 0,
            max: 100
        },
        playlists: [],
        selectedTracks: []
    });

    const router = useRouter();

    // Confirmar preferencias
    function confirmarPreferencias() {
        const updatedPreferences = {
            artists: artists,
            genres: genres,
            decades: decades,
            popularity: popularity,
            playlists: playlists,
            selectedTracks: selectedTracks
        }

        setPreferences(updatedPreferences)

        return updatedPreferences
    }

    // Funcion para añadir artista seleccionado a la lista de artistas para generacion posterior de la playlist
    const seleccionarArtista = (artist) => {
        setArtists(prevArtists => {
            // Elimianar al volver a hacer click
            if (prevArtists.some(a => a.id === artist.id)) {
                return prevArtists.filter(a => a.id != artist.id);
            }
            return [...prevArtists, artist];
        });
    };

    // Funcion para añadir genero seleccionado a la lista de generos para generacion posterior de la playlist
    const seleccionarGenero = (genre) => {
        setGenres(prevGenres => {
            // Elimianar al volver a hacer click
            if (prevGenres.some(g => g === genre)) {
                return prevGenres.filter(g => g != genre);
            }
            return [...prevGenres, genre];
        });
    };

    // Funcion para añadir decada seleccionada a la lista de decadas para generacion posterior de la playlist
    const seleccionarDecada = (decade) => {
        setDecades(prevDecades => {
            // Elimianar al volver a hacer click
            if (prevDecades.some(d => d === decade)) {
                return prevDecades.filter(d => d != decade);
            }
            return [...prevDecades, decade];
        });
    };

    // Funcion para añadir playlist seleccionado a la lista de playlists para generacion posterior de la playlist
    const seleccionarPlaylist = (playlist) => {
        setPlaylists(prevPlaylists => {
            // Elimianar al volver a hacer click
            if (prevPlaylists.some(p => p.id === playlist.id)) {
                return prevPlaylists.filter(p => p.id != playlist.id);
            }
            return [...prevPlaylists, playlist];
        });
    };

    // Funcion para añadir canciones seleccionado a la lista de canciones para generacion posterior de la playlist
    const seleccionarCanciones = (track) => {
        setSelectedTracks(prevTracks => {
            // Elimianar al volver a hacer click
            if (prevTracks.some(c => c.id === track.id)) {
                return prevTracks.filter(c => c.id != track.id);
            }
            return [...prevTracks, track];
        });
    };

    const handleLogout = async () => {
        await logout();          // limpias tokens / sesión
        router.push("/");        // navegas a home
    };

    return (
        <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
            {/* Preferences en la parte superior - ancho completo */}
            <div>
                <Preferences
                    artists={artists}
                    seleccionarArtista={seleccionarArtista}
                    genres={genres}
                    seleccionarGenero={seleccionarGenero}
                    popularity={popularity}
                    setPopularity={setPopularity}
                    decades={decades}
                    seleccionarDecada={seleccionarDecada}
                    playlists={playlists}
                    seleccionarPlaylist={seleccionarPlaylist}
                    selectedTracks={selectedTracks}
                    seleccionarCanciones={seleccionarCanciones}
                />
            </div>

            {/* Grid principal: Widgets a la izquierda, Playlist a la derecha */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {/* Columna de widgets (2/3 del ancho en pantallas grandes) */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-2">
                    <ArtistWidget seleccionarArtista={seleccionarArtista} />
                    <GenreWidget seleccionarGenero={seleccionarGenero} />
                    <PopularityWidget popularity={popularity} setPopularity={setPopularity} />
                    <DecadeWidget seleccionarDecada={seleccionarDecada} />
                    <PlaylistWidget seleccionarPlaylist={seleccionarPlaylist} />
                    <TracksWidget seleccionarCanciones={seleccionarCanciones} />
                    {/* Más widgets aquí en el futuro */}
                </div>

                {/* Columna de playlist (1/3 del ancho en pantallas grandes) */}
                <div className="lg:col-span-1">
                    <PlaylistDisplay confirmarPreferencias={confirmarPreferencias} setPreferences={setPreferences} />
                </div>
            </div>

            {/* Botón logout ocupando el ancho de la columna de widgets */}
            <div className="lg:col-span-2">
                <button
                    onClick={handleLogout}
                    className="mt-2 w-full rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-red-600/40 transition hover:bg-red-500 hover:shadow-red-500/50"
                >
                    Log out
                </button>
            </div>
        </div>
    );
}
