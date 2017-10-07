import React, { Component } from 'react';
import Worklog from './worklog/Worklog';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">[ Life ] Woods</h1>
        </header>
        <Worklog />
      </div>
    );
  }
}

export default App;
