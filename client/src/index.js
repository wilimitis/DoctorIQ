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
import { Card } from 'material-ui/Card';
import store from './reducers/store';
import Login from './containers/Login';
import './index.css';

const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <MuiThemeProvider>
        <Card className="Login-card">
          <h2>Welcome to DoctorIQ</h2>
          <Login />
        </Card>
      </MuiThemeProvider>
    </Router>
  </Provider>,
  root,
);
