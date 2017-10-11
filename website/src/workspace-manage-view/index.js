import React, { Component } from 'react';
import { bindActionCreators  } from 'redux'
import { connect  } from 'react-redux'
import { requestProfile, } from '../modules/authorization'
import { syncWorkspaces } from '../modules/workspace'
import './style.css';

class WorkspaceManageView extends Component {
  componentDidMount() {
    if (this.props.workspaces.length === 0) {
      this.props.requestProfile()
        .then(() => this.props.syncWorkspaces())
    }
  }

  render() {
    console.log(this.props)
    return (
      <div className="WorkspaceManage">
      {
        this.props.workspaces.map((workspace, i) =>
          <div className="Workspace" key={workspace.id}
            onClick={() => this.props.history.push('/workspace')}>
            <p>{workspace.title}</p>
          </div>
        )
      }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  workspaces: state.workspace.entities
})

const mapDispatchToProps = dispatch => bindActionCreators({
  requestProfile,
  syncWorkspaces,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkspaceManageView)
