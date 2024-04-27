import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import diabetes from "../../Assets/Projects/diabetes.jpg";
import breast_cancer from "../../Assets/Projects/breast_cancer_project.jpeg";

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
                description="The project showcases a systematic approach to developing predictive models in biomedicine, specifically targeting the estimation of metastasis probability in cancer patients. Through data cleaning, statistical analysis, and model refinement techniques, the project demonstrates the potential for enhancing cancer prognosis and treatment efficacy. However, it also highlights the challenges associated with model validation and performance evaluation in biomedical contexts. Overall, the project contributes to the ongoing efforts to leverage predictive modeling for improving patient outcomes in oncology."
                ghLink="https://github.com/AlexSilvaa9/BreastCancerPrediction"
                // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
              />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
