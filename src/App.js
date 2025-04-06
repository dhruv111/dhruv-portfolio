import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
