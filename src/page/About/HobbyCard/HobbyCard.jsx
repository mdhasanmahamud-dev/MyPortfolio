import React from "react";
import { Music, Gamepad2, Palette } from "lucide-react";

const hobbies = [
  {
    icon: <Music size={16} />,
    label: "Music",
    colorClass:
      "hover:text-emerald-400 hover:border-emerald-400/40 hover:bg-emerald-400/5",
  },
  {
    icon: <Palette size={16} />,
    label: "Design",
    colorClass:
      "hover:text-amber-400 hover:border-amber-400/40 hover:bg-amber-400/5",
  },
  {
    icon: <Gamepad2 size={16} />,
    label: "Gaming",
    colorClass:
      "hover:text-rose-400 hover:border-rose-400/40 hover:bg-rose-400/5",
  },
];

const HobbyCard = () => {
  return (
    <div className="pt-6 space-y-4">
      <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-(--text-secondary) opacity-60">
        Beyond the Screen
      </h4>

      <div className="flex flex-wrap gap-3">
        {hobbies.map((hobby, index) => (
          <div
            key={index}
            className={`
              flex items-center gap-2.5 px-4 py-2 
              rounded-xl border border-(--border-color) bg-(--bg-secondary)/50
              text-(--text-secondary) text-xs font-medium
              transition-all duration-300 ease-out
              cursor-default select-none
              ${hobby.colorClass}
            `}
          >
            <span className="transition-transform duration-300">
              {hobby.icon}
            </span>
            <span className="font-poppins">{hobby.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HobbyCard;
