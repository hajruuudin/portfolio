import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

import App from './App.jsx';
import AboutMe from './components/sections/AboutMe.jsx';
import CodePortfolio from './components/sections/CodePortfolio.jsx';
import DesignPortfolio from './components/sections/DesignPortfolio.jsx';
import ExtraInfo from './components/sections/ExtraInfo.jsx';
import ErrorPage from './components/ErrorPage.jsx';

createRoot(document.getElementById('root')).render(
<StrictMode>
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} errorElement={<ErrorPage />}>
        <Route index element={<Navigate to="/portfolio/about" />} />
        <Route path="portfolio">
          <Route path="about" element={<AboutMe />} />
          <Route path="code" element={<CodePortfolio />} />
          <Route path="design" element={<DesignPortfolio />} />
          <Route path="info" element={<ExtraInfo />} />
        </Route>
      </Route>
    </Routes>
  </HashRouter>
</StrictMode>

);
