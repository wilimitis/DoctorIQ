import { connect } from 'react-redux';
import { loginSubmit } from '../actions/authActions';
import LoginForm from '../components/LoginForm';

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (values) => {
      dispatch(loginSubmit(values));
    }
  };
};

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

export default Login;
