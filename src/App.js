import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="hero">
        <h1>Hello! I'm <span>Dhruv Mevada</span></h1>
        <p>Unity Developer | Game Designer | Tool Builder</p>
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
          <img src="https://via.placeholder.com/80?text=Game1" alt="Game 1"/>
          <div>
            <h3>Game Title 1</h3>
            <p>Description of the game, platform, and your role.</p>
            <a href="#">View Project</a>
          </div>
        </div>
        <div className="project">
          <img src="https://via.placeholder.com/80?text=Tool1" alt="Tool 1"/>
          <div>
            <h3>Tool Title 1</h3>
            <p>Description of the Unity tool or feature developed.</p>
            <a href="#">View Tool</a>
          </div>
        </div>
      </section>
      <section id="about">
        <h2>About Me</h2>
        <p>I’ve worked on several game projects over the past 5+ years...</p>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:dhruvmevada.dev@gmail.com">dhruvmevada.dev@gmail.com</a></p>
        <p>Phone: <a href="tel:+918200486575">+91-8200486575</a></p>
      </section>
      <footer>
        <p>&copy; 2025 Dhruv Mevada. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
