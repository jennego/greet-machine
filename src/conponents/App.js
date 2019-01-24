import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import PhraseDisplay from './NameInsert/PhraseDisplay';
import NameInsert from './NameInsert/NameInsert.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1> Greeting Machine </h1>
        
      

      <NameInsert></NameInsert>

      <p>Select type of phrase</p>

      </div>
    );
  }
}

export default App;
