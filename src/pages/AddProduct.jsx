import { useState } from "react"
import { usecustomeHook } from "../context/AppContext"




const AddProduct = () => {
    const { getData, setData ,color} = usecustomeHook()
    const [actualValue, changeActualValue] = useState({
        id: "",
        title: "",
        price: "",
        rating: "",
        discription: ""
    })
    const changes = (event) => {
        const { name, value } = event.target
        changeActualValue((data) => {
            return {
                ...data,
                [name]: value
            }
        })
    }
    const submit = (event) => {
        event.preventDefault()
        const object = {
            id: Date.now(),
            title: actualValue.title,
            price: actualValue.price,
            rating: actualValue.rating,
            discription: actualValue.discription
        }
        setData([...getData, object])
        changeActualValue({
            id: "",
            title: "",
            price: "",
            rating: "",
            discription: ""
        })

    }

    console.log(getData)

    return (
        <>
            <div className={`w-[95%] mx-auto h-screen  mt-10 ${color.textcolor} ${color.textbg}`}>

                <form className="p-10 border-2 rounded-lg ">
                    <div className="mb-5">
                        <label for="Title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Title</label>
                        <input type="text" id="Title" className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title...." required value={actualValue.title}
                            onChange={changes} name="title" />
                    </div>
                    <div className="mb-5">
                        <label for="Discription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Discription</label>
                        <textarea type="text" id="Discription" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={actualValue.discription}
                            onChange={changes} name="discription" />
                    </div>
                    <div className="mb-5">
                        <label for="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Price</label>
                        <input type="text" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={actualValue.price}
                            onChange={changes} name="price" />
                    </div>
                    <div className="mb-5">
                        <label for="rating" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Review</label>
                        <input type="text" id="rating" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={actualValue.rating}
                            onChange={changes} name="rating" />
                    </div>

                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={submit}>Submit</button>
                </form>


            </div>
        </>
    )
}


export default AddProduct