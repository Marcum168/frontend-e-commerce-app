import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import test1Image from "../img/test1.jpg";
import test2Image from "../img/test2.png";
import test3Image from "../img/test3.jpg";
import TVImage from "../img/TV.jpeg";
import BeatsImage from "../img/Beats.jpeg";

import { Button, Container } from "react-bootstrap";

function Homepage(props) {
  return (
    <div>
      <Container className="accessories">
        <Card className="cardOne text-center">
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>

            <img
              className=" headphoneImage d-block w-100"
              src={BeatsImage}
              height="100px"
              width="50px"
            />

            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          <Card.Footer className="text-muted"></Card.Footer>
        </Card>
        <Carousel className="carousel" fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={test1Image}
              height="300px"
              width="350px"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={test2Image}
              height="300px"
              width="350px"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={test3Image}
              height="300px"
              width="350px"
            />
          </Carousel.Item>
        </Carousel>
        <Card className="cardTwo text-center">
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>

            <img
              className=" tvImage d-block w-100"
              src={TVImage}
              height="100px"
              width="125px"
            />

            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          <Card.Footer className="text-muted"></Card.Footer>
        </Card>
      </Container>
      <Card>
        <Card.Header className="bottomHeader" as="h5">
          Featured
        </Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Homepage;
