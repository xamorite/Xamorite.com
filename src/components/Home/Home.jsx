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
     <div className='flex justify-between p-8 overflow-x-hidden w-[90vw] mx-auto mt-20'>
  <div className='w-[17vw] overflow-hidden hidden sm:block md:block'>
    <p className='text-sm'>Over 18 awards and mentions from renowned industry players like Awwwards, FWA, and CSSDA. I can&apos;t wait to see what the future holds as I continue to innovate and create.</p>
  </div>
  <div className=' w-[80vw] md:ps-[15vw] '>
    <p className='lg:text-7xl font-semibold md:text-[3vw] sm:text-[4vw] text-[5vw]'>
      UI/UX Designer and Front-end Developer currently based in Nigeria
    </p>
  </div>
</div>
      <div className=' flex-col justify-between mt-[10vh] mx-auto '>
        <div><img src={up} alt="" className=' w-[90vw] mx-auto mb-10' /></div>
        <div className='flex w-[90vw] mx-auto justify-between'>
          <img src={unone} alt="" className='w-[50vw]  ' />
          <img src={untwo} alt="" className='w-[38vw] ' />
        </div>
        <div className='flex w-[90vw] mx-auto justify-between mt-[10vh]'>
          <img src={unthree} alt="" className='w-[50vw] ' />
          <img src={unfour} alt="" className='w-[38vw] ' />
        </div>
        <button className='btn rounded-full bg-black text-white px-4 py-2 ms-[5vw] mt-[12vh]'>All works</button>
      </div>
      <div className='flex justify-between md:my-[20vh] my-[5vh] '>
        <div className='w-[90vw] flex justify-between mx-auto'>
          <div className='hidden sm:block'><ul className=' list-unstyled '>
            <li className=' font-thin text-slate-700 mb-4 '>Some of the client</li>
            <li>Rag & Bone</li>
            <li>Aimfox</li>
            <li>Disney</li>
            <li>Knight Frank</li>
          </ul></div>
          <div className='w-[90vw] md:w-[62vw]'>
            <p className='md:text-[2.5vw]  text-[4.5vw] ms-[4vw]'>Studied Web Development at  <button className='p-[.3%] border-[1px] rounded-full border-black'>Aptech Education </button> And have been working in the development industry for over a decade.</p>
            <p className=' md:w-[41.5vw] ms-[4vw] mt-[5vh] mb-[10vh] font-light '>
        My passion for development & design started when I was young, and I have pursued this passion by working with a variety of clients and projects over the years. I have worked with startups, small businesses, and large corporations, creating user interfaces for websites, software applications, and mobile apps.
      </p>
          </div>

        </div>


      </div>
     
      <img src={work} alt="" className='w-full' />
      <div className='w-[100%]'>

      </div>
      <ul className="mt-[13vh] md:w-[55vw] ms-[4vw] md:ms-auto me-[5vw]">
        <li className="flex row justify-between h-auto my-[5vh] md:pb-[5vh] border-b-[.3vh] border-slate-700 align-center"><span>Mastering frontend languages</span><span>2023</span></li>
        <li className="flex row justify-between h-auto my-[5vh] md:pb-[5vh] border-b-[.3vh] border-slate-700 align-center"><span>Frontend Development Course London App Brewery</span><span>2023</span></li>
        <li className="flex row justify-between h-auto my-[5vh] md:pb-[5vh] border-b-[.3vh] border-slate-700 align-center"><span>Google Data Analytics Professional Certificate.</span><span>2023</span></li>
        <li className="flex row justify-between h-auto my-[5vh] md:pb-[5vh] border-b-[.3vh] border-slate-700 align-center"><span>Webflow Developer</span><span>2023</span></li>
        <li className="flex row justify-between h-auto my-[5vh] md:pb-[5vh] border-b-[.3vh] border-slate-700 align-center"><span>Visual Communications and Solutions</span><span>2023</span></li>
      </ul>
    </div>
  )
}

export default Home
