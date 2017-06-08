import 'rxjs'; // todo: add individual imports for smaller bundle size
import {
  PATIENT_SEARCH_SUBMIT,
  PATIENT_SEARCH_FAILURE,
  PATIENT_SEARCH_SUCCESS
} from '../actions/patientSearchActions';

const patientSearchEpic = action$ =>
  action$.ofType(PATIENT_SEARCH_SUBMIT)
    .debounceTime(750)
    .switchMap(action => fetch(`patients/${action.req}`))
    .map(res => {
      if (res.ok) return { type: PATIENT_SEARCH_SUCCESS, res: res};
      else        return { type: PATIENT_SEARCH_FAILURE, res: res};
    });

export default patientSearchEpic;
