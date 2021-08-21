import React, { useState } from 'react'
import { Button } from './Button'

export const Card = ({ robotInfo: {url, name}, vote, hasVoted}) => {
  const [active, setActive]= useState(false)

    const handleButton = () => {
      setActive(true)
      vote()
    }

    return (
      <article className='card' >
        <h3>{name}</h3>
        <img className='robot-image' alt={`The robot named ${name}`} src={url} />
        <Button 
          palette='primary'
          activate={handleButton}
          value={hasVoted ? 'Vote Cast' : 'Vote'}
          isVoted={active} /> 
      </article>
    )

}