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
                <b className="purple">
                  {" "}
                  Data Scientist
                  {" "}          
                </b>
              </i>
              specialized in health with experience in data analysis, machine learning, and data visualization.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Python, R, Java and C#. </b>
              </i>
              <br />
              <br />
              My field of Interest's are &nbsp;
              <i>
                <b className="purple">AI (Large Language models)</b> and
                {" "}
                <b className="purple">
                  Data Science.
                </b>
              </i>
              <br />
              <br />
              I'm constantly learning and improving my skills in the field of data science, and I'm always looking for new              
              <i>
                <b className="purple">
                  {" "}
                  Challenges 
                  {" "}          
                </b>
              </i>
              and exciting opportunities.
              
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
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AlexSilvaa9"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
             
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/alejandro-silva-rodríguez-133293257"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
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
