import { X } from "lucide-react";

export default function PlaylistItem({ track, seleccionarCanciones }) {
    return (
        <div className="flex items-center gap-4 p-3 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
            <img className="w-12 h-12 rounded-full object-cover border border-gray-200" src={track.album.images?.[0]?.url} alt="track photo" />
            <h3 className="text-lg font-semibold text-gray-800">{track.name}</h3>
            <button
                onClick={() => seleccionarCanciones(track)}
                className="ml-auto p-1 text-red-500 hover:text-red-600 hover:bg-red-50 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                aria-label="Cerrar"
            >
                <X />
            </button>
        </div>
    );
}