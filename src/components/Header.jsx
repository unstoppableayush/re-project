import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className='bg-[#2699fb] p-4'>
        <div className='max-w-[1240px]  flex justify-between items-center  mx-auto'>
            <div className='text-2xl font-bold'>
                Ayush's ReactSite
            </div>
           
            
            
            <ul className='hidden md:flex text-white gap-5'>
                <li>Home</li>
                <li>Resources</li>
                <li>Learn</li>
                <li>Blog</li>
                <li>About</li>
                <li>Contact</li>
               
            </ul>
            {/* Responsive Menu */}
              <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
              </div>
            <ul className={nav ? 'fixed left-0 top-[66px] w-full h-screen text-white  bg-black ease-in-out duration-500' : 'top-[66px]  w-full h-screen ease-in-out duration-500 fixed left-[-100%]'}>
                     
                    
                <li className='p-3 border-b border-sky-500'>Home</li>
                <li className='p-3 border-b border-sky-500'>Resources</li>
                <li className='p-3 border-b border-sky-500'>Learn</li>
                <li className='p-3 border-b border-sky-500'>Blog</li>
                <li className='p-3 border-b border-sky-500'>About</li>
                <li className='p-3 border-b border-sky-500'>Contact</li>
               
            </ul>
        </div>
    </div>
  )
}
export default Navbar;