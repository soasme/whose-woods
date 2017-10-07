import React, { Component } from 'react';
import './Worklog.css';
import Record from '../record/Record';

export default class Worklog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      submitting: false,
    }
    this.records = [
      {id: 1, content: 'hello world hello world hello world hello world abcdefghigh', created: 1507349064},
      {id: 2, content: 'hey babe', created: 1507359064},
    ]
  }

  render() {
    return (
      <div className="Worklog">
        <div className="AddWorklog">
          Click to add ...
        </div>
        <div className="Records">
        {
          this.records.map((record, i) =>
            <Record key={i} record={record} />
          )
        }
        </div>
      </div>
    )
  }
}


