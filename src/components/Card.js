import React from 'react'
import { Button } from './Button'

export const Card = ({ robots }) => {
  
  return robots.map((robot) => {
    const {id, url, name} = robot

    return (
      <article className='card' key={id} id={id}>
        <h3>{name}</h3>
        <img className='robot-image' alt={`The robot named ${name}`} src={url} />
        <Button value='Vote' palette='primary' />
      </article>
    )
  })
}