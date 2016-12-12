import React from 'react';
import './App.css';
import Game from './Game';
import { Header } from './Header';

const App = (props) => {
  return (
    <div id="gameBody">
      <Header />
      <Game />
    </div>
  );
}

export default App;
