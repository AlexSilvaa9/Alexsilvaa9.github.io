import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import DataWarehouseDashboard from "../../Assets/Projects/DataWarehouseDashboard.png";
import GymDiary from "../../Assets/Projects/GymDiary.png";
import TFG from "../../Assets/Projects/TFG.png";
import AWS from "../../Assets/Projects/aws.jpg";
import Kubernetes from "../../Assets/Projects/kubernetes.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Projects focused on cloud architecture, DevOps automation, and scalable backend systems.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }} className="g-4">
          <Col md={4} className="project-card d-flex">
          <ProjectCard
            imgPath={AWS} 
            isBlog={false}
            title="Scalable Cloud Architecture on AWS"
            description="Designed and implemented a secure three-tier architecture on AWS using VPC, Auto Scaling on EC2, and managed data services on RDS. Built serverless workflows with Lambda and S3 for event-driven processing and automation. Configured CloudFront distribution and shared storage patterns for high availability, performance, and operational resilience."
            // ghLink="" <--------You can add this later if you publish it on GitHub
            // demoLink="" <--------You can add this later if you deploy one
          />
        </Col>

        <Col md={4} className="project-card d-flex">
            <ProjectCard
              imgPath={Kubernetes}
              isBlog={false}
              title="Microservices Platform with Spring Cloud on Kubernetes"
              description="Built a cloud-native microservices platform with Spring Boot and Spring Cloud, deployed on Kubernetes (Minikube). Implemented centralized authentication, service discovery, externalized configuration, and load-balanced communication between services. Automated deployment workflows and integration testing to improve reliability and delivery speed in containerized environments."
              ghLink="https://github.com/AlexSilvaa9/modern-microservices-platform"
            />
          </Col>

        <Col md={4} className="project-card d-flex">
            <ProjectCard
              imgPath={TFG}
              
              isBlog={false}
              title="Optimizing Small Language Models for ClinicalSummarization"
              description="Explored the use of Small Language Models for clinical note summarization, applying advanced prompting and a multi-question RAG architecture. Fine-tuned LLaMA 3.2 and validated performance with expert feedback. Integrated the optimized model into a functional web app for interactive summary generation."
              ghLink="https://github.com/AlexSilvaa9/ehr-summarization-rag-distillation"
              // demoLink="" <--------Please include a demo link here
            />
          </Col>
          <Col md={4} className="project-card d-flex">
            <ProjectCard
              imgPath={DataWarehouseDashboard}
              
              isBlog={false}
              title="Data Warehouse for Hospital Medication Expenses"
              description="A data warehouse designed to analyze medication expenses in Intensive Care Units (ICUs) across hospitals in the U.S. The project includes an ETL process for structuring clinical data, a multidimensional cube for advanced analysis, and interactive Power BI reports. It enables the identification of consumption patterns and optimization of hospital resource management."
              ghLink="https://github.com/AlexSilvaa9/HealthcareDataWarehouse"
              // demoLink="" <--------Please include a demo link here
            />
          </Col>
          <Col md={4} className="project-card d-flex">
            <ProjectCard
                imgPath={GymDiary}
                
                isBlog={false}
                title="GymDiary"
                description="A web app designed for tracking workouts and nutrition, offering features like meal logging, exercise tracking, and progress monitoring. It includes a dark/light mode switch and is optimized for both desktop and mobile use. Built with React.js for the frontend and Node.js with Express.js for the backend, it’s deployed on Vercel and GitHub Pages."
                ghLink="https://github.com/AlexSilvaa9/GymDiaryFrontReact"
                demoLink="https://alexsilvaa9.github.io/GymDiaryFrontReact" 
              />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
