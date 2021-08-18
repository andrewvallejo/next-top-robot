import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from  '../assets/mr-logo.png';

export const NavBar = () => {
  return (
    <header className='main-header'>
      <section className='left-container'>
        <NavLink to='/robots'>
          <img alt='A logo of Mondo Robot' src={logo} className='logo'/>
        </NavLink>
        <nav className='nav-container'>
          <NavLink to='/robots'>Robots</NavLink>
          <NavLink to='/results'>Results</NavLink>
        </nav>
      </section>
      <section className='right-container'>
        <nav className='nav-container'>
          <NavLink to='/admin'>admin</NavLink>
          <NavLink to='/'>Log Out</NavLink>
        </nav>
      </section>
    </header>
  );
}