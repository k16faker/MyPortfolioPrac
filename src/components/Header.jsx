import React from 'react'
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <header className='flex fixed w-full h-[80px] text-white items-center justify-between p-4'>
        <h1 className='text-3xl font-mono'>Park Seong Jun</h1>
        <div>
          <Link to='about' smooth={true} duration={1200} className='mx-4 px-4 py-2 font-mono rounded-md cursor-pointer hover:bg-sky-500 transition-all'>About</Link>
          <Link to='skills' smooth={true} duration={1200} className='mx-4 px-4 py-2 font-mono rounded-md cursor-pointer hover:bg-sky-500 transition-all'>Skills</Link>
          <Link to='projects' smooth={true} duration={1200} className='mx-4 px-4 py-2 font-mono rounded-md cursor-pointer hover:bg-sky-500 transition-all'>Projects</Link>
          <Link to='contact' smooth={true} duration={1200} className='mx-4 px-4 py-2 font-mono rounded-md cursor-pointer hover:bg-sky-500 transition-all'>Contact</Link>
        </div>
    </header>
  )
}

export default Header