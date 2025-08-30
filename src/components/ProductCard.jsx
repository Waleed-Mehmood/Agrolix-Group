export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
      <img src={product.image} alt={product.name} className="w-24 h-24 object-cover mb-2 rounded" />
      <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
      <p className="text-gray-600 text-sm mb-2">{product.description}</p>
      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">{product.category}</span>
    </div>
  );
}
