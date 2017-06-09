import axios from 'axios';

export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export function loginSubmit(req) {
  console.log(req);
  return dispatch => {
    return axios.post('token', req)
      .then(res => dispatch(loginSuccess(res.data)))
      .catch(err => dispatch(loginFailure('unauthorized')));
  };
};

export function loginFailure(err) {
  return { type: LOGIN_FAILURE, err };
};

export function loginSuccess(res) {
  return { type: LOGIN_SUCCESS, res };
};
