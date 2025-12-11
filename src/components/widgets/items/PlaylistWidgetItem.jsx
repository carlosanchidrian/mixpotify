export default function PlaylistWidgetItem({ playlist , seleccionarPlaylist}){
    //console.log(image, name, id)
    return(
        <div onClick={() => seleccionarPlaylist(playlist)} className="flex items-center gap-4 p-3 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
            <img className="w-12 h-12 rounded-full object-cover border border-gray-200" src={playlist.images?.[0]?.url} alt="playlist photo" />
            <h3 className="text-lg font-semibold text-gray-800">{playlist.name}</h3>
        </div>
    );
}