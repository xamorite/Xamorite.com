
import { useState } from 'react';

function Header() {
  
    let Links = [
      {name:"Home", link:"./"},
      {name:"Casestudies", link:"./CaseStudies"},
      {name:"About", link:"./About"},
      {name:"Contact", link:"./Contact"},
    ];
    
    let [open, setOpen]=useState(false)

  return (
    
        <div className='w-full justify-between flex p-3   fixed top-0 bg-white md:w-full overflow-hidden'>
          <div className='max-'><span className='text-2xl bold'>Xamorite</span></div>
          <div className='flex justify-between  '><ul className='flex mx-4 justify-between  p-[-3%] rounded-full bg-[ #FFFFFF; sm:visibility:hidden
]'>
           
           <div onClick={()=>setOpen(!open)} className='text-3xl absolute cursor-pointer md:hidden'>
           
           <ion-icon name={open ? 'close':'menu'}></ion-icon>
           </div>

            <ul className={`md:flex md:items-center md:pb-0 pd-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ?'top-20':'top-[-490px]'}`}>
              {
                Links.map((link)=>
               
                <li key={Links.link} className='md:ml-8 text-xl text-black md:my-0 my-7'>
                     <a href={link.link} className='text-gray-600 ' >{link.name}</a>
                </li> 
                )
              }

<li className='cursor-pointer' > 
            <ul className='flex ms-auto justify-between '>
            <li className='mx-2 text-xl ' >TW</li>
            <li className='mx-2 text-xl'>IG</li>
            <li className='mx-2 text-xl'>BE</li>
            <li className='mx-2 text-xl'>DRIB</li></ul>
          </li>
            </ul>
            {/* <NavLink to='/CaseStudies' className={({ isActive }) => `btn cursor-pointer    mx-4 hover:bg-[black] hover:text-white hover:rounded-full px-3
                  ${isActive ? 'bg-black text-white rounded-full px-3' : ''}
    `}>
              <li className=''>Featured</li>

            </NavLink>

            <NavLink to='/About' className={({ isActive }) => `btn cursor-pointer    mx-4 hover:bg-[black] hover:text-white hover:rounded-full px-3
                 ${isActive ? 'bg-black text-white rounded-full px-3' : ''}
    `}>
              <li className=''>About</li>

            </NavLink>
            <NavLink to='/Contact' className={({ isActive }) => `btn cursor-pointer    mx-4 hover:bg-[black] hover:text-white hover:rounded-full px-3
                 ${isActive ? 'bg-black text-white rounded-full px-3' : ''}
    `}>
              <li className=''>Contact</li>

            </NavLink> */}
          </ul>
          </div>
          
          {/* <div className="modal bg-current w-[30vw] blur-2xl position-absolute">

          </div> */}

        </div>
    
  )
}

export default Header
