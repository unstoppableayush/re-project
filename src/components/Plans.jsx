import React from 'react'
import Single from "../assets/img/single.png"
import Double from "../assets/img/double.png"
import Triple from "../assets/img/triple.png"

export default function Plans() {
  return (
    <div className='py-[100px] px-2'>
        <div className='md:grid grid-cols-3 max-w-[1240px] mx-auto gap-6'>
            <div className='shadow-xl border my-4 h-[500px] hover:scale-105 duration-500 ' >
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Web development</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Lorem Ipsum is simply </p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dummy text of the printing</p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dumm.</p>
                    </div>
                    <button className='bg-[#00df9a] ml-[25%] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
            </div>
            <div className='shadow-xl border my-4  h-[500px] hover:scale-105 duration-500 bg-slate-200'>
            <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Digital Marketing</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Lorem Ipsum is simply </p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dummy text of the printing</p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dumm.</p>
                    </div>
                    <button className='bg-black text-[#00df9a] ml-[25%] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
            </div>
            <div className='shadow-xl border my-4 h-[500px] hover:scale-105 duration-500'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>App Development</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Lorem Ipsum is simply </p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dummy text of the printing</p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dumm.</p>
                    </div>
                    <button className='bg-[#00df9a] ml-[25%] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
            </div>
        </div>
    </div>
  )
}
