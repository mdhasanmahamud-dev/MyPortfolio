import React from "react";
import { Code2, Server, Layout, Database, Wrench, Globe } from "lucide-react";
import SectionTitle from "../../../components/SectionTitle";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Layout className="text-accent" size={22} />,
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "TypeScript", level: 30 },
      { name: "Redux / Context API", level: 85 },
    ],
  },
  {
    title: "Backend & Database",
    icon: <Server className="text-accent" size={22} />,
    skills: [
      { name: "Node.js / Express", level: 70 },
      { name: "MongoDB / Mongoose", level: 82 },
      { name: "PostgreSQL / Prisma", level: 10 },
      { name: "Firebase Auth", level: 88 },
    ],
  },
  {
    title: "Tools & Deployments",
    icon: <Wrench className="text-accent" size={22} />,
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "Docker", level: 22 },
      { name: "Figma to Code", level: 80 },
      { name: "Vercel / Netlify", level: 90 },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-10 px-6 md:px-12 bg-(--bg-main) relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle
          subtitle="My Expertise"
          title="Technical"
          highlight="Skills"
        />

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-4xl bg-(--bg-secondary) border border-(--border-color) hover:border-(--accent)/30 transition-all duration-500 relative"
            >
              {/* Subtle Card Glow on Hover */}
              <div className="absolute inset-0 bg-linear-to-br from-(--accent)/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-4xl"></div>

              <div className="relative z-10">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-10">
                  <div className="p-3 bg-(--accent) rounded-2xl border border-(--border-color) group-hover:scale-110 group-hover:border-(--accent)/50 transition-all duration-500">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white font-inter tracking-tight">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-8">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-3">
                      <div className="flex justify-between items-end">
                        <span className="text-sm font-semibold text-white/90 font-poppins">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-bold text-(--accent) font-inter bg-(--accent)/10 px-2 py-0.5 rounded-md">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Modern Progress Track */}
                      <div className="h-1.5 w-full bg-(--bg-main) rounded-full overflow-hidden border border-(--border-color)/50">
                        {/* Progress Fill */}
                        <div
                          className="h-full bg-linear-to-r from-(--accent) to-[#60a5fa] rounded-full transition-all duration-1000 ease-in-out relative"
                          style={{ width: `${skill.level}%` }}
                        >
                          {/* Inner Shine Effect */}
                          <div className="absolute top-0 right-0 h-full w-8 bg-white/20 blur-md -translate-y-1"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
