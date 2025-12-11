export default function DecadeWidget( { seleccionarDecada }) {
    const decades = [1900, 1910, 1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020];


    return (
        <div className="flex flex-col bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden h-80">

            <div className="p-4 border-b border-gray-100 bg-gray-50/50">
                <h2 className="text-lg font-bold text-gray-800">
                    Decadas
                </h2>
            </div>

            {/* Resultados de busqueda con scrollbar */}
            <div className="flex-1 overflow-y-auto">
                <div className="divide-y divide-gray-100">
                    {decades.map((decade, index) =>
                        <div onClick={() => seleccionarDecada(decade)} key={index} className="flex items-center gap-4 p-3 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
                            <h3 className="text-lg font-semibold text-gray-800">{decade}</h3>
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}