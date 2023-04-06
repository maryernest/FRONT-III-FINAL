import React from "react"
import "../style/Style.css"
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import FavoriteIcon from '@mui/icons-material/Favorite';
const Card = ({ name, username, id }) => {

    const addFav = () => {
        // Aqui iria la logica para agregar la Card en el localStorage
    }

    return (
        <div className="card">
            {/* En cada card deberan mostrar en name - username y el id */}
            {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
            {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

            <img src="./images/doctor.jpg" />
            <h5> {name}</h5>
            <p>{username}</p>

            <button onClick={addFav} className="favButton">
                <FavoriteIcon className="imgperfil" alt="foto like" />
            </button>
        </div>
    );
};

export default Card;
