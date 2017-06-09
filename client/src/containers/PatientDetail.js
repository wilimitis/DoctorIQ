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
import { Card } from 'material-ui/Card';
import download from 'downloadjs';
import { patientDetailSubmit } from '../actions/patientDetailActions';
import PatientDetailOverview from '../components/PatientDetailOverview';
import PatientDetailSchedule from '../components/PatientDetailSchedule';
import Attachments from '../containers/Attachments';
import { uploadDocumentRequest, deleteDocumentRequest } from '../actions/attachmentUploadActions';

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
              {
                this.props.grant === 'doctor'
                  ? <li><Link style={{color: '#777'}} to={paths.patients}>patients</Link></li>
                  : null
              }
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
                () => <Attachments 
                        attachments={this.props.attachments} 
                        handleFileUpload={this.props.handleFileUpload} 
                        handleClick={this.props.handleClick} 
                        handleDelete={this.props.handleDelete} /> } />
            </Switch>
          </div>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    patient: state.patientDetail.patient,
    attachments: state.patientDetail.attachments,
    grant: state.auth.grant,
    id: state.auth.id
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch,
    handleFileUpload: (file) => {
      dispatch(uploadDocumentRequest(file, ownProps.match.params.id));
    },
    handleClick: (e, path, name) => {
      download(`${window.location.origin}/${path}`.replace('\\', '/'), name);
    },
    handleDelete: (e, path) => {
      dispatch(deleteDocumentRequest(path, ownProps.match.params.id));
    }
  };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { id } = stateProps;

  return {
    ...ownProps,
    
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PatientDetail);
