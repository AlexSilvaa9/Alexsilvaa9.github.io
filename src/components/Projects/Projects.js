import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import diabetes from "../../Assets/Projects/diabetes.jpg";
import breast_cancer from "../../Assets/Projects/breast_cancer_project.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diabetes}
              
              isBlog={false}
              title="Diabetes Prediction"
              description="Welcome to the Intelligent Systems Diabetes Prediction Project! This project serves as the culmination of the first course in Intelligent Systems, aimed at leveraging machine learning techniques to predict whether a patient has diabetes. The primary focus lies in developing various classifiers utilizing the scikit-learn framework."
              ghLink="https://github.com/AlexSilvaa9/Diabetes_prediction_scikitlearn"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={breast_cancer}
                
                isBlog={false}
                title="Breast Cancer Analisys and Prediction"
                description="The project showcases analisys and development of various machine learning algorithms for predicting survival rates in breast cancer. It includes the deployment of the best model on a web app"
                ghLink="https://github.com/AlexSilvaa9/BreasCancerSurvivalPrediction"
                demoLink="https://alexsilvaa9.github.io/BreasCancerSurvivalPrediction/" 
              />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
