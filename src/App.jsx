import React, { useEffect } from 'react';
import './index.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import XizmatKorsatish from './components/XizmatKorsatish';
import Yozilish from './components/Yozilish';

const App = () => {
  useEffect(() => {
    const starCount = 400;
    const maxTime = 30;
    const animationContainer = document.getElementById('animation-container');
    const width = window.innerWidth * 0.8; // Adjust width to 80% of the viewport
    const height = window.innerHeight;

    for (let i = 0; i < starCount; ++i) {
      const ypos = Math.round(Math.random() * height);
      const star = document.createElement('div');
      const speed = 1000 * (Math.random() * maxTime + 1);
      star.className = `star${3 - Math.floor(speed / 1000 / 8)}`;
      star.style.backgroundColor = 'white';
      star.style.position = 'absolute';
      star.style.top = `${ypos}px`;

      animationContainer.appendChild(star);
      star.animate(
        [
          { transform: `translate3d(${width}px, ${ypos}px, 0)` },
          { transform: `translate3d(-${Math.random() * 256}px, ${ypos}px, 0)` }
        ],
        {
          delay: Math.random() * -speed,
          duration: speed,
          iterations: Infinity,
        }
      );
    }
  }, []);

  return (
    <div>
      {/* Background star animation */}
      <div
        id="animation-container"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%', // Covers the entire width of the body
          height: '100%', // Covers the entire height of the body
          zIndex: -1, // Keeps it behind all content
          overflow: 'hidden',
        }}
      />

      {/* Main content */}
      <div className="flex flex-col items-center container mx-auto">
        <Navbar />
        <Header />
        <About />
        <XizmatKorsatish />
        <Skills />
        <Projects />
        <Yozilish />
        <Footer />
      </div>
    </div>
  );
};

export default App;
