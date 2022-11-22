import { Container, Row, Col } from "react-bootstrap";
import Mypic from "../assets/my_picture.jpg";
import navIcon1 from '../assets/footer-Icon1.svg';
import navIcon2 from '../assets/footer-Icon2.svg';
import navIcon3 from '../assets/footer-Icon3.svg';

export default function Footer () {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col className = "DivPaP">
            <img src={Mypic} alt="My picture" />
            <p>Leonardo Braga</p>
          </Col>
          <Col className="text-sm-end">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/leonardo-barbosa-braga-583449142/?locale=en_US" ><img src={navIcon1} alt="LinkedIn" /></a>
                <a href="https://github.com/leobbraga"><img src={navIcon2} alt="Github" /></a>
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGLPmBSdkPDznXvXrDFwTqsPFMsnVZWMhgNdmKjTHmgtFggQzzFWQgZRGGXPGHrtrsSNdvh"><img src={navIcon3} alt="Email" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}


