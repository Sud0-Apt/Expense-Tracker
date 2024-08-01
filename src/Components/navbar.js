// /* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { useState } from "react";
// import Logo from "../Assets/Logo 2.png";
// import { BsCart2 } from "react-icons/bs";
// import { HiOutlineBars3 } from "react-icons/hi2";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import HomeIcon from "@mui/icons-material/Home";
// import InfoIcon from "@mui/icons-material/Info";
// import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
// import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
// import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
// import { useNavigate } from "react-router-dom";
// import { Link } from 'react-scroll';

// const Navbar = () => {
//   const navigate = useNavigate();
//   const handleLoginClick = () => {
//     navigate("/login");
//   };
//   const [openMenu, setOpenMenu] = useState(false);
//   const menuOptions = [
//     {
//       text: "Home",
//       icon: <HomeIcon />,
//       to: "home-section"
//     },
//     {
//       text: "About",
//       icon: <InfoIcon />,
//       to: "about-section"
//     },
//     {
//       text: "Contact",
//       icon: <PhoneRoundedIcon />,
//       to: "contact-section"
//     },
//   ];
//   return (
//     <nav>
//       <div className="nav-logo-container">
//         <img src={Logo} alt="" />
//         {/* <a href="">PennyWise</a> */}
//       </div>
//       <div className="navbar-links-container">
//         <Link to="home-section" smooth={true} duration={500}>Home</Link>
//         <Link to="about-section" smooth={true} duration={500}>About</Link>
//         <Link to="contact-section" smooth={true} duration={500}>Contact</Link>
//         <button className="primary-button" onClick={handleLoginClick}>Login</button>
        
//       </div>
//       <div className="navbar-menu-container">
//         <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
//       </div>
//       <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
//         <Box
//           sx={{ width: 250 }}
//           role="presentation"
//           onClick={() => setOpenMenu(false)}
//           onKeyDown={() => setOpenMenu(false)}
//         >
//           <List>
//             {menuOptions.map((item) => (
//               <ListItem key={item.text} disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>{item.icon}</ListItemIcon>
//                   <ListItemText primary={item.text} />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>
//           <Divider />
//         </Box>
//       </Drawer>
//       {/* {showProfile && <Profile onClose={closeProfile} />} */}
//     </nav>
//   );
// };

// export default Navbar;


// src/components/Navbar.js

import React, { useState } from "react";
import Logo from "../Assets/Penny Wise.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-scroll';
import { useAuthContext } from '../hooks/useAuth';  // Import useAuthContext

const Navbar = () => {
  const { user } = useAuthContext();  // Use the hook to get the user state
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      to: "home-section"
    },
    {
      text: "About",
      icon: <InfoIcon />,
      to: "about-section"
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      to: "contact-section"
    },
  ];

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleProfileClick = () => {
    navigate("/profile");  // Adjust the path to your profile page
  };

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <Link to="home-section" smooth={true} duration={500}>Home</Link>
        <Link to="about-section" smooth={true} duration={500}>About</Link>
        <Link to="contact-section" smooth={true} duration={500}>Contact</Link>
        {user ? (
          <button className="primary-button" onClick={handleProfileClick}>Profile</button>
        ) : (
          <button className="primary-button" onClick={handleLoginClick}>Login</button>
        )}
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          {/* Conditional rendering for profile button in the drawer */}
          {user && (
            <ListItem disablePadding>
              <ListItemButton onClick={handleProfileClick}>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>
          )}
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;

