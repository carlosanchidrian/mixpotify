"use client"

import { useState } from "react";
import PlaylistItem from "../widgets/items/PlaylisItem";
import { generatePlaylist } from "@/lib/spotify/spotify";
import { guardarPlaylist } from "@/lib/spotify/playlists";

export default function PlaylistDisplay({ confirmarPreferencias, setPreferences }) {
    const [tracks, setTracks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [saving, setSaving] = useState(false);
    const [playlistName, setPlaylistName] = useState("");
    const [playlistDescription, setPlaylistDescription] = useState("");
    const [playlistPublic, setPlaylistPublic] = useState(true);

    async function componerPlaylist() {
        try {
            setLoading(true);
            const updatedPreferences = confirmarPreferencias();
            const newTracks = await generatePlaylist(updatedPreferences);
            setTracks(newTracks);
            console.log(newTracks);
        } finally {
            setLoading(false);
        }
    }

    async function savePlaylist() {
        if (tracks.length === 0) return;

        setSaving(true);
        try {
            const body = {
                name: playlistName || "Mi mezcla de Spotify",
                description:
                    playlistDescription || "Playlist generada con Spotify Taste Mixer.",
                public: playlistPublic,
            };

            await guardarPlaylist(body, tracks);
            setIsModalOpen(false);
        } catch (e) {
            console.error(e);
        } finally {
            setSaving(false);
        }
    }

    const seleccionarCanciones = (track) => {
        setTracks(prevTracks => {
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
                    onClick={componerPlaylist}
                    disabled={loading}
                    className="flex items-center gap-2 rounded-full bg-purple-700 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-purple-500/30 transition hover:-translate-y-[1px] hover:bg-purple-400 hover:shadow-purple-400/40 disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {loading ? "Generando..." : "Generar Playlist"}
                </button>

                <button
                    onClick={() => setIsModalOpen(true)}
                    disabled={tracks.length === 0}
                    className="flex items-center gap-2 rounded-full bg-purple-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-purple-500/30 transition hover:-translate-y-[1px] hover:bg-purple-400 hover:shadow-purple-400/40 disabled:cursor-not-allowed disabled:opacity-60"
                >
                    Añadir a la biblioteca
                </button>

                <button
                    onClick={() => setTracks([])}
                    disabled={loading}
                    className="flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-slate-800 hover:border-purple-500/60 hover:text-purple-100 disabled:cursor-not-allowed disabled:opacity-60"
                >
                    Resetear
                </button>
            </div>

            {/* Loader / resultados */}
            <div className="max-h-[500px] space-y-2 overflow-y-auto">
                {loading && tracks.length === 0 && (
                    <div className="flex items-center justify-center py-10 text-sm text-slate-400">
                        Generando playlist...
                    </div>
                )}

                {!loading && tracks.map(track => (
                    <PlaylistItem
                        key={track.id}
                        track={track}
                        seleccionarCanciones={seleccionarCanciones}
                    />
                ))}
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
                    <div className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900 p-5 shadow-2xl shadow-black/60">
                        <h3 className="mb-4 text-lg font-semibold text-slate-100">
                            Guardar playlist en tu biblioteca
                        </h3>

                        <div className="space-y-3">
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wide text-slate-400">
                                    Nombre
                                </label>
                                <input
                                    className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-purple-500/70 focus:ring-2 focus:ring-purple-500/40"
                                    type="text"
                                    value={playlistName}
                                    onChange={e => setPlaylistName(e.target.value)}
                                    placeholder="Ej. Noche de código con lo-fi"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wide text-slate-400">
                                    Descripción
                                </label>
                                <textarea
                                    className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-purple-500/70 focus:ring-2 focus:ring-purple-500/40"
                                    rows={3}
                                    value={playlistDescription}
                                    onChange={e => setPlaylistDescription(e.target.value)}
                                    placeholder="Ej. Playlist generada mezclando mis gustos y los de mis amigos."
                                />
                            </div>

                            <label className="flex items-center gap-2 text-sm text-slate-200">
                                <input
                                    type="checkbox"
                                    checked={playlistPublic}
                                    onChange={e => setPlaylistPublic(e.target.checked)}
                                    className="h-4 w-4 accent-purple-500"
                                />
                                Playlist pública
                            </label>
                        </div>

                        <div className="mt-5 flex justify-end gap-2">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                disabled={saving}
                                className="rounded-full border border-slate-600 bg-slate-900 px-4 py-2 text-xs font-semibold text-slate-100 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={savePlaylist}
                                disabled={saving || tracks.length === 0}
                                className="rounded-full bg-purple-500 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-purple-500/30 transition hover:bg-purple-400 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {saving ? "Guardando..." : "Guardar playlist"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>


    );
}
