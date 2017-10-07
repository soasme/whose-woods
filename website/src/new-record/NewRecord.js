import React, { Component } from 'react';
import './NewRecord.css';

export default class NewRecord extends Component {

  toSubmittingState(e) {
    e.preventDefault()
    console.log(e)
  }

  render() {
    return (
      <div className="NewRecord">
        <div className="Tip">
          Click to add ...
        </div>
      </div>
    )
  }
}
