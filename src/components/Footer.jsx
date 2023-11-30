// import React from 'react'

function Footer() {
  return (
    <div className='bg-black text-white  flex-row mb-0  position-relative items-stretch p-8 w-full'>
      <div className='flex justify-between fw-lighter h-[10vh] '>
          <span>Portfolio 2023 - 2024</span><span>OGUNNEYE EMMANUEL</span><span>51.5074° N, 0.1278° W</span>
      </div>
      <div className=' justify-between text-center mt-auto my-[15vh] h-[10vh]'>
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
      </div>

    </div>
  )
}

export default Footer
