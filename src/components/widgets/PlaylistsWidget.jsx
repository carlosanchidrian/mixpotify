import { getUserPlaylists, getPlaylists } from "@/lib/spotify/playlists";
import { useEffect, useState } from "react";
import PlaylistWidgetItem from "./items/PlaylistWidgetItem";

export default function PlaylistWidget({ seleccionarPlaylist }) {
    const [defaultPlaylists, setDefaultPlaylists] = useState([]);
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    // Setup inicial con carga de playlist favoritos del usuario (para hacer display si no ha buscado nada)
    useEffect(() => {
        async function fetchData() {
            const response = await getUserPlaylists();
            console.log(response.items)
            setDefaultPlaylists(response.items);
        }
        fetchData();
    }, []);

    // Busqueda de playlist con debouncing de 300 ms
    useEffect(() => {
        const timer = setTimeout(async () => {
            if (search.trim()) {
                try {
                    const response = await getPlaylists(search);
                    console.log(response.playlists.items)
                    setSearchResult(response.playlists.items || []);
                } catch (error) {
                    console.error("Error en búsqueda:", error);
                    setSearchResult([]);
                }
            } else {
                setSearchResult([]);
            }
        }, 300);

        return () => clearTimeout(timer);
    }, [search]);

    return (
        <div className="flex h-80 flex-col overflow-hidden rounded-xl border border-slate-800/60 bg-slate-900/70 shadow-lg shadow-black/30">


            <div className="border-b border-slate-800/80 bg-slate-900/80 p-4">
                <h2 className="text-sm font-semibold tracking-tight text-slate-100">
                    Playlists
                </h2>
            </div>

            {/* Barra buscadora */}
            <div className="p-3">
                <input
                    className="w-full rounded-lg border border-slate-700/70 bg-slate-900/80 px-4 py-2 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition-all focus:border-purple-500/70 focus:ring-2 focus:ring-purple-500/40"
                    type="text"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Buscar playlist..."
                />
            </div>

            {/* Resultados de busqueda con scrollbar */}
            <div className="flex-1 overflow-y-auto">
                <div className="divide-y divide-slate-800/70">
                    {search === "" ?
                        (defaultPlaylists.map(playlist =>
                            <PlaylistWidgetItem key={playlist.id} playlist={playlist} seleccionarPlaylist={seleccionarPlaylist} />
                        ))
                        :
                        (searchResult.map(playlist => playlist === null ?
                            null
                            :
                            (<PlaylistWidgetItem key={playlist.id} playlist={playlist} seleccionarPlaylist={seleccionarPlaylist} />)
                        ))}
                </div>
            </div>
        </div>
    );
}
