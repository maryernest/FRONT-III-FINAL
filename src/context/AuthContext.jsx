import React, { createContext, useState } from 'react'


export const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
  const [ isLogged, setIsLogged ] = useState(true);

  const handleLogin = () => {
    // return { 
      setIsLogged(true);
      // use: "chinitamary9@hotmail.com",
      // token: "AAAMJFK544541146565JH1231" 
    // }
  };

  const State = {
    isLogged,
    handleLogin,
    // setIsLogged
  };


  return (
    <AuthContext.Provider value={State}>
      { children }
    </AuthContext.Provider>
  )
}


export default AuthContextProvider
