export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export function loginSubmit(req) {
  return { type: LOGIN_SUBMIT, req };
};

export function loginFailure(res) {
  return { type: LOGIN_FAILURE, res };
};

export function loginSuccess(res) {
  return { type: LOGIN_SUCCESS, res };
};
