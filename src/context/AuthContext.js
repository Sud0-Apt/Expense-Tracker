// // src/context/AuthContext.js

// import React, { createContext, useState, useEffect,useReducer } from 'react';
// import axios from 'axios';
// import { type } from '@testing-library/user-event/dist/type';

// export const AuthContext = createContext();

// export const authReducer= (state,action) =>{
//   switch(action.type){
//     case 'LOGIN':
//       return {user: action.payload}
//     case 'LOGOUT':
//       return {user:null}
//     default:
//       return state
//   }
// }
// export const AuthProvider = ({ children }) => {
//   const [state,dispatch]=useReducer(authReducer,{
//     user:null
//   })

//   useEffect(()=>{
//     const user=JSON.parse(localStorage.getItem('user'))

//     if (user){
//       dispatch({type:'LOGIN',payload:user})
//     }
//   },[])

//   const logout = () => {
//     // Clear user data from state
//     dispatch({ type: 'LOGOUT' });

//     // Remove user data from local storage
//     localStorage.removeItem('user');

//     // Optionally, you can make an API call to invalidate the session on the server
//     axios.post('/api/auth/logout')
//       .then(response => {
//         console.log('Logged out successfully');
//       })
//       .catch(error => {
//         console.error('Error during logout:', error);
//       });
//   };


  
//   /*const [user, setUser] = useState(null);
//   const [token,setToken]=useState(null)
//   const login = (userData,tokendata) => {
//     setUser({token: tokendata,userData})
//     setToken(tokendata);
//   };

//   const logout = () => {
//     setUser(null);
//   };
//   { user,token,login,logout }*/
//   /*useEffect(() => {
//     // Check if the user is already logged in
//     axios.get('http://localhost:5000/api/auth/protected', { withCredentials: true })
//       .then(response => {
//         if (response.status === 200) {
//           setUser(true);
//         } else {
//           setUser(false);
//         }
//       })
//       .catch(() => setUser(false));
//   }, []);*/

//   return (
//     <AuthContext.Provider value={{...state,dispatch,logout}}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

const authReducer = (state, action) => {
  switch(action.type) {
    case 'LOGIN':
      return { user: action.payload };
    case 'LOGOUT':
      return { user: null };
    default:
      return state;
  }
}

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { user: null });

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      dispatch({ type: 'LOGIN', payload: JSON.parse(storedUser) });
    }
  }, []);

  const login = async (userData) => {
    // Make sure to set the user data correctly in local storage
    localStorage.setItem('user', JSON.stringify(userData));
    dispatch({ type: 'LOGIN', payload: userData });
  };

  const logout = () => {
    // Clear user data from state and local storage
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('user');

    // Optionally, make an API call to invalidate the session on the server
    axios.post('/api/auth/logout')
      .then(response => {
        console.log('Logged out successfully');
      })
      .catch(error => {
        console.error('Error during logout:', error);
      });
  };

  return (
    <AuthContext.Provider value={{ ...state, dispatch, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
