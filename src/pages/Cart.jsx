import { useEffect, useState } from "react"
import { usecustomeHook } from "../context/AppContext"


const Cart = () => {

    const { cart,color } = usecustomeHook()
    const [total,setTotal] = useState(0)

    console.log(cart)


    const calculateTotal = () =>{
        let total = 0
                    const finalTotal = cart.map((data)=>{
                            return   total += data.price
                    })  
                    setTotal(total) 
    }

    useEffect(()=>{
        calculateTotal()
    },[])

    return (
        <>
            <div className={`w-[80%] mx-auto` } >
                <p className="text-xl font-bold mt-5">Cart</p>

                <div>
                    <div className="border p-5 mt-10">

                        {
                            cart.length > 0 ? cart.map((data) => (

                                <div className={` ${color.textcolor} ${color.textbg} border p-5 my-3 flex justify-between`}>
                                    <p>{data.title}</p>
                                    <p>{data.discription}</p>
                                    <p>{data.price}</p>

                                </div>
                            )) : <p>Cart Empty</p>
                        }

                    </div>
                    <div className="border-t-2 mt-10 flex justify-end">
                                    <p className="text-2xl font-bold  mt-5">Total :- {total}</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Cart



