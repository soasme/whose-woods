import React, { Component } from 'react';
import './Worklog.css';

export default class Worklog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      submitting: false,
    }
  }

  render() {
    return (
      <div className="Worklog">
        <div className="AddWorklog">
          Click to add ...
        </div>
        <div className="Records">
        </div>
      </div>
    )
  }
}


