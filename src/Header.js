import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import shopify from './shopify.png';

function Header() {
  return (
    <div>
    <Container className = 'title'>
      <Row>
        <Col xs="3">
          <img src={shopify} alt="shopify" width="200" height="200"/>
          </Col>
          <Col id= 'text'>
          <h1 className="display-3">The Shoppies</h1>
          <p className="lead">Movie awards for entrepreneurs</p>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Header;
