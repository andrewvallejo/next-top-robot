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
    password: 'R0bot4Lif3'
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
      <Route exact path='/'>
          <LoginPortal login={login} error={error}/>
      </Route>
      <Route exact path='/robots'>
        <NavBar /> 
        <main>       
          <BoardHeader />
          <RobotBoard />
        </main>
      </Route>
    </Switch>
  );
}

