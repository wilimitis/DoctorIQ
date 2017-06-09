import { createStore, combineReducers, applyMiddleware  } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import thunkMiddleware from 'redux-thunk';
import authReducer from './authReducer';
import patientSearchReducer from './patientSearchReducer';
import patientDetailReducer from './patientDetailReducer';
import patientSearchEpic from '../epics/patientSearchEpic';
import patientDetailEpic from '../epics/patientDetailEpic';

const rootReducer = combineReducers({
  auth: authReducer,
  form: reduxFormReducer,
  patientSearch: patientSearchReducer,
  patientDetail: patientDetailReducer
});

const rootEpic = combineEpics(
  patientSearchEpic,
  patientDetailEpic
);

const epicMiddleware = createEpicMiddleware(rootEpic);

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      epicMiddleware,
      thunkMiddleware
    )
  );
}
