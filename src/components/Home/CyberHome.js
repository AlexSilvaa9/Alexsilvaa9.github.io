import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { 
  AiOutlineDownload, 
  AiOutlineGithub, 
  AiOutlineLinkedin,
  AiOutlineArrowDown 
} from "react-icons/ai";

function CyberHome() {
  const [textIndex, setTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const roles = [
    "Software Engineer",
    "AWS Solutions Architect", 
    "Security Enthusiast",
    "AI Engineer",
    "Full Stack Developer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setTextIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="cyber-home">
      <Particle />
      
      {/* Hero Section */}
      <Container fluid className="hero-section">
        <div className="hero-grid">
          
          {/* Main Content */}
          <div className="hero-main">
            <div className="glitch-container">
              <h1 className="hero-title glitch" data-text="ALEX SILVA">
                ALEX SILVA
              </h1>
            </div>
            
            <div className="role-container">
              <span className="role-prefix">{'>'} </span>
              <span className={`role-text ${isTyping ? 'typing' : 'deleting'}`}>
                {roles[textIndex]}
              </span>
              <span className="cursor">|</span>
            </div>

            <p className="hero-description">
              Crafting innovative solutions at the intersection of 
              <span className="highlight"> cloud architecture</span>,
              <span className="highlight"> artificial intelligence</span>, and
              <span className="highlight"> cybersecurity</span>.
              <br />
              Based in Madrid, building the future one line of code at a time.
            </p>

            <div className="hero-actions">
              <a href="/resume" className="cyber-btn primary">
                <AiOutlineDownload />
                <span>Download CV</span>
                <div className="btn-glow"></div>
              </a>
              
              <a href="/contact" className="cyber-btn secondary">
                <span>Get In Touch</span>
                <div className="btn-glow"></div>
              </a>
            </div>

            <div className="social-cyber">
              <a href="https://github.com/AlexSilvaa9" className="social-link">
                <AiOutlineGithub />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/alejandro-silva-rodríguez-133293257" className="social-link">
                <AiOutlineLinkedin />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Floating Cards */}
          <div className="floating-cards">
            <div className="stat-card" style={{"--delay": "0s"}}>
              <div className="stat-number">4+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            
            <div className="stat-card" style={{"--delay": "0.2s"}}>
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            
            <div className="stat-card" style={{"--delay": "0.4s"}}>
              <div className="stat-number">AWS</div>
              <div className="stat-label">Certified Architect</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <AiOutlineArrowDown />
          <span>Scroll to explore</span>
        </div>
      </Container>

      {/* Tech Stack Showcase */}
      <Container fluid className="tech-showcase">
        <div className="tech-orbit">
          <div className="tech-center">
            <span>TECH</span>
            <span>STACK</span>
          </div>
          
          <div className="orbit orbit-1">
            <div className="tech-node">Java</div>
            <div className="tech-node">Python</div>
            <div className="tech-node">React</div>
          </div>
          
          <div className="orbit orbit-2">
            <div className="tech-node">AWS</div>
            <div className="tech-node">Docker</div>
            <div className="tech-node">Node.js</div>
          </div>
          
          <div className="orbit orbit-3">
            <div className="tech-node">MongoDB</div>
            <div className="tech-node">MySQL</div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CyberHome;
