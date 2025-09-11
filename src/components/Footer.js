import React from 'react';

const Footer = ({ theme }) => {
  const isDark = theme === 'dark';

  const footerStyle = {
    backgroundColor: isDark ? '#111' : 'rgb(47, 79, 79)',
    color: '#fff',
    padding: '0.2rem',
    textAlign: 'center',
    marginTop: 'auto',
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()}Developed by Sathwik Pedapati</p>
    </footer>
  );
};

export default Footer;
