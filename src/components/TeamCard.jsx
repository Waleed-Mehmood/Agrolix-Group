export default function TeamCard({ member }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
      <img src={member.image} alt={member.name} className="w-24 h-24 object-cover mb-2 rounded-full" />
      <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
      <p className="text-gray-600 text-sm">{member.role}</p>
    </div>
  );
}
