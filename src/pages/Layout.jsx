import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <nav className="navbar">
          <Link className="navbar-home" to="./App">Johnny Hsieh</Link>
          <ul className="navbar-links">
            <li><Link to="./Project">Projects</Link></li>
            <li><Link to="/moreInfo">More Information</Link></li>
            <li><Link to="/contact">Get in Touch</Link></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="main-footer">
        <p>© 2024 Johnny Hsieh. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
