import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../utility/AuthContext';

import { expireSession } from '../utility/apiCalls';
import logo from  '../assets/mr-logo.png';

export const NavBar = () => {
  const { dispatch, state: authState } = useContext(AuthContext);
  const { isAdmin, isAuthenticated, token } = authState

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
          {isAdmin && <NavLink to='/admin'>Admin</NavLink>}
          <NavLink to=  '/' onClick={handleLogOut}>Log Out</NavLink>
        </nav>
      </section>
    </header>
  )
}