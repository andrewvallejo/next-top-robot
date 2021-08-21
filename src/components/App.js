import React, { useReducer } from 'react';
import { Route, Switch } from  'react-router-dom';
import { AuthContext } from '../utility/apiCalls/AuthContext';
import { Home } from './Home';
import { LoginPortal } from './LoginPortal';
import { reducer } from '../utility/apiCalls/reducer';

const initalState = {
  isAuthenticated: false,
  token: '',
  error: '',
}

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initalState)

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <Switch>
        {state.isAuthenticated ? <Home /> : <LoginPortal /> }
        <Route exact path='/'>
          <LoginPortal />
        </Route>
        <Route exact path={['/', '/robots']}>
          <Home />
        </Route>
      </Switch>
    </AuthContext.Provider>
  );
}

