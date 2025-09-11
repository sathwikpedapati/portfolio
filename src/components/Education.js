import React from 'react';

const Education = ({ theme }) => {
  const isDark = theme === 'dark';

  const textColor = isDark ? '#fff' : '#333';
  const cardBg = isDark ? '#1f1f1f' : '#f0f0f0';

  const educationData = [
    {
      institution: 'GMR Institute of Technology',
      duration: '2022 – Present',
      degree: 'B.Tech in Computer Science and Engineering',
      location: 'Rajam, India',
      details: 'Currently pursuing 4th year, CGPA: 8.83/10.0',
    },
    {
      institution: 'Sri Chaitanya Junior College',
      duration: '2020 – 2022',
      degree: 'Intermediate Education (MPC)',
      location: 'Anakapalle, India',
      details: 'Score: 91.9%',
    },
    {
      institution: 'Sri Chaitanya Techno School',
      duration: '2019 – 2020',
      degree: 'Secondary School Certificate (SSC)',
      location: 'Anakapalle, India',
      details: 'Score: 96%',
    },
  ];

  return (
    <section
      id="education"
      style={{
        padding: '2rem 1rem',
        color: textColor,
        backgroundColor: 'transparent',
      }}
    >
      <h2
        style={{
          fontSize: '1.8rem',
          marginBottom: '1.5rem',
          color: 'rgb(47, 79, 79)',
          textAlign: 'center',
        }}
      >
        Education
      </h2>

      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {educationData.map((edu, index) => (
          <div
            key={index}
            style={{
              backgroundColor: cardBg,
              padding: '1.2rem',
              borderRadius: '10px',
              marginBottom: '1.2rem',
              boxShadow: isDark
                ? '0 2px 8px rgba(255, 255, 255, 0.05)'
                : '0 2px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
              }}
            >
              <h3 style={{ margin: 0, fontWeight: 'normal' }}>{edu.institution}</h3>
              <span style={{ fontWeight: 'normal' }}>{edu.duration}</span>
            </div>
            <p style={{ margin: '0.3rem 0' }}>
              {edu.degree}, {edu.location}
            </p>
            <p style={{ margin: 0 }}>{edu.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
