import 'rxjs'; // todo: add individual imports for smaller bundle size
import { ajax } from 'rxjs/observable/dom/ajax';
import {
  PATIENT_DETAIL_SUBMIT,
  PATIENT_DETAIL_FAILURE,
  PATIENT_DETAIL_SUCCESS
} from '../actions/patientDetailActions';

const patientDetailEpic = action$ =>
  action$.ofType(PATIENT_DETAIL_SUBMIT)
    .switchMap(action => {
      return ajax.getJSON(`/patients/?id=${action.id}`)
    })
    .map(res => {
      console.log(res);
      if (res)
        return { type: PATIENT_DETAIL_SUCCESS, patient: res}
      else
        throw new Error('Network response was not ok.');
    })
    .catch(err => ({ type: PATIENT_DETAIL_FAILURE, res: err}));

export default patientDetailEpic;
