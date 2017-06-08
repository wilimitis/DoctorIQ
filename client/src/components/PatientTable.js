import React from 'react';
import ReactTable from 'react-table';
import { Card } from 'material-ui/Card';

const PatientTable = props => {
  const {
    data,
    pages,
    loading,
    fetchData
  } = props;

  return (
    <Card className="Patient-table">
      <div className="table-wrap">
        <ReactTable
          className="-striped -highlight"
          columns={[{
            Header: 'Name',
            accessor: 'name'
          }, {
            Header: 'Age',
            accessor: 'age'
          }]}
          manual
          defaultPageSize={10}
          filterable
          data={data}
          pages={pages}
          loading={loading}
          onFetchData={fetchData}
        />
      </div>
    </Card>
  );
};

export default PatientTable;