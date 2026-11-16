import React, { useContext, useState } from 'react'
import { expireSession } from '../utility/apiCalls';
import { AuthContext } from '../utility/AuthContext';
import { MobileMenu } from './MobileMenu';

export const BurgerMenu = ({ toggleMenu }) => {
  const [focus, setFocus] = useState(false)
  const { dispatch, state: authState } = useContext(AuthContext);
  const { isAuthenticated, token } = authState

  const handleToggle = () => {
    setFocus(!focus)
    toggleMenu()
  }

  const handleLogOut = async() => {
    await expireSession(token)
    .then(() => !isAuthenticated)
    .then(() => {dispatch({type: 'LOGOUT', info: {}}) 
  })
    .catch((error) => console.error(error))
  }

  return (
    <div className='burger-menu' onClick={handleToggle}>
      <div className={`line one ${focus ? 'focus' : ' '}`} />
      <div className={`line two ${focus ? 'focus' : ' '}`} />
      <div className={`line three ${focus ? 'focus' : ' '}`}/>  
      {focus && <MobileMenu logout={handleLogOut}/>}  
    </div>
  )
};

