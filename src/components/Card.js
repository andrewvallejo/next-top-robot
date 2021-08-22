import React, { useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { Button } from './Button'

export const Card = ({ robotInfo: {id, url, name}, vote, hasVoted}) => {
  const [active, setActive]= useState(false)
  const match = useRouteMatch().path
  let button


  switch (match) {
      case '/':
        button = (
          <Button 
          palette='primary'
          activate={() => handleButton(id)}
          value='Vote'
          isActive={active}
          isVoted={hasVoted} />
        )
        break;
      case '/results': 
        button = (
          <Button 
          palette='primary'
          activate={() => handleButton(id)}
          value='Vote'
          isActive={active}
          isVoted={hasVoted} />
        )
      break;
      default:
        break;
    }

  
    const handleButton = (id) => {
        setActive(!active)
        vote(id)
  }
    return (
      <article className='card' >
        <h3>{name}</h3>
        <img className='robot-image' alt={`The robot named ${name}`} src={url} />
        {button}
      </article>
    )
}