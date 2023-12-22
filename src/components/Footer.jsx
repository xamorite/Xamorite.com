// import React from 'react'

import { Link } from "react-router-dom"

function Footer() {

  // const date = new Date();


  return (
    <div className='bg-black text-white flex flex-col px-5 lg:px-10 space-y-5 py-7'>
      <div className='flex justify-between  items-center py-3'>
        <span className="text-sm md:text-md">Portfolio</span>
        <span className="text-sm md:text-md">OGUNNEYE EMMANUEL </span>
        <span className="text-sm md:text-md">Xamorite</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-gray-400 ">Have a nice Project?</p>
        <p className="text-4xl">Get in touch</p>
      </div>
      <div className="flex justify-center gap-10 text-gray-400 py-2 text-3xl">
        <Link to={'https://twitter.com/Xamorite'}><ion-icon name="logo-twitter"></ion-icon></Link>
        <Link to={'https://www.behance.net/emmanueogunney'}><ion-icon name="logo-behance"></ion-icon></Link>
        <Link to={'https://www.instagram.com/xamorite/#'}><ion-icon name="logo-instagram"></ion-icon></Link>
        <Link to={'https://github.com/xamorite'}><ion-icon name="logo-github"></ion-icon></Link>
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
