import React from 'react'
import { Link } from 'react-router-dom'
const NavigationBar = () => {
  return (
    <div   >
       <h1 className='text-black font-bold pr-250 pt-1 text-3xl '>Muneeb Tariq</h1> 
    
    <nav className='w-full pl-120 flex gap-20 mt-1 ' >
        
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
    </nav>
    </div>
  )
}

export default NavigationBar
