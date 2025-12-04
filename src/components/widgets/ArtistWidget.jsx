import { getArtists, artistSearch } from "@/app/api/artists";
import { getTop } from "@/app/api/user";
import { useEffect, useState } from "react";
import WidgetItem from "../WidgetItem";

export default function ({ playlistTracks }) {
    const [defaultArtists, setDefaultArtists] = useState([]);
    const [search, setSearch] = useState([]);

    // Setup inicial con carga de artistas favoritos del usuario (para hacer display si no ha buscado nada)
    useEffect(() => {
        async function fetchData() {
            const response = await getTop("artists");
            console.log(response.items)
            setDefaultArtists(response.items);
        }
        fetchData();
    }, []);



    return (
        <div className="flex flex-col bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden h-fit">
            <div className="p-4 border-b border-gray-100 bg-gray-50/50">
                <h2 className="text-lg font-bold text-gray-800">
                    Top Artistas
                </h2>
            </div>

            <div className="flex flex-col divide-y divide-gray-100">
                {defaultArtists.map(artist =>
                    <WidgetItem key={artist.id} image={artist.images[0].url} name={artist.name} id={artist.id} />
                )}
            </div>  
        </div>
    );
}