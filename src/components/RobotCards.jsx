import React, { useEffect, useState, useContext } from 'react';
import { deleteRobot, retrieveRobots, tallyResults, undoVote, voteForRobot } from '../utility/apiCalls';
import { AuthContext } from '../utility/AuthContext';
import { Card } from './Card';

export const RobotCards = () => {
  const { state: { token } } = useContext(AuthContext)
  const [uploaded, setUploaded] = useState(false)
  const [robots, setRobots] = useState([])  
  const [robotId, setRobotId] = useState('')
  const [results, setResults] = useState([])
  const [voteId, setVoteId] = useState('')

  useEffect(() => {
    (async () => {
      await retrieveRobots(token)
      .then((data) => setRobots(data))
      await tallyResults(token)
      .then((data) => setResults(data))
    })()
  }, [token, results])

  const handleVote = async (id) => {
    if (robotId !== id && !robotId) {
      await voteForRobot(id, token)
      .then(data => setVoteId(data.id))
      setUploaded(true)
      setRobotId(id)
    } else if (robotId === id) {
      await undoVote(voteId, token)
      setUploaded(false)
      setRobotId('')
      setVoteId('')
    }
  }

  const handleDelete = (id) => {
    deleteRobot(id, token)
    retrieveRobots(token)
  }

  return robots.map((robot) => {
    const robotVotes = results.map(result => result.robot)
    return (
      <div key={robot.id}>
        <Card id={robot.id} robotInfo={robot} vote={handleVote} hasVoted={uploaded} totalVotes={robotVotes} deleteRobot={handleDelete} />
      </div>
    )
  })
};