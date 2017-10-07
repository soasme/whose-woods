import React, { Component } from 'react';
import RecordEditor from '../record-editor/RecordEditor';
import './Record.css';

export default class Record extends Component {

  static defaultProps = {
    record: {
      id: 0,
      content: '',
      created: 0
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      submitting: false,
    }
  }

  toHumanTime() {
    var date = new Date(this.props.record.created * 1000)
    return date.toLocaleString('en-GB')
  }

  toEditingState(e) {
    e.preventDefault()
    console.log('hello world')
  }

  render() {
    return (
      <div className="Record" data-id={this.props.record.id}>
        <div className="Time">{this.toHumanTime()}</div>
        <div>
          <RecordEditor defaultValue={this.props.record.content} />
        </div>
      </div>
    )
  }
}
