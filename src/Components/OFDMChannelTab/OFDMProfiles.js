import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import Button from '../Button'
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import ModalAoi from '../Modal/ModalAoi';

let manageConfigTableIndex = []

const tablerow = [
  { channel: 1, profile: "test" },
  { channel: 2, profile: "test1" }
]

const OFDMProfiles = () => {
  const [tableRow, setTableRow] = useState(tablerow)
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const [selectRowChannel, setSelectRowChannel] = useState();

  const deleteHandleClick = () => {
    setDeleteModalShow(true);
    const selectRowLength = document.querySelectorAll('#manage_config_ofdm_table .selection-row').length;
    selectRowLength === 0 ? setDeleteModalShow(true) : setDeleteModalShow(true);
    setSelectRowChannel(selectRowLength);
  }
  const removeAllChannelHandle = () => {
    setTableRow([])
  }

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

  const deleteBody = () => {
    return (
      <>
        {selectRowChannel === 0 ?
          <div>Please Select at list one Row !</div>
          :
          <p>Delete the entry?</p>
        }
      </>
    )
  }
  const deleteFooter = () => {

    return (
      <>
        {selectRowChannel === 0 ?
          <></>
          :
          <div className='edit_btns'>
            <Button label={'Yes'} handleClick={() => deleteItem(manageConfigTableIndex)} />
            <Button label={'Cancel'} handleClick={() => setDeleteModalShow(false)} />
          </div>
        }
      </>
    )
  }


  const selectRow = {
    mode: 'checkbox',
    clickToSelect: true,
    hideSelectColumn: true,
    classes: 'selection-row',
    clickToEdit: true
  };

  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      manageConfigTableIndex.includes({ selectRow: row.no }) ? manageConfigTableIndex.splice(manageConfigTableIndex.indexOf({ selectRow: row.no }), 1) : manageConfigTableIndex.push({ selectRow: row.no })
      console.log(`clicked on row with index: ${rowIndex} ${manageConfigTableIndex} ${row.no}`);

    }
  };
  const deleteItem = (manageConfigTableIndex) => {
    console.log("table row====", tableRow);
    console.log("manageConfigTableIndex====", manageConfigTableIndex);
    const results = tableRow.filter(({ no: id1 }) => !manageConfigTableIndex.some(({ selectRow: id2 }) => id2 === id1));
    setTableRow(results);
    setDeleteModalShow(false)
  }

  return (
    <>
      <div className="action mb-4 border border-dark p-2">
        <h5 className='d-inline-block fw-bold'>Channel Select</h5>
        <div className='d-flex align-items-center'>
          <label htmlFor="" className='text-nowrap me-2'>Channel: </label>
          <Form.Select aria-label="Default select example" style={{ padding: '2px 36px 2px 12px', borderRadius: '2px', border: '1px solid', width: 'auto' }} >
            <option>-- select a channle --</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </div>
      </div>

      <div className="action mb-4 border border-dark p-2">
        <h5 className=' d-inline-block fw-bold'>Configuration</h5>
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

      <div className="mb-4 border border-dark ">
        <div className='action p-2'>
          <h5 className='d-inline-block fw-bold'>Current Profiles</h5>
        </div>
        <BootstrapTable
          id='manage_config_ofdm_table'
          keyField="channel"
          data={tableRow}
          columns={columns}
          cellEdit={cellEditFactory({ mode: 'dbclick', blurToSave: true })}
          headerClasses="table_header"
          classes="mb-0 text-center"
          selectRow={selectRow}
          rowEvents={rowEvents}
        />
      </div>

      <div className="action mb-4 border border-dark p-2">
        {/* <h5 className='d-inline-block fw-bold'>Action</h5> */}
        <div className="action_btns justify-content-between">
          <div className="left_btns">
            <Button label={'Add'} />
            <Button label={'Remove All from Channel'} handleClick={removeAllChannelHandle} />
            <Button label={'Remove Selected'} handleClick={deleteHandleClick} />
            <ModalAoi
              show={deleteModalShow}
              onHide={() => setDeleteModalShow(false)}
              modalTitle=''
              modalBody={deleteBody()}
              modalFooter={deleteFooter()}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default OFDMProfiles
