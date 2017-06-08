import React, { Component } from 'react';
import LoginForm from '../components/LoginForm'
import './LoginPage.css';

function logValues(values) {
  console.log(values);
}

class LoginPage extends Component {
  render() {
    return (
      <div className="Login-page">
        <div className="Login-page-header">
          <h2>DoctorIQ</h2>
        </div>
        <LoginForm onSubmit={logValues}/>
      </div>
    );
  }
}

export default LoginPage;
