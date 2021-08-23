import React from 'react'
import { AdminCard } from './AdminCard'
import { BoardHeader } from './BoardHeader'
import { NavBar } from './NavBar'
import { RobotCards } from './RobotCards'

export const Home = () => {
  return (
    <>
      <NavBar /> 
      <main>       
        <BoardHeader />
        <section className='robot-board'>
        <AdminCard />
        <RobotCards />
        </section>
      </main>
    </>
  )
}