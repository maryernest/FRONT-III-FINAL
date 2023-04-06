
import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { rutas } from './navegation/Routes'
import { ModoDarkContext } from './context/ModoDarkContext'



const App = () => {

  const { isModoOscuro } = useContext(ModoDarkContext);

  return (

    <BrowserRouter>
      <div className={ isModoOscuro? "dark" : "app"}>
        <Navbar />
        <Routes>
          {rutas.map(({ id, path, Component }) => (
            <Route key={id} path={path} element={<Component />} />
          ))}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>


  )
}

export default App

