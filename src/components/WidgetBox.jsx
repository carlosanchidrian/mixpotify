"use client"

import ArtistWidget from "./widgets/ArtistWidget";

import { useState, useEffect } from "react";

export default function WidgetBox({ setPreferences }) {
    const [artists, setArtists] = useState([]);
    useEffect(() => {
           console.log(artists)
        }, [artists]);
    

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {artists.map(
                artist => <h1>{artist}</h1>
            )}
            <ArtistWidget setArtists={setArtists}/>
        </div>
    );
}