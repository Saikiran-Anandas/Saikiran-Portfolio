import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiPython,
} from "react-icons/di";
import { 
  SiC,
  SiTypescript,
  SiCplusplus,
  SiJava,
} from "react-icons/si";

function Skills() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={5} md={3} lg={2} align="center">
        <div className="tech-icons">
          <DiJavascript1 />
        </div>
      </Col>
      <Col xs={5} md={3} lg={2} align="center">
        <div className="tech-icons">
          <SiTypescript />
        </div>
      </Col>
      <Col xs={5} md={3} lg={2} align="center">
        <div className="tech-icons">
          <SiC />
        </div>
      </Col>
      <Col xs={5} md={3} lg={2} align="center">
        <div className="tech-icons">
          <SiCplusplus />
        </div>
      </Col>
      <Col xs={5} md={3} lg={2} align="center">
        <div className="tech-icons">
          <SiJava />
        </div>
      </Col>
      <Col xs={5} md={3} lg={2} align="center">
        <div className="tech-icons">
          <DiPython />
        </div>
      </Col>
    </Row>
  );
}

export default Skills;
