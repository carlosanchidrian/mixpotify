"use client"
import WidgetItem from "./WidgetItem";
import { useState } from "react";

export default function Preferences({ artists, seleccionarArtista }) {
    const [isOpen1, setIsOpen1] = useState(false);

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
                        <WidgetItem key={artist.id} artist={artist} seleccionarArtista={seleccionarArtista}/>
                    )}
                </div>
            )}
        </div>
        
    );
}
