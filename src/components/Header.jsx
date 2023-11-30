
import { NavLink } from 'react-router-dom'


function Header() {
  return (
    
        <div className='w-[100vw] justify-between flex p-[2vh] h-[10vh] fixed top-0 bg-white sm:w-[100vw]'>
          <div><span className='text-[2vw]  font-sans  sm:text-[3vw] sm:bold bold'>Xamorite</span></div>
          <div className='flex justify-between  '><ul className='flex mx-4 justify-between  p-[-3%] rounded-full bg-[ #FFFFFF; sm:visibility:hidden
]'>
            <NavLink to='/' className={({ isActive }) => `btn cursor-pointer text-center    mx-4 hover:bg-[black] hover:text-white hover:rounded-full px-3
                 ${isActive ? 'bg-black text-white rounded-full px-3' : ''}
    `}>
              <li className=' cursor-pointer    mx-4 hover:bg-[black] hover:text-white hover:rounded-full px-3'>Home</li>
            </NavLink>

            <NavLink to='/CaseStudies' className={({ isActive }) => `btn cursor-pointer    mx-4 hover:bg-[black] hover:text-white hover:rounded-full px-3
                  ${isActive ? 'bg-black text-white rounded-full px-3' : ''}
    `}>
              <li className=''>Featured</li>

            </NavLink>

            <NavLink to='/About' className={({ isActive }) => `btn cursor-pointer    mx-4 hover:bg-[black] hover:text-white hover:rounded-full px-3
                 ${isActive ? 'bg-black text-white rounded-full px-3' : ''}
    `}>
              <li className=''>About</li>

            </NavLink>
            <NavLink to='/About' className={({ isActive }) => `btn cursor-pointer    mx-4 hover:bg-[black] hover:text-white hover:rounded-full px-3
                 ${isActive ? 'bg-black text-white rounded-full px-3' : ''}
    `}>
              <li className=''>About</li>

            </NavLink>
          </ul>
          </div>
          <div><ul className='flex mx-4 justify-between '>
            <li className='mx-2 text-xl ' >TW</li>
            <li className='mx-2 text-xl'>IG</li>
            <li className='mx-2 text-xl'>BE</li>
            <li className='mx-2 text-xl'>DRIB</li></ul></div>
        </div>
    
  )
}

export default Header
