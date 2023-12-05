
// import Unone from ''
import { useState } from 'react';
import up from './Up.png'
import unone from './Unone.png'
import untwo from './Untwo.png'
import unthree from './Unthree.png'
import unfour from './Unfour.png'
// import work from './Work.png'
import unnine from './Unnine.png'
import unten from './Unten.png'
import unll from './Unll.png'


function Casestudies() {
  const [showMessage1, setShowMessage1] = useState(false);
  const [showMessage2, setShowMessage2] = useState(false);
  const [showMessage3, setShowMessage3] = useState(false);

  const handleClick1 = () => {
    setShowMessage1(true);
    setShowMessage2(false);
    setShowMessage3(false);
  };

  const handleClick2 = () => {
    setShowMessage1(false);
    setShowMessage2(true);
    setShowMessage3(false);
  };

  const handleClick3 = () => {
    setShowMessage1(false);
    setShowMessage2(false);
    setShowMessage3(true);
  };


  return (
    <div className="">


      <div className="flex flex-col gap-10 py-10 my-10 px-5 lg:px-10 ">
        <div className="text-2xl ">
          Peek into my latest <br />
          featured projects
        </div>
       <div>
          {showMessage1&&
 <h2 className='lg:text-7xl md:font-light  md:text-[3vw] sm:text-[4vw] font-semibold text-[5vw]'>
All Ui/Ux
  </h2>
          }
             {showMessage2&&
 <h2 className='lg:text-7xl md:font-light  md:text-[3vw] sm:text-[4vw] font-semibold text-[5vw]'>
Web Development
  </h2>
          }
             {showMessage3&&
 <h2 className='lg:text-7xl md:font-light  md:text-[3vw] sm:text-[4vw] font-semibold text-[5vw]'>
Mobile Application
  </h2>
          }
          </div>
        
        
        <div className="flex justify-center items-center font-semibold space-x-3 lg:space-x-8">
          <button className='rounded-full border border-black py-[1vh] px-3   md:py-1  ' onClick={handleClick1}>
            <span className="">All Designs</span>
          </button>
          <button className='rounded-full border border-black py-[1vh] px-3  md:py-1  ' onClick={handleClick2}>
            <span className=" ">Web Development</span>
          </button>
          <button className='rounded-full border border-black py-[1vh] px-3   md:py-1  ' onClick={handleClick3}>
            <span className="">App Development</span>
          </button>
        </div>
      </div>
      <div className='w-full mx-auto'>

        {showMessage1 &&
          <div className= 'mx-auto max-w-lg min-w-min mb-10 md:w-[90vw] justify-center '>
            <div className='grid grid-cols-2 gap-y-6 md:gap-x-8 md:mx-auto justify-center'>
              <img src={up} alt="" className='works' />
              <img src={unthree} alt="" className='works' />
              <img src={unfour} alt="" className='works' />
              <img src={unnine} alt="" className='works' />


              <img src={unten} alt="" className='works' />
              <img src={unone} alt="" className='works' />


              <img src={untwo} alt="" className='works' />
              <img src={unll} alt="" className='works' />
            </div>
          </div>
        }



        {showMessage2 &&
          <div className=' max-w-lg mb-10 min-w-min  mx-auto md:w-[90vw] justify-center'>
            <div className='grid grid-cols-2 gap-y-6 md:gap-x-8'>
              <img src={unten} alt="" className='works' />
              <img src={unone} alt="" className='works' />
              <img src={up} alt="" className='works' />
              <img src={unthree} alt="" className='works' />
            </div>
          </div>

        }
        {showMessage3 &&

          <div className='max-w-lg min-w-min mb-10  mx-auto md:w-[90vw] justify-center'>
            <div className='grid grid-cols-2 gap-y-6 md:gap-x-8'>
              <img src={untwo} alt="" className='works' />
              <img src={unnine} alt="" className='works' />
            </div>
          </div>

        }
      </div>

    </div>
  )
}

export default Casestudies;
