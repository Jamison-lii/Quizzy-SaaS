import { Users } from "lucide-react";

type TeamCardProps = {
  name: string;
  role: string;
};

export function TeamCard({ name, role }: TeamCardProps) {
  return (
    <div className="w-[220px] shrink-0 rounded-xl bg-slate-800 border border-slate-700 shadow-sm px-6 py-5 text-center">
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#7C3AED]/20 flex items-center justify-center">
        <Users className="text-[#7C3AED]" size={24} />
      </div>
      <h4 className="font-semibold text-white">{name}</h4>
      <p className="text-slate-400">{role}</p>
    </div>
  );
}
