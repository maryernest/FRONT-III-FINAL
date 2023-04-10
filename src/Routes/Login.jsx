import React, { useState, useContext} from 'react'
import { AuthContext } from '../context/AuthContext';
import { Box, Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import '../style/Style.css'
const Login = () => {

  const [values, setValues] = useState({email:"", password:""});
  const { handleLogin } = useContext(AuthContext);
  const navigate = useNavigate();    
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
    navigate("/home");
    console.log(values);
  };

    
  return (
    
    <Box component='form' onSubmit={ handleSubmit } className='formi' >
        <div className='miniformi'>
          <TextField
            name='email'
            size='small'
            type='email'
            label='Email *'
            placeholder='Email'
            value={values.email}
            onChange={(e) => setValues({...values, email: e.target.value })}
          />  
          <TextField 
            name='password'
            size='small'
            type='password'
            label='Password *'
            placeholder='assword'
            value={values.password}
            onChange={(e) => setValues({...values, password: e.target.value })}
          />  
        <Button type='submit' size='small' variant='contained' from= "form">
          iniciar sesión
        </Button>
      </div>
    </Box>
  )
}

export default Login

