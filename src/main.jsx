import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './pages/App';
import MoreInfo from './pages/MoreInfo';
import Project from './pages/Project';
import GetInTouch from './pages/GetInTouch';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} /> {/* Home page */}
        <Route path="moreinfo" element={<MoreInfo />} />
        <Route path="project" element={<Project />} />
        <Route path="getintouch" element={<GetInTouch />} />
        <Route path="*" element={<App />} /> {/* Catch-all route */}
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
