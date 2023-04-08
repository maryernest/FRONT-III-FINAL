import React, { useState, useContext} from 'react'
import { AuthContext } from '../context/AuthContext';
import { Box, Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [values, setValues] = useState({email:"", password:""});
  const { handleLogin } = useContext(AuthContext);
  const navigate = useNavigate();    
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
    navigate("/home");
    console.log(values);


    // if (values.email && values.password) {
    //   try {
    //     const { user, token } = handleLogin();
    //     console.log("llega hasta aqui");
    //     if(user === values.email) {
    //       sessionStorage.setItem("token", JSON.stringify(token));
    //       setIsLogged(true);
    //       navigate("/home")
    //     }
    //   }
    //   catch (error) {
    //     console.log("error", error);
    //   }
    // }
  };

    
  return (
    
    <Box component='form' className='formi'onSubmit={ handleSubmit }>
         
        <TextField
          name='email'
          size='small'
          type='email'
          label='Email *'
          placeholder='Ingrese su Correo'
          value={values.email}
          onChange={(e) => setValues({...values, email: e.target.value })}
        />  
        <TextField 
          name='password'
          size='small'
          type='password'
          label='Password *'
          placeholder='Ingrese su Contraseña'
          value={values.password}
          onChange={(e) => setValues({...values, password: e.target.value })}
        />  
      <Button type='submit' size='small' variant='contained' from= "form">
        Submit
      </Button>
      
    </Box>
  )
}

export default Login









// import React, { useState, useContext} from 'react'
// import { useNavigate } from 'react-router-dom';
// import { NewContext } from '../Context/Context';
// import { Box, Button, TextField } from '@mui/material'

// const Login = () => {

//     const [values, setValues] = useState({email:"", password:""});

//     const { handleLogin } = useContext(NewContext);

//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         handleLogin();
//         navigate("/home");
//     }
    

//   return (
//     <Box 
//         component='form'
//         sx={{display: 'flex', flexDirection: 'column', gap: '20px', width: '20vw'}}
//         onSubmit={handleSubmit}
//     >
//         <TextField
//             name='email'
//             size='small'
//             type='text'
//             label='email'
//             placeholder='Ingrese su Correo'
//             value={values.email}
//             onChange={(e) => setValues({...values, email: e.target.value})}
//         />
//         <TextField
//             name='password'
//             size='small'
//             type='text'
//             label='password'
//             placeholder='Ingrese su Contraseña'
//             value={values.password}
//             onChange={(e) => setValues({...values, password: e.target.value})}
//         />
//         <Button type='submit' size='small' variant='contaned'>
//             Inicio
//         </Button>

//     </Box>
//   )
// }

// export default Login