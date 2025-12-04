import ArtistWidget from "./widgets/ArtistWidget";

import { useState, useEffect } from "react";

export default function WidgetBox({ setPreferences }) {
    const [artists, setArtists] = useState([]);


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            <ArtistWidget setArtists={setArtists}/>
        </div>
    );
}