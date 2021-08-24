import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../utility/AuthContext';
import { BurgerMenu } from './BurgerMenu';

export const MobileMenu = () => {
  const { dispatch, state: authState } = useContext(AuthContext);
  const { isAdmin, isAuthenticated, token } = authState
  return (
     
      <nav className='mobile-menu'>
        <div className='links-container'>
        <NavLink className='mobile-link' to='/robots'>
        </NavLink>
          <NavLink className='mobile-link' to='/robots'>Robots</NavLink>
          <NavLink className='mobile-link' to='/results'>Results</NavLink>
          {isAdmin && <NavLink className='mobile-link' to='/admin'>Admin</NavLink>}
          <NavLink className='mobile-link' to= '/'>Log Out</NavLink>
          </div>
      </nav>
    

  )
}

