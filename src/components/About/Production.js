import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiDocker,
  SiJenkins,
  SiKubernetes,
} from "react-icons/si";

function Skills() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={5} md={3} lg={2} align="center">
        <div className="tech-icons">
          <SiDocker />
        </div>
      </Col>
      <Col xs={5} md={3} lg={2} align="center">
        <div className="tech-icons">
          <SiKubernetes />
        </div>
      </Col>
      <Col xs={5} md={3} lg={2} align="center">
        <div className="tech-icons">
          <SiJenkins />
        </div>
      </Col>
    </Row>
  );
}

export default Skills;
