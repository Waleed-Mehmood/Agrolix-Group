export default function ArticleCard({ article }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
      <img src={article.image} alt={article.title} className="w-24 h-24 object-cover mb-2 rounded" />
      <h3 className="font-semibold text-lg mb-1">{article.title}</h3>
      <p className="text-gray-600 text-sm mb-2">{article.summary}</p>
      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">{article.date}</span>
    </div>
  );
}
