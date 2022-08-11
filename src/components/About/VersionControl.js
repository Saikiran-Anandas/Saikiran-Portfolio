import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiGit,
} from "react-icons/di";
import {
  SiGithub,
  SiGitlab,
} from "react-icons/si";

function Skills() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={5} md={3} lg={2} align="center">
        <div className="tech-icons">
          <DiGit />
        </div>
      </Col>
      <Col xs={5} md={3} lg={2} align="center">
        <div className="tech-icons">
          <SiGithub />
        </div>
      </Col>
      <Col xs={5} md={3} lg={2} align="center">
        <div className="tech-icons">
          <SiGitlab />
        </div>
      </Col>
    </Row>
  );
}

export default Skills;
