import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view h-100">
      <div className="image-container">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" className="card-img-top" />
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="mb-3">{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", flex: "1" }}>
          {props.description}
        </Card.Text>
        <div className="mt-auto">
          <div className="d-flex flex-wrap gap-2 justify-content-center">
            {props.ghLink && (
              <Button
                variant="primary"
                href={props.ghLink}
                target="_blank"
                className="btn-project"
              >
                <BsGithub /> &nbsp;
                {props.isBlog ? "Blog" : "GitHub"}
              </Button>
            )}
            {!props.isBlog && props.demoLink && (
              <Button
                variant="primary"
                href={props.demoLink}
                target="_blank"
                className="btn-project"
              >
                <CgWebsite /> &nbsp;
                Demo
              </Button>
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
