import { useState } from "react";

export default function PopularityWidget({ setPopularity }) {
    const [popularidadMin, setPopularidadMin] = useState(0);
    const [popularidadMax, setPopularidadMax] = useState(100);


    function updatePopularityMin(newValue) {
        setPopularidadMin(newValue);
        setPopularity(prev => ({ ...prev, min: newValue }))
    }

    function updatePopularityMax(newValue) {
        setPopularidadMax(newValue);
        setPopularity(prev => ({ ...prev, max: newValue }))
    }

    return (
        <div className="flex flex-col bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden h-80">

            <div className="p-4 border-b border-gray-100 bg-gray-50/50">
                <h2 className="text-lg font-bold text-gray-800">
                    Popularidad
                </h2>
            </div>

            {/* Resultados de busqueda con scrollbar */}
            <div className="flex-1 overflow-y-auto">
                <div className="divide-y divide-gray-100">
                    <h3 className="text-md font-semibold text-gray-800">Minimo</h3>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        step="5"
                        value={popularidadMin}
                        onChange={(e) => updatePopularityMin(e.target.value)}
                        className="w-full"
                    />
                    <span className="font-semibold text-gray-800/60">{popularidadMin}</span>

                    <h3 className="text-md font-semibold text-gray-800">Maximo</h3>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        step="5"
                        value={popularidadMax}
                        onChange={(e) => updatePopularityMax(e.target.value)}
                        className="w-full"
                    />
                    <span className="font-semibold text-gray-800/60">{popularidadMax}</span>
                </div>
            </div>
        </div>
    );
}

{/* <input
    type="range"
    min="0"
    max="100"
    step="5"
    value={popularidad}
    onChange={(e) => setPopularidad(e.target.value)}
    className="w-full"
/> */}