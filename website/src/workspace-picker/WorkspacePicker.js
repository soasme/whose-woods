import React from 'react';
import { Link } from 'react-router-dom';
import { connect  } from 'react-redux'
import './WorkspacePicker.css';

const WorkspacePicker = (props) => {
  return (
    <div className="WorkspacePicker">
      <span>[ </span>
      <span>{props.defaultWorkspace ? props.defaultWorkspace.title : 'Loading...' }</span>
      <span> ]</span>
      <div>
        <Link to="/workspace-manage">manage</Link>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  defaultWorkspace: state.workspace.entities.find((ws) => ws.isDefault)
})

export default connect(
  mapStateToProps
)(WorkspacePicker)
