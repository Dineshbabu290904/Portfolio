import React from 'react';

const Contact = () => (
  <section id="contact" className="container py-5">
    <h2>Contact Me</h2>
    <form>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" id="name" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" id="email" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea id="message" className="form-control" rows="4"></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Send</button>
    </form>
  </section>
);

export default Contact;
