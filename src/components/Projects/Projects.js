import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import NewSmartAlgo from "../../Assets/Projects/NewSmartAlgo.png";
import Abudhabi from "../../Assets/Projects/Abudhabi.svg";
import Outbook from "../../Assets/Projects/Outbook.png";
import StockBox from "../../Assets/Projects/StockBox.png";
import Esign from "../../Assets/Projects/Esign.png";
import PricingTool from "../../Assets/Projects/PricingTool.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={StockBox}
              isBlog={false}
              title="Stock Box"
              description="Stock Box is a dynamic trading marketplace where users can design, trade, and monetize trading strategies. The platform provides real-time strategy performance monitoring through WebSocket-based live updates. It features multi-layer authentication and secure payment systems to ensure reliable transactions. Backend optimizations have achieved 20% faster execution speeds compared to competitors."
              ghLink="https://github.com/snehpnp/Stockbox_theme"
              demoLink="https://stockboxpnp.pnpuniverse.com/#/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PricingTool}
              isBlog={false}
              title="Pricing Tool"
              description="The Pricing Tool is a dynamic pricing engine that enables users to build custom service packages with flexible pricing models. It integrates AI-driven recommendation algorithms to suggest optimal service configurations for clients. The tool also features a comparison module for analyzing pricing packages side by side, improving customer decision-making by 30%. Personalized email templates have enhanced client engagement, leading to a 25% rise in follow-up responses."
              ghLink="https://github.com/SHKGIT007/PRICING-TOOL"
              demoLink="https://price.magicweb.tk/#/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Outbook}
              isBlog={false}
              title="Outbook"
              description="Outbook is a responsive platform for customer and job management workflows, reducing data entry time by 30%. It features a scalable backend with Node.js and MySQL, handling complex operations such as payroll calculations and timesheet tracking. Automated timesheet reminders and activity logs improve operational efficiency by 20%. The system also includes dynamic reporting with custom filters and charts to simplify data analysis for stakeholders."
              ghLink="https://github.com/Smarts-Solutions/outbook"
              demoLink="https://outbooks.tradestreet.in/#/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NewSmartAlgo}
              isBlog={false}
              title="New Smart Algo"
              description="New Smart Algo is a sophisticated algorithmic trading platform supporting over 30 broker integrations and diverse trading strategies. It leverages Socket.io for real-time order processing, ensuring millisecond-level execution accuracy. Advanced tools like TradingView and MT4 are integrated for professional-grade trade analysis. UX optimizations and seamless onboarding have improved user retention by 15%."
              ghLink="https://github.com/snehpnp/New_Smart_Algo"
              demoLink="https://newpenal.pandpinfotech.com/#/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Esign}
              isBlog={false}
              title="E-Sign"
              description="E-Sign is a secure digital signature platform compliant with legal standards, handling over 500+ digital signatures daily. It integrates government APIs such as Aadhaar, PAN, and phone verification to ensure 99.9% identity authentication accuracy. The platform offers a seamless document upload and signing experience through a user-friendly React.js interface. Security features include encryption and audit trails, enhancing user trust and adoption by 15%."
              ghLink="https://github.com/snehpnp/New_Smart_Algo"
              demoLink="https://app.esignaadhaar.com/#/weblanding"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Abudhabi}
              isBlog={false}
              title="Abu Dhabi"
              description="This project utilizes a Convolutional Neural Network (CNN) trained on the FER-2013 dataset with Keras and TensorFlow to classify human emotions. The classifier successfully predicts various emotions with an accuracy of 60.1%. OpenCV is integrated to detect faces in images, which are then processed by the classifier to determine the person's emotion."
              ghLink="https://github.com/snehpnp/abudhabi"
              demoLink="https://your-demo-link.com" // Please replace with the actual demo link
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
