import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { requestProfile, } from '../modules/authorization'
import { syncWorkspaces } from '../modules/workspace'
import { fetchRecords } from '../modules/record'

import NewRecord from '../new-record/NewRecord'
import WorkspacePicker from '../workspace-picker/WorkspacePicker'
import Record from '../record/Record'
import './style.css'

class WorkspaceView extends Component {
  componentDidMount() {
    this.props.requestProfile()
      .then(() => this.props.syncWorkspaces())
      .then(() => this.props.fetchRecords())
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.fetchRecordsStatus === 'waiting') {
      this.props.fetchRecords()
    }
  }

  render() {
    const props = this.props;
    if (props.isLoadingProfile) {
      return <div>Loading...</div>
    }
    if (props.loadProfileError) {
      if (!props.isAuthorized) {
        return <Redirect to="/login" />
      }
      return <div>Something went wrong! {props.loadError}</div>
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"><WorkspacePicker /></h1>
        </header>
        <div className="Worklog">
          <NewRecord />
          <div className="Records">
          {
            props.records.map((record, i) =>
              <Record key={i} record={record} />
            )
          }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuthorized: state.authorization.isAuthorized,
  isLoadingProfile: state.authorization.isLoadingProfile,
  isLoadedProfile: state.authorization.isLoadedProfile,
  loadProfileError: state.authorization.loadProfileError,
  userProfile: state.authorization.userProfile,
  records: state.record.entities || [],
  fetchRecordsStatus: state.record.fetchStatus,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  requestProfile,
  syncWorkspaces,
  fetchRecords,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WorkspaceView)
