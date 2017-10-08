import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './WorkspacePicker.css';

export default class WorkspacePicker extends Component {

  static defaultProps = {
    title: 'Log',
  }

  render() {
    return (
      <div className="WorkspacePicker">
        <Link to="/workspace-manage">
          <span>[ </span>
          <span>{this.props.title}</span>
          <span> ]</span>
        </Link>
      </div>
    )
  }
}
