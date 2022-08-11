import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiReact,
  DiNodejs,
} from "react-icons/di";
import { 
  SiExpress,
  SiAngular,
} from "react-icons/si";

function Skills() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={5} md={3} lg={2} align="center">
        <div className="tech-icons">
          <DiNodejs />
        </div>
      </Col>
      <Col xs={5} md={3} lg={2} align="center">
        <div className="tech-icons">
          <DiReact />
        </div>
      </Col>
      <Col xs={5} md={3} lg={2} align="center">
        <div className="tech-icons">
          <SiExpress />
        </div>
      </Col>
      <Col xs={5} md={3} lg={2} align="center">
        <div className="tech-icons">
          <SiAngular />
        </div>
      </Col>
    </Row>
  );
}

export default Skills;
