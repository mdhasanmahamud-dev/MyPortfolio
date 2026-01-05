import React from "react";
import { useParams, NavLink } from "react-router";
import { projects } from "../../../data/projects";
import {
  ExternalLink,
  Github,
  ArrowLeft,
  Rocket,
  ShieldAlert,
  Cpu,
} from "lucide-react";

const Detailse = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-(--bg-main)">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-(--text-primary)">
            Project Not Found
          </h2>
          <NavLink
            to="/projects"
            className="text-(--accent) hover:underline flex items-center justify-center gap-2"
          >
            <ArrowLeft size={18} /> Back to Projects
          </NavLink>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-(--bg-main) text-(--text-primary) font-['Roboto'] pb-20">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-(--bg-main) via-(--bg-main)/40 to-transparent" />

        <div className="absolute bottom-10 left-0 w-full px-6">
          <div className="container max-w-6xl mx-auto">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-extrabold text-(--text-secondary) font-['Inter'] tracking-tight max-w-4xl">
              {project.name}
            </h1>
          </div>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto px-6 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <section>
              <h2 className="text-2xl text-white font-bold mb-4 font-['Inter'] flex items-center gap-2">
                Overview
              </h2>
              <p className="text-lg text-(--text-secondary) leading-relaxed text-justify">
                {project.description}
              </p>
            </section>

            {/* Challenges & Solutions */}
            <section className="bg-(--bg-secondary) p-8 rounded-3xl border border-(--border-color) relative overflow-hidden">
              <ShieldAlert className="absolute -right-4 -top-4 w-24 h-24 text-(--accent) opacity-5" />
              <h2 className="text-2xl font-bold mb-4 font-['Inter'] text-white flex items-center gap-2">
                Challenges Faced
              </h2>
              <p className="text-(--text-secondary) leading-relaxed">
                {project.challenges}
              </p>
            </section>

            {/* Future Plans */}
            <section className="bg-gradient-to-br from-(--bg-secondary) to-(--bg-main) p-8 rounded-3xl border border-(--border-color)">
              <h2 className="text-2xl font-bold mb-4 font-['Inter']  text-white flex items-center gap-2">
                <Rocket className="text-white" /> Future Roadmap
              </h2>
              <p className="text-(--text-secondary) leading-relaxed">
                {project.futurePlans}
              </p>
            </section>
          </div>

          {/* Right Column: Sidebar */}
          <div className="space-y-8">
            {/* Actions */}
            <div className="flex flex-col gap-4">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-(--accent) text-(--text-primary) rounded-2xl font-['Poppins'] font-bold hover:bg-(--accent)/90 transition-all shadow-lg shadow-(--accent)/20 active:scale-95"
                >
                  Live Demo <ExternalLink size={20} />
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  className="flex items-center text-white justify-center gap-3 px-8 py-4 border border-(--border-color) bg-(--card-bg)  rounded-2xl font-['Poppins'] font-bold hover:bg-(--border-color) transition-all active:scale-95"
                >
                  GitHub Repository <Github size={20} />
                </a>
              )}
            </div>

            {/* Tech Stack Card */}
            <div className="bg-(--bg-secondary) p-6 rounded-3xl border border-(--border-color)">
              <h3 className="text-lg font-bold mb-4 font-['Inter'] flex items-center text-white gap-2">
                <Cpu size={18} className="text-white" /> Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[12px] px-3 py-1.5 bg-(--bg-main) text-(--text-secondary) border border-(--border-color) rounded-xl font-['Poppins'] hover:border-(--accent)/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailse;
