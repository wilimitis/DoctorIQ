import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = props => {
  const {
    handleSubmit,
    pristine,
    reset,
    submitting
  } = props;
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <Field
            name="email"
            component="input"
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
  );
};

export default reduxForm({
  form: 'login', // a unique identifier for this form
})(LoginForm);
