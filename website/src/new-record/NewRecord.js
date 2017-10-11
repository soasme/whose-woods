import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addRecord } from '../modules/record'
import './NewRecord.css';

const NewRecord = props => {
  return (
    <div className="NewRecord"
      onClick={() => props.addRecord()}>
      <div className="Tip">
      { props.isAddingRecord ? 'Adding ...' : 'Click to add' }
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  isAddingRecord: state.record.isAdding,
  isAddedRecord: state.record.isAdded,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addRecord,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewRecord)
