import React from 'react';
import { Route, Switch } from  'react-router-dom';

export const App = () => {
  

  return (
    <Switch>
      <Route exact path="/">
      </Route>
      <Route exact path="/robots">
        <h1>Robots</h1>
      </Route>
    </Switch>
  );
}

