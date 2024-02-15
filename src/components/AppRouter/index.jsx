import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Header from '../Header';
import APropos from '../../pages/A-propos';
import Footer from '../Footer';


function AppRouter() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<APropos />} />
        </Routes>
        <Footer />
      </Router>
    );
  }
  
  export default AppRouter;