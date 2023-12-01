
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
        <div className="flex justify-center items-center font-semibold space-x-3 lg:space-x-8">
          <button className='rounded-full border border-black py-2 px-3 ' onClick={handleClick1}>
            <span className="">UI/UX Design</span>
          </button>
          <button className='rounded-full border border-black py-2 px-3' onClick={handleClick2}>
            <span className=" ">Web Development</span>
          </button>
          <button className='rounded-full border border-black py-2 px-3 ' onClick={handleClick3}>
            <span className="">App Development</span>
          </button>
        </div>
      </div>
      <div className='flex-1'>

        {showMessage1 &&
          <div className='max-w-lg mb-10  mx-auto bg-slate-500'>
            <div className='grid grid-cols-2 gap-y-6 md:gap-x-8'>
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
          <div className='max-w-lg mb-10  mx-auto'>
            <div className='grid grid-cols-2 gap-y-6 md:gap-x-8'>
              <img src={unten} alt="" className='works' />
              <img src={unone} alt="" className='works' />
              <img src={up} alt="" className='works' />
              <img src={unthree} alt="" className='works' />
            </div>
          </div>

        }
        {showMessage3 &&

          <div className='max-w-lg mb-10  mx-auto'>
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
