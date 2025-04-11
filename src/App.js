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
        <a href="#about">About Me</a> {/* Moved About Me here */}
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* About Me Section */}
      <section id="about" className="fade-in-section">
        <h2>About Me</h2>
        <p>
          I’m a passionate Software Engineer and Unity Developer with over 5 years of experience in creating engaging games and tools. My expertise spans across mobile and WebGL platforms, and I have been involved in numerous projects that focus on delivering immersive gameplay experiences. I have worked on both 2D and 3D games, and my skill set includes Unity, C#, and various game development tools.
        </p>
        <p>
          In addition to my development skills, I am experienced in building custom tools that streamline workflows and improve production pipelines. I am proficient in Git for version control, Jenkins and Bitrise for continuous integration, and Jira/Confluence for project management. I thrive in collaborative environments, always aiming to deliver polished, optimized, and high-performance products.
        </p>
        <p>
          Currently working remotely, I am open to relocation and excited to explore opportunities, especially within teams that are working on innovative projects that push the boundaries of game or product experiences.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="fade-in-section">
        <h2>Projects</h2>
        <p className="project-intro">
          Here are some of the notable projects I have had the privilege of contributing to.
        </p>

        {/* Gardens of Time */}
        <div className="project">
          <img src={gardens_of_time} alt="Gardens of Time" />
          <div className="project-details">
            <h3>Gardens of Time</h3>
            <p>I was part of the Gardens of Time team, released new content, solved live bugs, participated in the endpoint migration from Poreach Inc to Garden City Games Ltd. Released new features and resolved live bugs to retain players.</p>
            <div className="link-buttons">
              <a href="https://www.facebook.com/GardensofTime/" target="_blank" rel="noreferrer">View on Facebook</a>
            </div>
          </div>
        </div>

        {/* Lucky Slots */}
        <div className="project">
          <img src={luckyslots} alt="Lucky Slots" />
          <div className="project-details">
            <h3>Lucky Slots</h3>
            <p>I contributed to porting Lucky Slots from a Flash game to Unity. I was actively involved in the Android launch and later helped port the game to iOS.</p>
            <div className="link-buttons">
              <a href="https://play.google.com/store/apps/details?id=com.blueshellgames.luckyslots" target="_blank" rel="noreferrer">View on Google Play</a>
              <a href="https://www.facebook.com/playluckyslots/" target="_blank" rel="noreferrer">View on Facebook</a>
              <a href="https://apps.apple.com/us/app/lucky-slots-vegas-casino/id451658773" target="_blank" rel="noreferrer">View on iOS App Store</a>
            </div>
          </div>
        </div>

        {/* AquaBall Clash 2 */}
        <div className="project">
          <img src={aqclash} alt="AquaBall Clash 2" />
          <div className="project-details">
            <h3>AquaBall Clash 2</h3>
            <p>I solely developed AquaBall Clash 2 from scratch, including gameplay programming, UI design, and publishing.</p>
            <div className="link-buttons">
              <a href="https://play.google.com/store/apps/details?id=com.CreativeMindset.AquaballClash2" target="_blank" rel="noreferrer">View on Google Play</a>
            </div>
          </div>
        </div>

        {/* Solitaire Arena */}
        <div className="project">
          <img src={solitairearena} alt="Solitaire Arena" />
          <div className="project-details">
            <h3>Solitaire Arena</h3>
            <p>I worked on migrating Solitaire Arena for Android, handling the pure native Android codebase.</p>
            <div className="link-buttons">
              <a href="https://play.google.com/store/apps/details?id=com.mavenhut.solitaire" target="_blank" rel="noreferrer">View on Google Play</a>
            </div>
          </div>
        </div>

        {/* Inspirit Simulation */}
        <div className="project">
          <img src={inspirit} alt="Inspirit Simulation" />
          <div className="project-details">
            <h3>Inspirit Simulation</h3>
            <p>Worked on dedicated projects with other highly skilled developers across the globe. Learned more in-depth about highly scalable projects and collaborative work. Maintained the flow of the well-defined structure and architecture of Inspirit to fulfill the client's needs.</p>
            <div className="link-buttons">
              <a href="https://inspiritvr.com/" target="_blank" rel="noreferrer">View on Inspirit Website</a>
            </div>
          </div>
        </div>

        {/* Flash.it */}
        <div className="project">
          <img src={flashit} alt="Flash.it" />
          <div className="project-details">
            <h3>Flash.it</h3>
            <p>Made features of screen point inline view, calculation of radians, and reflection of the new plan after changing radians manually. Able to take a screenshot of the current plan.</p>
            <div className="link-buttons">
              <a href="https://play.google.com/store/apps/details?id=com.structuredsteel.flashit.app&hl=en_IN" target="_blank" rel="noreferrer">View on Google Play</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="fade-in-section">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:dhruvm113355@gmail.com" className="contact-link">dhruvm113355@gmail.com</a></p>
        <p>Phone: <a href="tel:+917383865487" className="contact-link">+91 7383865487</a></p>
      </section>

      <footer>
        <p>&copy; 2025 Dhruv Mevada. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
