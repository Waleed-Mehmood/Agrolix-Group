import { crops } from "../data/crops";

export default function Crops() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Crops</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {crops.map(crop => (
          <div key={crop.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <img src={crop.image} alt={crop.name} className="w-24 h-24 object-cover mb-2 rounded" />
            <h3 className="font-semibold text-lg mb-1">{crop.name}</h3>
            <p className="text-gray-600 text-sm">{crop.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
