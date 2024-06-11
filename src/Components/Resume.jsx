import React from "react";
import { Container, Button } from "react-bootstrap";

const Resume = () => (
  <Container>
    <h1>Resume</h1>
    <Button href="/My Resume.pdf" download>
      Download my Resume
    </Button>
  </Container>
);

export default Resume;
