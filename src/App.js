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
import MainUser from './Components/user';
// import { Routes } from "react-router-dom";
// import Dashboard from './Components/dashboard';
import ProtectedRoute from './Components/protectedRoute';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import FetchTransactions from './Components/fetchtransac';
import VisualDashboard from './Components/visual_dashboard';
import Profile from './Components/profile'
import UpdateTxn from './Components/updatetxn';
// import { Navigate } from 'react-router-dom';

function App() {
  return (
    <AuthProvider>
    <Router>
    <div className="App">
      <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addtransac" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/updatetxn" element={<UpdateTxn />} />
          {/* <Route path="*" element={<Navigate to="/login" />} /> */}
          {/*<Route 
            path="/addtransac" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />*/}
          <Route path="/" element={<Main />} />
          <Route path="/home_user" element={<MainUser />} />
          <Route path="/transactions" element={<FetchTransactions/>} />
          <Route path='/visualdash' element={<VisualDashboard/>}/>
      </Routes>
    </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
