import React, { Component } from 'react';
import { connect } from 'react-redux';
import { patientSearchSubmit } from '../actions/patientSearchActions';
import PatientSearchInput from '../components/PatientSearchInput';
import PatientSearchTable from '../components/PatientSearchTable';

class PatientSearch extends Component {
  componentDidMount() {
    this.props.dispatch(patientSearchSubmit());
  }

  render() {
    return (
      <div>
        <h2>Patients</h2>
        <PatientSearchInput handleChange={this.props.handleChange} />
        <PatientSearchTable
          data={this.props.data}
          loading={this.props.loading}
        />
      </div>
    );
  };
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
    },
    dispatch
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PatientSearch);
