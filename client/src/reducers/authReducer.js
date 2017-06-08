import {
  LOGIN_SUBMIT,
  LOGIN_FAILURE,
  LOGIN_SUCCESS
} from '../actions/authActions';

const initialState = {
};

function authReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case LOGIN_SUBMIT:
    case LOGIN_FAILURE:
    case LOGIN_SUCCESS:
    default:
      return state;
  }
}

export default authReducer;
