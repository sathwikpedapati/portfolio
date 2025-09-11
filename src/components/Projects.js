import React from 'react';
import { Card, Button, Row, Col, Tag } from 'antd';
import { GithubOutlined, PlayCircleOutlined } from '@ant-design/icons';

const projectData = [
  {
    title: 'Address Book📒',
    description: 'A full-stack address management app with user authentication, CRUD operations, and responsive UI using Bootstrap.',
    stack: ['HTML', 'CSS', 'Bootstrap', 'EJS', 'Node.js', 'MongoDB', 'Passport.js'],
    live: 'https://address-book-mv3s.onrender.com/alladdress',
    github: 'https://github.com/sathwikpedapati/Address-Book',
    image: '/address.jpeg',
  },
  {
    title: 'Recipe Box 🍰',
    description: 'A full-stack recipe-sharing platform allowing users to explore, upload, and manage recipes. Built with JWT auth, Cloudinary, and responsive UI.',
    stack: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Cloudinary'],
    live: 'https://recipe-heaven-five.vercel.app/',
    github: 'https://github.com/sathwikpedapati/Recipe-Heaven',
    image: '/recipe.png',
  },
  {
    title: 'News Today 📰',
    description: 'A full-stack news aggregator offering real-time categorized news with theme toggle, profile features, and Cloudinary image integration.',
    stack: ['ReactJS', 'Node.js', 'Express.js', 'MongoDB', 'Ant Design', 'Cloudinary'],
    live: 'https://news-six-smoky.vercel.app/login',
    github: 'https://github.com/sathwikpedapati/News',
    image: '/News.webp',
  },
  {
    title: 'Money Track 💰',
    description: 'A full-stack personal finance tracker with authentication, transaction history, and visualized analytics to manage expenses effectively.',
    stack: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Passport.js', 'Ant Design'],
    live: 'https://budget-buddy-ashen.vercel.app/login',
    github: 'https://github.com/sathwikpedapati/Budget-Buddy',
    image: '/expense.webp',
  },
  {
    title: 'TalkEasy🌐',
    description: 'A full-stack real-time chat app using Socket.IO for live messaging, JWT-based authentication, and a clean UI with image sharing.',
    stack: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Socket.io', 'Cloudinary', 'Tailwind CSS'],
    live: 'https://talk-easy-zjl5.vercel.app/login',
    github: 'https://github.com/sathwikpedapati/Talk-Easy',
    image: '/chat.jpg',
  },
];

const Projects = ({ theme }) => {
  const isDark = theme === 'dark';

  const textColor = isDark ? '#fff' : '#333';
  const cardBg = isDark ? '#1f1f1f' : '#ffffff';

  return (
    <div style={{ padding: '2rem' }}>
      <h2
        style={{
          textAlign: 'center',
          marginBottom: '2rem',
          color: 'rgb(47, 79, 79)',
          fontSize: '1.8rem',
        }}
      >
        🌍 Personal Projects
      </h2>
      <Row gutter={[24, 24]}>
        {projectData.map((project, index) => (
          <Col xs={24} sm={24} md={12} lg={8} key={index}>
            <Card
              hoverable
              cover={
                <img
                  alt={project.title}
                  src={project.image}
                  style={{
                    height: 200,
                    objectFit: 'cover',
                    borderRadius: '8px 8px 0 0',
                  }}
                />
              }
              style={{
                backgroundColor: cardBg,
                color: textColor,
                borderRadius: '12px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                minHeight: 480,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Card.Meta
                title={<span style={{ color: textColor }}>{project.title}</span>}
                description={
                  <div style={{ color: textColor }}>
                    <p style={{ marginTop: '10px' }}>{project.description}</p>
                    <div style={{ marginTop: '10px' }}>
                      <strong>Tech Stack:</strong>
                      <div style={{ marginTop: '8px', display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                        {project.stack.map((tech, i) => (
                          <Tag key={i} color={isDark ? 'geekblue' : 'blue'}>
                            {tech}
                          </Tag>
                        ))}
                      </div>
                    </div>
                    <div style={{ marginTop: '1rem', display: 'flex', gap: '8px' }}>
                      <Button
                        type="primary"
                        href={project.live}
                        target="_blank"
                        icon={<PlayCircleOutlined />}
                        style={{ textDecoration: 'none' }}
                      >
                        Live Demo
                      </Button>
                      <Button
                        type="default"
                        href={project.github}
                        target="_blank"
                        icon={<GithubOutlined />}
                        style={{ textDecoration: 'none' }}
                      >
                        GitHub
                      </Button>
                    </div>
                  </div>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Projects;
