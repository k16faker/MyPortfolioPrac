import React from "react";
import ProjectComponent from "./ProjectComponent";

import todolist from "../images/todolist.png";

const projectsList = [
  {
    name: "Todolist",
    description: "This is a project",
    imgsrc: {todolist},
    gitlink:"https://github.com/k16faker/TodoList_first"
  },
  {
    name: "Project 2",
    description: "This is a project",
    imgsrc: "https://via.placeholder.com/150",
  },
  {
    name: "Project 3",
    description: "This is a project",
    imgsrc: "https://via.placeholder.com/150",
  },
  {
    name: "Project 4",
    description: "This is a project",
    imgsrc: "https://via.placeholder.com/150",
  },
  {
    name: "Project 5",
    description: "This is a project",
    imgsrc: "https://via.placeholder.com/150",
  },
  {
    name: "Project 6",
    description: "This is a project",
    imgsrc: "https://via.placeholder.com/150",
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center w-full h-[calc(100vh-80px)] text-white"
    >
      <h1 className="text-3xl">Projects</h1>
      <div className="w-full p-4 mt-4">
        <ul className="grid grid-cols-4 gap-4">
          {projectsList.map((project, index) => (
            <ProjectComponent
              key={index}
              name={project.name}
              description={project.description}
              imgsrc={project.imgsrc}
              gitlink={project.gitlink}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
