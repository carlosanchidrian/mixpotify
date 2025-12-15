"use client"

import WidgetItem from "../widgets/items/WidgetItem";
import PlaylistWidgetItem from "../widgets/items/PlaylistWidgetItem";
import TrackWidgetItem from "../widgets/items/TrackWidgetItem";
import { useState } from "react";

export default function Preferences({ artists, seleccionarArtista, genres, seleccionarGenero, popularity, setPopularity, decades, seleccionarDecada, playlists, seleccionarPlaylist, selectedTracks, seleccionarCanciones }) {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    const [isOpen6, setIsOpen6] = useState(false);

    return (
        <div className="mb-6 rounded-xl border border-slate-800/60 bg-slate-900/80 p-4 shadow-lg shadow-black/30">
            <h2 className="text-2xl font-bold text-slate-100">Preferencias seleccionadas:</h2>

            <h4
                onClick={() => setIsOpen1(!isOpen1)}
                className="mt-4 cursor-pointer text-sm font-semibold text-slate-200"
            >
                Artistas seleccionados ({artists.length})
            </h4>
            {isOpen1 && (
                <div className="mt-3 flex flex-wrap gap-2">
                    {artists.map(artist =>
                        <WidgetItem key={artist.id} artist={artist} seleccionarArtista={seleccionarArtista} />
                    )}
                </div>
            )}

            <h4
                onClick={() => setIsOpen2(!isOpen2)}
                className="mt-4 cursor-pointer text-sm font-semibold text-slate-200"
            >
                Generos seleccionados ({genres.length})
            </h4>
            {isOpen2 && (
                <div className="mt-3 flex flex-wrap gap-2">
                    {genres.map((genre, index) =>
                        <div
                            onClick={() => seleccionarGenero(genre)}
                            key={index}
                            className="flex items-center gap-4 rounded-lg bg-slate-900/60 p-3 shadow-sm transition-colors hover:bg-slate-800/80"
                        >
                            <h3 className="text-sm font-semibold text-slate-100">{genre}</h3>
                        </div>
                    )}
                </div>
            )}

            <h4
                onClick={() => setIsOpen3(!isOpen3)}
                className="mt-4 cursor-pointer text-sm font-semibold text-slate-200"
            >
                Popularidad
            </h4>
            {isOpen3 && (
                <div className="mt-3 flex flex-wrap gap-2">
                    <div
                        onClick={() => setPopularity(prev => ({ ...prev, min: 0 }))}
                        className="flex items-center gap-4 rounded-lg bg-slate-900/60 p-3 shadow-sm transition-colors hover:bg-slate-800/80"
                    >
                        <h3 className="text-sm font-semibold text-slate-100">
                            Minimo: {popularity.min}
                        </h3>
                    </div>
                    <div
                        onClick={() => setPopularity(prev => ({ ...prev, max: 100 }))}
                        className="flex items-center gap-4 rounded-lg bg-slate-900/60 p-3 shadow-sm transition-colors hover:bg-slate-800/80"
                    >
                        <h3 className="text-sm font-semibold text-slate-100">
                            Maximo: {popularity.max}
                        </h3>
                    </div>
                </div>
            )}

            <h4
                onClick={() => setIsOpen4(!isOpen4)}
                className="mt-4 cursor-pointer text-sm font-semibold text-slate-200"
            >
                Decadas seleccionados ({decades.length})
            </h4>
            {isOpen4 && (
                <div className="mt-3 flex flex-wrap gap-2">
                    {decades.map((decade, index) =>
                        <div
                            onClick={() => seleccionarDecada(decade)}
                            key={index}
                            className="flex items-center gap-4 rounded-lg bg-slate-900/60 p-3 shadow-sm transition-colors hover:bg-slate-800/80"
                        >
                            <h3 className="text-sm font-semibold text-slate-100">{decade}</h3>
                        </div>
                    )}
                </div>
            )}

            <h4
                onClick={() => setIsOpen5(!isOpen5)}
                className="mt-4 cursor-pointer text-sm font-semibold text-slate-200"
            >
                Playlists seleccionadas ({playlists.length})
            </h4>
            {isOpen5 && (
                <div className="mt-3 flex flex-wrap gap-2">
                    {playlists.map(playlist =>
                        <PlaylistWidgetItem key={playlist.id} playlist={playlist} seleccionarPlaylist={seleccionarPlaylist} />
                    )}
                </div>
            )}

            <h4
                onClick={() => setIsOpen6(!isOpen6)}
                className="mt-4 cursor-pointer text-sm font-semibold text-slate-200"
            >
                Canciones seleccionadas ({selectedTracks.length})
            </h4>
            {isOpen6 && (
                <div className="mt-3 flex flex-wrap gap-2">
                    {selectedTracks.map(track =>
                        <TrackWidgetItem key={track.id} track={track} seleccionarCanciones={seleccionarCanciones} />
                    )}
                </div>
            )}
        </div>
    );
}