import React, { useState } from 'react'

export const Button = () => {
  const [active, setActive] = useState(false)

  return (
    <button class={`primary-button ${active ? 'active' : ' '}`}   onClick={() => setActive(!active)}>
        {active ? 'Vote Cast' : 'Vote'}
    </button>
  )
}