import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center '>Copyright &copy; aki-tana</Col>
        </Row>
        <Row>
          <Col className='text-center'>akitana@gmail.com</Col>
        </Row>
        <Row>
          <Col className='text-center'>
            <a href='tel: 08088716177'>0808716177</a>{' '}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
