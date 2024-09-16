import React from 'react';
import './assets/styles/Hero.css'; // Ruta corregida

const Hero = () => {
  return (
    <div id="home" className="hero-section d-flex align-items-center justify-content-center">
      <div className="text-center">
        <h1>¡Hola! Soy Joan Rioseco</h1>
        <p>Desarrollador Web FullStack</p>
        <a href="#portfolio" className="btn btn-primary mt-3">Ver Portafolio</a>
      </div>
    </div>
  );
};

export default Hero;
