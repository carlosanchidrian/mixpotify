export default function MoodWidget() {
    return (
        <div className="mb-4">
            <label className="text-sm text-gray-500">Mínimo</label>
            <input
                type="range"
                min="0"
                max="100"
                step="10"
                value={popularity[0]}
                onChange={(e) => setPopularity([parseInt(e.target.value), popularity[1]])}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
        </div>
    );
}