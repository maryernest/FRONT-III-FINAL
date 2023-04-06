import React, { useState } from "react"
import CardFrom from "./CardFrom"
import "../style/Style.css"



const Form = () => {
    //Aqui deberan implementar el form completo con sus validaciones

    const [values, setValues] = useState({nombre:"", email:""});
    const [validar, setValidar] = useState(false);
    const [cartel, setCartel] = useState(false);    

    const hadleSubmit = (e) => {

        e.preventDefaul();
        
        if (values.nombre.trim().length < 5 || values.email.length >= 6 ) {
            setCartel(true);
            setValidar(false);
        } else {
            setValidar(true);
            setCartel(false);
        }

    }

    return (
       <main>
            <form id="formi" onSubmit={hadleSubmit}>
                
                <input 
                    type="text" 
                    name="nombre" 
                    value={values.nombre}
                    placeholder="Nombre Completo" 
                    onChange={(e) => setValues({...validar, nombre: e.target.value})}
                   
                />
                <input 
                    type="text" 
                    name="email"
                    value={values.email} 
                    placeholder="Correo" 
                    onChange={(e) => setValues({...validar, email: e.target.value})}
                  
                />
                 

                <button form="formi" btn="submit">Enviar</button>
                <span textoValidacion> </span>
            </form>

                {validar 
                    && (
                        <p  className='mensaje'>
                            Por favor verifique su información nuevamente
                        </p>
                    )
                }

                {cartel 
                    && (
                        <CardFrom name={values.nombre} mail={values.email} />
                    )
                }
            
        </main>
    )
};

export default Form;


// import React, { useState, useContext} from 'react'
// import { useNavigate } from 'react-router-dom';
// import { NewContext } from '../Context/Context';
// import { Box, Button, TextField } from '@mui/material'

// const Login = () => {

//     const [values, setValues] = useState({nombre:"", email:""});

//     const { handleLogin } = useContext(NewContext);

//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         handleLogin();
//         navigate("/cardForm");
//     }
    

//   return (
//     <Box 
//         component='form'
//         sx={{display: 'flex', flexDirection: 'column', gap: '20px', width: '20vw'}}
//         onSubmit={handleSubmit}
//     >
//         <TextField
//             name='nombre'
//             size='small'
//             type='text'
//             label='nombre'
//             placeholder='Nombre Completo'
//             value={values.nombre}
//             onChange={(e) => setValues({...values, nombre: e.target.value})}
//         />
//         <TextField
//            name='email'
//            size='small'
//            type='text'
//            label='email'
//            placeholder='Ingrese su Correo'
//            value={values.email}
//            onChange={(e) => setValues({...values, email: e.target.value})}
//         />
//         <Button type='submit' size='small' variant='contaned'>
//             Inicio
//         </Button>

//     </Box>
//   )
// }

// export default Form
