import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.webp";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a passionate
              <i>
                <b className="purple"> Java Full Stack Developer </b>
              </i>
              focused on <b className="purple">DevSecOps architecture</b>,
              cloud-native delivery, and scalable enterprise platforms.
              <br />
              <br />
              I am currently part of the architecture team at
              <b className="purple"> Accenture Madrid</b>, contributing to an
              internal framework that standardizes and accelerates software
              delivery with Spring Boot and Angular.
              <br />
              <br />
              I have hands-on experience designing, developing, securing, and
              deploying
              <i>
                <b className="purple"> enterprise-grade APIs and platforms </b>
              </i>
              using <b className="purple">Java 17, Spring Boot</b>, and{" "}
              <b className="purple">Angular</b>, while applying clean code,
              testing, and secure development practices.
              <br />
              <br />
              Strongly oriented to <b className="purple">CI/CD automation</b>,
              reusable modules, and platform engineering with Kubernetes,
              Vault, and infrastructure as code principles.
              <br />
              <br />
              I am also an
              <i>
                <b className="purple">
                  {" "}
                  AWS Certified Solutions Architect – Associate{" "}
                </b>
              </i>
              with practical knowledge in
              <b className="purple"> AWS, Docker, Kubernetes</b>, and secure
              software architecture.
              <br />
              <br />
              I enjoy building reliable platforms that help teams deliver
              faster, safer, and with higher quality.
              Always seeking new
              <i>
                <b className="purple"> challenges </b>
              </i>
              and opportunities to grow.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AlexSilvaa9"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/alejandro-silva-rodríguez-133293257"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
