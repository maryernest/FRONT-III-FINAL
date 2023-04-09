import React, { useState } from "react"
import "../style/Style.css"


const Form = () => {

  const [values, setValues] = useState("");

  const formi = (e) => {

    e.preventDefault();
    const nombre = e.target[0].value;
    const email = e.target[1].value;
    console.log(nombre, email);

    if (nombre.trim().length < 5 || !email.includes("@")) {
      setValues("Por favor verifique su información nuevamente");
    } else {
      setValues(
        `Gracias ${nombre}, te contactaremos cuanto antes vía mail`
      );
    }
  }

  return (
    <main>
      <form onSubmit={formi}>
        <input className="" 
          name="nombre"
          type="text"  
          placeholder="full name" 
        />
        <input 
          name="email" 
          type="email" 
          placeholder="email" 
        />
        <button type="submit">
          Send
        </button>

        <div>
          {values}
        </div>
          
      </form>
    </main>
  );
};

export default Form;



// import React, { useState } from "react"

// import "../style/Style.css"



// const Form = () => {

//     const [values, setValues] = useState({nombre:"", email:""});
//     const [validar, setValidar] = useState(false);
//     const [cartel, setCartel] = useState(false);    

//     const hadleSubmit = (e) => {

//         e.preventDefaul();
//         console.log("hola");
//         if (values.nombre.trim().length < 5 || values.email.length >= 6 ) {
//             setCartel(true);
//             setValidar(false);
//         } else {
//             setValidar(true);
//             setCartel(false);
//         }

//     }

//     return (
//        <main>
//             <form id="formi" onSubmit={hadleSubmit}>
                
//                 <input 
//                     type="text" 
//                     name="nombre" 
//                     value={values.nombre}
//                     placeholder="Nombre Completo" 
//                     onChange={(e) => setValues({...values, nombre: e.target.value})}
                   
//                 />
//                 <input 
//                     type="text" 
//                     name="email"
//                     value={values.email} 
//                     placeholder="Correo" 
//                     onChange={(e) => setValues({...values, email: e.target.value})}
                  
//                 />
                 

//                 <button form="formi" btn="submit">Enviar</button>
               
//             </form>

//                 {validar 
//                     && (<p  className='mensaje'>Por favor verifique su información nuevamente</p>)
//                 }

//                 {cartel 
//                     && (<p>pepe</p>)
//                 }
            
//         </main>
//     )
// };

// export default Form;
