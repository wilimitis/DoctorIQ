import 'rxjs'; // todo: add individual imports for smaller bundle size
import { ajax } from 'rxjs/observable/dom/ajax';
import {
  PATIENT_SEARCH_SUBMIT,
  PATIENT_SEARCH_LOADING,
  PATIENT_SEARCH_FAILURE,
  PATIENT_SEARCH_SUCCESS
} from '../actions/patientSearchActions';

const patientSearchEpic = action$ =>
  action$.ofType(PATIENT_SEARCH_SUBMIT)
    .debounceTime(750)
    .switchMap(action => {
      return ajax.getJSON(`patients/`)
    })//${action.req}
    .map(res => {
      if (res)
        return { type: PATIENT_SEARCH_SUCCESS, patients: res}
      else
        throw new Error('Network response was not ok.');
    })
    .catch(err => ({ type: PATIENT_SEARCH_FAILURE, res: err}));

export default patientSearchEpic;
