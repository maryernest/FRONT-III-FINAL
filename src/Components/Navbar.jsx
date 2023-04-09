import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { ModoDarkContext } from '../context/ModoDarkContext';
import "../style/Style.css"



const Navbar = () => {

  const { isModoOscuro, setIsModoOscuro } = useContext(ModoDarkContext);

  const handleModoDark = () => {
    if (isModoOscuro) {
      setIsModoOscuro(false)
    } else {
      setIsModoOscuro(true)
    }
  }

  return (

    <nav className={isModoOscuro ? "dark" : "app"}>
      <div className='logo'>
        <img src='./images/logo.png' />
        <h2>ODONTO</h2>
      </div>

      <div className='navi'>
        <Link to="/home">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/favs">Favs</Link>
        
        <button onClick={handleModoDark}>
          <Brightness4Icon className="imgperfil" alt="logo Faceboock" />
        </button>
      </div>
    </nav>
  )
}
export default Navbar

