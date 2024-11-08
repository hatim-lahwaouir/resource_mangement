import NavBar from "./NavBar"


const NotFound = () =>{

    return (<>
    <NavBar/>
    <div className="w-full  h-56 flex flex-col   items-center justify-end  font-mono font-bold text-3xl">
        404 page Not found 
    </div>
    </>)
}


export default NotFound