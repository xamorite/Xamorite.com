
import { useState } from 'react';

function Header() {

  let Links = [
    { name: "Home", link: "/" },
    { name: "Casestudies", link: "./CaseStudies" },
    { name: "About", link: "./About" },
    // { name: "Contact", link: "./Contact" },
  ];

  let [open, setOpen] = useState(false)

  const [isHidden, setIsHidden] = useState(false);

  const handleClick = () => {
    setIsHidden(true);
  };
  const closeContact = () => {
    setIsHidden(false);
  };

  return (
            <div className='top-0 z-30 sticky'>
    <div className='w-full justify-between flex px-5 lg:px-10 py-2 sticky top-0 z-30  backdrop-blur-md bg-[#000000] bg-opacity-[3%]'>
      <h1 className='text-2xl bold'>Xamorite</h1>
      <div className='flex justify-between '>

          <div onClick={() => setOpen(!open)} className='flex items-center text-3xl  cursor-pointer md:hidden'>

            <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
          </div>


          {/* <div className='ml-auto flex space-x-6'>
            {Links.map(link => (
              <div key={link.name} className='hidden md:flex md:flex-1 md:items-center md:justify-center'>
                  <Link to={link.link} className='font-semibold'>
                    {link.name}
                  </Link>
              </div>
            ))}
          </div> */}
          
            

          <ul className={` md:flex md:items-center md:pb-0 pd-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-[0.3s] ease-in ${open ? 'top-20' : 'top-[-490px]'}`}>
            {
              Links.map((link) =>

                <li key={Links.link} className=' md:ml-8 text-xl text-black md:my-0 my-7'>
                  <a href={link.link} className='text-gray-600 ' >{link.name}</a>
                </li>
              )
            }
            <li className='md:ml-8 text-xl text-gray-600 md:my-0 my-7 cursor-pointer ' onClick={handleClick}>
              <a >Contact</a>

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
      </div>

      {/* <div className="modal bg-current w-[30vw] blur-2xl position-absolute">

          </div> */}
          

    </div>
    {isHidden && (<div className=' backdrop-blur-md bg-[#000000] bg-opacity-[3%] w-[50vw] p-[5%] ms-auto me-[4vw] leading-loose justify-center rounded-lg'>
      <div className='ms-auto cursor-pointer text-3xl ' onClick={closeContact}>
      <ion-icon name='close'></ion-icon>
      </div>
    <form action="Contact" className='mx-auto h-[80vh] md:h-auto'>  Hi, my name is <input type="text" placeholder='xamorite' />,you can answer <br />
       me on this email <input type="email" placeholder='xamorite@gmail.com' /> i am looking <br />
      for help with a <input type="text" placeholder='mobile app development' />My budget is <br />$
      <input type="number" placeholder='850000' /><br />and i need it to be done by <input type="text" className='mb-[3vh]' placeholder="12th of august"/><br />
      <button className='bg-black text-white px-3 py-2 rounded-full' >Contact us</button>
      </form>
          </div>)}
    </div>

  )
}

export default Header
