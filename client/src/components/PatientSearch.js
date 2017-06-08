import React from 'react';
import { Card } from 'material-ui/Card';
import TextField from 'material-ui/TextField';

const PatientSearch = props => {
  const {
    handleChange
  } = props;
  
  return (
    <Card className="Patient-search">
      <TextField 
        className="Patient-search-box" 
        hintText="Search for a patient"
        onChange={handleChange}
      />
    </Card>
  );
};

export default PatientSearch;