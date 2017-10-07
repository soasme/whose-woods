import React, { Component } from 'react';
import './WorkspacePicker.css';

export default class WorkspacePicker extends Component {

  static defaultProps = {
    title: 'Log',
  }

  render() {
    return (
      <div className="WorkspacePicker">
        <span>[ </span>
        <span>{this.props.title}</span>
        <span> ]</span>
      </div>
    )
  }
}
