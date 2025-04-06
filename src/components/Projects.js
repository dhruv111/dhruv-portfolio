import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project">
        <img src="https://via.placeholder.com/80?text=🎮" alt="Game 1" />
        <div className="project-details">
          <h3>Game Title 1</h3>
          <p>Exciting Unity platformer game developed for mobile and WebGL.</p>
          <a href="https://example.com/game1" target="_blank" rel="noreferrer">View Project</a>
        </div>
      </div>
      <div className="project">
        <img src="https://via.placeholder.com/80?text=🛠️" alt="Tool 1" />
        <div className="project-details">
          <h3>Tool Title 1</h3>
          <p>Custom Unity editor extension for level design workflow improvement.</p>
          <a href="https://example.com/tool1" target="_blank" rel="noreferrer">View Tool</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
