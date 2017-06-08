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
import configureStore from './reducers/configureStore';
import Login from './containers/Login';
import './index.css';

const root = document.getElementById('root');

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router>
        <Route path="/" component={Login} />
      </Router>
    </MuiThemeProvider>
  </Provider>,
  root,
);
