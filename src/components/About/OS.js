import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiKalilinux,
  SiLinux,
  SiLinuxmint,
  SiMacos,
  SiRedhat,
  SiUbuntu,
  SiWindows,
  SiWindows95,
  SiWindowsterminal,
  SiWindowsxp,
} from "react-icons/si";

function Skills() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <Col xs={5} md={3} lg={2} align="center">
        <div className="tech-icons">
          <SiWindows95 />
        </div>
    </Col>
      <Col xs={5} md={3} lg={2} align="center">
        <div className="tech-icons">
          <SiWindowsxp />
        </div>
      </Col>
      <Col xs={5} md={3} lg={2} align="center">
        <div className="tech-icons">
          <SiWindowsterminal />
        </div>
      </Col>
      <Col xs={5} md={3} lg={2} align="center">
        <div className="tech-icons">
          <SiWindows />
        </div>
      </Col>
      <Col xs={5} md={3} lg={2} align="center">
        <div className="tech-icons">
          <SiUbuntu />
        </div>
      </Col>
      <Col xs={5} md={3} lg={2} align="center">
        <div className="tech-icons">
          <SiLinux />
        </div>
      </Col>
      <Col xs={5} md={3} lg={2} align="center">
        <div className="tech-icons">
          <SiLinuxmint />
        </div>
      </Col>
      <Col xs={5} md={3} lg={2} align="center">
        <div className="tech-icons">
          <SiKalilinux />
        </div>
      </Col>
      <Col xs={5} md={3} lg={2} align="center">
        <div className="tech-icons">
          <SiRedhat />
        </div>
      </Col>
      <Col xs={5} md={3} lg={2} align="center">
        <div className="tech-icons">
          <SiMacos />
        </div>
      </Col>
    </Row>
  );
}

export default Skills;
