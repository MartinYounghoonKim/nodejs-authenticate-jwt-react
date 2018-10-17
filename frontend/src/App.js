import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { generating } from './test2.ts';

class App extends Component {
  test () {
      console.log(generating());
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
            <button onClick={() => this.test() }>123</button>
        </header>
      </div>
    );
  }
}

export default App;
