import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import Bio from './components/Bio';
import Resume from './components/Resume'; 
import Projects from './components/Projects'; 
import Other from './components/Other';
import { HashRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/bio" element={<Bio />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/other" element={<Other />} />
    </Routes>
  </HashRouter>);
