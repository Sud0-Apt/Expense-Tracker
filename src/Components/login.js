// src/components/Login.js

import React, { useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import axios from 'axios';
import './css/login.css';
import { useAuthContext } from '../hooks/useAuth';
import Navbar from "./navbar";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const {dispatch}=useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password }, { withCredentials: true });
      setMessage(response.data.message);
      if (response.status === 200) {
        localStorage.setItem('user',JSON.stringify(response.data))
        dispatch({type:'LOGIN',payload:response.data})
        console.log(response.data.message);
        console.log(response.data.user);
        console.log(response.data.token);
        navigate('/');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setMessage(error.response.data.message);
      } else {
        setMessage('Login failed');
        console.log(error);
      }
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      {message && <p className="message">{message}</p>}
      <p className="register-link">
        New user? <a href="/register"> Register here</a>
      </p>
      <p className="register-link">
        Go back and Explore?<a href="/"> Home</a>
      </p>
    </div>
    
  );
}

export default Login;