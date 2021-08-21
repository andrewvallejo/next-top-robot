import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


export const Button = ({ value, palette, activate, isVoted , isActive}) => {  
  const [isTriggered, setIsTriggered] = useState(false)

  switch (value) {
    case 'Vote':
      return (
        <button 
        className={`button ${palette} ${isTriggered && 'disable'}`} 
        onClick={() => {activate(); setIsTriggered(!isTriggered)}}
        disabled={isVoted && !isActive}>
          {isTriggered ? 'Vote Cast' : 'Vote'}
        </button>
      )
    case 'Register':
      return (
        <NavLink
          className={`button 
          ${palette}
          ${isTriggered ? 'active' : ' '} `}
          onClick={() => setIsTriggered(!isTriggered)} 
          to='/robots' >
          {value}
        </NavLink>
      )
    default:
      return (
        <button className={`button ${palette}`}>
        {value}
      </button>
      )
  }
}