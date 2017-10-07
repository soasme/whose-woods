import React, { Component } from 'react';
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
        <div className="Operations">
          <span>Delete</span>
        </div>
        <form onSubmit={this.toEditingState}>
          <div>
            <textarea className="Content" defaultValue={this.props.record.content} />
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    )
  }
}
