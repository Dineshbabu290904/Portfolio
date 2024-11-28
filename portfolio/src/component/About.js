import React from 'react';

const About = () => (
  <section id="about" className="container py-5">
  <div className="row align-items-center">
  <h2 className="display-4 mb-4">About Me</h2>
    {/* Left Column - Text Content */}
    <div className="col-lg-6 text-center text-lg-start">
      <p className="lead">
        Hi, I'm <strong>Dinesh Babu Surapaneni</strong>, a passionate and driven <strong>Bachelor of Technology</strong> student specializing in <strong>Computer Science and Data Science</strong> at <strong>Prasad V Potluri Siddhartha Institute of Technology</strong>.
      </p>
      <p>
        With a deep interest in <strong>Artificial Intelligence (AI)</strong> and <strong>Machine Learning (ML)</strong>, I aim to leverage data-driven solutions to solve real-world problems. I am constantly learning new techniques and methodologies to enhance my knowledge and skills in the fields of <strong>data science, predictive analytics, and deep learning</strong>.
      </p>
      <p>
        I have worked on various projects, including a <strong>car price prediction system</strong> using machine learning models, and I am currently diving into <strong>healthcare and disaster management solutions</strong> using AI. My goal is to create innovative solutions that make a difference.
      </p>
    </div>

    {/* Right Column - Image */}
    <div className="col-lg-6 d-flex justify-content-center justify-content-lg-end">
      <img src="logo512.png" alt="Dinesh Babu Surapaneni" className="img-fluid rounded-circle shadow-lg" style={{ maxWidth: '400px' }} />
    </div>
  </div>
</section>



);

export default About;
