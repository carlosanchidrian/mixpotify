export default function TrackWidgetItem({ track, seleccionarCanciones }){
    return(
        <div
            onClick={() => seleccionarCanciones(track)}
            className="flex items-center gap-4 p-3 cursor-pointer bg-slate-900/60 hover:bg-slate-800/80 transition-colors rounded-lg"
        >
            <img
                className="h-12 w-12 rounded-full object-cover border border-slate-700/80"
                src={track.album.images?.[0]?.url}
                alt="track photo"
            />
            <h3 className="text-sm font-semibold text-slate-100">
                {track.name}
            </h3>
        </div>
    );
}