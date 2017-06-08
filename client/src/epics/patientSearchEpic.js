import 'rxjs'; // todo: add individual imports for smaller bundle size
import { 
  PATIENT_SEARCH_SUBMIT,
  PATIENT_SEARCH_SUCCESS
} from '../actions/patientSearchActions';

const url = 'https://api.github.com/users/';

const patientSearchEpic = action$ =>
  action$.ofType(PATIENT_SEARCH_SUBMIT)
    .debounceTime(750)
    .switchMap(action => fetch(`${url}${action.req}`))
    .map(res => ({ type: PATIENT_SEARCH_SUCCESS, res: res}));

export default patientSearchEpic;