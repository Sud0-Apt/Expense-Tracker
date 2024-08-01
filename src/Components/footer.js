// import React from "react";
// import Logo from "../Assets/Logo.svg";
// import { BsTwitter } from "react-icons/bs";
// import { SiLinkedin } from "react-icons/si";
// import { BsYoutube } from "react-icons/bs";
// import { FaFacebookF } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <div className="footer-wrapper">
//       <div className="footer-section-one">
//         <div className="footer-logo-container">
//           <img src={Logo} alt="" />
//         </div>
//         <div className="footer-icons">
//           <BsTwitter />
//           <SiLinkedin />
//           <BsYoutube />
//           <FaFacebookF />
//         </div>
//       </div>
//       <div className="footer-section-two">
//         <div className="footer-section-columns">
//           <span>Qualtiy</span>
//           <span>Help</span>
//           <span>Share</span>
//           <span>Carrers</span>
//           <span>Testimonials</span>
//           <span>Work</span>
//         </div>
//         <div className="footer-section-columns">
//           <span>244-5333-7783</span>
//           <span>hello@food.com</span>
//           <span>press@food.com</span>
//           <span>contact@food.com</span>
//         </div>
//         <div className="footer-section-columns">
//           <span>Terms & Conditions</span>
//           <span>Privacy Policy</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;



import React from "react";
import Logo from "../Assets/Penny Wise.png";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import './css/footer.css'; // Add your CSS file for styling

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="Logo" className="footer-logo"/>
        </div>
        <div className="footer-icons">
          <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <BsTwitter />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <SiLinkedin />
          </a>
          <a href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
            <BsYoutube />
          </a>
          <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Share</span>
          <span>Careers</span>
          <span>Work</span>
        </div>
        <div className="footer-section-columns">
          <span>hello@pennywise.org</span>
          <span>press@pennywise.org</span>
          <span>contact@pennywise.org</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
          <span>Help</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
