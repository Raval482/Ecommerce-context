import { Link } from "react-router-dom"
import { usecustomeHook } from "../context/AppContext"


const Navbar = () =>{
   const {color,setColor} = usecustomeHook()

    const chnagesColor = () =>{
        if(color.textcolor === "text-white"){
            setColor({
                textcolor:"text-black",
                textbg:"bg-white"
            })
        }else{
            setColor({
                textcolor:"text-white",
                textbg:"bg-yellow-500"
            })
        }
    
    }
    return (
        <>
                <div className="w-screen mt-5">
                            <div className="w-[80%] mx-auto flex justify-between">
                                        <p className="text-2xl font-bold">E-commerce</p>
                                        <div className="flex gap-5">
                                            <Link to="/" className="border px-5 py-2 rounded-lg">Home</Link>
                                            <Link to="/add" className="border px-5 py-2   rounded-lg">Add</Link>
                                            <Link to="/cart" className="border px-5 py-2   rounded-lg">Cart</Link>
                                            <button className="border px-5 py-2   rounded-lg" onClick={chnagesColor}>chnage</button>
                                        </div>
                            </div>
                </div>
        </>
    )
}

export default Navbar