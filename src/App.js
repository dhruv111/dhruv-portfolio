import React from 'react';
import './App.css';
import luckyslots from './assets/luckyslots.webp';
import gardens_of_time from './assets/gardensoftime.jpg';
import aqclash from './assets/AqClash.webp';
import solitairearena from './assets/SA.webp';
import inspirit from './assets/Inspirit.svg';  // New Icon
import flashit from './assets/Flash.webp';    // New Icon

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

        {/* Gardens of Time */}
        <div className="project">
          <img src={gardens_of_time} alt="Gardens of Time" />
          <div className="project-details">
            <h3>Gardens of Time</h3>
            <p>I was part of the Gardens of Time team, released new content, solved live bugs, participated in the endpoint migration from Playdom (Poreach Inc) to Garden City Games, and helped in releasing features to retain players.</p>
            <a href="https://www.facebook.com/GardensofTime/" target="_blank" rel="noreferrer">View on Facebook</a>
          </div>
        </div>

        {/* Lucky Slots */}
        <div className="project">
          <img src={luckyslots} alt="Lucky Slots" />
          <div className="project-details">
            <h3>Lucky Slots</h3>
            <p>I contributed to porting Lucky Slots from a Flash game to Unity. I was actively involved in the Android launch and later helped port the game to iOS.</p>
            <div className="link-buttons">
              <a href="https://play.google.com/store/apps/details?id=com.blueshellgames.luckyslots" target="_blank" rel="noreferrer">Google Play</a>
              <a href="https://www.facebook.com/playluckyslots/" target="_blank" rel="noreferrer">Facebook</a>
              <a href="https://apps.apple.com/us/app/lucky-slots-vegas-casino/id451658773" target="_blank" rel="noreferrer">iOS App Store</a>
            </div>
          </div>
        </div>

        {/* AquaBall Clash 2 */}
        <div className="project">
          <img src={aqclash} alt="AquaBall Clash 2" />
          <div className="project-details">
            <h3>AquaBall Clash 2</h3>
            <p>I solely developed AquaBall Clash 2 from scratch, including gameplay programming, UI design, and publishing.</p>
            <a href="https://play.google.com/store/apps/details?id=com.CreativeMindset.AquaballClash2" target="_blank" rel="noreferrer">View on Google Play</a>
          </div>
        </div>

        {/* Solitaire Arena */}
        <div className="project">
          <img src={solitairearena} alt="Solitaire Arena" />
          <div className="project-details">
            <h3>Solitaire Arena</h3>
            <p>I worked on migrating Solitaire Arena for Android, handling the pure native Android codebase.</p>
            <a href="https://play.google.com/store/apps/details?id=com.mavenhut.solitaire" target="_blank" rel="noreferrer">View on Google Play</a>
          </div>
        </div>

        {/* Inspirit Simulation */}
        <div className="project">
          <img src={inspirit} alt="Inspirit Simulation" />
          <div className="project-details">
            <h3>Inspirit Simulation</h3>
            <p>Worked on dedicated projects with other highly skilled developers across the globe. Learned more in-depth about highly scalable projects and collaborative work. Maintained the flow of the well-defined structure and architecture of Inspirit to fulfill the client's needs.</p>
            <a href="https://inspiritvr.com/" target="_blank" rel="noreferrer">View on Inspirit</a>
          </div>
        </div>

        {/* Flash.it */}
        <div className="project">
          <img src={flashit} alt="Flash.it" />
          <div className="project-details">
            <h3>Flash.it</h3>
            <p>Made features of screen point inline view, calculation of radians, and reflection of the new plan after changing radians manually. Able to take a screenshot of the current plan.</p>
            <a href="https://play.google.com/store/apps/details?id=com.structuredsteel.flashit.app&hl=en_IN" target="_blank" rel="noreferrer">View on Google Play</a>
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
