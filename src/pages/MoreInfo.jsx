import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Project from "./Project";
import GetInTouch from "./GetInTouch";


const MoreInfo = () => {
  return (
    <div>
      <header>
        <nav className="navbar">
          <a className="navbar-home" href="/">Johnny Hsieh</a>
          <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/project">Projects</Link></li>
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
                <h2 class="card-title">About Me</h2>
                <ul class="card-list">
                    <li>Age: 16</li>
                    <li>Hobby: Basketball</li>
                    <li>Skills: Programming, Basketball</li>
                    <li>Ethnicity: Taiwanese</li>
                </ul>
            </div>
            <div class="info-card">
                <h2 class="card-title">More?</h2>
                <ul class="card-list">
                    <li>Nationality: American</li>
                    <li>Interests: Programming, Engineering, Basketball</li>
                    <li>Current School: Diamond Bar High School</li>
                </ul>
            </div>
            <div class="info-card">
                <h2 class="card-title">Find me?</h2>
                <ul class="card-list">
                    <li><a id="insta-link" target="_blank" href="https://www.instagram.com/johnnyhsiehh/">Insta</a></li>
                    <li><a id="insta-link" target="_blank" href="https://github.com/myName833">GitHub</a></li>
                    <li><a id="insta-link" target="_blank" href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit">Linkedin</a></li>
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

export default MoreInfo;
