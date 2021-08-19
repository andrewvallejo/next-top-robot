import React, { useState } from 'react'

export const Button = ({ value, palette }) => {
  const [active, setActive] = useState(false)
  const [theme, setTheme] = useState('primary')




  return (
    <button 
      className={`button 
        ${palette === theme ? theme : setTheme('secondary')}
        ${active ? 'active' : ' '} `}
        onClick={() => setActive(!active)} >
        {value}
        {/* {active ? 'Vote Cast' : 'Vote'} */}
    </button>
  )
}