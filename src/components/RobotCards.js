import React, { useEffect, useState, useContext } from 'react'
import { retrieveRobots } from '../utility/apiCalls/apiCalls';
import { AuthContext } from '../utility/apiCalls/AuthContext';
import { Card } from './Card'

export const RobotCards = () => {
  const { state: { token } } = useContext(AuthContext)
  const [robots, setRobots] = useState([])  

  useEffect(() => {
    (async () => {
      await retrieveRobots(token)
      .then((data) => setRobots(data))
    })()
  }, [token])

  return robots.map((robot) => {
    return (
          <Card robotInfo = {robot} />
    )
  })
}