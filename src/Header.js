import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const navbar = (
  <Navbar inverse>
    <Navbar.Header>
      <Navbar.Brand>Crystal-Tiger-Dice</Navbar.Brand>
    </Navbar.Header>
    <Nav pullRight>
      <NavItem>New Game</NavItem>
    </Nav>
  </Navbar>
);

export const Header = () => {
  return (
    <nav>{ navbar }</nav>
  );
};
