import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



function Hero() {
  return (
    <Row  id="appbody">
       <Col lg={7} md={4} xs={12}>
        <h1 className="text-center" >Hello</h1>
       </Col>

       <Col lg={5} md={4} xs={12}>

       </Col>
    
    </Row>
  );
}

export default Hero;
