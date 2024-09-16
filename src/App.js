// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portafolio';
import Contact from './components/contact';
import Footer from './components/Footer';
import './App.css'; // Ruta del CSS global

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
