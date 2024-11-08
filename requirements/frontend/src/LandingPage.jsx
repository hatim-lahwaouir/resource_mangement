import { useState } from "react";
import Login from "./components/Login";
import Popup from "./components/Popup";
import NavBar from "./NavBar";



const LandingPage = () =>{
    const [register, setregister] = useState(false);
    
    return (<>
        <NavBar/>
        <div className="w-full  flex flex-col mt-44 items-center justify-end  font-mono"  >
        <span className="text-xs text-gray-500 font-light ">Shared Sources & Collective Knowledge</span>

        <div className="flex flex-col w-full items-center justify-around  h-48">
            <span className="font-bold text-4xl" > Find the best [subject]</span>
            <span className="font-bold text-4xl" > links in one place </span>
            <span className="text-sm"> Knowledge Gateway </span>
        </div>

        <button className=" mt-4 bg-black rounded-lg  w-20 h-10 text-xs text-white" onClick={() => setregister(true)} > Join Us </button>
        <Popup trigger={register}>
            <Login close={() => setregister(false)}/>
        </Popup>
        
        </div>
    
    </>)

}



export default LandingPage;