import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../utility/AuthContext';
import { BoardHeader } from './BoardHeader';
import { BurgerMenu } from './BurgerMenu';
import { Card } from './Card';
import { NavBar } from './NavBar';
import { RobotCards } from './RobotCards';

export const Home = () => {
  const { state: { isAdmin } } = useContext(AuthContext)
  const [isMenuActive, setIsMenuActive] = useState(false)
  const location = useLocation().pathname

  const handleMenu = () => {
    setIsMenuActive(!isMenuActive)
  }

  return (
    <>
      <BurgerMenu toggleMenu={handleMenu}/> 
      {!isMenuActive && 
        <>
          <NavBar /> 
          <main>       
            <BoardHeader />
            <section className='robot-board'>
              {isAdmin  && location === '/admin' && 
              <Card  robotInfo='' totalVotes={[]}/>}
              <RobotCards />
            </section>
          </main>
        </>
      }
    </>
  )
};