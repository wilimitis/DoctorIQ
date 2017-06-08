import React from 'react';

export default props => {
  return (
    <input
      className="table-filter-input"
      placeholder={props.placeholder}
      onChange={event => props.onChange(event.target.value)}
    />
  );
};
