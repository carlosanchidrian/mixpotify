"use client"
import { useState } from "react";

import { generatePlaylist } from "@/lib/spotify";

export default function PlaylistDisplay({ confirmarPreferencias, preferences }) {

    const [tracks, setTracks] = useState([]);

    function componerPlaylist(){
        confirmarPreferencias();
        setTracks(generatePlaylist(preferences));
    }

    return (
        <div>
            {/* Botones */}
            <div>
            <button onClick={()=> componerPlaylist()} className="bg-amber-300">Generar Playlist</button>
            </div>

            {/* Resultados */}
            <div>

            </div>
        </div>
    );
}