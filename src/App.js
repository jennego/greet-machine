import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            <li>Will try foundation</li>
            <li> Write Name in field </li>
            <li> Buttons to generate type of message? Menu </li>
            <li> Text to speech (responsivevoicejs?) </li>
            <li> Easy copy-paste</li>
          </ul>
          <p>Please note that greetings were procured from the web and I am not an expert greeter in any stretch of the imagination</p>
        </header>
      </div>
    );
  }
}

export default App;
