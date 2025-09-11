import React from 'react';

const Footer = ({ theme }) => {
  const isDark = theme === 'dark';

  const footerStyle = {
    backgroundColor: isDark ? '#111' : 'rgb(47, 79, 79)',
    color: '#fff',
    padding: '0.5rem',
    textAlign: 'center',
    marginTop: 'auto',
    fontSize: '0.9rem',
  };

  return (
    <footer style={footerStyle}>
      <p>Thank you for visiting! &copy; {new Date().getFullYear()} Developed by Sathwik Pedapati</p>
    </footer>
  );
};

export default Footer;
