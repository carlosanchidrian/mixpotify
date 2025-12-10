"use client"

import ArtistWidget from "../widgets/ArtistWidget";
import GenreWidget from "../widgets/GenreWidget";
import PopularityWidget from "../widgets/PopularityWidget";
import Preferences from "./Preferences";
import PlaylistDisplay from "./PlaylistDisplay";
import DecadeWidget from "../widgets/DecadeWidget";
import { generatePlaylist } from "@/lib/spotify";


import { useState } from "react";

export default function WidgetBox() {
    const [artists, setArtists] = useState([]);
    const [genres, setGenres] = useState([]);
    const [popularity, setPopularity] = useState({
        min: 0,
        max: 100
    })
    const [decades, setDecades] = useState([]);


    const [preferences, setPreferences] = useState({
        artists: [],
        genres: [],
        decades: [],
        popularity: {
            min: 0,
            max: 100
        }
    });

    // Confirmar preferencias
    function confirmarPreferencias() {
        const updatedPreferences = {
            artists: artists,
            genres: genres,
            decades: decades,
            popularity: popularity
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


    return (
        <div className="space-y-8">
            {/* Preferences en la parte superior - ancho completo */}
            <div className="max-w-7xl mx-auto">
                <Preferences artists={artists} seleccionarArtista={seleccionarArtista} genres={genres} seleccionarGenero={seleccionarGenero} popularity={popularity} setPopularity={setPopularity} decades={decades} seleccionarDecada={seleccionarDecada} />
            </div>

            {/* Grid principal: Widgets a la izquierda, Playlist a la derecha */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Columna de widgets (2/3 del ancho en pantallas grandes) */}
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ArtistWidget seleccionarArtista={seleccionarArtista} />
                    <GenreWidget seleccionarGenero={seleccionarGenero} />
                    <PopularityWidget popularity={popularity} setPopularity={setPopularity} />
                    <DecadeWidget seleccionarDecada={seleccionarDecada} />
                    {/* Más widgets aquí en el futuro */}
                </div>

                {/* Columna de playlist (1/3 del ancho en pantallas grandes) */}
                <div className="lg:col-span-1">
                    <PlaylistDisplay preferences={preferences} confirmarPreferencias={confirmarPreferencias} />
                </div>
            </div>
        </div>
    );
}
