import React, { useContext } from "react";
import Card from "../Components/Card";
import "../style/Style.css";
import { FavsContext } from "../context/FavsContext";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const { state, dispatch } = useContext(FavsContext);

  // const quitar = () => {
  //   // Aqui iria la logica para agregar la Card en el localStorage
  //   dispatch({ type: 'QUITAR', payload: { name, username, id} })
  // }


  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}

        {
          state.data?.map((data) => (
            <>

              {/* <img src="./images/doctor.jpg" /> */}
              <h5> {data.name}</h5>
              <p>{data.username}</p>

             
            </>

          ))
        }

      

      </div>
    </>
  );
};

export default Favs;
