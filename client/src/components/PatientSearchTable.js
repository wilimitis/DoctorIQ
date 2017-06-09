import React from 'react';
import ReactTable from 'react-table';
import { Card } from 'material-ui/Card';
import MdEdit from 'react-icons/lib/md/edit';
import { Link } from 'react-router-dom';
import 'react-table/react-table.css';

const PatientTable = props => {
  const {
    data,
    loading
  } = props;

  return (
    <Card className="Patient-table">
      <div className="table-wrap">
        <ReactTable
          className="-highlight"
          columns={[{
            Header: 'Name',
            accessor: 'name',
          }, {
            Header: 'Age',
            accessor: 'age',
            width: 100
          }, {
            Header: '',
            accessor: 'action',
            width: 70,
            Cell: row => {
              console.log(row);
              return (
                <div style={{textAlign: 'center'}}>
                  <Link to={`/patients/${row.original.id}`}>
                    <MdEdit style={{cursor: 'pointer'}}/>
                  </Link>
                </div>
              )
            }
          }]}
          sortable={false}
          defaultPageSize={10}
          data={data}
          loading={loading}
        />
      </div>
    </Card>
  );
};

export default PatientTable;
