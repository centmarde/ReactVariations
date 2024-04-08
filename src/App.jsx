import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col></Col>
          <Col lg={5} md={4} xs={12}>
            <Navbar></Navbar>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row id="appbody">
          <Col xs={12} md={4} lg={12}>
            <Hero />
          </Col>
        </Row>

        <Row id="about">
          <Col xs={12} md={4} lg={12}></Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
