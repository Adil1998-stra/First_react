import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import Shop from './Pages/Shop'
import Home from './Components/Home/Home'
import ProductDisplay from './Pages/ProductDisplay'
import LoginSignup from './Pages/LoginSignup'
import Cart from './Pages/Cart'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/product/:productId' element={<ProductDisplay/>}></Route>
        <Route path='/Login/Signup' element={<LoginSignup/>}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
