import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Card } from 'material-ui/Card';
import { loginSubmit } from '../actions/authActions';
import LoginForm from '../components/LoginForm';

const Login = props => {
  const {
    isAuthenticated,
    handleSubmit,
    error,
    grant,
    id
  } = props;

  return (
    isAuthenticated ? (
      <Redirect to={grant === "doctor" ? "/patients" : `/patients/${id}`} />
    ) : (
    <Card className="Login-card">
      <h2>Welcome to DoctorIQ</h2>
      <LoginForm onSubmit={handleSubmit}/>
      {
        error ? (
          <p>
            {error}
          </p>
        ) : null
      }
    </Card>
    )
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    error: state.auth.error,
    grant: state.auth.grant,
    id: state.auth.id
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: (values) => {
      dispatch(loginSubmit(values));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
