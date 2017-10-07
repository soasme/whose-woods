import React, { Component } from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import './RecordEditor.css'

export default class RecordEditor extends Component {

  static defaultProps = {
    defaultValue: ''
  }

  constructor(props) {
    super(props);
    this.state = {
      submitting: false,
      content: '',
    }
  }

  render() {
    const placeholder = this.props.placeholder || 'Enter a record here.'
    return (
      <div className="RecordEditor">
        <TextareaAutosize id="Content" className="Workspace"
          defaultValue={this.props.defaultValue}
          placeholder={placeholder} />
      </div>
    )
  }
}

