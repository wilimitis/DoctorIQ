import {
  PATIENT_SEARCH_SUBMIT,
  PATIENT_SEARCH_FAILURE,
  PATIENT_SEARCH_SUCCESS
} from '../actions/patientSearchActions';

const initialState = {
  patients: [],
  pages: null,
  isLoading: false
};

function patientSearchReducer(state = initialState, action) {
  switch (action.type) {
    case PATIENT_SEARCH_SUBMIT:
      return Object.assign({}, state, {
        isLoading: true
      });
    case PATIENT_SEARCH_FAILURE:
      return Object.assign({}, state, {
        isLoading: false
      });
    case PATIENT_SEARCH_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        patients: action.patients
      });
    default:
      return state;
  }
}

export default patientSearchReducer;
