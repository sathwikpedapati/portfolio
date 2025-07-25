import React from 'react';
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaCode,
  FaTwitter,
} from 'react-icons/fa';

const Contact = ({ theme }) => {
  const isDark = theme === 'dark';

  const cardBg = isDark ? '#1f1f1f' : '#f0f0f0';
  const textColor = isDark ? '#fff' : '#333';
  const boxShadow = isDark
    ? '0 2px 8px rgba(255, 255, 255, 0.05)'
    : '0 2px 10px rgba(0,0,0,0.1)';

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      text: 'Gmail',
      link: 'mailto:pedapatisathwik@gmail.com',
    },
    {
      icon: <FaGithub />,
      text: 'GitHub',
      link: 'https://github.com/sathwikpedapati',
    },
    {
      icon: <FaLinkedin />,
      text: 'Linked In',
      link: 'https://www.linkedin.com/in/sathwik-pedapati/',
    },
    {
      icon: <FaCode />,
      text: 'CodeChef',
      link: 'https://www.codechef.com/users/sathwi_02',
    },
    {
      icon: <FaTwitter />,
      text: 'Twitter',
      link: 'https://x.com/PedapatiSathwik',
    },
    {
      icon: <FaPhone />,
      text: '8143833945',
      link: 'tel:8143833945',
    },
  ];

  return (
    <section
      id="contact"
      style={{
        padding: '2rem',
        background: 'transparent',
        color: textColor,
      }}
    >
      <h2
        style={{
          fontSize: '1.8rem',
          marginBottom: '1.5rem',
          color: 'rgb(99, 138, 90)',
          textAlign: 'center',
        }}
      >
       <i class="fa-solid fa-hashtag"></i> Get in Touch
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem',
        }}
      >
        {contactInfo.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: cardBg,
              borderRadius: '12px',
              padding: '1rem 1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              boxShadow,
              transition: 'transform 0.3s',
              wordBreak: 'break-word',
            }}
          >
            <span style={{ fontSize: '1.5rem', color: 'rgb(99, 138, 90)' }}>
              {item.icon}
            </span>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                color: textColor,
                fontWeight: '500',
                fontSize: '1rem',
                overflowWrap: 'anywhere',
              }}
            >
              {item.text}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
