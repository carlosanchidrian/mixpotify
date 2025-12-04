import ArtistWidget from "./widgets/ArtistWidget";

export default function WidgetBox(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            <ArtistWidget/>
        </div>
    );
}