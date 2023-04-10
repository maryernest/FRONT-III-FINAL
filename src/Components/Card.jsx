import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { FavsContext } from "../context/FavsContext"
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import "../style/Style.css"


const Card = ({ name, username, id }) => {
  const { state, dispatch } = useContext(FavsContext);

  const addFav = () => {
    dispatch({ type: 'AGREGAR', payload: { name, username, id } })
  };

  const quitar = () => {
    dispatch({ type: 'QUITAR', payload: { name, username, id } })
  };


  return (
    <div className="card">
      <img src="./images/doctor.jpg" />
      <h5> {name}</h5>
      <p>{username}</p>

      {state.data.some((element) => element.id === id) ? (
        <Link onClick={quitar} className="favButton">
          <FavoriteIcon className="imgperfil" alt="boton like" />
        </Link>
      ): (
        <Link onClick={addFav} className="favButton">
          <FavoriteBorderIcon className="imgperfil" alt="boton deslike" />
        </Link>
      )}

      <Link to={`/users/${id}`} >
        <LibraryAddIcon className="imgperfil" alt="boton plus" />
      </Link>

    

    </div>
  );
};

export default Card;
