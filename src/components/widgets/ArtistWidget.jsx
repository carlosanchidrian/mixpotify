import { getArtists } from "@/app/api/artists";
import { getTop } from "@/app/api/user";
import { useEffect, useState } from "react";
import WidgetItem from "../WidgetItem";

export default function ({ seleccionarArtista }) {
    const [defaultArtists, setDefaultArtists] = useState([]);
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [selectedArtists, setSelectedArtists] = useState([]);

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
        <div className="flex flex-col bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden h-80">

            <div className="p-4 border-b border-gray-100 bg-gray-50/50">
                <h2 className="text-lg font-bold text-gray-800">
                    Artistas
                </h2>
            </div>

            {/* Barra buscadora */}
            <div className="p-3">
                <input
                    className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    type="text"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Buscar artista..."
                />
            </div>

            {/* Resultados de busqueda con scrollbar */}
            <div className="flex-1 overflow-y-auto">
                <div className="divide-y divide-gray-100">
                    {search === "" ?
                        (defaultArtists.map(artist =>
                            <WidgetItem key={artist.id} artist={artist} seleccionarArtista={seleccionarArtista} />
                        ))
                        :
                        (searchResult.map(artist =>
                            <WidgetItem key={artist.id} artist={artist} seleccionarArtista={seleccionarArtista} />
                        ))}
                </div>
            </div>
        </div>
    );
}