import React from 'react';
import { useState, useEffect } from 'react';
import '../App.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import MoreInfo from "./MoreInfo";
import Project from "./Project";

const GetInTouch = () => {
  const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
       // Trigger the loaded state after a short delay
      const timer = setTimeout(() => {
      setIsLoaded(true);
      }, 100);
       // Cleanup the timer
      return () => clearTimeout(timer);
    }, []);
  return (
    <div>
      <header>
        <nav className="navbar">
          <a className="navbar-home" href="/">Johnny Hsieh</a>
          <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/project">Projects</Link></li>
            <li><Link to="/moreinfo">More Information</Link></li>
          </ul>
        </nav>
      </header>
      <video autoPlay loop muted id="bg-video">
          <source src="/background-vid.mp4" type="video/mp4" />
        </video>
        <div className="container">
        <div className="info-grid-getintouch">
          <div className={`info-card full-width-section ${isLoaded ? 'loaded' : ''}`}>
            <h2 className="card-title">Contact Me?</h2>
            <div className="resource-grid">
              <div className="resource-item-getintouch">
                <h2>Email</h2>
                <ul id="goals-getintouch">
                  <li>UCLA</li>
                  <li>Programming</li>
                  <li>4.0 GPA</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="main-footer">
        <p id="footer-copyright">© 2024 Johnny Hsieh. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GetInTouch;
