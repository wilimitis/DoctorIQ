export const PATIENT_SEARCH_SUBMIT = 'PATIENT_SEARCH_SUBMIT';
export const PATIENT_SEARCH_FAILURE = 'PATIENT_SEARCH_FAILURE';
export const PATIENT_SEARCH_SUCCESS = 'PATIENT_SEARCH_SUCCESS';

export function patientSearchSubmit(req) {
  return { type: PATIENT_SEARCH_SUBMIT, req };
};

export function patientSearchFailure(err) {
  return { type: PATIENT_SEARCH_FAILURE, err };
};

export function patientSearchSuccess(res) {
  return { type: PATIENT_SEARCH_SUCCESS, res };
};
