
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {

  let Links = [
    { name: "Home", link: "/" },
    { name: "Casestudies", link: "/casestudies" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/Contact" },
  ];

  let [open, setOpen] = useState(false)

  return (

    <div className='w-full justify-between flex px-5 lg:px-10 py-2 sticky top-0 z-30 bg-white'>
      <h1 className='text-2xl bold'>Xamorite</h1>
      <div className='flex justify-between '>

          <div onClick={() => setOpen(!open)} className='flex items-center text-3xl  cursor-pointer md:hidden'>

            <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
          </div>


          <div className='ml-auto flex space-x-6'>
            {Links.map(link => (
              <div key={link.name} className='hidden md:flex md:flex-1 md:items-center md:justify-center'>
                  <Link to={link.link} className='font-semibold'>
                    {link.name}
                  </Link>
              </div>
            ))}
          </div>
          
            

          <ul className={`md:flex md:items-center md:pb-0 pd-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'}`}>
            {
              Links.map((link) =>

                <li key={Links.link} className='md:ml-8 text-xl text-black md:my-0 my-7'>
                  <a href={link.link} className='text-gray-600 ' >{link.name}</a>
                </li>
              )
            }
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
      </div>

      {/* <div className="modal bg-current w-[30vw] blur-2xl position-absolute">

          </div> */}

    </div>

  )
}

export default Header
