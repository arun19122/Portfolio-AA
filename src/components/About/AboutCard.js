import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anga Arun Kumar </span>
            from <span className="purple"> Andhra Pradesh, India.</span>
            <br />
            I am currently an aspiring Front-end developer learned skills from <span className="purple">CCBP Intesive 4.0 Tech Program</span>.
            <br />
            I have completed Bachelors of Technology in EEE from Gonna Institute of Information and Technology Sciences.
            <br />
            I have two years of experience as ITES Executive in<span className="purple">iMerit Technologies</span>.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Gardening
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Arun Anga</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
