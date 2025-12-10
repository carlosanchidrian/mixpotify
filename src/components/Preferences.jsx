"use client"
import WidgetItem from "./WidgetItem";
import { useState } from "react";

export default function Preferences({ artists, seleccionarArtista, genres, seleccionarGenero }) {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);


    return (
        <div className="bg-white border rounded-lg p-4 mb-6">
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
        </div>

    );
}
