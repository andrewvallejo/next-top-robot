import React, { useState } from 'react';
import { Route, Switch } from  'react-router-dom';
import { Home } from './Home';
import { LoginPortal } from './LoginPortal';

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
        </Route>}
      <Route exact path={['/', '/robots']}>
        <Home />
      </Route>
    </Switch>
  );
}

