import React, { Component } from 'react';
import NewRecord from '../new-record/NewRecord';
import WorkspacePicker from '../workspace-picker/WorkspacePicker';
import Record from '../record/Record';
import './style.css';

export default class Workspace extends Component {

  constructor(props) {
    super(props);
    this.state = {
      submitting: false,
    }
    // TODO: Next we need to move this into db.json.
    // and change this to props.records
    this.records = [
      {id: 1, content: 'hello world hello world hello world hello world abcdefghigh', created: 1507349064},
      {id: 2, content: 'hey babe', created: 1507359064},
    ]
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"><WorkspacePicker /></h1>
        </header>
        <div className="Worklog">
          <NewRecord />
          <div className="Records">
          {
            this.records.map((record, i) =>
              <Record key={i} record={record} />
            )
          }
          </div>
        </div>
      </div>
    )
  }
}

