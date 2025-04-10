import React, { useState } from 'react';
import { Navbar, Nav, Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function NavBar({ onTextChange, userName }) {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onTextChange(inputValue.trim().toLowerCase());
  };

  return (
    <Navbar fixed="top" bg="dark" variant="dark" expand="lg" className="w-100 py-3 shadow-sm">
      <Container fluid>
        <Navbar.Brand href="/" className="fw-bold fs-4">
          📰 Headlines Hub&deg;
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0">
            <span style={{ color: 'white' }}>
              {userName ? `Hello, ${userName}` : 'Welcome'}
            </span>
          </Nav>

          {/* Flex wrapper for search bar and profile icon */}
          <div className="d-flex align-items-center gap-3">
            <Form className="d-flex" onSubmit={handleSubmit}>
              <Form.Control
                type="text"
                placeholder="Search category (e.g. sports)"
                className="me-2"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Button type="submit" variant="outline-light">Search</Button>
            </Form>

            {/* Profile icon aligned right */}
            <img
              src="/profile_icon.png"
              alt="Profile Icon"
              style={{ width: '32px', height: '32px', borderRadius: '50%', cursor: 'pointer' }}
              onClick={() => navigate('/profile')} // Optional: click handler
            />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
