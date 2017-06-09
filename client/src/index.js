import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from './reducers/configureStore';
import Login from './containers/Login';
import PatientSearch from './containers/PatientSearch';
import PatientDetail from './containers/PatientDetail';
import './index.css';

injectTapEventPlugin();

const root = document.getElementById('root');

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route exact path="/patients" component={PatientSearch} />
          <Route path="/patients/:id" component={PatientDetail} />
        </div>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  root,
);
