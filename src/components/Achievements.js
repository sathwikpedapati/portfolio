import React from 'react';
import { Card, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const Achievements = ({ theme }) => {
  const isDark = theme === 'dark';

  const cardBg = isDark ? '#1f1f1f' : '#f0f0f0';
  const textColor = isDark ? '#fff' : '#333';
  const boxShadow = isDark
    ? '0 2px 8px rgba(255, 255, 255, 0.05)'
    : '0 2px 10px rgba(0,0,0,0.1)';

  return (
    <div style={{ padding: '2rem', background: 'transparent', color: textColor }}>
      <Title level={2} style={{ textAlign: 'center', color: 'rgb(99, 138, 90)' }}>
        Professional Highlights
      </Title>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          marginTop: '2rem',
        }}
      >
        <Card
          title="Publication"
          bordered={false}
          style={{
            backgroundColor: cardBg,
            borderRadius: '12px',
            boxShadow,
            color: textColor,
          }}
          headStyle={{ color: textColor, backgroundColor: cardBg, borderBottom: 0 }}
        >
          <Title level={4} style={{ color: textColor }}>
            Online Programming Assessment Platform
          </Title>
          <Paragraph style={{ color: textColor }}>
            <strong>Published:</strong> Apr 2025, IJRPR
          </Paragraph>
          <Paragraph style={{ color: textColor }}>
            Developed a Django-React platform for secure, real-time code execution with
            test case validation and user performance tracking.
          </Paragraph>
        </Card>

        <Card
          title=" Achievements"
          bordered={false}
          style={{
            backgroundColor: cardBg,
            borderRadius: '12px',
            boxShadow,
            color: textColor,
          }}
          headStyle={{ color: textColor, backgroundColor: cardBg, borderBottom: 0 }}
        >
          <Paragraph style={{ color: textColor }}>
            <strong>•</strong> CodeChef <strong>Gold Badge</strong> – Solved 500+ problems.
          </Paragraph>
          <Paragraph style={{ color: textColor }}>
            <strong>•</strong> Completed <strong>10+ freelance web apps</strong> in production.
          </Paragraph>
        </Card>

        {/* Certifications Card */}
        <Card
          title=" Certifications"
          bordered={false}
          style={{
            backgroundColor: cardBg,
            borderRadius: '12px',
            boxShadow,
            color: textColor,
          }}
          headStyle={{ color: textColor, backgroundColor: cardBg, borderBottom: 0 }}
        >
          <Paragraph style={{ color: textColor }}>
            <strong>•</strong> Full-Stack Web Development – Apna College
          </Paragraph>
        </Card>
      </div>
    </div>
  );
};

export default Achievements;
