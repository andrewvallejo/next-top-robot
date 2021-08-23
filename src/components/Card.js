import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Button } from './Button'
import { RobotForm } from './RobotForm'

export const Card = ({ robotInfo: {id, url, name}, vote, hasVoted, totalVotes, deleteRobot }) => {
  const [active, setActive]= useState(false)
  const [count, setCount] = useState(0)
  const path = useLocation().pathname
  let insert;
  
  useEffect(() => {
    const robotTotalVotes = totalVotes.filter((vote) => vote === id)
    setCount(() => robotTotalVotes.length)
  }, [totalVotes, id, count])

 
  const handleButton = (id) => {
    setActive(!active)
    vote(id)
  }

  if (path === '/robots') {
    insert =  (
      <Button 
      palette='primary'
      activate={() => handleButton(id)}
      code='vote'
      isActive={active}
      isVoted={hasVoted} />
    )
  } else if (path === '/results') {
    insert = 
    <>
      <label htmlFor="results"><h2 >{count}<span className='out-of'>/{totalVotes.length}</span></h2></label>
      <progress className='results-bar' htmlFor="results" value={count}  max={totalVotes.length} />
    </>
  } else if (path === '/admin') {
    insert = (
      <div className='buttons-container'>
      <Button 
      palette='primary'
      code='admin'
      value='Edit'
      isActive={active}/>
      <Button 
      palette='secondary'
      code='admin'
      activate={() => deleteRobot(id)}
      value='Delete'
      isActive={active}/>
      </div>
    )
  }

    return (
      <>
        {!!url ? 
        <article className='card'>
          <h3>{name}</h3>
          <img className='robot-image' alt={`The robot named ${name}`} src={url} />
          {insert}
        </article> :
        <RobotForm />}
      </>
    )
}