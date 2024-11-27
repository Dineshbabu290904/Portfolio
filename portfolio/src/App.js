import React from 'react';
import "./App.css"
import Header from './component/Header';
import About from './component/About';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Experience from './component/Experience';
import Contact from './component/Contact';

const App = () => (
  <div>
    <Header />
    <About />
    <Skills />
    <Projects />
    <Experience />
    <Contact />
  </div>
);

export default App;
