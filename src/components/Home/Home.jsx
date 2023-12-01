// import React from 'react'
import up from './Up.png'
import unone from './Unone.png'
import untwo from './Untwo.png'
import unthree from './Unthree.png'
import unfour from './Unfour.png'
import work from './Work.png'
function Home() {
  return (
    <div className=' overflow-hidden w-[98.7vw] mx-auto bg-[ #F5F5F5]'>
      <div className='flex justify-between p-8 overflow-x-hidden w-[80vw] mx-auto mt-20 '>
        <div className=' w-80 overflow-hidden'>
          <p className='text-sm '>Over 18 awards and mentions from renowned industry players like Awwwards, FWA, and CSSDA. I cant wait to see what the future holds as I continue to innovate and create.</p>
        </div>
        <div className='mx-sm-auto w-2/3'>
          <p className='lg:text-7xl font-light  md:text-[3vw] sm:text-[4vw]'>UI/UX Designer and Front-end Developer currently based in Nigeria</p>
        </div>
      </div>
      <div className=' flex-col justify-between mt-[10vh] mx-auto '>
        <div><img src={up} alt="" className=' w-[80vw] mx-auto mb-10' /></div>
        <div className='flex w-[80vw] mx-auto justify-between'>
          <img src={unone} alt="" className='w-[40vw]  ' />
          <img src={untwo} alt="" className='w-[30vw] ' />
        </div>
        <div className='flex w-[80vw] mx-auto justify-between mt-[10vh]'>
          <img src={unthree} alt="" className='w-[40vw] ' />
          <img src={unfour} alt="" className='w-[30vw] ' />
        </div>
        <button className='btn rounded-full bg-black text-white px-4 py-2 ms-[9vw] mt-[5vh]'>All works</button>
      </div>
      <div className='flex justify-between my-[10vh] '>
        <div className='w-[80vw] flex justify-between mx-auto'>
          <div><ul className=' list-unstyled '>
            <li className=' font-thin text-slate-700 '>Some of the client</li>
            <li>Rag & Bone</li>
            <li>Aimfox</li>
            <li>Disney</li>
            <li>Knight Frank</li>
          </ul></div>
          <div className='w-[55vw]'>
            <p className='text-[3.3vw]'>Studied Web Development at  <button className=' btn rounded-full border-black'>Aptech Education </button> And have been working in the development industry for over a decade.</p>
          </div>

        </div>


      </div>
      <p className='w-[41vw] ms-[35vw] mb-[10vh]'>
        My passion for development & design started when I was young, and I have pursued this passion by working with a variety of clients and projects over the years. I have worked with startups, small businesses, and large corporations, creating user interfaces for websites, software applications, and mobile apps.
      </p>
      <img src={work} alt="" className='w-full' />
      <div className='w-[100%]'>

      </div>
      <ul className="mt-[13vh] w-[55vw] ms-auto me-[5vw]">
        <li className="flex row justify-between h-[5vh] my-[5vh] pb-[5vh] border-b-[.3vh] border-slate-700 align-center"><span>Mastering frontend languages</span><span>2023</span></li>
        <li className="flex row justify-between h-[5vh] my-[5vh] pb-[5vh] border-b-[.3vh] border-slate-700 align-center"><span>Mastering frontend languages</span><span>2023</span></li>
        <li className="flex row justify-between h-[5vh] my-[5vh] pb-[5vh] border-b-[.3vh] border-slate-700 align-center"><span>Mastering frontend languages</span><span>2023</span></li>
        <li className="flex row justify-between h-[5vh] my-[5vh] pb-[5vh] border-b-[.3vh] border-slate-700 align-center"><span>Mastering frontend languages</span><span>2023</span></li>
        <li className="flex row justify-between h-[5vh] my-[5vh] pb-[5vh] border-b-[.3vh] border-slate-700 align-center"><span>Mastering frontend languages</span><span>2023</span></li>
      </ul>
    </div>
  )
}

export default Home
