import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiMongodb,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";

function Skills() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={5} md={3} lg={2} align="center">
        <div className="tech-icons">
          <SiMysql />
        </div>
      </Col>
      <Col xs={5} md={3} lg={2} align="center">
        <div className="tech-icons">
          <SiMongodb />
        </div>
      </Col>
      <Col xs={5} md={3} lg={2} align="center">
        <div className="tech-icons">
          <SiPostgresql />
        </div>
      </Col>
    </Row>
  );
}

export default Skills;
