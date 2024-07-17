import React from "react";
import SkillsComponent from "./SkillsComponent";

const SkillList = [
  { name: "HTML", percent: "90%" },
  { name: "CSS", percent: "80%" },
  { name: "JavaScript", percent: "70%" },
  { name: "React", percent: "80%" },
  { name: "TailwindCSS", percent: "80%" },
];

const StudyList = [
  { name: "TypeScript", percent: "50%" },
  { name: "Next.js", percent: "60%" },
  { name: "Node.js", percent: "30%" },
  { name: "Spring Boot", percent: "30%" },
];

const Skills = () => {
  return (
    <div
      id="skills"
      className="flex justify-center items-center w-full h-[calc(100vh-80px)] text-white"
    >
      <div className="w-1/2 justify-center">
        <h1 className="text-center font-bold text-3xl font-NG">사용 가능한 기술</h1>
        <ul className="">
          {SkillList.map((skill, index) => (
            <SkillsComponent
              key={index}
              name={skill.name}
              percent={skill.percent}
            />
          ))}
        </ul>
      </div>
      <div className="w-1/2">
        <h1 className="text-center font-bold text-3xl font-NG">이건 공부중이에요!</h1>
        <ul className="">
          {StudyList.map((skill, index) => (
            <SkillsComponent
              key={index}
              name={skill.name}
              percent={skill.percent}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
