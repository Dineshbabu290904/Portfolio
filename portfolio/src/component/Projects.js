import React from 'react';

const Projects = () => (
  <section id="projects" className="container py-5">
    <h2>Projects</h2>
    <ul>
    <section class="section" id="projects">
        <div class="container">
            <div class="projects-grid">
            <li>
            <div class="project-card">
                <i class="fas fa-x-ray fa-3x text-primary"></i>
                <h3>Bone Fracture Detection</h3>
                <p>A deep learning model to detect fractures with high accuracy.</p>
            </div>
            </li>
            <li>
            <div class="project-card">
                <i class="fas fa-cart-shopping fa-3x text-success"></i>
                <h3>DigiMart</h3>
                <p>An e-commerce platform connecting farmers to buyers.</p>
            </div>
            </li>
            <li>
            <div class="project-card">
                <i class="fas fa-chart-line fa-3x text-warning"></i>
                <h3>Behavior Prediction</h3>
                <p>Machine learning for optimizing marketing strategies.</p>
            </div>
            </li>
            </div>
        </div>
        </section>
    </ul>
  </section>
);

export default Projects;
