import React, { Component } from 'react';
import './style.css';

export default class WorkspaceManageView extends Component {

  static defaultProps = {
    workspaces: []
  }

  constructor(props) {
    super(props);
    this.current = 1;
    this.workspaces = [
      {id: 1, title: 'Whose Woods'},
      {id: 2, title: 'Life'},
      {id: 3, title: 'Workday'},
    ]
  }

  choose(workspace) {
    return () => {
      console.log('choose', workspace);
      this.props.history.push('/workspace');
    }
  }

  renderChosenIndicator(workspace) {
    if (workspace.id === this.current) {
      return 'Chosen Candidate';
    }
    return 'Candidate';
  }



  render() {
    return (
      <div className="WorkspaceManage">
        <ul className="Workspaces">
        {
          this.workspaces.map((workspace, i) =>
            <div className="Workspace" key={workspace.id}
              onClick={this.choose(workspace)}>
              <p className={this.renderChosenIndicator(workspace)}>
                {workspace.title}
              </p>
            </div>
          )
        }
        </ul>
      </div>
    )
  }
}
