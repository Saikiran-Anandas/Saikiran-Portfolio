import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Contact() {
  return (
    <section>
      <Container fluid className="contact-section">
        <h1>
          <span className="purple">CONTACT</span>
        </h1>
        <Row className="contact-details">
          <Col xs={12} sm={6} md={4}>
            <div>
              <h3>Phone</h3>
              <p className="purple">+91 9381521145</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={4}>
            <div>
              <h3>Email</h3>
              <p className="purple">saikirananandas@gmail.com</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={4}>
            <div>
              <h3>WhatsApp</h3>
              <p className="purple"><a className="purple" href="https://wa.me/919381521145">Message</a></p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Contact;
