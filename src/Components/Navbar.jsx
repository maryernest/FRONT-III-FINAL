import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "../style/Style.css"
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { ModoDarkContext } from '../context/ModoDarkContext';



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

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
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}


      <div className='logo'>
        <img src='./images/logo.png' />
        <h2>ODONTO</h2>
      </div>

      <div className='navegar'>
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

