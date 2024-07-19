// src/context/AuthContext.js

import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
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
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
