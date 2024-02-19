

import React from 'react'

const ProjectComponent = ({name, description, imgsrc, gitlink, hosting}) => {
  return (
    <li className='text-center justify-center items-center'>
      <div className='w-1/2 bg-slate-400 mx-auto p-3 rounded-lg text-black'>
        <div className='my-10'>
          <h1>{name}</h1>
          <p className='mt-5'>{description}</p>
        </div>
        <div className='mt-10 p-2 border rounded-lg w-[150px] mx-auto'>
          <p onClick={()=>window.open(hosting)} className='hover:cursor-pointer'>Hosting Link</p>
        </div>
        {/* <div className='w-full h-auto overflow-hidden'>
          <img className='w-full h-auto block mx-auto overflow-hidden' src={imgsrc} alt={name}/>
        </div> */}
        <div className='mt-10 p-2 border rounded-lg w-[150px] mx-auto'>
          <p onClick={()=>window.open(gitlink)} className='hover:cursor-pointer'>View on Github</p>
        </div>
      </div>
    </li>
  )
}

export default ProjectComponent