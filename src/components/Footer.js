import React from 'react';

const Footer = ({ theme }) => {
  const isDark = theme === 'dark';

  const footerStyle = {
    backgroundColor: isDark ? '#111' : 'rgb(99, 138, 90)',
    color: '#fff',
    padding: '0.2rem',
    textAlign: 'center',
    marginTop: 'auto',
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} Designed & Developed by Sathwik Pedapati</p>
    </footer>
  );
};

export default Footer;
