import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Wrapper from './Wrapper';
import PrivacyScreen from './screens/privacyScreen/privacyScreen';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Wrapper />} />
        <Route path="/privacy" element={<PrivacyScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
