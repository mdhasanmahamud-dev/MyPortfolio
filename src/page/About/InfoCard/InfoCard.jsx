import React from "react";
import { Code2, Sparkles } from "lucide-react";

const InfoCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
      {/* Specialty */}
      <div className="group p-6 rounded-2xl bg-(--bg-secondary) border border-(--border-color) hover:border-(--accent)/50 transition-all duration-300 shadow-sm">
        <div className="w-10 h-10 mb-4 rounded-lg text-(--text-secondary) bg-(--bg-main) border border-(--border-color) flex items-center justify-center group-hover:text-(--accent) transition-colors">
          <Code2 size={20} />
        </div>
        <h4 className="text-lg font-bold mb-2 text-white">My Specialty</h4>
        <p className="text-sm text-(--text-secondary) leading-relaxed">
          I primarily work with React and modern web technologies. I focus on
          clean architecture, modular code, and scalable applications.
        </p>
      </div>

      {/* Personality */}
      <div className="group p-6 rounded-2xl bg-(--bg-secondary) border border-(--border-color) hover:border-(--accent)/50 transition-all duration-300 shadow-sm">
        <div className="w-10 h-10 mb-4 rounded-lg text-(--text-secondary) bg-(--bg-main) border border-(--border-color) flex items-center justify-center group-hover:text-(--accent) transition-colors">
          <Sparkles size={20} />
        </div>
        <h4 className="text-lg text-white font-bold mb-2">Personality</h4>
        <p className="text-sm text-(--text-secondary) leading-relaxed">
          I enjoy learning quickly and thrive in collaborative teams.
          Challenging projects inspire me to grow continuously.
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
