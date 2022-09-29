import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import Skills from '../components/Skills';

const Home = () => {
  return (
    <>
      <div className='flex justify-between md:px-40 px-8 md:mt-16 mt-4 pt-24 h-[90vh] bg-gradient-to-b from-zinc-700 to-zinc-400'>
        <div className='flex flex-col md:w-1/2 w-full md:gap-8 gap-6 md:items-start items-center'>
          <h1 className='text-gray-300 text-lg'>Hello There!</h1>
          <h1 className='text-white font-bold md:text-7xl text-5xl'>I<span className='text-zinc-900'>'</span>m Rando</h1>
          <h3 className='text-gray-200 text-2xl'>A Sofware Developer</h3>
          <p className='md:text-start text-center text-gray-300 md:pr-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus et quae consequuntur ipsam, facere omnis voluptatibus rem fugiat, illum dolore debitis nobis libero consectetur. Distinctio illum aperiam delectus ipsam numquam?</p>
          <div className='flex gap-4 text-4xl text-zinc-200'>
            <a><FaLinkedin className='hover:text-zinc-400 cursor-pointer'/></a>
            <a href='mailto:m.officialkev@gmail.com'><HiOutlineMail className='hover:text-zinc-400 cursor-pointer'/></a>
            <a><FaInstagram className='hover:text-zinc-400 cursor-pointer'/></a>
            <a href='https://twitter.com'><FaTwitter className='hover:text-zinc-400 cursor-pointer'/></a>
          </div>
          <div className='flex gap-3 mt-3'>
            <button className='w-30 h-12 bg-zinc-900 hover:bg-zinc-800 hover:text-gray-200 text-white text-xl px-4 rounded-md'><Link to='/contact'>Hire Me</Link></button>
            <button className='w-30 h-12 bg-transparent hover:text-gray-200 text-white text-xl px-4 border border-gray-300 rounded-md'><Link to='/projects'>Projects</Link></button>
          </div>
        </div>
        <div className='hidden md:text-lg'>Stuff</div>
      </div>
      <Skills />
    </>
  )
}

export default Home;