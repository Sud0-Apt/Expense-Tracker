// src/context/AuthContext.js

import React, { createContext, useState, useEffect,useReducer } from 'react';
import axios from 'axios';
import { type } from '@testing-library/user-event/dist/type';

export const AuthContext = createContext();

export const authReducer= (state,action) =>{
  switch(action.type){
    case 'LOGIN':
      return {user: action.payload}
    case 'LOGOUT':
      return {user:null}
    default:
      return state
  }
}
export const AuthProvider = ({ children }) => {
  const [state,dispatch]=useReducer(authReducer,{
    user:null
  })

  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem('user'))

    if (user){
      dispatch({type:'LOGIN',payload:user})
    }
  },[])
  /*const [user, setUser] = useState(null);
  const [token,setToken]=useState(null)
  const login = (userData,tokendata) => {
    setUser({token: tokendata,userData})
    setToken(tokendata);
  };

  const logout = () => {
    setUser(null);
  };
  { user,token,login,logout }*/
  /*useEffect(() => {
    // Check if the user is already logged in
    axios.get('http://localhost:5000/api/auth/protected', { withCredentials: true })
      .then(response => {
        if (response.status === 200) {
          setUser(true);
        } else {
          setUser(false);
        }
      })
      .catch(() => setUser(false));
  }, []);*/

  return (
    <AuthContext.Provider value={{...state,dispatch}}>
      {children}
    </AuthContext.Provider>
  );
};
