import React, { Component } from 'react';
import AuthForm from './AuthForm';

class Login extends Component {

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <AuthForm formName='Login' changeInputs={this.handleChange} />
        <h6>Register <button onClick={this.props.toggleForm}>HERE</button> If you don't have account</h6>
      </div>
    )
  }
}

export default Login;