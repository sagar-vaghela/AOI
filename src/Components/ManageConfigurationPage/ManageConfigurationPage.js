import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from '../Button';
import OFDMTab from '../RunningConfigPages/Channels/OFDMTab/OFDMTab'
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';

export default function ManageConfigurationPage() {

  const tablerow = [
    { no: 1, name: "test1.db1", editable: 'Yes' },
    { no: 2, name: "test1.db", editable: 'No' },
    { no: 3, name: "test1.db", editable: 'Yes' },
    { no: 4, name: "test1.db", editable: 'No' },
    { no: 5, name: "test1.db", editable: 'Yes' },
    { no: 6, name: "test1.db", editable: 'No' },
    { no: 7, name: "test1.db", editable: 'Yes' },
    { no: 8, name: "test1.db", editable: 'No' },
    { no: 9, name: "test1.db", editable: 'Yes' },
    { no: 10, name: "test1.db", editable: 'Yes' },
    { no: 11, name: "test1.db", editable: 'No' },
    { no: 12, name: "test1.db", editable: 'Yes' },
    { no: 13, name: "test1.db", editable: 'No' },
    { no: 14, name: "test1.db", editable: 'Yes' },
    { no: 15, name: "test1.db", editable: 'No' },
    { no: 16, name: "test1.db", editable: 'Yes' },
    { no: 17, name: "test1.db", editable: 'No' },
    { no: 18, name: "test1.db", editable: 'Yes' },
    { no: 19, name: "test1.db", editable: 'No' }
  ]
  const columns = [
    {
      dataField: 'no',
      text: 'No'
    },
    {
      dataField: 'name',
      text: 'Name'
    },
    {
      dataField: 'editable',
      text: 'Editable'
    }
  ];
  return (
    <div className='channel_tab '>
      <div className='border border-dark mb-4'>
        <div className='table_top_bar border-bottom border-dark d-flex justify-content-between align-items-center p-2'>
          <h5 className='mb-0'>Current Configuration files</h5>
          <div className="searchbar p-2">
            <label htmlFor="search">Search:</label>
            <input type="text" id='search' />
          </div>
        </div>
        {/* <Table responsive bordered className='main_table mb-0' >
          <thead>
            <tr>
              <th className='col-2'>No</th>
              <th className='col-6'>Name</th>
              <th className='col-4'>Editable</th>
            </tr>
          </thead>
          <tbody className='bg-white'>
            {tablerow.map((item) => (
              <tr key={item.no}>
                <td className='col-2'>{item.no}</td>
                <td className='col-6'>{item.name}</td>
                <td className='col-4'>{item.editable}</td>
              </tr>
            ))}
          </tbody>
        </Table> */}
        <BootstrapTable
          keyField="no"
          data={tablerow}
          columns={columns}
          cellEdit={cellEditFactory({ mode: 'dbclick' })}
        />
      </div>
      <div className="action mb-4 border border-dark p-2">
        <h5 className='border-bottom border-dark d-inline-block fw-bold'>Action</h5>
        <div className="action_btns justify-content-between">
          <div className="left_btns">
            <Button label={'New'} />
            <Button label={'Edit'} />
          </div>
          <div className="right_btn">
            <Button label={'Run'} />
          </div>
        </div>
      </div>
      <div className="action mb-4 border border-dark p-2">
        <h5 className='border-bottom border-dark d-inline-block fw-bold'>Manage Actions</h5>
        <div className="action_btns justify-content-between align-items-end">
          <div className="left_btns">
            <Button label={'Delete'} />
            <Button label={'Archive'} />
            <Button label={'Visualize'} />
            <Button label={'Rename'} />
            <Button label={'Save as'} />
          </div>
          <div className="right_btn">
            <div className='d-flex flex-column '>
              <strong>Upload from Pc to CPSG</strong>
              <Button label={'Upload'} />
            </div>
          </div>
        </div>
      </div>
      <OFDMTab />
    </div>
  )
}
