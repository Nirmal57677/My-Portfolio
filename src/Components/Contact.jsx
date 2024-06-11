import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const Contact = () => (
  <Container>
    <h1>Contact</h1>
    <Form action="https://formspree.io/f/yourformid" method="POST">
      <Form.Group>
        <Form.Label>
          <b>Name</b>
        </Form.Label>
        <Form.Control type="text" name="name" required />
      </Form.Group>
      <Form.Group>
        <Form.Label>
          <b>E.mail</b>
        </Form.Label>
        <Form.Control type="email" name="email" required />
      </Form.Group>
      <Form.Group>
        <Form.Label>
          <b>Message</b>
        </Form.Label>
        <Form.Control as="textarea" name="message" rows={3} required />
      </Form.Group>
      <Button type="submit">
        <b>Send</b>
      </Button>
    </Form>
  </Container>
);

export default Contact;
