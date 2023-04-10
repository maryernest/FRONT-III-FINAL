import React, { useEffect, useState } from "react"
import "../style/Style.css"


const Form = () => {

  const [values, setValues] = useState("");
  const [nombre, setNombre] =useState("");
  const [email, setEmail] =useState("");


  const formi = (e) => {

    e.preventDefault();
  
    console.log(nombre, email);

    if (nombre.trim().length < 5 || !email.includes("@")) {
      setValues("Por favor verifique su información nuevamente");
    } else {
      setValues(
        `Gracias ${nombre}, te contactaremos cuanto antes vía mail`  
      )   
    }
  }

  return (
    <main>
      <form onSubmit={formi}>
        <input className="" 
          name="nombre"
          type="text"  
          placeholder="Nombre Completo" 
          values="nombre"
          onChange={(e) => setNombre(e.target.value)}
        />
        <input 
          name="email" 
          type="email" 
          placeholder="E-mail"
          values="email" 
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="enviar">Send</button>

        <div>
          {values}
        </div>
          
      </form>
    </main>
  );
};

export default Form;
