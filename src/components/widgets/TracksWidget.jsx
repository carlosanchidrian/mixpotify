import { getUserTracks, getTracks } from "@/app/api/tracks";
import TrackWidgetItem from "./items/TrackWidgetItem";

import { useState, useEffect } from "react";

export default function TracksWidget({ seleccionarCanciones }) {
    const [defaultTracks, setDefaultTracks] = useState([]);
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    // Setup inicial con carga de tracks favoritos del usuario (para hacer display si no ha buscado nada)
    useEffect(() => {
        async function fetchData() {
            const response = await getUserTracks();
            setDefaultTracks(response.items);
        }
        fetchData();
    }, []);

    // Busqueda de tracks con debouncing de 300 ms
    useEffect(() => {
        const timer = setTimeout(async () => {
            if (search.trim()) {
                try {
                    const response = await getTracks(search);
                    console.log(response)
                    setSearchResult(response.tracks.items || []);
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
        <div className="flex flex-col bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden h-80">

            <div className="p-4 border-b border-gray-100 bg-gray-50/50">
                <h2 className="text-lg font-bold text-gray-800">
                    Canciones
                </h2>
            </div>

            {/* Barra buscadora */}
            <div className="p-3">
                <input
                    className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    type="text"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Buscar cancion..."
                />
            </div>

            {/* Resultados de busqueda con scrollbar */}
            <div className="flex-1 overflow-y-auto">
                <div className="divide-y divide-gray-100">
                    {search === "" ?
                        (defaultTracks.map(track =>
                            <TrackWidgetItem key={track.id} track={track} seleccionarCanciones={seleccionarCanciones}/>))
                        :
                        (searchResult.map(track =>
                            <TrackWidgetItem key={track.id} track={track} seleccionarCanciones={seleccionarCanciones}/>)
                        )
                    }
                </div>
            </div>
        </div>
    );
}