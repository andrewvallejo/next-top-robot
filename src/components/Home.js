import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { AuthContext } from '../utility/AuthContext'
import { BoardHeader } from './BoardHeader'
import { Card } from './Card'
import { NavBar } from './NavBar'
import { RobotCards } from './RobotCards'

export const Home = () => {
  const { state: { isAdmin } } = useContext(AuthContext)
  const location = useLocation().pathname

  return (
    <>
      <NavBar /> 
      <main>       
        <BoardHeader />
        <section className='robot-board'>
        {isAdmin  && location === '/admin' && <Card  robotInfo='' totalVotes={[]}/>}
        <RobotCards />
        </section>
      </main>
    </>
  )
}