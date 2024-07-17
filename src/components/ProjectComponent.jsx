
import { IoLinkOutline } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";

import React from 'react'

const ProjectComponent = ({name, description, imgsrc, gitlink, hosting}) => {
  return (
    <li className='h-[400px] text-center justify-center items-center font-NG'>
      <div className='relative w-full h-full bg-black mx-auto p-3 rounded-lg'>
        <div className='my-10 text-white'>
          <h1>{name}</h1>
          <p className='mt-5'>{description}</p>
        </div>
        <div>
            <img src={imgsrc} alt={name} className='w-[250px] h-[150px] mx-auto' />
        </div>
        <div className="flex absolute bottom-1 right-1">
          <IoLinkOutline className="hover:cursor-pointer" size={40} onClick={()=>window.open(hosting)}/>
          <FaGithubSquare className="hover:cursor-pointer" size={40} onClick={()=>window.open(gitlink)}/>
        </div>
      </div>
    </li>
  )
}

export default ProjectComponent