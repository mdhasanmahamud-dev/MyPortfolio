import React from "react";
import { GraduationCap } from "lucide-react";
import SectionTitle from "../../components/SectionTitle";

const Educational = () => {
  return (
    <section id="education" className="py-10 px-6 md:px-12 bg-(--bg-main)">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <SectionTitle
          title="Educational"
          highlight="Qualification"
          subtitle="  Academic background and current study details"
        />
        {/* Education Card */}
        <div className="bg-(--bg-secondary) border border-(--border-color) rounded-3xl p-8 md:p-10 hover:border-(--accent)/30 transition-all duration-500">
          <div className="flex items-start gap-5">
            {/* Icon */}
            <div className="p-4 rounded-2xl bg-(--accent)/10 text-(--accent)">
              <GraduationCap size={26} />
            </div>

            {/* Content */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-white/90">
                Diploma in Computer Science & Technology (CST)
              </h3>

              <p className="text-sm text-(--text-secondary)">
                Bangladesh Technical Education Board (BTEB)
              </p>

              <p className="text-sm text-white/80 leading-relaxed max-w-2xl">
                I am currently pursuing a Diploma in Computer Science &
                Technology, where I am gaining strong foundational knowledge in
                software development, web technologies, programming logic, and
                database management. This academic journey helps me build
                real-world problem-solving skills alongside practical project
                experience.
              </p>

              {/* Status */}
              <span className="inline-block mt-2 text-xs font-semibold text-(--accent) bg-(--accent)/10 px-3 py-1 rounded-full">
                Running
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Educational;
