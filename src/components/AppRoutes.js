import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MasterPage from './MasterPageComponents/MasterPage';
import Home from './Pages/Home';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Resume from './Pages/Resume';
import NotFound from './Pages/NotFound';
import ContactMe from './PortfolioComponents/ContactMe';

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MasterPage><Home /></MasterPage>} />
        <Route path="/home" element={<MasterPage><Home /></MasterPage>} />
        <Route path="/about" element={<MasterPage><About /></MasterPage>} />
        <Route path="/portfolio" element={<MasterPage><Portfolio /></MasterPage>} />
        <Route path="/resume" element={<MasterPage><Resume /></MasterPage>} />
        <Route path="/contactMe" element={<MasterPage><ContactMe /></MasterPage>} />
        <Route path="*" element={<MasterPage><NotFound /></MasterPage>} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;