import React from 'react'
import { BoardHeader } from './BoardHeader'
import { NavBar } from './NavBar'
import { RobotBoard } from './RobotBoard'

export const Home = () => {
  return (
    <>
      <NavBar /> 
      <main>       
        <BoardHeader />
        <RobotBoard />
      </main>
    </>
  )
}