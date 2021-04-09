import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Dropdown, ButtonGroup } from "react-bootstrap";

function Navi(props) {
  return (
    <Container className="navi">
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
    </Container>
  );
}

export default Navi;
