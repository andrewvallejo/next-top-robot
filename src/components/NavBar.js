import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from  '../assets/mr-logo.png';

export const NavBar = () => {
  return (
    <header className='main-header'>
      <img alt='A logo of Mondo Robot' src={logo} className='logo'/>
    </header>
  );
}