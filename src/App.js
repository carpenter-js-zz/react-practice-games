import React, { Component } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import Game from './Game';

class App extends Component {
  render() {
    return (
      <div className="App">  
        <p>Hello, world!</p>
        <Game />
      </div>
    );
  }
}

export default App;
