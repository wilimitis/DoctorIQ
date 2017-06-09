export const PATIENT_DETAIL_SUBMIT = 'PATIENT_DETAIL_SUBMIT';
export const PATIENT_DETAIL_FAILURE = 'PATIENT_DETAIL_FAILURE';
export const PATIENT_DETAIL_SUCCESS = 'PATIENT_DETAIL_SUCCESS';

export function patientDetailSubmit(id) {
  return { type: PATIENT_DETAIL_SUBMIT, id: id };
};

export function patientDetailSuccess(res) {
  return { type: PATIENT_DETAIL_SUCCESS, res };
};
