export default function GenreWidget({ seleccionarGenero }) {
    const genres = ['acoustic', 'afrobeat', 'alt-rock', 'alternative', 'ambient', 'anime', 'black-metal', 'bluegrass', 'blues', 'bossanova', 'brazil', 'breakbeat', 'british', 'cantopop', 'chicago-house', 'children', 'chill', 'classical', 'club', 'comedy', 'country', 'dance', 'dancehall', 'death-metal', 'deep-house', 'detroit-techno', 'disco', 'disney', 'drum-and-bass', 'dub', 'dubstep', 'edm', 'electro', 'electronic', 'emo', 'folk', 'forro', 'french', 'funk', 'garage', 'german', 'gospel', 'goth', 'grindcore', 'groove', 'grunge', 'guitar', 'happy', 'hard-rock', 'hardcore', 'hardstyle', 'heavy-metal', 'hip-hop', 'house', 'idm', 'indian', 'indie', 'indie-pop', 'industrial', 'iranian', 'j-dance', 'j-idol', 'j-pop', 'j-rock', 'jazz', 'k-pop', 'kids', 'latin', 'latino', 'malay', 'mandopop', 'metal', 'metal-misc', 'metalcore', 'minimal-techno', 'movies', 'mpb', 'new-age', 'new-release', 'opera', 'pagode', 'party', 'philippines-opm', 'piano', 'pop', 'pop-film', 'post-dubstep', 'power-pop', 'progressive-house', 'psych-rock', 'punk', 'punk-rock', 'r-n-b', 'rainy-day', 'reggae', 'reggaeton', 'road-trip', 'rock', 'rock-n-roll', 'rockabilly', 'romance', 'sad', 'salsa', 'samba', 'sertanejo', 'show-tunes', 'singer-songwriter', 'ska', 'sleep', 'songwriter', 'soul', 'soundtracks', 'spanish', 'study', 'summer', 'swedish', 'synth-pop', 'tango', 'techno', 'trance', 'trip-hop', 'turkish', 'work-out', 'world-music']

    return (
        <div className="flex flex-col h-80 overflow-hidden rounded-xl border border-slate-800/60 bg-slate-900/70 shadow-lg shadow-black/30">
            <div className="border-b border-slate-800/80 bg-slate-900/80 p-4">
                <h2 className="text-sm font-semibold tracking-tight text-slate-100">
                    Generos
                </h2>
            </div>

            {/* Resultados de busqueda con scrollbar */}
            <div className="flex-1 overflow-y-auto">
                <div className="divide-y divide-slate-800/70">
                    {genres.map((genre, index) =>
                        <div
                            onClick={() => seleccionarGenero(genre)}
                            key={index}
                            className="flex items-center gap-4 p-3 cursor-pointer bg-slate-900/60 hover:bg-slate-800/80 transition-colors"
                        >
                            <h3 className="text-sm font-semibold text-slate-100">
                                {genre}
                            </h3>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
