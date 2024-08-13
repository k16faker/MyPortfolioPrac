import React from "react";
import ProjectComponent from "./ProjectComponent";



const projectsList = [
  {
    name: "Todolist",
    description: "제 첫번째 토이 프로젝트입니다. React.js, firebase를 사용하여 만든 투두리스트입니다.",
    imgsrc: "/images/todolist.png",
    hosting: 'https://mylisttest-be9b5.web.app/',
    gitlink:"https://github.com/k16faker/TodoList_first"
  },
  {
    name: "StreamerInfo",
    description: "제 두번째 토이 프로젝트입니다. React.js, firebase를 사용하여 Twitch 스트리머의 정보를 알 수 있는 웹사이트입니다. Twitch가 한국 서비스를 종료해 쓸모가 없어졌지만요",
    imgsrc: "/images/StreamerInfo.png",
    hosting: "https://twitchinfoprac.vercel.app/",
    gitlink: "https://github.com/k16faker/TwitchInfoPractice"
  },
  {
    name: "XX-inside",
    description: "세번째 토이 프로젝트입니다. React.js, firebase를 사용하여 만든 유사 커뮤니티입니다. 특이점으론 CRA가 아닌 Vite를 사용했습니다.",
    imgsrc: "/images/xx-inside.png",
    hosting: "https://inside-practice-7224c.web.app/",
    gitlink: "https://github.com/k16faker/xxinsideboard",
  },
  {
    name: "My-Community",
    description: "세번째 토이 프로젝트인 XX-inside를 개량해서 만든, 저만의 커뮤니티 토이프로젝트입니다. React.js와 Firebase를 사용했고, 커뮤니티를 자주 하신 분은 바로 알아보실 사이트를 참고하여 만들었습니다.",
    imgsrc: "/images/MyCommunity.png",
    hosting: "https://mycommunity-rho.vercel.app/",
    gitlink: "https://github.com/k16faker/community",
  },
  {
    name: "Cocktail-List",
    description: "여러 칵테일에 대한 정보를 제공해주는 토이프로젝트입니다. 칵테일에 대한 정보가 있는 오픈 API를 활용하여 제작중에 있습니다..",
    imgsrc: "/images/Cocktail.png",
    hosting: "https://cocktail-list-ten.vercel.app",
    gitlink: "https://github.com/k16faker/CocktailList",
  },
  {
    name: "B-Market",
    description: "FakeStore API를 활용하여 만든 토이프로젝트입니다. React.js와 Redux를 사용하여 만들었습니다.",
    imgsrc: "/images/store.png",
    hosting: "https://fakestore-ivory.vercel.app/",
    gitlink: "https://github.com/k16faker/fakestore",
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
        <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
