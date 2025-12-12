"use client"
import { useState } from "react";

import PlaylistItem from "../widgets/items/PlaylisItem";
import { generatePlaylist } from "@/lib/spotify";

export default function PlaylistDisplay({ confirmarPreferencias }) {

    const [tracks, setTracks] = useState([]);

    async function componerPlaylist() {
        const updatedPreferences = confirmarPreferencias();
        let newTracks = await generatePlaylist(updatedPreferences)
        setTracks(newTracks);
        console.log(newTracks);
    }

    // Funcion para añadir canciones seleccionado a la lista de canciones para generacion posterior de la playlist
    const seleccionarCanciones = (track) => {
        setTracks(prevTracks => {
            // Elimianar al volver a hacer click
            if (prevTracks.some(c => c.id === track.id)) {
                return prevTracks.filter(c => c.id != track.id);
            }
            return [...prevTracks, track];
        });
    };


    return (
        <div className="bg-white rounded-lg shadow p-4">
            {/* Botones */}
            <div>
                <button onClick={() => componerPlaylist()} className="p-2 rounded-full bg-purple-200 text-purple-600 hover:bg-purple-600 hover:text-purple-200">Generar Playlist</button>
                <button onClick={() => setTracks([])} className="p-2 rounded-full bg-purple-200 text-purple-600 hover:bg-purple-600 hover:text-purple-200">Resetear</button>

            </div>

            {/* Resultados */}
            <div className="space-y-2 max-h-[500px] overflow-y-auto">
                {tracks.map(track => <PlaylistItem key={track.id} track={track} seleccionarCanciones={seleccionarCanciones} />)}
            </div>
        </div>
    );
}