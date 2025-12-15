"use client"

import { useState } from "react";
import PlaylistItem from "../widgets/items/PlaylisItem";
import { generatePlaylist } from "@/lib/spotify/spotify";

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
        <div className="rounded-xl border border-slate-800/60 bg-slate-900/70 p-4 shadow-lg shadow-black/30">
            {/* Botones */}
            <div className="mb-4 flex gap-3">
                <button
                    onClick={() => componerPlaylist()}
                    className="flex items-center gap-2 rounded-full bg-purple-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-purple-500/30 transition hover:-translate-y-[1px] hover:bg-purple-400 hover:shadow-purple-400/40"
                >
                    Generar Playlist
                </button>
                <button
                    onClick={() => setTracks([])}
                    className="flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-slate-800 hover:border-purple-500/60 hover:text-purple-100"
                >
                    Resetear
                </button>
            </div>

            {/* Resultados */}
            <div className="max-h-[500px] space-y-2 overflow-y-auto">
                {tracks.map(track => (
                    <PlaylistItem
                        key={track.id}
                        track={track}
                        seleccionarCanciones={seleccionarCanciones}
                    />
                ))}
            </div>
        </div>
    );
}
