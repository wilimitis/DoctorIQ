import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import { Card} from 'material-ui/Card';
import { patientDetailSubmit } from '../actions/patientDetailActions';

class PatientDetail extends Component {
  componentDidMount() {
    this.props.dispatch(patientDetailSubmit(this.props.match.params.id));
  }

  render() {
    const root = this.props.location.pathname;
    return (
      <Router>
        <div>
          <Card>
            <h2>{this.props.match.id}</h2>
            <ul className="header">
              <li><Link to={`${root}`}>information</Link></li>
              <li><Link to={`${root}/schedule`}>schedule</Link></li>
              <li><Link to={`${root}/attachments`}>attachments</Link></li>
            </ul>

            <Route exact path={`${root}`} render={() => <h3>information</h3>} />
            <Route exact path={`${root}/schedule`} render={() => <h3>schedule</h3>} />
            <Route exact path={`${root}/attachments`} render={() => <h3>attachments</h3>} />
          </Card>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    patient: state.patientDetail.patient
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PatientDetail);
