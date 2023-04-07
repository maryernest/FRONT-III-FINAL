import React from "react"
import { useParams, Link } from "react-router-dom";
import "../style/Style.css"
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { endPoint } from "../Routes/Home";



const Card = ({ name, username, id }) => {
  // const {id} = useParams();
  // const endPoint = "https://jsonplaceholder.typicode.com/users";
 
  
  
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

      <Link onClick={addFav} className="favButton">
        <FavoriteIcon className="imgperfil" alt="foto like" />
      </Link>

      <Link to={`/users/${id}`} >
        <LibraryAddIcon className="imgperfil" alt="foto plus" />
      </Link>
    </div>
  );
};

export default Card;
