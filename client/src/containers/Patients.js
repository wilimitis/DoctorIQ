import React from 'react';
import { connect } from 'react-redux';
import { patientSearchSubmit } from '../actions/patientSearchActions';
import PatientSearch from '../components/PatientSearch';
import PatientTable from '../components/PatientTable';

const Patients = props => {
  const {
    handleChange,
    data,
    pages,
    loading,
    fetchData
  } = props;

  return (
    <div>
      <PatientSearch handleChange={handleChange} />
      <PatientTable 
        data={data} 
        pages={pages} 
        loading={loading} 
        fetchData={fetchData}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    data: [
      {
        name: 'ksjfn',
        age: '2342'
      },
      {
        name: 'asdasd',
        age: '6243'
      }
    ],
    pages: null,
    loading: false
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
