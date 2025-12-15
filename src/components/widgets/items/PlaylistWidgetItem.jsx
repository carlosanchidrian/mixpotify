export default function PlaylistWidgetItem({ playlist, seleccionarPlaylist }) {
    return (
        <div
            onClick={() => seleccionarPlaylist(playlist)}
            className="flex items-center gap-4 p-3 cursor-pointer bg-slate-900/60 hover:bg-slate-800/80 transition-colors rounded-lg"
        >
            <img
                className="h-12 w-12 rounded-full object-cover border border-slate-700/80"
                src={playlist.images?.[0]?.url}
                alt="playlist photo"
            />
            <h3 className="text-sm font-semibold text-slate-100">
                {playlist.name}
            </h3>
        </div>
    );
}
