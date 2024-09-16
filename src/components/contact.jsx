import React from 'react';
import './assets/styles/Contact.css'; // Ruta corregida

const Contact = () => {
  return (
    <div id="contact" className="container my-5">
      <h2>Contacto</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input type="text" className="form-control" id="name" placeholder="Ingresa tu nombre" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" className="form-control" id="email" placeholder="Ingresa tu correo" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea className="form-control" id="message" rows="5" placeholder="Escribe tu mensaje"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
