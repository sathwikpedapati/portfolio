import React from 'react';
import { FaMapMarkerAlt, FaDownload } from 'react-icons/fa';

const About = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <section
      style={{
        ...styles.section,
        backgroundColor: 'transparent',
        color: isDark ? '#fff' : '#333',
      }}
      id="about"
    >
      <div style={styles.container}>
        <div style={styles.imageContainer}>
          <img
            src="/raju.jpg"
            alt="Sathwik Pedapati"
            style={styles.image}
          />
        </div>
        <div style={styles.textContainer}>
          <h2 style={{ ...styles.heading, color: 'rgb(47, 79, 79)' }}>
            About Me
          </h2>
          <p style={styles.paragraph}>
            👋 Hii! I’m <strong>Sathwik Pedapati</strong>, a full stack developer passionate about building creative and impactful web applications.
            I love transforming ideas into interactive and meaningful digital experiences 🚀.
          </p>
          <p style={styles.paragraph}>
            I'm currently open to opportunities where I can contribute, grow, and make an impact whether it's freelance, internships, or full-time roles.
            Let’s connect and build something amazing together!
          </p>
          <div style={styles.contactRow}>
            <p style={styles.info}>
              <FaMapMarkerAlt style={styles.icon} />
              Chodavaram, Anakapalle
            </p>
            <a
              href="https://drive.google.com/file/d/1BI3MUQT2b6SbtGGFIfoXYKxpuph4Q6Rd/view"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.resumeBtn}
            >
              <FaDownload style={{ marginRight: '0.5rem' }} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '2rem 1rem',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    maxWidth: '1200px',
    margin: '0 auto',
    gap: '1.5rem',
    flexWrap: 'wrap',
  },
  imageContainer: {
    flex: 1,
    minWidth: '250px',
    maxWidth: '300px',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '12px',
  },
  textContainer: {
    flex: 2,
    minWidth: '280px',
    display: 'flex',
    flexDirection: 'column',
  },
  heading: {
    fontSize: '1.8rem',
    marginBottom: '1rem',
  },
  paragraph: {
    fontSize: '1rem',
    lineHeight: '1.6',
    marginBottom: '0.8rem',
    textAlign: 'justify',
  },
  contactRow: {
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'flex-start',
    gap: '0.5rem',
    marginTop: '0.8rem',
  },
  info: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1rem',
    whiteSpace: 'nowrap',
  },
  icon: {
    marginRight: '0.5rem',
    color: 'rgb(47, 79, 79)',
  },
  resumeBtn: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem 0',
    color: 'rgb(47, 79, 79)',
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: '500',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    transition: 'color 0.3s ease',
  },
};

export default About;
