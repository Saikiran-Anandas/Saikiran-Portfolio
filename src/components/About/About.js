import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
import Card from "react-bootstrap/Card";
import Skills from "./Skills";
import Frameworks from "./Frameworks";
import Programming from "./Programming";
import VersionControl from "./VersionControl";
import Production from "./Production";
import DB from "./DB";
import OS from "./OS";
import aboutPhoto from "../../Assets/about.png";

function About() {
  return (
    <Container fluid className="about-section">
      {/* <Particle /> */}
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">ABOUT ME</strong>
            </h1>
            <Card className="quote-card-view">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p style={{ textAlign: "justify" }}>
                  Hi👋🏻 I am a MERN stack web developer, with skills HTML, CSS, JavaScript, React, Node.js and MongoDB. I like building web apps. I am keen to learn new things and explore. I am also a machine learning, AI and Crypto enthusiast.
                    <br />
                    <br />
                    I like Playing Chess, reading books, blogs and articles mostly related to tech, startups and business.
                  </p>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5} style={{ padding: "50px" }} className="about-img">
            <img src={aboutPhoto} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          <strong className="purple">SCRIPTING LANGUAGES</strong>
        </h1>

        <Skills />
        <h1 className="project-heading">
          <strong className="purple">FRAMEWORKS</strong>
        </h1>
        <Frameworks />
        <h1 className="project-heading">
          <strong className="purple">PROGRAMMING LANGUAGES</strong>
        </h1>
        <Programming />
        <h1 className="project-heading">
          <strong className="purple">DATA BASES</strong>
        </h1>
        <DB />
        <h1 className="project-heading">
          <strong className="purple">VERSION CONTROL</strong>
        </h1>
        <VersionControl />
        <h1 className="project-heading">
          <strong className="purple">OPERATING SYSTEMS</strong>
        </h1>
        <OS />
        <h1 className="project-heading">
          <strong className="purple">PRODUCTION TOOLS</strong>
        </h1>
        <Production />
      </Container>
    </Container>
  );
}

export default About;
