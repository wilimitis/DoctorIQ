import React from 'react';
import { Field, reduxForm } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import { renderTextField } from '../utils/forms';

const LoginForm = props => {
  const {
    handleSubmit,
    pristine,
    reset,
    submitting
  } = props;

  return (
    <div className="Login-container">
      <form onSubmit={handleSubmit} className="Login-form">
        <div>
          <div>
            <Field
              name="email"
              component={renderTextField}
              type="email"
              placeholder="Email"
            />
          </div>
          <div>
            <Field
              name="password"
              component={renderTextField}
              type="password"
              placeholder="Password"
            />
          </div>
        </div>
        <div>
          <RaisedButton
            type="submit"
            disabled={pristine || submitting}>
            Login
          </RaisedButton>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'login',
})(LoginForm);
