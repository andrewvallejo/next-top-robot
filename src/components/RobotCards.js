import React, { useEffect, useState, useContext } from 'react'
import { retrieveRobots, undoVote, voteForRobot } from '../utility/apiCalls/apiCalls';
import { AuthContext } from '../utility/apiCalls/AuthContext';
import { Card } from './Card'

export const RobotCards = () => {
  const { state: { token } } = useContext(AuthContext)
  const [uploaded, setUploaded] = useState(false)
  const [robots, setRobots] = useState([])  
  const [robotId, setRobotId] = useState('')

  useEffect(() => {
    (async () => {
      await retrieveRobots(token)
      .then((data) => setRobots(data))
    })()
  }, [token])

  const handleVote = async (id) => {
    if (robotId !== id && !robotId) {
      setUploaded(true)
      setRobotId(id)
      await voteForRobot(id, token)
    } else if (robotId === id ) {
      setUploaded(false)
      setRobotId('')
      await undoVote(id, token)
    }
  }

  return robots.map((robot) => {
    return (
          <Card key={robot.id} id={robot.id} robotInfo={robot} vote={handleVote} hasVoted={uploaded} />
    )
  })
}