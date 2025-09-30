import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { 
  FaCode, 
  FaAws, 
  FaReact, 
  FaJava, 
  FaPython,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";
import { 
  SiTypescript, 
  SiDocker, 
  SiKubernetes 
} from "react-icons/si";
import Particle from "../Particle";

function CyberHome() {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const texts = [
    "Software Engineer",
    "AWS Solutions Architect", 
    "Full Stack Developer",
    "Cloud Specialist"
  ];

  const skills = [
    { icon: <FaJava />, name: "Java", level: 90 },
    { icon: <FaPython />, name: "Python", level: 85 },
    { icon: <FaReact />, name: "React", level: 88 },
    { icon: <SiTypescript />, name: "TypeScript", level: 82 },
    { icon: <FaAws />, name: "AWS", level: 86 },
    { icon: <SiDocker />, name: "Docker", level: 80 },
    { icon: <SiKubernetes />, name: "Kubernetes", level: 75 }
  ];

  useEffect(() => {
    const currentText = texts[textIndex];
    
    if (isTyping) {
      if (charIndex < currentText.length) {
        const timeout = setTimeout(() => {
          setCharIndex(charIndex + 1);
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setCharIndex(charIndex - 1);
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setTextIndex((textIndex + 1) % texts.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, textIndex, texts]);

  return (
    <section className="cyber-home">
      <Particle />
      <Container fluid className="cyber-home-content">
        <Row className="h-100">
          {/* Main Content - Left Side */}
          <Col lg={8} className="main-content">
            <div className="hero-section">
              <div className="intro-badge">
                <span className="badge-text">👋 Hello, I'm</span>
              </div>
              
              <h1 className="hero-name">
                Alex Silva
              </h1>
              
              <div className="hero-title">
                <span className="title-prefix">I'm a </span>
                <span className="typing-text">
                  {texts[textIndex].substring(0, charIndex)}
                  <span className="cursor">|</span>
                </span>
              </div>
              
              <p className="hero-description">
                Passionate about building scalable software solutions and cloud architectures. 
                Currently working at <span className="highlight">Accenture</span> in Madrid, 
                creating innovative products that make a real impact.
              </p>
              
              <div className="hero-actions">
                <a href="/contact" className="cta-button primary">
                  <span>Get In Touch</span>
                  <div className="button-glow"></div>
                </a>
                <a href="/resume" className="cta-button secondary">
                  <span>View Resume</span>
                </a>
              </div>
              
              <div className="social-links">
                <a href="https://github.com/AlexSilvaa9" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/alejandro-silva-rodríguez-133293257" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </Col>
          
          {/* Skills Orbit - Right Side */}
          <Col lg={4} className="skills-section">
            <div className="skills-container">
              <h3 className="skills-title">Tech Arsenal</h3>
              <div className="skills-orbit">
                <div className="orbit-center">
                  <FaCode className="center-icon" />
                  <span className="center-text">Skills</span>
                </div>
                
                {skills.map((skill, index) => (
                  <div 
                    key={skill.name}
                    className={`skill-item orbit-${index + 1}`}
                    style={{
                      '--delay': `${index * 0.5}s`,
                      '--rotation': `${(360 / skills.length) * index}deg`
                    }}
                  >
                    <div className="skill-icon">
                      {skill.icon}
                    </div>
                    <div className="skill-tooltip">
                      <span className="skill-name">{skill.name}</span>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Projects Built</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2</span>
                <span className="stat-label">AWS Certifications</span>
              </div>
            </div>
          </Col>
        </Row>
        
        {/* Floating Elements */}
        <div className="floating-elements">
          <div className="float-element element-1">⚡</div>
          <div className="float-element element-2">🚀</div>
          <div className="float-element element-3">💻</div>
          <div className="float-element element-4">☁️</div>
        </div>
      </Container>
    </section>
  );
}

export default CyberHome;
