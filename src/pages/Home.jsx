import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import Skills from '../components/Skills';

const Home = () => {
  return (
    <>
      <div className='md:px-40 px-8 md:mt-16 mt-18 pt-20 md:h-[90vh] h-screen bg-gradient-to-b from-zinc-700 to-zinc-400'>
        <div className='flex flex-col w-full md:gap-8 gap-4 items-center'>
          <h1 className='text-gray-300 text-lg'>Hello There!</h1>
          <h1 className='text-white font-bold md:text-7xl text-4xl font-signature'>I<span className='text-zinc-900'>'</span>m Kevin Kimeto</h1>
          <h3 className='text-gray-200 text-2xl'>A Web Developer</h3>
          <p className='text-center text-gray-300 md:pr-32 md:pl-32'>I'm a Fullstack Web Development Freelancer based in Nairobi, with proficiency in ReactJS and Tailwind CSS. I design and build mobile-first web apps that meet modern development standards. I use NodeJS and Express for the backend and Technologies like Prisma and MongoDB to manipulate databases. If you're looking to hire a professional freelancer who meets deadlines, i'm the one for you.</p>
          <div className='flex gap-4 text-4xl text-zinc-200'>
            <a><FaLinkedin className='hover:text-zinc-400 cursor-pointer'/></a>
            <a href='mailto:m.officialkev@gmail.com'><HiOutlineMail className='hover:text-zinc-400 cursor-pointer'/></a>
            <a href='https://instagram.com/_k_e_v__'><FaInstagram className='hover:text-zinc-400 cursor-pointer'/></a>
            <a href='https://twitter.com/official_Kev__'><FaTwitter className='hover:text-zinc-400 cursor-pointer'/></a>
          </div>
          <div className='flex md:gap-12 gap-3 mt-3'>
            <button className='w-30 h-12 bg-zinc-900 hover:bg-transparent border border-gray-300 hover:text-gray-200 text-white text-xl px-4 rounded-md'><Link to='/contact'>Hire Me</Link></button>
            <button className='w-30 h-12 bg-transparent hover:bg-zinc-900 text-white text-xl px-4 border border-gray-300 rounded-md'><Link to='/projects'>Projects</Link></button>
          </div>
        </div>
      </div>
      <Skills />
    </>
  )
}

export default Home;