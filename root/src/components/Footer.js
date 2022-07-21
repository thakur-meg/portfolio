import { Container, Row, Col } from "react-bootstrap";
import linkedin from "../assets/img/linkedin.svg";
import github from "../assets/img/github.svg";
import twitter from "../assets/img/twitter.svg";
import '../styles/footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
            <h2>MEGHNA</h2>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/thakur-meghna/"><img src={linkedin} alt="Icon" /></a>
              <a href="https://github.com/thakur-meg"><img src={github} alt="Icon" /></a>
              <a href="https://twitter.com/thakur_meg"><img src={twitter} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
