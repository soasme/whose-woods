import React, { Component } from 'react';
import { connect  } from 'react-redux';
import { bindActionCreators } from 'redux'
import { updateRecord } from '../modules/record'
import RecordForm from './form'
import './Record.css';

class Record extends Component {

  toHumanTime() {
    var date = new Date(this.props.record.created_at * 1000)
    return date.toLocaleString('en-GB')
  }

  updateRecord(values) {
    this.props.updateRecord(this.props.record.id, values)
  }

  render() {
    return (
      <div className="Record" data-id={this.props.record.id}>
        <div className="Time">{this.toHumanTime()}</div>
        <RecordForm record={this.props.record} onSubmit={(v) => this.updateRecord(v)}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
  updateRecord,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Record)
