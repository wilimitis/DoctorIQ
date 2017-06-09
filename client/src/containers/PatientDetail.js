import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch
} from 'react-router-dom';
import { Card} from 'material-ui/Card';
import { patientDetailSubmit } from '../actions/patientDetailActions';
import PatientDetailOverview from '../components/PatientDetailOverview';
import PatientDetailSchedule from '../components/PatientDetailSchedule';

class PatientDetail extends Component {
  componentDidMount() {
    this.props.dispatch(patientDetailSubmit(this.props.match.params.id));
  }

  render() {
    const id = this.props.match.params.id,
      paths = {
        patients: "/patients",
        overview: `/patients/${id}`,
        schedule: `/patients/${id}/schedule`,
        attachments: `/patients/${id}/attachments`
      };

    return (
      <div>
        <Card>
          <div className="navbar">
            <ul className="header">
              <li><Link style={{color: '#777'}} to={paths.patients}>patients</Link></li>
              <li><Link to={paths.overview}>overview</Link></li>
              <li><Link to={paths.schedule}>schedule</Link></li>
              <li><Link to={paths.attachments}>attachments</Link></li>
            </ul>
          </div>

          <div style={{padding: '1em'}}>
            <Switch>
              <Route exact path={`/patients/:id`} render={
                () => <PatientDetailOverview patient={this.props.patient} /> } />
              <Route exact path={`/patients/:id/schedule`} render={
                () => <PatientDetailSchedule patient={this.props.patient} /> } />
              <Route exact path={`/patients/:id/attachments`} render={
                () => <h3>attachments</h3>} />
            </Switch>
          </div>
        </Card>
      </div>
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
