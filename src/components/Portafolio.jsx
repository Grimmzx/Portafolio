// src/components/Portfolio.jsx
import React, { useState } from 'react';
import './assets/styles/Portafolio.css'; // Ruta al CSS de Portfolio

// Importa las imágenes
import image1 from './assets/img/01.webp';
import image2 from './assets/img/02.webp';
import image3 from './assets/img/03.jpg';
import image4 from './assets/img/04.webp';
import image5 from './assets/img/05.jpg';
import image6 from './assets/img/06.jpg';

const Portfolio = () => {
  // Proyectos con imágenes y detalles adicionales
  const projects = [
    { id: 1, title: 'Sistema de mensajeria', description: 'Sitio simulando un sistema de mensajeria utilizando Flexbox. Desafio semanal de Bootcamp DesafioLatam.', image: image1, details: 'Web realizada con HTML y CSS' },
    { id: 2, title: 'Iguanas', description: 'Landing Page informativo sobre Iguanas. Desafio semanal de Bootcamp DesafioLatam.', image: image2, details: ' Web realizada con HTML y CSS' },
    { id: 3, title: 'E-commerce', description: 'Sitio el cual simula la venta de productos, utilizando Grid+Flexbox, Desafio semanal de Bootcamp DesafioLatam.', image: image3, details: 'Web realizada con HTML y CSS' },
    { id: 4, title: 'Cupponn', description: 'Sitio el cual Simula esquema de sitio existente, ejemplo de uso de bootstrap. Desafio semanal de Bootcamp DesafioLatam.', image: image4, details: 'Web realizada con HTML,CSS Y BOOTSTRAP' },
    { id: 5, title: 'CoffeBlog', description: 'Blog simulando un caffeShop, con cursos y publicaciones.', image: image5, details: 'Blog ,web hecha con HTML,CSS,JAVASCRIPT' },
    { id: 6, title: 'Proyecto VITRINA', description: 'Página de e-commerce integra diversas secciones, incluyendo blog, ventas, y donaciones. Generation Chile.', image: image6, details: 'Para el frontend, se ha utilizado React, mientras que el backend está desarrollado con Express y Node.js. El sistema gestiona de manera eficiente múltiples funcionalidades, como la administración de notificaciones, artículos, y otros aspectos clave de la base de datos, ofreciendo una experiencia completa y organizada. Además, cuenta con un carrito de compras funcional y un sistema de roles asignados, donde los usuarios pueden subir publicaciones, mientras que los administradores tienen la capacidad de subir artículos en el blog.' },
  ];

  // Estado para controlar el modal
  const [selectedProject, setSelectedProject] = useState(null);

  // Función para abrir el modal y establecer el proyecto seleccionado
  const openModal = (project) => {
    setSelectedProject(project);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div id="portfolio" className="container my-5">
      <h2>Mi Portafolio</h2>
      <div className="row">
        {projects.map((project) => (
          <div className="col-md-4" key={project.id}>
            <div className="card mb-4">
              <img src={project.image} className="card-img-top" alt={project.title} />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <button onClick={() => openModal(project)} className="btn btn-primary">Ver más</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedProject.title}</h5>
                <button type="button" className="close" aria-label="Close" onClick={closeModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img src={selectedProject.image} className="img-fluid mb-3" alt={selectedProject.title} />
                <p><strong>Descripción:</strong> {selectedProject.description}</p>
                <p>{selectedProject.details}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
