import React, { useEffect, useReducer } from 'react';
import { Route, Switch } from  'react-router-dom';
import { AuthContext } from '../utility/AuthContext';
import { Home } from './Home';
import { LoginPortal } from './LoginPortal';
import { reducer } from '../utility/reducer';

const initalState = {
  isAdmin: false, 
  isAuthenticated: false,
  token: '',
  error: '',
}

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initalState)
  
  useEffect(() => {
    dispatch({type: 'AUTOLOGIN', info: ''})
  }, [])
  
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <Switch>
        {state.isAuthenticated ? <Home /> : <LoginPortal /> }
        <Route exact path={['/login', '/register']}>
          <LoginPortal />
        </Route>
        <Route exact path={['/', '/robots']}>
          <Home />
        </Route>
      </Switch>
    </AuthContext.Provider>
  );
}

