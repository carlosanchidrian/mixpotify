import { getArtists, artistSearch } from "@/app/api/artists";
import { getTop } from "@/app/api/user";
import { useEffect, useState } from "react";
import WidgetItem from "../WidgetItem";

export default function ({ setArtists }) {
    const [defaultArtists, setDefaultArtists] = useState([]);
    const [search, setSearch] = useState("");
    const [searchedArtists, setSearchedArtist] = useState([]);

    // Setup inicial con carga de artistas favoritos del usuario (para hacer display si no ha buscado nada)
    useEffect(() => {
        async function fetchData() {
            const response = await getTop("artists");
            console.log(response.items)
            setDefaultArtists(response.items);
        }
        fetchData();
    }, []);

    useEffect(() => {
        async function fetchData() {
            const response = await getTop("artists");
            console.log(response.items)
            setDefaultArtists(response.items);
        }
        fetchData();
    }, [search]);

    return (
        <div className="flex flex-col bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden h-80">
            <div className="p-4 border-b border-gray-100 bg-gray-50/50">
                <h2 className="text-lg font-bold text-gray-800">
                    Artistas
                </h2>
            </div>

            <input
                className="text-black"
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Buscar artista..."
            />

            <div className="flex flex-col divide-y divide-gray-100 overflow-y-auto">
                {search === "" && defaultArtists.map(artist =>
                    <WidgetItem key={artist.id} image={artist.images[0].url} name={artist.name} id={artist.id} />
                )}

                {search !== "" && defaultArtists.map(artist =>
                    <WidgetItem key={artist.id} image={artist.images[0].url} name={artist.name} id={artist.id} />
                )}
            </div>
        </div>
    );
}