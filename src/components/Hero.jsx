import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stars from '../imgs/stars.png';
import Moon from '../imgs/moon.png';
import Mountain from "../imgs/mountain.png";
import frontMountain from "../imgs/frontMountain.png"


function Hero() {
  return (
    <Row>
      
        <br /> <br /> <br />
        <section>
          <img src={Stars} alt="Stars" />
          <img src={Moon} alt="Moon" />
          <img src={Mountain} alt="Mountain" />
          <img src={frontMountain} alt="frontMountain" />
          <h2 id="text">Moon Light</h2>
        
     
        </section>
        <div className="sec" id="sec">
          <h2>Student's Savior</h2>
          <p>
            {/* Your paragraph content */}
          </p>
        </div>
     
    </Row>
  );
}

export default Hero;
