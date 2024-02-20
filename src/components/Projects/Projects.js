import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import toursim from "../../Assets/Projects/tourism.png";
import todos from "../../Assets/Projects/todos.png";
import foodmuch from "../../Assets/Projects/foodmuch.png";
import emoji from "../../Assets/Projects/emoji.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've bulit recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emoji}
              isBlog={false}
              title="Emoji Game"
              description="Designed a fun, challenging memory game with randomized emoji clicks."
              ghLink=""
              demoLink="https://arunapp.ccbp.tech/)"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todos}
              isBlog={false}
              title="Todos Application"
              description=" Developed persistent todo application with CRUD operations to the tracklist of tasks"
              ghLink="https://github.com/arun19122/todos-app"
              demoLink="https://aatodosapp.ccbp.tech/)"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodmuch}
              isBlog={false}
              title="Food Much"
              description="Developed a responsive website for Food Store where users can see a list of food items, detailed information
              about a food item, offers."
              ghLink=""
              demoLink="https://aa1foodmuch.ccbp.tech/)"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={toursim}
              isBlog={false}
              title="Tourism Website"
              description="Developed tourism website where users can browse through the content, videos and images of popular
              destinations."
              ghLink=""
              demoLink="https://aatourism.ccbp.tech/)"              
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
