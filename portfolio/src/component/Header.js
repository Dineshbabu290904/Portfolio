import React from 'react';

const Header = () => (
  <header className="bg-dark text-white py-3">
    <nav className="container d-flex justify-content-between align-items-center">
      <h1>Dinesh Babu Surapaneni</h1>
      <ul className="d-flex list-unstyled gap-4">
        <li><a href="#about" className="text-white text-decoration-none">About</a></li>
        <li><a href="#skills" className="text-white text-decoration-none">Skills</a></li>
        <li><a href="#projects" className="text-white text-decoration-none">Projects</a></li>
        <li><a href="#experience" className="text-white text-decoration-none">Experience</a></li>
        <li><a href="#contact" className="text-white text-decoration-none">Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
