
import { NavLink } from 'react-router-dom'


function Header() {
  return (
    <div>
      <>
        <div className='w-[100vw] justify-between flex p-8 h-[15vh] fixed top-0 bg-white sm:w-[90vw]'>
          <div><h2 className='text-4xl font-sans bg-white sm:text-[1vw] '>Xamorite E</h2></div>
          <div className='flex justify-between bold '><ul className='flex mx-4 justify-between  p-[-3%] rounded-full bg-[ #FFFFFF;
]'>
            <NavLink to='/' className={({ isActive }) => `btn cursor-pointer    mx-4 hover:bg-[black] hover:text-white hover:rounded-full px-3
                 ${isActive ? 'bg-black text-white rounded-full px-3' : ''}
    `}>
              <li className=' cursor-pointer    mx-4 hover:bg-[black] hover:text-white hover:rounded-full px-3'>Home</li>
            </NavLink>

            <NavLink to='/CaseStudies' className={({ isActive }) => `btn cursor-pointer    mx-4 hover:bg-[black] hover:text-white hover:rounded-full px-3
                  ${isActive ? 'bg-black text-white rounded-full px-3' : ''}
    `}>
              <li className=''>Case Studies</li>

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
      </>
    </div>
  )
}

export default Header
