import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer style={{position:'relative', backgroundColor: '#212529', color: '#fff', padding: '1.5rem 0' }}>
      <Container>
        <Row>
          <Col md={6}>
            <h5>Headlines Hub</h5>
            <p style={{ fontSize: '0.9rem' }}>
              Stay informed with the latest top headlines from around the world. Powered by News API.
            </p>
          </Col>
          <Col md={3}>
            <h6>Quick Links</h6>
            <ul style={{ listStyle: 'none', paddingLeft: 0, fontSize: '0.9rem' }}>
              <li><a href="#/home" style={{ color: '#ccc', textDecoration: 'none' }}>Home</a></li>
              <li><a href="#/about" style={{ color: '#ccc', textDecoration: 'none' }}>About</a></li>
              <li><a href="#/contact" style={{ color: '#ccc', textDecoration: 'none' }}>Contact</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h6>Follow Us</h6>
            <p style={{ fontSize: '0.9rem' }}>Instagram | Twitter | LinkedIn</p>
          </Col>
        </Row>
        <hr style={{ borderTop: '1px solid #444' }} />
        <p className="text-center" style={{ fontSize: '0.8rem', marginBottom: 0 }}>
          &copy; {new Date().getFullYear()} Newsly. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
