import React from 'react'
import { Link } from 'react-router-dom'
import "../style/Style.css"
import Brightness4Icon from '@mui/icons-material/Brightness4';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

    return (
        <nav>
            {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
            {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}


            <div className='logo'>
                <img src='./images/logo.png' />
                <h2>ODONTO</h2>
            </div>

            <div className='navegar'>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/favs">Favs</Link>

                <button>
                    <Brightness4Icon className="imgperfil" alt="logo Faceboock"  />
                </button>
            </div>
        </nav>
    )
}
export default Navbar
