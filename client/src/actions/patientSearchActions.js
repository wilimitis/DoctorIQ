export const PATIENT_SEARCH_SUBMIT = 'PATIENT_SEARCH_SUBMIT';
export const PATIENT_SEARCH_SUCCESS = 'PATIENT_SEARCH_SUCCESS';

export function patientSearchSubmit(req) {
  // return dispatch => {
  //   return fetch('patients')
  //     .then(res => res.json())
  //     .then(json => dispatch(patientSearchSuccess(json)))
  //     .catch(err => console.log('search failed', err));
  // };
  return { type: PATIENT_SEARCH_SUBMIT, req };
};

export function patientSearchSuccess(res) {
  return { type: PATIENT_SEARCH_SUCCESS, res };
};