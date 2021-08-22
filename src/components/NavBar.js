import React, { useContext } from 'react';
import logo from  '../assets/mr-logo.png';
import { AuthContext } from '../utility/AuthContext';
import { BurgerMenu } from './BurgerMenu';
import { expireSession } from '../utility/apiCalls';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  const { dispatch, state: authState } = useContext(AuthContext);
  const { isAuthenticated, token } = authState

  const handleLogOut = async(event) => {
    event.preventDefault();
    await expireSession(token)
    .then(() => !isAuthenticated)
    .then(() => {dispatch({type: 'LOGOUT', info: {}}) 
  })
    .catch((error) => console.error(error))
  }

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
          <NavLink to='/admin'>Admin</NavLink>
          <NavLink to=  '/' onClick={handleLogOut}>Log Out</NavLink>
          <BurgerMenu />
        </nav>
      </section>
    </header>
  )
}