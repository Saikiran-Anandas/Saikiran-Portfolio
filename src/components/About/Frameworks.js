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
