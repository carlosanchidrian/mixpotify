export default function WidgetItem({ artist , seleccionarArtista}){
    return(
        <div
            onClick={() => seleccionarArtista(artist)}
            className="flex items-center gap-4 p-3 bg-slate-900/60 hover:bg-slate-800/80 transition-colors cursor-pointer rounded-lg"
        >
            <img
                className="h-12 w-12 rounded-full object-cover border border-slate-700/80"
                src={artist.images?.[0]?.url}
                alt="artist photo"
            />
            <h3 className="text-sm font-semibold text-slate-100">
                {artist.name}
            </h3>
        </div>
    );
}
