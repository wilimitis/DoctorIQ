import {
  PATIENT_DETAIL_SUBMIT,
  PATIENT_DETAIL_SUCCESS
} from '../actions/patientDetailActions';

const initialState = {
  patient: null
};

function patientDetailReducer(state = initialState, action) {
  switch(action.type) {
    case PATIENT_DETAIL_SUBMIT:
      return state;
    case PATIENT_DETAIL_SUCCESS:
      return Object.assign({}, state, {
        patient: action.patient
      });
    default:
      return state;
  }
}

export default patientDetailReducer;
