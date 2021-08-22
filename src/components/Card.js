import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Button } from './Button'

export const Card = ({ robotInfo: {id, url, name}, vote, hasVoted, results}) => {
  const [active, setActive]= useState(false)
  const path = useLocation().pathname
  let insert;

      if (path === '/robots') {
        insert =  (
          <Button 
          palette='primary'
          activate={() => handleButton(id)}
          value='Vote'
          isActive={active}
          isVoted={hasVoted} />
        )
      } else if (path === '/results') {
        insert = 
        <>
        <label htmlFor="results"><h2>{results.length}<span className='out-of'>/55</span></h2></label>
        <progress className='results-bar' htmlFor="results" value={results} max="55">70 %</progress>
        </>
      } 

  
    const handleButton = (id) => {
        setActive(!active)
        vote(id)
  }


    return (
      <article className='card' >
        <h3>{name}</h3>
        <img className='robot-image' alt={`The robot named ${name}`} src={url} />
        {insert}
      </article>
    )
}