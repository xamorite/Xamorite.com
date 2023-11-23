
import ux from "./ui/ux/ux"
import {  NavLink } from "react-router-dom"
// import Unone from ''


function Casestudies() {
  return (
    <div className="mt-[20vh] w-[80vw] mx-auto">
      <div className="row ">
        <div className="text-[3vw]">
            Peek into my latest <br />
            featured projects
        </div>
        <div className="my-[10vh] ps-0">
            <NavLink className={()=>'mx-[2vw] rounded-full btn-outline border-[black] p-2 border-[1px]  '} to={ux}> 
            <span className="btn outline-black border-black rounded-full ">UI/UX Design</span>
            </NavLink>
            <NavLink className={()=>'mx-[2vw] rounded-full btn-outline border-[black] p-2 border-[1px]  '} to=''> 
            <span className="btn outline-black border-black rounded-full ">Web Development</span>
            </NavLink>
            <NavLink className={()=>'mx-[2vw] rounded-full btn-outline border-[black] p-2 border-[1px]  '} to=''> 
            <span className="btn outline-black border-black rounded-full ">Web Development</span>
            </NavLink>
        </div>
      </div>
     <div className="row">
        <div className="col-lg-6">
            <img  alt="" />
        </div>
        <div className="col-lg-6"></div>
        <div className="col-lg-6"></div>
        <div className="col-lg-6"></div>
        <div className="col-lg-6"></div>
        <div className="col-lg-6"></div>
        <div className="col-lg-6"></div>
        <div className="col-lg-6"></div>
     </div>

    </div>
  )
}

export default Casestudies;
