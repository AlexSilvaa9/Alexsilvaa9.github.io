import React from "react";
import { Col, Row } from "react-bootstrap";
import  cSharpImage  from "../../Assets/TechCards/c-sharp.png";
import {

  DiGit,
  DiJava,
  DiMysql,
  DiDocker,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {

  SiOracle,
  SiR,
  SiPython,
  SiMongodb,
  SiCsharp,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
  <a
    href="https://www.credly.com/badges/b6dcb244-7151-4347-8023-66aa5fa7eae0/public_url"
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: "none" }}
  >
    <img
      src={require("../../Assets/aws-certified-cloud-practitioner.png")}
      alt="AWS Cloud Practitioner Badge"
      style={{
        width: "100%",
        maxWidth: "100px",
        height: "auto",
        borderRadius: "10px",
      }}
    />
  </a>
</Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOracle />
      </Col>
      {/* Asegúrate de importar o definir los siguientes íconos */}
      {/* Por ejemplo, si no tienes definido "Matlab" y "C#", debes importarlos */}


      {/* <Col xs={4} md={2} className="tech-icons">
        {/* Aquí deberías usar un ícono de Matlab */}
      {/* </Col>  */}


      {/* {<Col xs={4} md={2} className="tech-icons">
      <img src={cSharpImage} alt="C#" style={{ maxWidth: "100%", height: "auto" }} /> {/* Aplica estilos para ajustar el tamaño */}
      {/* </Col>} */}

      <Col xs={4} md={2} className="tech-icons">
        <SiR />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        {/* Aquí deberías usar un ícono de Bash */}
      {/* </Col> */} 
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3/>
      </Col>
      
    </Row>
    
  );
}

export default Techstack;
