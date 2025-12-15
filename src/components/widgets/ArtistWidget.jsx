import { getArtists, getTop } from "@/lib/spotify/artists";
import { useEffect, useState } from "react";
import WidgetItem from "./items/WidgetItem";

export default function ArtistWidget({ seleccionarArtista }) {
    const [defaultArtists, setDefaultArtists] = useState([]);
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    // Setup inicial con carga de artistas favoritos del usuario (para hacer display si no ha buscado nada)
    useEffect(() => {
        async function fetchData() {
            const response = await getTop("artists");
            console.log(response.items)
            setDefaultArtists(response.items);
        }
        fetchData();
    }, []);

    // Busqueda de artistas con debouncing de 300 ms
    useEffect(() => {
        const timer = setTimeout(async () => {
            if (search.trim()) {
                try {
                    const response = await getArtists(search);
                    setSearchResult(response.artists.items || []);
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
            {/* Header */}
            <div className="border-b border-slate-800/80 bg-slate-900/80 px-4 py-3">
                <h2 className="text-sm font-semibold tracking-tight text-slate-100">
                    Artistas
                </h2>
            </div>

            {/* Barra buscadora */}
            <div className="px-3 py-2">
                <input
                    className="w-full rounded-lg border border-slate-700/70 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-purple-500/70 focus:ring-2 focus:ring-purple-500/40"
                    type="text"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Buscar artista en Spotify..."
                />
            </div>

            {/* Resultados de búsqueda */}
            <div className="flex-1 overflow-y-auto">
                <div className="divide-y divide-slate-800/70">
                    {search === ""
                        ? defaultArtists.map(artist => (
                            <WidgetItem
                                key={artist.id}
                                artist={artist}
                                seleccionarArtista={seleccionarArtista}
                            />
                        ))
                        : searchResult.map(artist => (
                            <WidgetItem
                                key={artist.id}
                                artist={artist}
                                seleccionarArtista={seleccionarArtista}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}