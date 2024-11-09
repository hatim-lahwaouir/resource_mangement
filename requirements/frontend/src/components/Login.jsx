import googleIcon from "../assets/google.png";



const Login = ({close}) =>{


    return (
    <div className=" h-[20em] w-[30%] min-w-64 max-w-80  flex flex-col bg-stone-50 relative rounded-2xl">
        
        <div className="flex w-full  justify-around pl-5 pt-5  items-center ">
            <h1  className="w-[70%]  text-1xl font-bold  "> MILOKI RESOURCES.</h1>
            <span  className="flex items-center justify-center  w-4  rounded-md text-xs cursor-pointer  bg-slate-200  text-gray-400 " onClick={close} > x </span>
        </div>
        <div className="w-[100%] mt-10 flex flex-col justify-center items-center">
            <h1  className="  text-5xl font-bold   "> Hello! </h1>
            <p className="font-light text-sm pt-3"> Welcom to Miloki RESOURCES ! </p>
        </div>

        <div className="w-[100%] mt-10 flex flex-col justify-center items-center">
        <button className=" border-2 w-[80%] h-12 rounded-xl font-light text-sm flex items-center justify-around" >
        <img src={googleIcon} className="w-4 h-4" alt="google Icone" />  
        Sign in with Google
        </button>
        </div>

        </div>
    )

}



export default Login;
