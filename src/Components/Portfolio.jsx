import React from "react";
import { Container, Card, CardGroup } from "react-bootstrap";

const Portfolio = () => (
  <Container>
    <h1>Portfolio</h1>
    <CardGroup>
      <Card>
        <Card.Body>
          <Card.Title>Project 1</Card.Title>
          <Card.Text>My Information.</Card.Text>
        </Card.Body>
        <Card.Footer>
          <a href="https://git@github.com:Nirmal57677/My-Info.git">GitHub</a>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Project 2</Card.Title>
          <Card.Text>AlmaBetter</Card.Text>
        </Card.Body>
        <Card.Footer>
          <a href="https://github.com/Nirmal57677/AlmaBetter.git">GitHub</a>
        </Card.Footer>
      </Card>
    </CardGroup>
  </Container>
);

export default Portfolio;
