import React from "react";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <div id="about" className="flex my-6 text-white">
      <div className="flex flex-col justify-center items-center w-full h-[calc(100vh-80px)]">
        <h1 className="text-4xl font-mono">Hello, I'm Seong Jun</h1>
        <p className="text-xl font-mono">I'm a FrontEnd web developer</p>
        <div className="mt-10">
            <FaGithub  className="hover:cursor-pointer" size={30} onClick={()=>window.open("https://github.com/k16faker")}/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
