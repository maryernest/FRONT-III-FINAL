
import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { rutas } from './navegation/Routes'


const App = () => {
  return (

    <BrowserRouter>
        <Navbar/>
        <Routes>
            {rutas.map(({ id, path, Component }) => (
              <Route key={id} path={path} element={<Component />} />
            ))}
        </Routes>
        <Footer/>
    </BrowserRouter>
 
  )
}

export default App

