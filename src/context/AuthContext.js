// src/context/AuthContext.js

import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token,setToken]=useState(null)
  const login = (userData,tokendata) => {
    setUser(userData);
    setToken(tokendata)
  };

  const logout = () => {
    setUser(null);
  };


  useEffect(() => {
    fetch('/api/users/profile')
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error(err));
  }, []);
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
    <AuthContext.Provider value={{ user,setUser,token,login,logout }}>
      {children}
    </AuthContext.Provider>
  );
};
