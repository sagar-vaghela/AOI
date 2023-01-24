import React from 'react'
import { Form } from 'react-bootstrap'
import Button from '../Button'
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';

const OFDMProfiles = () => {
  const tablerow = [
    { channel: 1, profile: "test" }
  ]

  const columns = [
    {
      dataField: 'channel',
      text: 'Channel'
    },
    {
      dataField: 'profile',
      text: 'Profile'
    }
  ];
  return (
    <>
      <div className="action mb-4 border border-dark p-2">
        <h5 className='border-bottom border-dark d-inline-block fw-bold'>Channel Select</h5>
        <div className='d-flex align-items-center'>
          <label htmlFor="" className='text-nowrap me-2'>Channel: </label>
          <Form.Select aria-label="Default select example" style={{ padding: '2px 36px 2px 12px', borderRadius: '2px', border: '1px solid',width : 'auto'}} >
            <option>-- select a channle --</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </div>
      </div>

      <div className="action mb-4 border border-dark p-2">
        <h5 className='border-bottom border-dark d-inline-block fw-bold'>Configuration</h5>
        <div className='d-flex flex-wrap align-items-center justify-content-between'>
          <div className='d-flex align-items-center'>
            <label htmlFor="" className='text-nowrap me-2'>Profile: </label>
            <Form.Select aria-label="Default select example" style={{ padding: '2px 36px 2px 12px', borderRadius: '2px', border: '1px solid' }} >
              <option>A</option>
              <option value="1">B</option>
              <option value="2">C</option>
              <option value="3">D</option>
            </Form.Select>
          </div>
        </div>
      </div>

      <div className="action mb-4 border border-dark p-2">
        <h5 className='border-bottom border-dark d-inline-block fw-bold'>Action</h5>
        <div className="action_btns justify-content-between">
          <div className="left_btns">
            <Button label={'Add'} />
            <Button label={'Remove All from Channel'} />
            <Button label={'Remove Selected'} />
          </div>
        </div>
      </div>

      <div className="mb-4 border border-dark ">
        <div className='action p-2'>
          <h5 className='border-bottom d-inline-block border-dark  fw-bold'>Current Profiles</h5>
        </div>
        <BootstrapTable
          keyField="no"
          data={tablerow}
          columns={columns}
          // cellEdit={cellEditFactory({ mode: 'dbclick', blurToSave: true })}
          headerClasses="table_header"
          classes="mb-0 text-center"
        />
      </div>
    </>
  )
}

export default OFDMProfiles
