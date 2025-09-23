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
                <b className="purple"> Software Developer </b>
              </i>
              with a strong foundation in backend and frontend technologies,
              specialized in cloud architectures and data-driven applications.
              <br />
              <br />
              I have hands-on experience designing, developing, testing, and
              deploying
              <i>
                <b className="purple"> full stack solutions </b>
              </i>
              using <b className="purple">Java Spring Boot</b> and{" "}
              <b className="purple">Angular</b>, while ensuring clean,
              maintainable, and scalable code.
              <br />
              <br />
              Skilled in <b className="purple">Python</b>, with experience
              integrating <b className="purple">machine learning</b> into
              intelligent software products.
              <br />
              <br />
              I am also an
              <i>
                <b className="purple">
                  {" "}
                  AWS Certified Solutions Architect – Associate{" "}
                </b>
              </i>
              with practical knowledge in CI/CD pipelines, containerization (
              <b className="purple">Docker</b>), and modern DevOps practices.
              <br />
              <br />
              I enjoy building innovative, reliable, and impactful solutions,
              always seeking new
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
