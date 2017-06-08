import React from 'react';
import { connect } from 'react-redux';
import { patientSearchSubmit } from '../actions/patientSearchActions';
import PatientSearchInput from '../components/PatientSearchInput';
import PatientSearchTable from '../components/PatientSearchTable';

const Patients = props => {
  const {
    handleChange,
    data,
    loading
  } = props;

  return (
    <div>
      <h2>Patients</h2>
      <PatientSearchInput handleChange={handleChange} />
      <PatientSearchTable
        data={data}
        loading={loading}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.patientSearch.patients,
    loading: state.patientSearch.isLoading
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
