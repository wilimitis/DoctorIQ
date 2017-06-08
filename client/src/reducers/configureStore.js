import { createStore, combineReducers, applyMiddleware  } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import thunkMiddleware from 'redux-thunk';
import authReducer from './authReducer';
import patientSearchReducer from './patientSearchReducer';
import patientSearchEpic from '../epics/patientSearchEpic';

const rootReducer = combineReducers({
  auth: authReducer,
  form: reduxFormReducer,
  patientSearch: patientSearchReducer
});

const rootEpic = combineEpics(
  patientSearchEpic
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
