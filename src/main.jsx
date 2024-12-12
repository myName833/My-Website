import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './pages/App';
import MoreInfo from './pages/MoreInfo';
import Project from './pages/Project';
import GetInTouch from './pages/GetInTouch';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} /> {/* Home route */}
        <Route path="/moreinfo" element={<MoreInfo />} /> {/* MoreInfo route */}
        <Route path="/project" element={<Project />} /> {/* Projects route */}
        <Route path="/getintouch" element={<GetInTouch />} /> {/* Contact route */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);