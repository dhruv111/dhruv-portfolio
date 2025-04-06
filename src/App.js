import React from "react";

function App() {
  return (
    <>
      <header id="home">
        <h1>Hi, I'm Dhruv Mevada</h1>
        <p>Unity Game Developer | Tool Builder | Designer</p>
      </header>
      <nav>
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#about">About Me</a>
        <a href="#contact">Contact</a>
      </nav>
      <section id="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>Game Title 1</h3>
          <p>Unity platformer game developed for WebGL and mobile.</p>
        </div>
        <div className="project">
          <h3>Tool Title 1</h3>
          <p>Custom Unity editor extension to improve level design workflow.</p>
        </div>
      </section>
      <section id="about">
        <h2>About Me</h2>
        <p>I’m a Unity Developer with 5+ years of experience building immersive gameplay, robust tools, and optimized systems.</p>
        <p>Fluent in Git, Jenkins, Bitrise, Jira, and Confluence. Based in Ahmedabad, open to relocating to Bengaluru.</p>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:dhruvmevada.dev@gmail.com">dhruvmevada.dev@gmail.com</a></p>
        <p>Phone: <a href="tel:+918200486575">+91-8200486575</a></p>
        <p>GitHub: <a href="https://github.com/Dhruvmevada" target="_blank" rel="noreferrer">github.com/Dhruvmevada</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/dhruvmevada" target="_blank" rel="noreferrer">linkedin.com/in/dhruvmevada</a></p>
      </section>
      <footer>
        <p>&copy; 2025 Dhruv Mevada. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;