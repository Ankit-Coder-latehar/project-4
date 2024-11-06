import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import HomePage from './pages/HomePage';
import Contacts from './pages/Contacts';


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
        
      
    </Router>
  );
}

export default App;

