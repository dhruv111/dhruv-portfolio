import React from 'react';
import './App.css';
import luckyslots from './assets/luckyslots.webp';
import gardens_of_time from './assets/gardensoftime.jpg';
import luckyslots from './assets/SA.webp';
import gardens_of_time from './assets/AqClash.webp';

function App() {
  return (
    <>
      <header id="home">
        <h1>Hi, I'm Dhruv Mevada</h1>
        <p>Software Engineer | Unity Developer | Tool Builder | Designer</p>
      </header>

      <nav>
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#about">About Me</a>
        <a href="#contact">Contact</a>
      </nav>

      <section id="projects" className="fade-in-section">
        <h2>Projects</h2>

        <div className="project">
          <img src={gardens_of_time} alt="Gardens of Time" />
          <div className="project-details">
            <h3>Gardens of Time</h3>
            <p>Gardens of Time is an exciting, award-winning hidden object game! Use your Time Machine to locate hidden objects throughout history, unravel the intrigues of a secret society, and protect the world from sinister forces!</p>
            <a href="https://www.facebook.com/GardensofTime/" target="_blank" rel="noreferrer">View on Facebook</a>
          </div>
        </div>

        <div className="project">
          <img src={luckyslots} alt="Lucky Slots" />
          <div className="project-details">
            <h3>Lucky Slots</h3>
            <p>Thrill of striking it rich in over 60 authentic FREE to play slot machines with all the Vegas casino features you love. Make your fortune with HUGE Payouts, Bonus Games, Free Spins and more!</p>
            <a href="https://play.google.com/store/apps/details?id=com.blueshellgames.luckyslots" target="_blank" rel="noreferrer">Google Play</a><br/>
            <a href="https://www.facebook.com/playluckyslots/" target="_blank" rel="noreferrer">Facebook</a><br/>
            <a href="https://apps.apple.com/us/app/lucky-slots-vegas-casino/id451658773" target="_blank" rel="noreferrer">iOS App Store</a>
          </div>
        </div>
        
       
        <div className="project">
          <img src={aqclash} alt="AquaBall Clash 2" />
          <div className="project-details">
            <h3>AquaBall Clash 2</h3>
            <p>
              I solely developed AquaBall Clash 2 from scratch, including gameplay programming, UI design, and publishing.
            </p>
            <a href="https://play.google.com/store/apps/details?id=com.CreativeMindset.AquaballClash2" target="_blank" rel="noreferrer">View on Google Play</a>
          </div>
        </div>

        
        <div className="project">
          <img src={solitairearena} alt="Solitaire Arena" />
          <div className="project-details">
            <h3>Solitaire Arena</h3>
            <p>
              I worked on migrating Solitaire Arena for Android, handling the pure native Android codebase.
            </p>
            <a href="https://play.google.com/store/apps/details?id=com.mavenhut.solitaire" target="_blank" rel="noreferrer">View on Google Play</a>
          </div>
        </div>
    
      </section>

      <section id="about" className="fade-in-section">
        <h2>About Me</h2>
        <p>I'm a Unity Developer with over 5 years of experience working on diverse game projects across mobile and WebGL platforms.</p>
        <p>Fluent in Git, Jenkins, Bitrise, Jira, and Confluence. Based in Ahmedabad, open to relocating to Bengaluru.</p>
      </section>

      <section id="contact" className="fade-in-section">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:dhruvmevada.dev@gmail.com" className="contact-link">dhruvmevada.dev@gmail.com</a></p>
        <p>Phone: <a href="tel:+917383865487" className="contact-link">+91 7383865487</a></p>
        <p>GitHub: <a href="https://github.com/Dhruvmevada" className="contact-link" target="_blank" rel="noreferrer">github.com/Dhruvmevada</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/dhruvmevada" className="contact-link" target="_blank" rel="noreferrer">linkedin.com/in/dhruvmevada</a></p>
      </section>

      <footer>
        <p>&copy; 2025 Dhruv Mevada. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
