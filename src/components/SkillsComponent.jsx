


import React from 'react'

const SkillsComponent = ({name, percent}) => {
  return (
    <li className='flex w-full my-4'>
        <div className='w-1/4 text-center'>
            <p className='text-2xl font-bold font-NG'>{name}</p>
        </div>
        <div className='w-3/4 flex items-center justify-center px-2'>
            <div className='w-full h-2 bg-gray-300 rounded-full'>
                <div className='h-2 bg-blue-500 rounded-full' style={{width: percent}}></div>
            </div>
        </div>
    </li>
  )
}

export default SkillsComponent