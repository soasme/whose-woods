import React, { Component } from 'react';
import { Link  } from 'react-router-dom';
import './style.css';

export default class LandingView extends Component {

  render() {
    return (
      <div className="Landing App">
        <header className="App-header">
          <h1 className="App-title">Whose Woods</h1>
        </header>
        <div className="Entry">
          <h2>Track what you have done</h2>
          <h3>Always know you are on the right track.</h3>
          <Link to="/app" className="LaunchApp">
          <button>
            Launch App
          </button>
          </Link>
        </div>
      </div>
    )
  }
}
