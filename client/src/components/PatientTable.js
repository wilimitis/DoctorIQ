import React from 'react';
import ReactTable from 'react-table';
import { Card } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import 'react-table/react-table.css'

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
          className="-highlight"
          columns={[{
            Header: 'Name',
            accessor: 'name'
          }, {
            Header: 'Age',
            accessor: 'age'
          }, {
            Header: 'Action',
            accessor: 'action',
            width: 100,
            Cell: row => (
              <RaisedButton>
                Detail
              </RaisedButton> 
            )
          }]}
          manual
          defaultPageSize={10}
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
