import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import AboutUs from './pages/aboutUs';
import NotFound from './pages/NotFound';
import JoshLanding from './pages/Landing/Josh/JoshLanding';
import Barbers from './pages/barbers';
import GalleriesPage from './pages/gallery';
import Contacts from './pages/contact';
import JoshZver from './pages/ZidanVer/josh';
import Careers from './pages/careers';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/josh" element={<JoshLanding />} />
        <Route path="/barbers" element={<Barbers />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<GalleriesPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/zver-josh" element={<JoshZver />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
