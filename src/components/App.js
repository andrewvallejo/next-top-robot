import React from 'react';
import { Route, Switch } from  'react-router-dom';
import { BoardHeader } from './BoardHeader';
import { NavBar } from './NavBar';
import { RobotBoard } from './RobotBoard';

export const App = () => {
  

  return (
    <Switch>
      <Route exact path="/">
      </Route>
      <Route exact path="/robots">
        <NavBar /> 
        <BoardHeader />
        <main>
          <Route exact path="/robots">
            <RobotBoard />
          </Route>
        </main>
      </Route>
    </Switch>
  );
}

