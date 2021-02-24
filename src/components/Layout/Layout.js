import React from 'react';
import AppBar from '../AppBar/AppBar';
import Container from '../Container/Container';

const Layout = ({ children }) => (
  <>
    <AppBar text="React. HomeWork-1. Components." />
    <Container>{children}</Container>
    <AppBar text="" />
  </>
);

export default Layout;
