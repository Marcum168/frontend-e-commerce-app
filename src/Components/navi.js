import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Nav,
  Navbar,
  Form,
  FormControl,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";

function Navi(props) {
  return (
    <Navbar bg="primary" variant="dark">
      <Link to="/" className="btn btn-green">
        Home
      </Link>

      <Dropdown as={ButtonGroup}>
        <Button variant="success">Products</Button>
        <Dropdown.Toggle split variant="success" id="dropdown-basic" />
        <Dropdown.Menu>
          <Dropdown.Item>
            <Link to="/Computers">Computers</Link>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            <Link to="/Headphones">Headphones</Link>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            <Link to="/Televisions">Televisions</Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
      <Link to="/signup" className="btn btn-green">
        SignUp
      </Link>
    </Navbar>


  );
}

export default Navi;
