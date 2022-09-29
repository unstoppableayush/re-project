import React from 'react'
import Typed from 'react-typed'
export default function Banner() {
  return (
    <div className='bg-[#2699fb] w-full md:py-[100px] py-[60px] h-screen' >
        <div className='max-w-[1240px] my-[100px] mx-auto font-bold text-center ' >
            <div className='text-3xl md:text-[55px] mb-[25px] mt-[50px]'>Learn With Us</div>
            <h2 className='text-white text-5xl md:text-[70px] mb-[20px]'>Grow With Us</h2>
            <div className='text-5xl md:text-[60px] text-white '>
                Learn 
                <Typed
                className='pl-3 text-black text-5xl md:text-[60px]'
                strings={[
                    ' Web Development',
                    ' Android Development',
                    ' DevOps']}
                    typeSpeed={40}
                    backSpeed={60}
                     loop={true}
                    >
            
                </Typed>
            </div>
            <button className='bg-black text-white p-2 rounded mt-[40px]'>Get Started</button>
            
        </div>
    </div>
  )
}
