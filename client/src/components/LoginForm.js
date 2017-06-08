import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField'
import './LoginForm.css';

const renderTextField = ({input, label, meta: {touched, error}, ...custom}) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

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
              component="input"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            disabled={pristine || submitting}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'login', // a unique identifier for this form
})(LoginForm);
