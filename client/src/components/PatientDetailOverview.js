import React from 'react';

export default props => {
  const patient = props.patient;

  return (
    patient ?
    <div>
      <h2>{patient.name}</h2>
      <p>
        Age: {patient.age}
      </p>
      <p>
        Email: {patient.email}
      </p>
      <p>
        Address: {patient.address}
      </p>
      <p>
        Phone: {patient.phone}
      </p>
    </div> : <p>loading...</p>
  );
};
