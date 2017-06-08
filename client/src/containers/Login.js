import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'material-ui/Card';
import { loginSubmit } from '../actions/authActions';
import LoginForm from '../components/LoginForm';

const Login = props => {
  const {
    onSubmit,
    error
  } = props;

  return (
    <Card className="Login-card">
      <h2>Welcome to DoctorIQ</h2>
      <LoginForm onSubmit={onSubmit}/>
      {
        error ? (
          <p>
            {error}
          </p>
        ) : null
      }
    </Card>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    error: state.auth.error
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (values) => {
      dispatch(loginSubmit(values));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
