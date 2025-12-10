export default function PlaylistItem({ track }){
    return(
        <div className="flex items-center gap-4 p-3 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
            <img className="w-12 h-12 rounded-full object-cover border border-gray-200" src={track.album.images?.[0]?.url} alt="track photo" />
            <h3 className="text-lg font-semibold text-gray-800">{track.name}</h3>
        </div>
    );
}