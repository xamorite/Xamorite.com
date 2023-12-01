
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


      <div className="flex flex-col gap-20 my-20 ">
        <div className="text-2xl ">
          Peek into my latest <br />
          featured projects
        </div>
        <div className="flex justify-center items-center font-semibold space-x-4">
          <button className='rounded-full btn-outline border-[black] p-2 border-[1px] ' onClick={handleClick1}>
            <span className="btn outline-black border-black rounded-full">UI/UX Design</span>
          </button>
          <button className='rounded-full btn-outline border-[black] p-2 border-[1px]' onClick={handleClick2}>
            <span className="btn outline-black border-black rounded-full ">Web Development</span>
          </button>
          <button className='rounded-full btn-outline border-[black] p-2 border-[1px] ' onClick={handleClick3}>
            <span className="btn outline-black border-black rounded-full ">App Development</span>
          </button>
        </div>
      </div>

      {showMessage1 &&
        <div className='w-[80vw] mb-[10vh]'>
          <div className=' mx-auto w-[80vw] flex'>
            <img src={up} alt="" className='w-[30vw] mx-[5vw]' />
            <img src={unthree} alt="" className='w-[30vw] mx-[5vw]' />
          </div>
          <div className=' mx-auto w-[80vw] flex mt-[10vh]'>
            <img src={unfour} alt="" className='w-[30vw] mx-[5vw]' />
            <img src={unnine} alt="" className='w-[30vw] mx-[5vw]' />
          </div>
          <div className=' mx-auto w-[80vw] flex mt-[10vh]'>
            <img src={unten} alt="" className='w-[30vw] mx-[5vw]' />
            <img src={unone} alt="" className='w-[30vw] mx-[5vw]' />
          </div>
          <div className=' mx-auto w-[80vw] flex mt-[10vh]'>
            <img src={untwo} alt="" className='w-[30vw] mx-[5vw]' />
            <img src={unll} alt="" className='w-[30vw] mx-[5vw]' />
          </div>

        </div>
      }



      {showMessage2 &&
        <div className='w-[80vw]'>
          <div className=' mx-auto w-[80vw] flex mt-[10vh]'>
            <img src={unten} alt="" className='w-[30vw] mx-[5vw]' />
            <img src={unone} alt="" className='w-[30vw] mx-[5vw]' />
          </div>

          <div className=' mx-auto mt-[10vh] w-[80vw] flex mb-[10vh]'>
            <img src={up} alt="" className='w-[30vw] mx-[5vw]' />
            <img src={unthree} alt="" className='w-[30vw] mx-[5vw]' />
          </div>




        </div>

      }
      {showMessage3 &&

        <div className='w-[80vw] mb-[10vh]'>

          <div className=' mx-auto w-[80vw] flex mt-[10vh]'>
            <img src={untwo} alt="" className='w-[30vw] mx-[5vw]' />
            <img src={unnine} alt="" className='w-[30vw] mx-[5vw]' />
          </div>

        </div>

      }

    </div>
  )
}

export default Casestudies;
