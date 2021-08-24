import React, { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom'
import { AuthContext } from '../utility/AuthContext';

export const MobileMenu = ({ logout }) => {
  const { state: authState } = useContext(AuthContext);
  const { isAdmin } = authState
  const location = useLocation().pathname

  return (     
      <nav className='mobile-menu'>
        <div className='links-container'>
            <NavLink className={`mobile-link ${location === '/robots' && 'active'}`}  to='/robots'>Robots</NavLink>
            <NavLink className={`mobile-link ${location === '/result' && 'active'}`}   to='/results'>Results</NavLink>
            {isAdmin && <NavLink className={`mobile-link ${location === '/admin' && 'active'}`}   to='/admin'>Admin</NavLink>}
            <NavLink className='mobile-link inactive' to='/' onClick={() => logout()} >Log Out</NavLink>
        </div>
      </nav>
  )
}

