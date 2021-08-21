import React, { useState } from 'react'
import { Button } from './Button'

export const Card = ({ robotInfo: {id, url, name} }) => {
  const [active, setActive]= useState(false)

    const handleVote = () => {
      setActive(true)
    }

    return (
      <article className='card' key={id} id={id}>
        <h3>{name}</h3>
        <img className='robot-image' alt={`The robot named ${name}`} src={url} />
        <Button 
          palette='primary'
          activate={handleVote}
          value={active ? 'Vote Cast' : 'Vote'}
          isVoted={active}
          /> 
      </article>
    )

}