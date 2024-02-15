import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

const RootPage = () => {
  return (
    <div className='w-full'>
        <Header />
        <Hero />
        <Skills />
        <Projects />
    </div>
  )
}

export default RootPage;