import React from 'react'
import unity from "./assets/unity.png"
import mern from "./assets/mern.avif"
import asp from "./assets/asp.jpg"
import flutter from "./assets/flutter.png"
import pos from "./assets/pos.jpg"
const Portfolio = () => {
  return (
    <div>
      <h1 className='pt-5 text-3xl font-bold'>Portfolio</h1>
      <pre className='font-bold text-xl mt-5'>A section of projects I have worked on</pre>
      
      <div className='flex mt-5 space-x-3'>

      <div className='bg-amber-200 w-100 h-auto   rounded-md '>
        <div className='flex'>
        <img src={unity} alt="Loading" className='w-50 h-20 ' />
        <h2 className='text-3xl font-bold ml-5 mt-2 '>Siege Of Nations 3D</h2>
        </div>
       <div className='text-left mt-3 space-x-1 font-bold'>
        <pre>This Included: </pre>
        <ul className='space-y-1'>
          <li>Animations</li>
          <li>Terrain</li>
          <li>Ray casting</li>
          <li>New Input system</li>
          <li>Shooting Mechanics</li>
        </ul>
        
       </div>
      </div>

      <div className='w-115 h-auto bg-blue-500  rounded-md'>
        <div  className='flex'>
        <img src={mern} alt="Loading" className='w-50 h-20' />
        <h2 className='font-bold text-3xl'>Cyber Defence Playground</h2>
        </div>

        <div className='text-left font-bold'>
          <pre>This project Included:</pre>
          <ul>
            <li>XSS Attack </li>
            <li>DDOS Attack</li>
            <li>SQl Injection</li>
            <li>JWT Token Route Verification</li>
            <li>MongoDb implementation</li>
            <li>Redux tool kit</li>
            <li>React router dom</li>
          </ul>
        </div>

      </div>

      <div className=' bg-cyan-400 w-100 h-auto rounded-md'>
        <div className='flex'>
        <img src={asp} alt="Loading"  className='w-40 h-20'/>
        <h2 className='text-2xl font-bold ml-2'>Blood Bank App</h2>
        </div>

        <div className='text-left space-y-2  font-bold'>
          <pre >It Included:</pre>
          <ul className='space-y-2'>
            <li>Boot strap</li>
            <li>Database implementation</li>
            <li>Blood Donation</li>
            <li>Location checking</li>
          </ul>

        </div>

      </div>

      </div>

      <div className='flex space-x-3'>

      <div className='mt-10 bg-fuchsia-600 w-100 rounded-md h-auto'>
        <div className='flex space-x-5 pt-5 '>
        <img src={flutter} alt="Loading" className='w-50 h-20 ' />
        <h2 className='text-2xl font-bold'> Smart Life Organizer</h2>
        </div>
        <div className='text-left font-bold'>
          <ul className='space-y-1'>
            <li>Firebase Authentication</li>
            <li>Firebase exception Handling</li>
            <li>Express backend with MongoDB connection</li>
            <li>Cloude Firestore</li>
            <li>Google SignIn</li>
          </ul>
        </div>
      </div>

      <div className='w-100 h-auto bg-indigo-500 mt-10 rounded-md'>
        <div className='flex' >
          <img src={pos} alt="Loading" className='w-50 h-20 mt-1 ml-1'/>
          <h2 className='text-3xl font-bold ml-2'>Pos System</h2>
        </div>
        <div className='font-bold text-left mt-2 space-y-1'>
          <pre>It Included:</pre>
          <ul>
            <li>Swing front end</li>
            <li>Java Backend</li>
            <li>SQl Database implementation</li>
            <li> Multiple Client Server Architecture Implementation</li>
            <li>Exception Handling</li>
            <li>File Handling</li>
          </ul>
        </div>
      </div>

      </div>
    </div>
  )
}

export default Portfolio
