import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
type LoginContextProps = {
    children:React.ReactElement
}
type LoginStateProps = {
    login: boolean,
    setLogin:React.Dispatch<React.SetStateAction<boolean>>
}
export const LoginContext = createContext({} as LoginStateProps);
  
const LoginContextProvider = ({children}:LoginContextProps) => {
    // const navigate = useNavigate()
    const [login, setLogin] = useState<boolean>(false);
    const handleLogin = async () => {
      try {
        let res = await axios.post("https://tashkent-server-3.onrender.com/auth", {auth:localStorage.getItem("auth")});
        if(res.data){
          setLogin(true);
          // navigate("/")
        }
        console.log(res);
      } catch (error) {
        console.log("AUTO LOGIN ERROR:",error);
      }
    }

    useEffect(() => {
      handleLogin();
    },[])
  return (
    <LoginContext.Provider value={{login, setLogin}}>{children}</LoginContext.Provider>
  )
}

export default LoginContextProvider;