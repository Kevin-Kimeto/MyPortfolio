import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Contact = () => {
  return (
    <div className='flex flex-col justify-center h-[90vh] items-center text-black mt-9'>
        <h1 className='text-[36px] font-bold pt-6'>Contact Me</h1>
        <p>Let's Get in Touch</p>
        <div className='flex flex-col md:flex justify-between w-full sm:w-[64vw] h-[68vh] p-3 border-2 mt-4 bg-gray-800 rounded-xl'>
            <div className='flex flex-col text-white pl-4'>
                <h1 className='text-[36px] self-center md:self-start'>Get In Touch</h1>
                <div className='flex flex-row gap-4 items-center md:self-start md:ml-20 justify-center'>
                    <a><FaLinkedin className='hover:text-zinc-400 cursor-pointer text-3xl'/></a>
                    <a href='mailto:m.officialkev@gmail.com'><HiOutlineMail className='hover:text-zinc-400 cursor-pointer text-4xl'/></a>
                </div>
            </div>
            <form 
                action='https://getform.io/f/981a5e12-5758-45fd-9590-e03aaa070208'
                method='POST'
                className='flex flex-col justify-between md:w-1/2 md:h-4/5 bg-slate-100 px-3 py-3 rounded-xl md:self-end'
            >
                <div>
                    <h3 className='text-[18px] font-semibold'>Name</h3>
                    <input
                        type='text'
                        name='name'
                        placeholder='Enter Name'
                        className='w-full h-10 bg-slate-300 rounded-lg mb-2 px-2 focus:outline-none'
                    ></input>
                </div>
                <div>
                    <h3 className='text-[18px] font-semibold'>Email</h3>
                    <input
                        type='text'
                        name='email'
                        placeholder='Enter Email'
                        className='w-full h-10 bg-slate-300 rounded-lg mb-2 px-2 focus:outline-none'
                    ></input>
                </div>
                <div>
                    <h3 className='text-[18px] font-semibold'>Message</h3>
                    <textarea
                        type='text'
                        name='message'
                        placeholder='Enter Message'
                        className='w-full h-20 bg-slate-300 rounded-lg mb-2 px-2 focus:outline-none'
                    ></textarea>
                </div>
                <button
                    type='submit' 
                    className='bg-gray-800 text-white w-1/4 h-10 text-[20px] rounded-lg'
                >Send
                </button>
            </form>
        </div>
    </div>
  );
}

export default Contact;