import {Link} from "react-router-dom";

const NavBar = () =>{

    return (
    <div className=" w-full h-14  flex items-center font-mono" >
        <h1 className=" w-[20%]  flex justify-center font-bold  items-center " >  <Link to="/"> MilokiResources  </Link> </h1>
        <div className="flex-grow  h-full flex  justify-end">
            <div className="bg-white w-[60%] flex justify-around items-center text-sm">
                <span className="cursor-pointer "> <Link to="/resources">  Resources </Link> </span>
                <span className="cursor-pointer "> <Link to="/cards" > My own Cards </Link> </span>
                <button className="bg-black h-[60%] w-24 rounded-md text-white text-xs " > Contact me </button>
            </div>
        </div>
    </div>
    )
}

export default NavBar;