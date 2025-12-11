"use client"
import WidgetItem from "../widgets/items/WidgetItem";
import PlaylistWidgetItem from "../widgets/items/PlaylistWidgetItem";
import { useState } from "react";

export default function Preferences({ artists, seleccionarArtista, genres, seleccionarGenero, popularity, setPopularity, decades, seleccionarDecada, playlists, seleccionarPlaylist }) {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);


    return (
        <div className="bg-white border rounded-lg p-4 mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Preferencias seleccionadas:</h2>

            <h4
                onClick={() => setIsOpen1(!isOpen1)}
                className="font-semibold cursor-pointer text-gray-800"
            >
                Artistas seleccionados ({artists.length})
            </h4>
            {isOpen1 && (
                <div className="flex flex-wrap gap-2 mt-3">
                    {artists.map(artist =>
                        <WidgetItem key={artist.id} artist={artist} seleccionarArtista={seleccionarArtista} />
                    )}
                </div>
            )}

            <h4
                onClick={() => setIsOpen2(!isOpen2)}
                className="font-semibold cursor-pointer text-gray-800"
            >
                Generos seleccionados ({genres.length})
            </h4>
            {isOpen2 && (
                <div className="flex flex-wrap gap-2 mt-3">
                    {genres.map((genre, index) =>
                        <div onClick={() => seleccionarGenero(genre)} key={index} className="flex items-center gap-4 p-3 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
                            <h3 className="text-lg font-semibold text-gray-800">{genre}</h3>
                        </div>
                    )
                    }
                </div>
            )}

            <h4
                onClick={() => setIsOpen3(!isOpen3)}
                className="font-semibold cursor-pointer text-gray-800"
            >
                Popularidad
            </h4>
            {isOpen3 && (
                <div className="flex flex-wrap gap-2 mt-3">
                    <div onClick={() => setPopularity(prev => ({ ...prev, min: 0 }))} className="flex items-center gap-4 p-3 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
                        <h3 className="text-lg font-semibold text-gray-800">Minimo: {popularity.min}</h3>
                    </div>
                    <div onClick={() => setPopularity(prev => ({ ...prev, max: 100 }))} className="flex items-center gap-4 p-3 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
                        <h3 className="text-lg font-semibold text-gray-800">Maximo: {popularity.max}</h3>
                    </div>
                </div>
            )}

            <h4
                onClick={() => setIsOpen4(!isOpen4)}
                className="font-semibold cursor-pointer text-gray-800"
            >
                Decadas seleccionados ({decades.length})
            </h4>
            {isOpen4 && (
                <div className="flex flex-wrap gap-2 mt-3">
                    {decades.map((decade, index) =>
                        <div onClick={() => seleccionarDecada(decade)} key={index} className="flex items-center gap-4 p-3 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
                            <h3 className="text-lg font-semibold text-gray-800">{decade}</h3>
                        </div>
                    )
                    }
                </div>
            )}

            <h4
                onClick={() => setIsOpen5(!isOpen5)}
                className="font-semibold cursor-pointer text-gray-800"
            >
                Playlists seleccionados ({playlists.length})
            </h4>
            {isOpen5 && (
                <div className="flex flex-wrap gap-2 mt-3">
                    {playlists.map(playlist =>
                        <PlaylistWidgetItem key={playlist.id} playlist={playlist} seleccionarPlaylist={seleccionarPlaylist} />
                    )}
                </div>
            )}
        </div>

    );
}
