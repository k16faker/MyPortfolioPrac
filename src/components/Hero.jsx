import React from "react";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <div id="about" className="flex my-6 text-white">
      <div className="flex flex-col justify-center items-center w-full h-[calc(100vh-80px)]">
        <h1 className="text-4xl font-NG">FrontEnd Developer</h1>
        <p className="text-xl font-NG mt-4">안녕하세요, 언제나 한 걸음 더 걸어나가고자 하는 프론트엔드 개발자 지망생 박성준입니다.</p>
        <div className="mt-10">
            <FaGithub  className="hover:cursor-pointer" size={30} onClick={()=>window.open("https://github.com/k16faker")}/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
