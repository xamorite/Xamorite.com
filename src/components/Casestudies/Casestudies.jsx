
import ux from "./ui/ux/ux"
import {  NavLink } from "react-router-dom"
function Casestudies() {
  return (
    <div className="mt-[20vh] w-[90vw] mx-auto">
      <div className="row ">
        <div className="text-[3vw]">
            Peek into my latest <br />
            featured projects
        </div>
        <div>
            <NavLink to={ux}></NavLink>
            <NavLink to=''></NavLink>
            <NavLink to='/'></NavLink>
        </div>
      </div>
    </div>
  )
}

export default Casestudies
