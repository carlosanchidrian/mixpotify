export default function DecadeWidget({ seleccionarDecada }) {
    const decades = [1900, 1910, 1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020];

    return (
        <div className="flex h-80 flex-col overflow-hidden rounded-xl border border-slate-800/60 bg-slate-900/70 shadow-lg shadow-black/30">
            <div className="border-b border-slate-800/80 bg-slate-900/80 p-4">
                <h2 className="text-sm font-semibold tracking-tight text-slate-100">
                    Decadas
                </h2>
            </div>

            {/* Resultados de busqueda con scrollbar */}
            <div className="flex-1 overflow-y-auto">
                <div className="divide-y divide-slate-800/70">
                    {decades.map((decade, index) =>
                        <div
                            onClick={() => seleccionarDecada(decade)}
                            key={index}
                            className="flex items-center gap-4 p-3 cursor-pointer bg-slate-900/60 hover:bg-slate-800/80 transition-colors"
                        >
                            <h3 className="text-sm font-semibold text-slate-100">
                                {decade}
                            </h3>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
