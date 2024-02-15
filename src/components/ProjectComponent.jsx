

import React from 'react'

const ProjectComponent = ({name, description, imgsrc, gitlink}) => {
  return (
    <li className='text-center justify-center items-center'>
      <div className='w-1/2 bg-slate-400 mx-auto p-3 rounded-lg text-black'>
        <div>
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
        <div className='w-full h-auto overflow-hidden'>
          <img className='w-full h-auto block mx-auto overflow-hidden' src={imgsrc} alt={name}/>
        </div>
        <div className='mt-3'>
          <p onClick={()=>window.open(gitlink)} className='hover:cursor-pointer'>View on Github</p>
        </div>
      </div>
    </li>
  )
}

export default ProjectComponent