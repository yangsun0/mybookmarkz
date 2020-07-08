import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Row className="py-2" role="toolbar">
      <Col>
        <Button variant="outline-secondary" size="sm" as={Link} to="/">
          &lt; Back
        </Button>
      </Col>
      <Col xs="auto">
        <Button variant="outline-secondary" size="sm" className="mr-2">
          New Group
        </Button>
        <Button variant="outline-secondary" size="sm">
          New Bookmark
        </Button>
      </Col>
    </Row>
  );
}

export default Header;