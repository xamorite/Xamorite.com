// import React from 'react'

import { Link } from "react-router-dom"

function Footer() {

  // const date = new Date();


  return (
    <div className='h-full bg-black text-white flex flex-col px-5 lg:px-10 space-y-5 py-7'>
      <div className='flex justify-between gap-5'>
        <span className="text-sm">Portfolio</span>
        <span className="text-sm">OGUNNEYE EMMANUEL</span>
        <span className="text-sm">51.5074° N, 0.1278° W</span>
      </div>
      <div className="flex flex-col justify-center items-center tracking-tighter">
        <p className="text-gray-400">Have a nice Project?</p>
        <p className="text-4xl">Get in touch</p>
      </div>
      <div className="flex justify-center gap-10 text-gray-400">
        <Link>Twitter</Link>
        <Link>Behance</Link>
        <Link>Instagram</Link>
        <Link>Dribbble</Link>
      </div>
      <div className="flex justify-center gap-4">
        <span>License</span>
        <span>Term of use</span>
      </div>
      {/* <div className=' justify-between text-center mt-auto my-[15vh] h-[10vh]'>
        <p className='   text-gray-400 '>Have a nice project?</p>
        <h1 className='text-6xl fs-1 '>Get in Touch</h1>
      </div>
      <div className='flex justify-between mt-auto self-end  bottom-0 h-[10vh]'>
        <div className='flex'>© All rights reserved.</div>

        <div className='flex align-content-between '>
          <span className=' ms-3'>Twitter</span>
          <span className=' ms-3'>Behance</span>
          <span className=' ms-3'>Instagram</span>
          <span className=' ms-3'>Dribbble</span>
        </div>
        <div className='flex align-content-between  '>
          <span className='mx-3'>License</span>
          <span className='mx-3'>Terms of Use</span>
        </div>
      </div> */}

    </div>
  )
}

export default Footer
