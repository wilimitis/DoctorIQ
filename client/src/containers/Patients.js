import React from 'react';
import { connect } from 'react-redux';
import { patientSearchSubmit } from '../actions/patientSearchActions';
import PatientSearch from '../components/PatientSearch';
import PatientTable from '../components/PatientTable';

const Patients = props => {
  const {
    handleChange
  } = props;

  return (
    <div>
      <PatientSearch handleChange={handleChange}/>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleChange: (event) => {
      console.log(event.target.value);
      dispatch(patientSearchSubmit(event.target.value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Patients);
