import React from 'react';
import { Card, Typography } from 'antd';

const { Title } = Typography;

const Interests = ({ theme }) => {
  const isDark = theme === 'dark';
  const textColor = isDark ? '#fff' : '#333';
  const cardBg = isDark ? '#1f1f1f' : '#f0f0f0';
  const boxShadow = isDark
    ? '0 2px 8px rgba(255, 255, 255, 0.05)'
    : '0 2px 10px rgba(0,0,0,0.1)';

  const listStyle = {
    color: textColor,
    paddingLeft: '1.2rem',
    margin: 0,
  };

  return (
    <div style={{ padding: '2rem', background: 'transparent', color: textColor }}>
      <Title
        level={2}
        style={{
          textAlign: 'center',
          color: 'rgb(47, 79, 79)',
        }}
      >
        Languages & Interests
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
          title="Languages"
          bordered={false}
          style={{
            borderRadius: '12px',
            backgroundColor: cardBg,
            boxShadow,
            color: textColor,
          }}
          headStyle={{ color: textColor, backgroundColor: cardBg, borderBottom: 0 }}
        >
          <ul style={listStyle}>
            <li><strong>Telugu</strong> (Native)</li>
            <li><strong>English</strong></li>
          </ul>
        </Card>

        <Card
          title="Interests"
          bordered={false}
          style={{
            borderRadius: '12px',
            backgroundColor: cardBg,
            boxShadow,
            color: textColor,
          }}
          headStyle={{ color: textColor, backgroundColor: cardBg, borderBottom: 0 }}
        >
          <ul style={listStyle}>
            <li>Learning New Technologies</li>
            <li>Open Source</li>
            <li>Listening to Music</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default Interests;
