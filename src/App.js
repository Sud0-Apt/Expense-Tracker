// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './Components/home';
import Login from './Components/login';
import Register from './Components/register';
import Dashboard from './Components/dashboard';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


import "./App.css";
import Home from "./Components/home";
import About from "./Components/about";
import Work from "./Components/work";
import Testimonial from "./Components/testimonial";
import Contact from "./Components/contact";
import Footer from "./Components/footer";
import { Mail } from '@mui/icons-material';
import Main from './Components/main';
// import { Routes } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Main />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
