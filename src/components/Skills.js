import React from 'react';
import { Typography, Progress, Card } from 'antd';

const { Title } = Typography;

const allSkills = [
  { name: 'C', color: '#eb2f96', level: 75 },
  { name: 'Java', color: '#fa8c16', level: 70 },
  { name: 'Python', color: '#13c2c2', level: 80 },
  { name: 'SQL', color: '#722ed1', level: 85 },
  { name: 'JavaScript', color: '#faad14', level: 90 },
  { name: 'HTML', color: '#fa541c', level: 95 },
  { name: 'CSS', color: '#2f54eb', level: 90 },
  { name: 'Bootstrap', color: '#13c2c2', level: 85 },
  { name: 'React.js', color: '#1890ff', level: 88 },
  { name: 'Next.js', color: '#000000', level: 75 },
  { name: 'Node.js', color: '#52c41a', level: 80 },
  { name: 'Express.js', color: '#a0d911', level: 78 },
  { name: 'MongoDB', color: '#389e0d', level: 82 },
  { name: 'MySQL', color: '#1890ff', level: 85 },
  { name: 'Git', color: '#fa541c', level: 90 },
  { name: 'GitHub', color: '#722ed1', level: 90 },
];

const Skills = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <div style={{ padding: '2rem' }}>
      <Title
        level={2}
        style={{
          textAlign: 'center',
          color: 'rgb(47, 79, 79)',
        }}
      >
        Technical Skills
      </Title>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '16px',
          marginTop: '2rem',
        }}
      >
        {allSkills.map(({ name, level, color }) => (
          <Card
            key={name}
            style={{
              borderRadius: '12px',
              backgroundColor: isDark ? '#1f1f1f' : '#fff',
              color: isDark ? '#fff' : '#000',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p style={{ fontWeight: 600, marginBottom: 8 }}>{name}</p>
              <p style={{ marginBottom: 8 }}>{level}%</p>
            </div>
            <Progress
              percent={level}
              strokeColor={color} 
              showInfo={false} 
              size="small"
            />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Skills;
