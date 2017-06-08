import 'whatwg-fetch';
import {
  LOGIN_SUBMIT,
  LOGIN_FAILURE,
  LOGIN_SUCCESS
} from '../actions/authActions';

const initialState = {
};

async function loginSubmit() {
  const res = await fetch('www.google.com');
  console.log(res);
}

function authReducer(state = initialState, action) {
  console.log(state, action);
  switch (action.type) {
    case LOGIN_SUBMIT:
    case LOGIN_FAILURE:
    case LOGIN_SUCCESS:
      loginSubmit().then();
      return Object.assign({}, state, {
        authToken: 'token'
      });
    default:
      return state;
  }
}

export default authReducer;
