import { X } from "lucide-react";

export default function PlaylistItem({ track, seleccionarCanciones }) {
    return (
        <div className="flex items-center gap-4 rounded-lg bg-slate-900/60 p-3 shadow-sm transition-colors hover:bg-slate-800/80">
            <img
                className="h-12 w-12 rounded-full border border-slate-700/80 object-cover"
                src={track.album.images?.[0]?.url}
                alt="track photo"
            />
            <h3 className="text-sm font-semibold text-slate-100">
                {track.name}
            </h3>
            <button
                onClick={() => seleccionarCanciones(track)}
                className="ml-auto rounded-full p-1 text-red-400 transition-all duration-200 hover:bg-red-500/10 hover:text-red-300 focus:outline-none focus:ring-2 focus:ring-red-500/60"
                aria-label="Cerrar"
            >
                <X className="h-4 w-4" />
            </button>
        </div>
    );
}
