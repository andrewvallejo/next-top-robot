import React from 'react'
import { BoardHeader } from './BoardHeader'
import { NavBar } from './NavBar'
import { RobotBoard, RobotCards } from './RobotCards'

export const Home = () => {
  return (
    <>
      <NavBar /> 
      <main>       
        <BoardHeader />
        <section className='robot-board'>
          <RobotCards />
        </section>
      </main>
    </>
  )
}