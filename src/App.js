import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import GameList from './components/GameList';
import Trailer from './components/Trailer';


function App() {
  return (
    <Switch>
      <Route exact path="/games" component={GameList} />
      <Route exact path="/games/promo/:id" component={Trailer} />
    </Switch>
  );
}

export default App;
