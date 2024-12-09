import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import AboutMe from './components/sections/AboutMe.jsx';
import CodePortfolio from './components/sections/CodePortfolio.jsx';
import DesignPortfolio from './components/sections/DesignPortfolio.jsx';
import ExtraInfo from './components/sections/ExtraInfo.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        {/* Base path with /portfolio */}
        <Route path="/" element={<App />}>
          {/* Redirect /portfolio to /portfolio/about */}
          <Route path="/" element={<Navigate to="/portfolio/about" />} />
          {/* Define child routes */}
          <Route path="/portfolio/about" element={<AboutMe />} />
          <Route path="/portfolio/code" element={<CodePortfolio />} />
          <Route path="/portfolio/design" element={<DesignPortfolio />} />
          <Route path="/portfolio/info" element={<ExtraInfo />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);
