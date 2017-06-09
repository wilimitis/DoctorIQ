import React from 'react';
import { Card } from 'material-ui/Card';
import TextField from 'material-ui/TextField';

export default props => {
  const {
    handleChange
  } = props;

  return (
    <Card className="Patient-search">
      <TextField
        className="Patient-search-input"
        hintText="Search for a patient"
        onChange={handleChange}
      />
    </Card>
  );
};
