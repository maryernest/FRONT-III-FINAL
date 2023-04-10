import React, { useContext } from "react";
import { FavsContext } from "../context/FavsContext";


const Favs = () => {

  const { state, dispatch } = useContext(FavsContext);

  return (
    <>
      <h1>Dentists grid</h1>

      <section className="card-favs">
        {state.data?.map((data) => (
          <div>
            <img src="./images/doctor.jpg"
              style={{
                borderRadius: "50%", margin: "10px",
              }} />
            <h5> {data.name}</h5>
            <p>{data.username}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default Favs;
