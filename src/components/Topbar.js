import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';

const Topbar = ({ theme, toggleTheme }) => {
  return (
    <Navbar bg={theme === 'dark' ? 'dark' : 'light'} variant={theme === 'dark' ? 'dark' : 'light'}>
      <Container className="justify-content-between">
        {/*<Navbar.Brand>Multi-Store Dashboard</Navbar.Brand>*/}
        <Button variant={theme === 'dark' ? 'light' : 'dark'} onClick={toggleTheme}>
          {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
        </Button>
      </Container>
    </Navbar>
  );
};

export default Topbar;
