import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


export const Button = ({ value, palette }) => {
  const [active, setActive] = useState(false)
  const [theme, setTheme] = useState('primary')

  switch (value) {
    case 'Vote':
      return (
        <button 
          className={`button 
          ${palette === theme ? theme : setTheme('secondary')}
          ${active ? 'active' : ' '} `}
          onClick={() => setActive(!active)} >
          {active ? 'Vote Cast' : 'Vote'}
        </button>
      )
    case 'Register':
      return (
        <NavLink
          className={`button 
          ${palette === theme ? theme : setTheme('secondary')}
          ${active ? 'active' : ' '} `}
          onClick={() => setActive(!active)} 
          to='/robots' >
          {value}
        </NavLink>
      )
    default:
      return (
        <button 
          className={`button 
          ${palette === theme ? theme : setTheme('secondary')}
          ${active ? 'active' : ' '} `}
          onClick={() => setActive(!active)} >
          {value}
        </button>
      )
  }
}