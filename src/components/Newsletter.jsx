import React from 'react'

export default function Newsletter() {
  return (
    <div className='bg-[#2699fb] p-4'>
      <div className='max-w-[1240px] md:flex mx-auto justify-between py-[50px]'>
        <div className='md:my-8 my-10'>

          <h1 className='text-[30px] md:text-[40px] font-bold text-white '>Want to learn latest it skill?</h1>
          <span className='text-white'>Sign up to our newsletter and stay up to date.</span>
        </div>
        <div className=' text-white md:my-8 my-10'>
          <input type="text" className='p-2 rounded mr-1 text-slate-800 ' placeholder='Email' />
          <button className='bg-black text-white p-2 rounded '>Notify Me</button>
          <br />
          <p className='text-white'>We care about the protection of your data. Read Our</p>
          <span className='text-black '>Privacy Policy.</span>
        </div>
      </div>
    </div>
  )
}
