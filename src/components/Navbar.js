import React, { useState } from 'react';
import './Navbar.css';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Achievements from './Achievements';
import Interests from './Intersets';
import Contact from './Contact';

const Navbar = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const isDark = theme === 'dark';

  const appStyle = {
    minHeight: '100vh',
    backgroundColor: isDark ? '#000' : '#fff',
    color: isDark ? '#fff' : '#000',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  };

  const navbarStyle = {
    backgroundColor: 'rgb(47, 79, 79)',
    height: '60px',
    color: '#fff',
  };

  return (
    <div style={appStyle}>
      <nav
        className="navbar d-flex justify-content-between align-items-center px-3"
        style={navbarStyle}
      >
<span className="navbar-brand mb-0 h1">
  <strong style={{ color: '#fff' }}>S</strong>
  <span style={{ color: '#fff' }}>athwik's Space🌐</span>
</span>
        <button
          onClick={toggleTheme}
          style={{
            fontSize: '1.5rem',
            background: 'transparent',
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          <i className={`fa-solid ${isDark ? 'fa-moon' : 'fa-sun'}`}></i>
        </button>
      </nav>

      <div className="container mt-5">
        <About theme={theme} />

        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <Education theme={theme} />
          </div>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <Experience theme={theme} />
          </div>
        </div>

        <Projects theme={theme} />
        <Skills theme={theme} />
        <Achievements theme={theme} />
        <Interests theme={theme} />
        <Contact theme={theme} />
      </div>
    </div>
  );
};

export default Navbar;
