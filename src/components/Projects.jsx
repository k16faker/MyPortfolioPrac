import React from "react";
import ProjectComponent from "./ProjectComponent";

import todolist from "../images/todolist.png";

const projectsList = [
  {
    name: "Todolist",
    description: "This is my first toy-project. I made a todolist using React.js.",
    imgsrc: {todolist},
    hosting: 'https://mylisttest-be9b5.web.app/',
    gitlink:"https://github.com/k16faker/TodoList_first"
  },
  {
    name: "StreamerInfo",
    description: "This is my second toy-project. You can search streamer's information using Twitch API.",
    imgsrc: "https://via.placeholder.com/150",
    hosting: "https://twitchinfoprac.vercel.app/",
    gitlink: "https://github.com/k16faker/TwitchInfoPractice"
  },
  {
    name: "XX-inside",
    description: "This is my third toy-project. I made a community website using React.js, vite, firebase.",
    hosting: "https://inside-practice-7224c.web.app/",
    gitlink: "https://github.com/k16faker/xxinsideboard",
  }
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center w-full pt-[100px] h-[calc(100vh-80px)] text-white"
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
              hosting={project.hosting}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
