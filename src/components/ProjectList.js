import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const userProjects = projects.map((project) => {
    return <div key={project.id}>{project.name}</div>;
  }); 
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{userProjects}</div>
    </div>
  );
}

export default ProjectList;
 