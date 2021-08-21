import React, { useState } from 'react'
import { Button } from './Button'

export const Card = ({ robotInfo: {id, url, name}, vote, hasVoted}) => {
  const [active, setActive]= useState(false)
  
    const handleButton = (id) => {
        setActive(!active)
        vote(id)
  }
    return (
      <article className='card' >
        <h3>{name}</h3>
        <img className='robot-image' alt={`The robot named ${name}`} src={url} />
        <Button 
          palette='primary'
          activate={() => handleButton(id)}
          value='Vote'
          isActive={active}
          isVoted={hasVoted} /> 
      </article>
    )
}