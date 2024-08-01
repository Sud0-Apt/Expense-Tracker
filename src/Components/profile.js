// // import React, { useState, useEffect, useContext } from 'react';
// // import { AuthContext } from '../context/AuthContext';
// // import './css/profile.css';
// // import { FaUserCircle } from 'react-icons/fa'; // Importing an icon for the user

// // const Profile = ({ onClose }) => {
// //   const { user, logout, updateUser } = useContext(AuthContext);
// //   const [username, setUsername] = useState(user.username);
// //   const [email, setEmail] = useState(user.email);
// //   const [password, setPassword] = useState('');
// //   const [loading, setLoading] = useState(false);
// //   const [editing, setEditing] = useState(false);

// //   useEffect(() => {
// //     if (user) {
// //       setUsername(user.username);
// //       setEmail(user.email);
// //     }
// //   }, [user]);

// //   const handleUpdate = async () => {
// //     setLoading(true);
// //     try {
// //       await updateUser({ username, password });
// //       setEditing(false);
// //     } catch (error) {
// //       console.error("Failed to update user:", error);
// //     }
// //     setLoading(false);
// //   };

// //   const handleLogout = () => {
// //     logout();
// //     onClose(); // Close the profile popup
// //   };

// //   return (
// //     <div className="profile-container">
// //       <div className="profile-header">
// //         <FaUserCircle className="profile-icon" />
// //         <h2>Profile</h2>
// //         <button className="close-button" onClick={onClose}>X</button>
// //       </div>
// //       <div className="profile-info">
// //         <div className="profile-field">
// //           <label>Username:</label>
// //           <input
// //             type="text"
// //             value={username}
// //             onChange={(e) => setUsername(e.target.value)}
// //             disabled={!editing}
// //           />
// //         </div>
// //         <div className="profile-field">
// //           <label>Email:</label>
// //           <input type="email" value={email} disabled />
// //         </div>
// //         {editing && (
// //           <div className="profile-field">
// //             <label>New Password:</label>
// //             <input
// //               type="password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //             />
// //           </div>
// //         )}
// //         <div className="profile-buttons">
// //           {editing ? (
// //             <>
// //               <button className="save-button" onClick={handleUpdate} disabled={loading}>
// //                 {loading ? 'Saving...' : 'Save'}
// //               </button>
// //               <button className="cancel-button" onClick={() => setEditing(false)}>
// //                 Cancel
// //               </button>
// //             </>
// //           ) : (
// //             <button className="edit-button" onClick={() => setEditing(true)}>
// //               Edit
// //             </button>
// //           )}
// //           <button className="logout-button" onClick={handleLogout}>
// //             Logout
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Profile;








// // Profile.js
// import React, { useState, useEffect, useContext } from 'react';
// import { AuthContext } from '../context/AuthContext';
// import './css/profile.css';
// import { FaUserCircle } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';

// const Profile = ({ onClose }) => {
//   const { user, logout, updateUser } = useContext(AuthContext);
//   const [username, setUsername] = useState(user ? user.username : '');
//   const [email, setEmail] = useState(user ? user.email : '');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [editing, setEditing] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate('/login'); 
//   };

  

//   useEffect(() => {
//     if (user) {
//       setUsername(user.username);
//       setEmail(user.email);
//     }
//   }, [user]);

//   const handleUpdate = async () => {
//     setLoading(true);
//     try {
//       await updateUser({ username, password });
//       setEditing(false);
//     } catch (error) {
//       console.error("Failed to update user:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // const handleLogout = () => {
//   //   logout();
//   //   onClose(); // Close the profile popup
//   // };

//   return (
//     <div className="profile-container">
//       <div className="profile-header">
//         <FaUserCircle className="profile-icon" />
//         <h2>Profile</h2>
//         <button className="close-button" onClick={onClose}>X</button>
//       </div>
//       <div className="profile-info">
//         <div className="profile-field">
//           <label>Username:</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             disabled={!editing}
//           />
//         </div>
//         <div className="profile-field">
//           <label>Email:</label>
//           <input type="email" value={email} disabled />
//         </div>
//         {editing && (
//           <div className="profile-field">
//             <label>New Password:</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//         )}
//         <div className="profile-buttons">
//           {editing ? (
//             <>
//               <button className="save-button" onClick={handleUpdate} disabled={loading}>
//                 {loading ? 'Saving...' : 'Save'}
//               </button>
//               <button className="cancel-button" onClick={() => setEditing(false)}>
//                 Cancel
//               </button>
//             </>
//           ) : (
//             <button className="edit-button" onClick={() => setEditing(true)}>
//               Edit
//             </button>
//           )}
//           <button className="logout-button" onClick={handleLogout}>
//             Logout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;



////////////////////////////////////////////////////////////////////////////////////////*css*/`
// import React, { useContext, useEffect } from 'react';
// import { AuthContext } from '../context/AuthContext';
// import axios from 'axios';

// const Profile = () => {
//   const { user, dispatch } = useContext(AuthContext);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const response = await axios.get('/api/profile', {
//           headers: {
//             Authorization: `Bearer ${user.token}`,
//           },
//         });
//         // Assuming response.data contains user data
//         dispatch({ type: 'LOGIN', payload: response.data });
//       } catch (error) {
//         console.error('Failed to fetch profile:', error);
//       }
//     };

//     if (user) fetchProfile();
//   }, [user, dispatch]);

//   if (!user) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>Profile</h2>
//       <p>Username: {user.username}</p>
//       <p>Email: {user.email}</p>
//     </div>
//   );
// };

// export default Profile



///////////////////////////////////////////////////////////////////////////////////////

import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import './css/profile.css';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Profile = ({ onClose }) => {
  const { user, logout, updateUser } = useContext(AuthContext);
  const [username, setUsername] = useState(user ? user.username : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setUsername(user.username);
      setEmail(user.email);
    }
  }, [user]);

  const handleUpdate = async () => {
    setLoading(true);
    try {
      await updateUser({ username, password });
      setEditing(false);
    } catch (error) {
      console.error("Failed to update user:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/'); // Redirect to the login page after logout
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <FaUserCircle className="profile-icon" />
        <h2>Profile</h2>
        <button className="close-button" onClick={onClose}>X</button>
      </div>
      <div className="profile-info">
        <div className="profile-field">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={!editing}
          />
        </div>
        <div className="profile-field">
          <label>Email:</label>
          <input type="email" value={email} disabled />
        </div>
        {editing && (
          <div className="profile-field">
            <label>New Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        )}
        <div className="profile-buttons">
          {editing ? (
            <>
              <button className="save-button" onClick={handleUpdate} disabled={loading}>
                {loading ? 'Saving...' : 'Save'}
              </button>
              <button className="cancel-button" onClick={() => setEditing(false)}>
                Cancel
              </button>
            </>
          ) : (
            <button className="edit-button" onClick={() => setEditing(true)}>
              Edit
            </button>
          )}
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;



// import React, { useState, useEffect, useContext } from 'react';
// import { AuthContext } from '../context/AuthContext';
// import './css/profile.css';
// import { FaUserCircle } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';

// const Profile = ({ onClose }) => {
//   const { user, logout } = useContext(AuthContext); // Removed updateUser as it's not being used
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [editing, setEditing] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (user) {
//       console.log('User object:', user); // Debugging line
//       setUsername(user.username || ''); // Safeguard if username is undefined
//       setEmail(user.email || '');       // Safeguard if email is undefined
//     }
//   }, [user]);

//   const handleLogout = () => {
//     logout();
//     navigate('/login'); // Redirect to the login page after logout
//   };

//   return (
//     <div className="profile-container">
//       <div className="profile-header">
//         <FaUserCircle className="profile-icon" />
//         <h2>Profile</h2>
//         <button className="close-button" onClick={onClose}>X</button>
//       </div>
//       <div className="profile-info">
//         <div className="profile-field">
//           <label>Username:</label>
//           <input
//             type="text"
//             value={username}
//             disabled
//           />
//         </div>
//         <div className="profile-field">
//           <label>Email:</label>
//           <input type="email" value={email} disabled />
//         </div>
//         <div className="profile-buttons">
//           <button className="logout-button" onClick={handleLogout}>
//             Logout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
