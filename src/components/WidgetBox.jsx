"use client"

import ArtistWidget from "./widgets/ArtistWidget";
import Preferences from "./Preferences";
import PlaylistDisplay from "./PlaylistDisplay";
import { useState } from "react";

export default function WidgetBox() {
    const [artists, setArtists] = useState([]);
    //const [playlist, setPlaylist] = useState(null);
    const [preferences, setPreferences] = useState([]);

    // Confirmar preferencias
    function confirmarPreferencias(){
        setPreferences({
            artists: artists.map(a => a.id),
            genres: [],
            decades: [],
            popularity: [] 
        })
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

    return (
        <div className="space-y-8">
            {/* Preferences en la parte superior - ancho completo */}
            <div className="max-w-7xl mx-auto">
                <Preferences artists={artists} seleccionarArtista={seleccionarArtista} />
            </div>

            {/* Grid principal: Widgets a la izquierda, Playlist a la derecha */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Columna de widgets (2/3 del ancho en pantallas grandes) */}
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ArtistWidget seleccionarArtista={seleccionarArtista} />
                    {/* Más widgets aquí en el futuro */}
                </div>

                {/* Columna de playlist (1/3 del ancho en pantallas grandes) */}
                <div className="lg:col-span-1">
                    <PlaylistDisplay preferences={preferences} confirmarPreferencias={confirmarPreferencias}/>
                </div>
            </div>
        </div>
    );
}
