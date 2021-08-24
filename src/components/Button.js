import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


export const Button = ({ code, value, palette, activate, isVoted , isActive, clear}) => {  
  const [isTriggered, setIsTriggered] = useState(false)

  switch (code) {
    case 'vote':
      return (
        <button 
        className={`button ${palette} ${isTriggered && 'disable'} vote`} 
        onClick={() => {activate(); setIsTriggered(!isTriggered)}}
        disabled={isVoted && !isActive}>
          {isTriggered ? 'Vote Cast' : 'Vote'}
        </button>
      )
    case 'register':
      return (
        <NavLink
        className={`button 
        ${palette}`}
        onClick={() => setIsTriggered(!isTriggered)} 
        to={isTriggered ? '/login' : '/registration'}>
          {value}
        </NavLink>
      )
    case 'admin': 
    return (
      <button 
      className={`button ${palette} admin`}
      onClick={() => activate()}>
        {value}
      </button>
      )
      case 'create-invalid': 
      return (
        <button className={`button ${palette} disable create`}
        disabled>
          {value}
        </button>
        )
      case 'create-valid': 
      return (
        <button className={`button ${palette} create`}>
          {value}
        </button>
        )
      case 'clear': 
      return (
        <button className={`button ${palette} create`}
              onClick={() => clear()}>
          {value}
        </button>
        )
    default:
      return (
      <button className={`button ${palette}`}>
        {value}
      </button>
      )
  }
}