import React from 'react';
import '../App.css';

import { motion } from 'framer-motion';
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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/moreinfo">More Information</Link></li>
            <li><Link to="/getintouch">Get in Touch</Link></li>
          </ul>
        </nav>
      </header>
      <video autoPlay loop muted id="bg-video">
          <source src="/background-vid.mp4" type="video/mp4" />
      </video>
      <div class="container">
        <div class="info-grid">
            <div class="info-card">
                <h2 class="card-title">Recent Projects</h2>
                <ul class="card-list">
                    <li><a href='https://dbhackathonclub.onrender.com/'target='_blank'>DB Hackathon Club Website</a></li>
                        <ol><a href='https://github.com/myName833/Hackathon-Club-Website-new-' target='_blank'>GitHub Link</a></ol> 
                    <img id="club-pic"src='club-pic.png'></img>
                </ul>
            </div>
            <div class="info-card">
                <h2 class="card-title">More?</h2>
                <ul class="card-list">
                <li>JS Calculator</li>
                <li><a href='https://github.com/myName833/Hackathon-Club-Website-new-' target='_blank'>GitHub Link</a></li>
                <img id="calc-pic"src='JS-pic.png'></img>
                </ul>
            </div>
            <div class="info-card">
                <h2 class="card-title">Even More??</h2>
                <ul class="card-list">
                <li>Weather App</li>
                <li><a href='https://github.com/myName833/Hackathon-Club-Website-new-' target='_blank'>GitHub Link</a></li>
                <img id="weather-pic"src='weather-pic.png'></img>
                </ul>
            </div>

            <div class="info-card full-width-section">
                <h2 class="card-title">Goals</h2>
                <div class="resource-grid">
                    <div class="resource-item">
                        <h2>2025 Goals</h2>
                        <ul id="goals">
                          <li>UCLA</li>
                          <li>Programming</li>
                          <li>4.0 GPA</li>
                        </ul>
                        
                    </div>
                    <div class="resource-item">
                        <h3>Future</h3>
                        <ul id="goals">
                          <li>Software Engineer</li>
                          <li>Work Life Balance</li>
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

export default Project;
