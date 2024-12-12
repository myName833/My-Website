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
        <Route path="/" element={<App />} />
        <Route path="/moreinfo" element={<MoreInfo />} />
        <Route path="/project" element={<Project />} />
        <Route path="/getintouch" element={<GetInTouch />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
