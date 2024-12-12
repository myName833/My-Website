import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import MoreInfo from "./MoreInfo";
import Project from "./Project";
const GetInTouch = () => {
  return (
    <div>
      <header>
         <nav className="navbar">
           <a className="navbar-home" href="/">Johnny Hsieh</a>
           <ul className="navbar-links">
             <li><Link to="/project">Projects</Link></li>
             <li><Link to="/moreinfo">More Information</Link></li>
           </ul>
         </nav>
         <h2>asshole</h2>
       </header>
       <footer className="main-footer">
         <p id="footer-copyright">© 2024 Johnny Hsieh. All rights reserved.</p>
       </footer>
    </div>
  );
};

export default GetInTouch;
