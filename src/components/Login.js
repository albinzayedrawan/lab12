import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onLogin(this.state.username, this.state.password);
  }

  render() {
    return (
      <div className="container">
        <h2 className="my-4">Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input type="text" className="form-control" name="username" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" name="password" onChange={this.handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;