import { team } from "../data/team";
import TeamCard from "../components/TeamCard";

export default function Management() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Management Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {team.map(member => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}
