import React from 'react';
import { Route, Switch } from  'react-router-dom';
import { BoardHeader } from './BoardHeader';
import { LoginPortal } from './LoginPortal';
import { NavBar } from './NavBar';
import { RobotBoard } from './RobotBoard';

export const App = () => {

  return (
    <Switch>
      <Route exact path='/'>
          <LoginPortal />
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

