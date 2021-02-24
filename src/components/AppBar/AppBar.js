import React from 'react';
import './AppBar.css';
import Header from '../Header';

const AppBar = ({ text }) => (
  <header className="AppBar">
    {/* <Header text="React. HomeWork-1. Components." /> */}
    <Header text={text} />
  </header>
);

export default AppBar;
