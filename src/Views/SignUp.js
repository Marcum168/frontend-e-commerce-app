import React from "react";
import { Button, Form, Container } from "react-bootstrap";
function SignUp(props) {
  return (
    <Container className="signUpForm">
      <Form>
        <Form.Group controlId="formEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="username" placeholder="Enter username" />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formCheckbox"></Form.Group>
        <Button className="subBtn" variant="primary" type="submit">
          Sign up!
        </Button>
      </Form>
    </Container>
  );
}

export default SignUp;
