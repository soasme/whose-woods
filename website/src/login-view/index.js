import React, { Component } from 'react';

export default class LoginView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      submitting: false,
    }
  }

  changeToSubmittingState(e) {
    console.log("hello world");
    e.preventDefault();
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.changeToSubmittingState}>
          <div>
            Username: <input type="text" name="username" />
          </div>
          <div>
            Password: <input type="password" name="password" />
          </div>
          <div>
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    )
  }
}

