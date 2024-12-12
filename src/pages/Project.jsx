import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import MoreInfo from "./MoreInfo";
import GetInTouch from "./GetInTouch";

const Project = () => {
  return (
    <div>
      <header>
         <nav className="navbar">
           <a className="navbar-home" href="/">Johnny Hsieh</a>
           <ul className="navbar-links">
             <li><Link to="/moreinfo">More Information</Link></li>
             <li><Link to="/getintouch">Get in Touch</Link></li>
           </ul>
         </nav>
       </header>
       <video autoPlay loop muted id="bg-video">
          <source src="/background-vid.mp4" type="video/mp4" />
        </video>
        
       <footer className="main-footer">
         <p id="footer-copyright">© 2024 Johnny Hsieh. All rights reserved.</p>
       </footer>
    </div>
  );
};

export default Project;
