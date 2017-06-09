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
  switch (action.type) {
    case LOGIN_SUBMIT:
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        error: action.err
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        token: action.res.token,
        grant: action.res.grant,
        id: action.res.id,
        isAuthenticated: true
      });
    default:
      return state;
  }
}

export default authReducer;
