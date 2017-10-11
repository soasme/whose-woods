import React from 'react';
import { Link } from 'react-router-dom';
import { connect  } from 'react-redux'
import './WorkspacePicker.css';

const WorkspacePicker = (props) => {
  return (
    <div className="WorkspacePicker">
      <Link to="/workspace-manage">
        <span>[ </span>
        <span>{props.defaultWorkspace && props.defaultWorkspace.title || 'Loading...' }</span>
        <span> ]</span>
      </Link>
    </div>
  )
}

const mapStateToProps = state => ({
  defaultWorkspace: state.workspace.entities.find((ws) => ws.isDefault)
})

export default connect(
  mapStateToProps
)(WorkspacePicker)
