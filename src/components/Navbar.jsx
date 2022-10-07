import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
    const [nav, setNav] = useState(false);

  return (
    <div className='fixed top-0 left-0 right-0 flex justify-between items-center h-[11vh] md:px-40 px-4 bg-zinc-900 text-white'>
        <div>
            <h1 className='text-5xl font-signature'>Kev</h1>
        </div>
        <div className='hidden md:flex justify-between gap-16'>
            <ul className='flex gap-12 text-xl justify-between items-center cursor-pointer list-none'>
                <li className='hover:text-gray-400'><Link to='/'>Home</Link></li>
                <li className='hover:text-gray-400'><Link to='/blog'>Blog</Link></li>
                <li className='hover:text-gray-400'><Link to='/projects'>Projects</Link></li>
                <li className='hover:text-gray-400'><Link to='/contact'>Contact</Link></li>
            </ul>
            <div className='flex gap-6 items-center text-xl cursor-pointer'>
                <a href='https://github.com/Kevin-Kimeto' className='hover:text-gray-400'><FaGithub /></a>
                <a href='https://instagram.com/_k_e_v__' className='hover:text-gray-400'><FaInstagram /></a>
                <a href='https://twitter.com/official_Kev__' className='hover:text-gray-400'><FaTwitter /></a>
            </div>
        </div>
        <div
            onClick={() => setNav(!nav)}
            className='md:hidden cursor-pointer z-10'
        >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
            <ul className='flex flex-col text-xl items-center gap-12 absolute top-0 left-0 w-full h-screen list-none pt-40 bg-gradient-to-b from-zinc-700 to-zinc-400'>
                <li className='hover:text-gray-400'><Link to='/'>Home</Link></li>
                <li className='hover:text-gray-400'><Link to='/blog'>Blog</Link></li>
                <li className='hover:text-gray-400'><Link to='/projects'>Projects</Link></li>
                <li className='hover:text-gray-400'><Link to='/contact'>Contact</Link></li>
            </ul>
        )}
    </div>
  )
}

export default Navbar;