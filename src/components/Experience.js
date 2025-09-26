import React from 'react';

const Experience = ({ theme }) => {
  const isDark = theme === 'dark';

  const textColor = isDark ? '#fff' : '#333';
  const cardBg = isDark ? '#1f1f1f' : '#f0f0f0';

  const experienceData = [
    {
      role: 'Volunteer Teacher - APSRWS Tribal Welfare School',
      duration: 'June 2024',
      location: 'Markivalasa, Visakhapatnam, India',
      points: [
        'Delivered STEM sessions using digital tools in underserved classrooms.',
        'Increased student engagement by organizing interactive learning events.',
        'Mentored students in basic computer literacy and problem-solving skills.',
        'Collaborated with local educators to design engaging teaching modules.',
        'Helped bridge the digital divide by introducing students to technology-driven learning.',
      ],
    },
  ];

  return (
    <section
      id="experience"
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
        Experience
      </h2>

      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {experienceData.map((exp, index) => (
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
              <h3 style={{ margin: 0 }}>{exp.role}</h3>
              <span style={{ fontStyle: 'italic' }}>{exp.duration}</span>
            </div>
            {exp.location && (
              <p style={{ margin: '0.3rem 0', fontStyle: 'italic' }}>
                {exp.location}
              </p>
            )}
            <ul style={{ margin: '0.5rem 0 0 1rem' }}>
              {exp.points.map((point, idx) => (
                <li key={idx} style={{ marginBottom: '0.3rem' }}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
