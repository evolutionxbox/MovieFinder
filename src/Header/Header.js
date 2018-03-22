import React from 'react';
import './Header.css';
import Title from '../Title/Title';

const Header = ({ title }) => {
  return (
    <header>
      <Title level="1" title={title} />
    </header>
  );
}

export default Header;
