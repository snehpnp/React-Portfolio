import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiMsqlServer,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiStorybook,
  SiMysql,
  SiPhpmyadmin,
} from "react-icons/si";
import { FaHtml5, FaBootstrap, FaSass, FaGithub } from "react-icons/fa";
import { MdCss } from "react-icons/md";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="HTML5">
        <FaHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="CSS3">
        <MdCss />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Bootstrap">
        <FaBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="SASS">
        <FaSass />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Tailwind CSS">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="JavaScript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="TypeScript">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Node.js">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Express.js">
        <SiExpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="React.js">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Storybook">
        <SiStorybook />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MongoDB">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MySQL">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MS SQL Server">
        <DiMsqlServer />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="phpMyAdmin">
        <SiPhpmyadmin />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Git">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Firebase">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Redis">
        <SiRedis />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="PostgreSQL">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Python">
        <DiPython />
      </Col>
    </Row>
  );
}

export default Techstack;
