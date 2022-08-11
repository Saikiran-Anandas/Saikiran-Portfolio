import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiBootstrap,
} from "react-icons/di";
import { 
  SiHtml5,
  SiCss3,
} from "react-icons/si";

function Skills() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={5} md={3} lg={2} align="center">
        <div className="tech-icons">
          <SiHtml5 />
        </div>
      </Col>
      <Col xs={5} md={3} lg={2} align="center">
        <div className="tech-icons">
          <SiCss3 />
        </div>
      </Col>
      <Col xs={5} md={3} lg={2} align="center">
        <div className="tech-icons">
          <DiBootstrap />
        </div>
      </Col>
    </Row>
  );
}

export default Skills;
