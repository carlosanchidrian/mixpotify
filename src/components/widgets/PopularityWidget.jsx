import { useState } from "react";

export default function PopularityWidget({ popularity, setPopularity }) {
    const [popularidadMin, setPopularidadMin] = useState(0);
    const [popularidadMax, setPopularidadMax] = useState(100);

    function updatePopularityMin(newValue) {
        setPopularity(prev => ({ ...prev, min: newValue }))
    }

    function updatePopularityMax(newValue) {
        setPopularity(prev => ({ ...prev, max: newValue }))
    }

    return (
        <div className="flex flex-col h-80 overflow-hidden rounded-xl border border-slate-800/60 bg-slate-900/70 shadow-lg shadow-black/30">

            <div className="border-b border-slate-800/80 bg-slate-900/80 p-4">
                <h2 className="text-sm font-semibold tracking-tight text-slate-100">
                    Popularidad
                </h2>
            </div>

            {/* Resultados de busqueda con scrollbar */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-300">Minimo</h3>
                <input
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    value={popularity.min}
                    onChange={(e) => setPopularity(prev => ({ ...prev, min: parseInt(e.target.value) }))}
                    className="w-full accent-purple-500 bg-transparent cursor-pointer"
                />
                <span className="text-sm font-semibold text-slate-200/80">{popularidadMin}</span>

                <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-300">Maximo</h3>
                <input
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    value={popularity.max}
                    onChange={(e) => setPopularity(prev => ({ ...prev, max: parseInt(e.target.value) }))}
                    className="w-full accent-purple-500 bg-transparent cursor-pointer"
                />
                <span className="text-sm font-semibold text-slate-200/80">{popularidadMax}</span>
            </div>
        </div>
    );
}
