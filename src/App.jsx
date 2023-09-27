import React from "react"
import NavBar from './components/Navbar/Navbar'
import ItemListConteiner from "./components/Item/ItemListContainer"
import ItemDetailContainer from "./components/Details/ItemDetailContainer"
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <NavBar />
         <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/about' element={<About />} />
           <Route path='/contact' element={<Contact />} />
         </Routes>
      <ItemListConteiner /> 
      <ItemDetailContainer />
    </>
  )
}


  

export default App
