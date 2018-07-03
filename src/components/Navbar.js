import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.div`
    background-color: #8E5572;
    height: 40px;
    padding-top: 20px;
    color: #F2F7F2;
`;

const Navbar = () => {
  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/list">List</Link>
    </Nav>
  )
}

export default Navbar;
