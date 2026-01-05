import React from "react";
import { projects } from "../../../data/projects.js";
import { NavLink, useNavigate } from "react-router";
import { ExternalLink } from "lucide-react";

const ProjectCard = () => {
  const navigate = useNavigate();

  return (
    <div className="container max-w-7xl mx-auto px-6 py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative bg-(--card-bg) rounded-2xl overflow-hidden border border-(--border-color) hover:border-(--accent)/50 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
          >
            {/* Image Section with Overlay */}
            <div className="relative h-60 w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-(--bg-secondary)/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            </div>

            {/* Project Content */}
            <div className="p-6 flex flex-col flex-1">
              {/* Project Name & Category */}
              <div className="mb-3">
                <h3 className="text-xl font-bold text-(--text-secondary) group-hover:text-(--accent) transition-colors duration-300">
                  {project.name}
                </h3>
              </div>

              {/* Tech Stack - Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.slice(0, 4).map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] uppercase tracking-wider px-2.5 py-1 bg-(--accent)/10 text-(--accent) border border-(--accent)/20 rounded-md font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description (Optional - if available in your data) */}
              {project.description && (
                <p className="text-(--text-secondary) text-sm line-clamp-2 mb-6 leading-relaxed">
                  {project.description}
                </p>
              )}

              {/* Action Button */}
              <div className="mt-auto">
                <NavLink
                  to={`/projects/${project.id}`}
                  className="group/btn relative w-full inline-flex items-center justify-center px-6 py-3 font-semibold text-white transition-all duration-300 bg-[var(--accent)] rounded-xl hover:bg-blue-600 active:scale-95 shadow-lg shadow-blue-500/20 overflow-hidden"
                >
                  {/* Button-er vitore subtle shine effect (Professional look) */}
                  <div className="absolute inset-0 w-full h-full bg-white/10 -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite] skew-x-12" />

                  <span className="relative flex items-center gap-2">
                    View Project Details
                    <ExternalLink
                      size={16}
                      className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 transition-transform duration-300"
                    />
                  </span>
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
