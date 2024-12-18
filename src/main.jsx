import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './pages/App'; // This is your home page component
import MoreInfo from './pages/MoreInfo'; // Your 'MoreInfo' page component
import Project from './pages/Project'; // Your 'Project' page component
import GetInTouch from './pages/GetInTouch'; // Your 'GetInTouch' page component
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/My-Website/"> {/* Base path for GitHub Pages */}
      <Routes>
        {/* Define routes for different components */}
        <Route path="*" element={<App />} /> {/* Home page */}
        <Route path="/moreinfo" element={<MoreInfo />} /> {/* MoreInfo page */}
        <Route path="/project" element={<Project />} /> {/* Project page */}
        <Route path="/getintouch" element={<GetInTouch />} /> {/* GetInTouch page */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
