import 'whatwg-fetch';
import {
  LOGIN_SUBMIT,
  LOGIN_FAILURE,
  LOGIN_SUCCESS
} from '../actions/authActions';
import { BrowserRouter } from 'react-router-dom';

const initialState = {
};

function authReducer(state = initialState, action) {
  console.log(state, action);
  switch (action.type) {
    case LOGIN_SUBMIT:
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        error: action.err
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        token: action.res,
        isAuthenticated: true
      });
    default:
      return state;
  }
}

export default authReducer;
