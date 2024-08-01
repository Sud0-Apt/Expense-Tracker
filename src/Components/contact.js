// import React from "react";

// const Contact = () => {
//   return (
//     <div id="contact-section" className="contact-page-wrapper">
//       <h1 className="primary-heading">Have Question In Mind?</h1>
//       <h1 className="primary-heading">Let Us Help You</h1>
//       <div className="contact-form-container">
//         <input type="text" placeholder="yourmail@gmail.com" />
//         <button className="secondary-button">Submit</button>
//       </div>
//     </div>
//   );
// };

// export default Contact;


// src/components/Contact.js

import React, { useState } from "react";
import axios from "axios";
import { useAuthContext } from '../hooks/useAuth';

const Contact = () => {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) {
      setStatus('Please enter a message.');
      return;
    }
    try {
      const email = user?.email || ''; // Get the logged-in user's email
      const response = await axios.post('http://localhost:5000/api/contact', { email, message });
      if (response.status === 200) {
        setStatus('Message sent successfully!');
        setMessage(''); // Clear the message field
      }
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
      console.error(error);
    }
  };

  return (
    <div id="contact-section" className="contact-page-wrapper">
      <h1 className="primary-heading">Have Question In Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
          />
          <button type="submit" className="secondary-button">Submit</button>
        </form>
        {status && <p className="status-message">{status}</p>}
      </div>
    </div>
  );
};

export default Contact;
