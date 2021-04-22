import React from "react";
import Carousel from "react-bootstrap/Carousel";
import test1Image from "../img/test1.jpg";
import test2Image from "../img/test2.png";
import test3Image from "../img/test3.jpg";

function Homepage(props) {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={test1Image}
            height="300px"
            width="300px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={test2Image}
            height="300px"
            width="300px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={test3Image}
            height="300px"
            width="300px"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Homepage;
