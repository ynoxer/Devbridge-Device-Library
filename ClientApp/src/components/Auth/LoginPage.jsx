import React from 'react';
import { connect } from 'react-redux'
import * as actionCreators from './authActions';
 

class LoginPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: ''
    };
  }

  handleUserNameChange(e) {
    this.setState({ userName: e.target.value });
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  render(){
    const errorContainer = this.props.error 
      ? (<div className="alert alert-danger">{this.props.error}</div>) 
      : null; 

    const submitDisabled = !this.state.userName || !this.state.password || this.props.loading; 
    return(
      <div class="login__content">
          <h2 class="login__title">Welcome back!</h2>
          <p class="login__text">Enter your details below to access your account:</p>

          <form onSubmit={this.handleFormSubmit.bind(this)}>
            <label for="username-field" class="hidden-label">Username</label>
            <input
              type="text"
              placeholder="Username"
              class="input-field"
              id="username-field"
              value={this.state.userName}
              onChange={this.handleUserNameChange.bind(this)}
            />

            <label for="password-field" class="hidden-label">Password</label>
            <input
              type="password"
              placeholder="Password"
              class="input-field"
              id="password-field"
              value={this.state.password}
              onChange={this.handlePasswordChange.bind(this)}
            />
            {errorContainer}
            <button type="submit" class="form-button form-button--primary" disabled={submitDisabled}>
              {this.props.loading ? 'Logging in...' : 'Log in'} 
            </button>
          </form>
      </div>
    )
  }

}

const mapStateToProps = state => ({ 
  loading: state.auth.isLoggingIn, 
  error: state.auth.loginError 
});

const mapDispatchToProps = {
  ...actionCreators
}

export default connect(mapStateToProps ,mapDispatchToProps)(LoginPage);
