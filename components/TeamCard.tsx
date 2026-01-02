import { Users } from "lucide-react";

type TeamCardProps = {
  name: string;
  role: string;
};

export function TeamCard({ name, role }: TeamCardProps) {
  return (
    <div className="w-[220px] shrink-0 rounded-xl bg-white border border-slate-100 shadow-sm px-6 py-5 text-center">
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
        <Users className="text-[#007AFF]" size={24} />
      </div>
      <h4 className="font-semibold text-[#0A2540]">{name}</h4>
      <p className="text-sm text-slate-500">{role}</p>
    </div>
  );
}
