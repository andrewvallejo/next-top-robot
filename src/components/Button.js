import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


export const Button = ({ value, palette, activate, isVoted }) => {  
  switch (value) {
    case 'Vote':
      return (
        <button 
        className={`button ${palette} ${isVoted && 'disable'}`} 
        onClick={() => activate()}
        disabled={isVoted}>
          {isVoted ? 'Vote Cast' : 'Vote'}
        </button>
      )
    case 'Vote Cast':
       return (
        <button 
        className={`button ${palette} ${isVoted ? 'disable' : ''}`}
        disabled={isVoted}>
          {value}
        </button>
       )
    // case 'Register':
    //   return (
    //     <NavLink
    //       className={`button 
    //       ${palette}
    //       ${active ? 'active' : ' '} `}
    //       onClick={() => setActive(!active)} 
    //       to='/robots' >
    //       {value}
    //     </NavLink>
    //   )
    default:
      return (
        <button className={`button ${palette}`}>
        {value}
      </button>
      )
  }
}