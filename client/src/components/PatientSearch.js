import React from 'react';
import { Card } from 'material-ui/Card';
import TextField from 'material-ui/TextField';

const PatientSearch = props => {
  return (
    <Card className="Patient-search">
      <TextField className="Patient-search-box" hintText="Search for a patient" />
    </Card>
  );
}

export default PatientSearch;