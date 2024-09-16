// src/components/Navbar.jsx
import React from 'react';
import './assets/styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="#home">Joan Riosco</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto"> {/* Centrar los enlaces con mx-auto */}
          <li className="nav-item"><a className="nav-link" href="#home">Inicio</a></li>
          <li className="nav-item"><a className="nav-link" href="#about">Acerca de mí</a></li>
          <li className="nav-item"><a className="nav-link" href="#portfolio">Portafolio</a></li>
          <li className="nav-item"><a className="nav-link" href="#contact">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
