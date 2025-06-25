import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AddProduct from './pages/AddProduct'
import Navbar from './pages/Navbar'
import Cart from './pages/Cart'

function App() {


  return (
    <>
<Navbar/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/add" element={<AddProduct/>}/>
  <Route path="/cart" element={<Cart/>}/>
</Routes>

   
    </>
  )
}

export default App
