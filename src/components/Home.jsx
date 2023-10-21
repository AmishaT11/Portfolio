import React from 'react'
import Hero from "../assests/hero.png"

import {MdKeyboardArrowRight} from "react-icons/md";
import {Link} from "react-scroll";
const Home = () => {
  return (
    <div 
    name="home" className='h-screen bg-gradient-to-b from-black to-gray-800 '>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Web Developer</h2>
            <p className="text-gray-500 py-4 max-w-md">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est eaque illo sunt dolor velit impedit nulla? Dolores reiciendis cumque debitis?</p>

            <div>
                <Link
                to="Portfolio" smooth duration={500}
                className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>Prtfolio
                    <span className='hover:rotate-90 duration-300'>
                        <MdKeyboardArrowRight size={25} className='ml-1'/>
                    </span>
                </Link>
            </div>
        </div>

        <div>
            <img src={Hero} alt="my profile" className='rounded-2xl  mx-auto w-full md:w-full'></img>
        </div>
      </div>
        </div>
        
        
    </div>
  )
}

export default Home
