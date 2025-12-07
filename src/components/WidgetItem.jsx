

export default function WidgetItem({ image, name, id , seleccionarArtista}){
    //console.log(image, name, id)

    return(
        <div onClick={() => seleccionarArtista(id)} className="flex items-center gap-4 p-3 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
            <img className="w-12 h-12 rounded-full object-cover border border-gray-200" src={image} alt="artist photo" />
            <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        </div>
    );
}