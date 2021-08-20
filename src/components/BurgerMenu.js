import React, { useState } from 'react'

export const BurgerMenu = () => {
  const [focus, setFocus] = useState(false)

  return (
    <div className='burger-menu' onClick={() => setFocus(!focus)}>
      <div className={`line one ${focus ? 'focus' : ' '}`} />
      <div className={`line two ${focus ? 'focus' : ' '}`} />
      <div className={`line three ${focus ? 'focus' : ' '}`}/>
    </div>
  )
}