import React, { useState } from 'react';
import { Route, Switch } from  'react-router-dom';
import { BoardHeader } from './BoardHeader';
import { LoginPortal } from './LoginPortal';
import { NavBar } from './NavBar';
import { RobotBoard } from './RobotBoard';

export const App = () => {
  const [user, setUser] = useState({email: '', password: ''})
  const [error, setError] = useState('')

  const admin = {
    email: 'admin@mondorobot.com',
    password: '123'
  }

  const login = (current) => {
    if (admin.email === current.email && admin.password === current.password) {
      setError('')
      setUser({
        name: current.name,
        email: current.email
      })
    } else {
      setError('Incorrect Credentials')
    } 
  }

  return (
    <Switch>
     
          {!user.email && !user.password && 
            <Route exact path='/'>
            <LoginPortal login={login} error={error}/>
            </Route>
            }

        <NavBar /> 
      <Route exact path={['/', '/robots']}>
        <main>       
          <BoardHeader />
          <RobotBoard />
        </main>
      </Route>
    </Switch>
  );
}

