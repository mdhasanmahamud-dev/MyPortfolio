import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import SectionTitle from "../../../components/SectionTitle";
const Projects = () => {
  return (
    <div>
      <SectionTitle
        title="Featured "
        highlight="Projects"
        subtitle="A collection of my recent works"
      />
      <ProjectCard />
    </div>
  );
};

export default Projects;
