export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export function loginSubmit(req) {
  console.log(req);
  return dispatch => {
    return fetch('users')
      .then(res => res.json())
      .then(json => dispatch(loginSuccess(json)))
      .catch(err => dispatch(loginFailure('error')));
  };
};

export function loginFailure(err) {
  return { type: LOGIN_FAILURE, err };
};

export function loginSuccess(res) {
  return { type: LOGIN_SUCCESS, res };
};
