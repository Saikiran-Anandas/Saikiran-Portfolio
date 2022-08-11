import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiBootstrap,
} from "react-icons/di";
import { 
  SiC,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiCplusplus,
  SiJava,
  SiGithub,
  SiGitlab,
  SiDocker,
  SiKubernetes,
  SiExpress,
  SiAngular,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

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
