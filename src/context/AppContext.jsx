import { createContext, useContext, useState } from "react";




const AppContext = createContext()


const AppProvider = ({children}) =>{
    const array = [
        {
          id: 1,
          title: "Computer PC",
          price: 30000,
          rating: 5,
          discription: "this is a good Product for My side plese purchese and give best review"
        },
        {
          id: 2,
          title: "Laptop",
          price: 45000,
          rating: 4,
          discription: "this is a good Product for My side plese purchese and give best review"
        },
        {
          id: 3,
          title: "Smartphone",
          price: 25000,
          rating: 4.5,
          discription: "this is a good Product for My side plese purchese and give best review"
        },
        {
          id: 4,
          title: "Tablet",
          price: 20000,
          rating: 4,
          discription: "this is a good Product for My side plese purchese and give best review"
        },
        {
          id: 5,
          title: "Smartwatch",
          price: 15000,
          rating: 4.2,
          discription: "this is a good Product for My side plese purchese and give best review"
        },
        {
          id: 6,
          title: "Wireless Headphones",
          price: 8000,
          rating: 4.8,
          discription: "this is a good Product for My side plese purchese and give best review"
        },
        {
          id: 7,
          title: "Gaming Monitor",
          price: 20000,
          rating: 4.7,
          discription: "this is a good Product for My side plese purchese and give best review"
        },
        {
          id: 8,
          title: "External Hard Drive",
          price: 5000,
          rating: 4.5,
          discription: "this is a good Product for My side plese purchese and give best review"
        },
        {
          id: 9,
          title: "Mechanical Keyboard",
          price: 3000,
          rating: 4.6,
          discription: "this is a good Product for My side plese purchese and give best review"
        },
        {
          id: 10,
          title: "Gaming Mouse",
          price: 2500,
          rating: 4.4,
          discription: "this is a good Product for My side plese purchese and give best review"
        }
      ];


      const [getData,setData] = useState(array)
      const [cart,Addcart] = useState([])
      const [color,setColor] = useState({
        textcolor:"text-white",
        textbg:"bg-yellow-500"
      })

    return (
        <AppContext.Provider value={{getData,setData,cart,Addcart,color,setColor}}>
            {children}
        </AppContext.Provider>
    )
}




const usecustomeHook = () =>{
    return useContext(AppContext)
}

export {AppContext,AppProvider,usecustomeHook}