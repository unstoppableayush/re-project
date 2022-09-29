import React, { Component } from 'react'
import laptop from "../assets/img/laptop.jpg";
export default function Experts() {
  return (
    <div className='max-w-[1240px]  mx-auto h-[200] my-20 md:grid grid-cols-3 p-3'>
        <div className='  col-span-1 md:w-[80%]'>
          <img src={laptop} alt="" />
        </div>
        <div className=' col-span-2 flex flex-col md:justify-center   '>
          <h1 className='text-[#00df9a] font-bold my-2'>LEARN FROM EXPERTS</h1>
          <p className='my-2 text-justify '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

          <button className=' w-[25%]	md:w-[15%] bg-black text-white p-3 rounded'>Get Started</button>
        </div>
    </div>
  )
}
