import React, { useState } from 'react'
import Button from '../../../Button';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import Visualize from '../../../Modal/Visualize';
import Form from 'react-bootstrap/Form';
import ModalAoi from '../../../Modal/ModalAoi';

const QAMTab = () => {
  const [search, setSearch] = useState('')
  const [editModalShow, setEditModalShow] = useState(false);
  const [rangeModalShow, setRangeModalShow] = useState(false);
  const [tiltModalShow, setTiltModalShow] = useState(false);
  const [visualizeModel, setVisualizeModel] = useState(false);

  const editHandleClick = () => {
    setEditModalShow(!editModalShow)
  }
  const rangeHandleClick = () => {
    setRangeModalShow(!rangeModalShow)
  }
  const tiltHandleClick = () => {
    setTiltModalShow(!tiltModalShow)
  }
  const visualizeHandleClick = () => {
    setVisualizeModel(!visualizeModel)
  }
  const hideVisualize = () => {
    setVisualizeModel(false)
  }

  const muted = (<div><label className="toggle_box">
    <input type="checkbox" />
    <span className="slider"></span>
    <span className="labels" data-on="Yes" data-off="No"></span>
  </label></div>)

  const tablerow = [
    { no: '1', frequency: "test1", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: '2', frequency: "test2", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: '3', frequency: "test3", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: '4', frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: '5', frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: '6', frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: '7', frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: '8', frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: '9', frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: '10', frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: '11', frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: '12', frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: '13', frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: '14', frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: '15', frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: '16', frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: '17', frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: '18', frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: '19', frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted }
  ]

  const selectRow = {
    mode: 'checkbox',
    clickToSelect: true,
    hideSelectColumn: true,
    bgColor: '#f1e4ff',
    classes: 'selection-row',
    clickToEdit: true
  };

  const columns = [
    {
      dataField: 'no',
      text: 'No',
      headerClasses: 'col-1',
      classes: 'col-1'
    },
    {
      dataField: 'frequency',
      text: 'Frequency',
      headerClasses: 'col-2',
      classes: 'col-2'
    },
    {
      dataField: 'power',
      text: 'Power',
      headerClasses: 'col-1',
      classes: 'col-1'
    },
    {
      dataField: 'width',
      text: 'Width',
      headerClasses: 'col-1',
      classes: 'col-1'
    },
    {
      dataField: 'modulation',
      text: 'Modulation'
    },
    {
      dataField: 'annex',
      text: 'Annex'
    },
    {
      dataField: 'op_mode',
      text: 'OP Mode',
      headerClasses: 'col-2',
      classes: 'col-2'
    },
    {
      dataField: 'muted',
      text: 'Muted',
      editable: false,
      headerClasses: 'col-1',
      classes: 'col-1'
    },
  ];

  const rangeBody = (
    <>
      <div className='d-flex justify-content-center'>
        <div className="mb-3 d-flex flex-column align-items-end me-3">
          <div className='mb-2'>
            <label htmlFor="" className='me-2'>Number of Channels: </label>
            <input type="number" />
          </div>
          <div className='mb-2'>
            <label htmlFor="" className='me-2'>Power: </label>
            <input type="text" />
          </div>
          <div className='mb-2'>
            <label htmlFor="" className='me-2'>Annex Type: </label>
            <input type="text" />
          </div>
        </div>
        <div className="mb-3 d-flex flex-column align-items-start">
          <div className='me-2 mb-2'>
            <label htmlFor="" className='me-2'>Starting Frequency: </label>
            <input type="number" />
          </div>
          <div className='mb-2'>
            <h5 htmlFor="" className='fw-bold me-2'>Advanced Settings </h5>
          </div>
          <div className='d-flex'>
            <label htmlFor="" className='text-nowrap me-2'>Modulation Type: </label>
            <Form.Select aria-label="Default select example" style={{ padding: '2px 36px 2px 12px', borderRadius: '2px', border: '1px solid' }}>
              <option></option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="" className='me-2'>Mute: </label>
        <label className="toggle_box">
          <input type="checkbox" />
          <span className="slider"></span>
          <span className="labels" data-on="Yes" data-off="No"></span>
        </label>
      </div>
    </>
  )

  const rangeFooter = (
    <div className='edit_btns'>
      <Button label={'Add Range'} />
      <Button label={'Cancel'} handleClick={() => setRangeModalShow(false)} />
    </div>
  )

  const editBody = (
    <>
      <div className="selected_channel mb-3">
        <label htmlFor="" className='me-2'>Number of Selected Channels: </label>
        <input type="text" />
      </div>
      <div className="d-flex justify-content-center mb-3">
        <div className="me-3">
          <label htmlFor="" className='me-2'>Power: </label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="" className='me-2'>Mute: </label>
          <label className="toggle_box">
            <input type="checkbox" />
            <span className="slider"></span>
            <span className="labels" data-on="Yes" data-off="No"></span>
          </label>
        </div>
      </div>
    </>
  )
  const editFooter = (
    <div className='edit_btns'>
      <Button label={'Edit'} />
      <Button label={'Cancel'} handleClick={() => setEditModalShow(false)} />
    </div>
  )

  const tiltBody = (
    <div className='d-flex flex-column justify-content-center'>
      <div className="d-flex justify-content-center align-items-center">
        <div className='mb-2 me-3'>
          <label htmlFor="" className='me-2'>Starting Tilt Freq: </label>
          <input type="number" />
        </div>
        <div className='mb-2'>
          <label htmlFor="" className='me-2'>Ending Tilt Freq: </label>
          <input type="number" />
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div className='mb-2 me-3'>
          <label htmlFor="" className='me-2'>Starting Tilt Power: </label>
          <input type="number" />
        </div>
        <div className='mb-2'>
          <label htmlFor="" className='me-2'>Ending Tilt Power: </label>
          <input type="number" />
        </div>
      </div>

    </div>
  )

  const tiltFooter = (
    <div className='edit_btns'>
      <Button label={'Add Tilt'} />
      <Button label={'Cancel'} handleClick={() => setTiltModalShow(false)} />
    </div>
  )

  return (
    <div className='channel_tab '>
      <div className='border border-dark mb-4'>
        <div className='searchbar table_top_bar d-flex justify-content-end border-bottom border-dark'>
          <label htmlFor="search">Search:</label>
          <input type="text" id='search' value={search || ''} onChange={e => setSearch(e.target.value)} />
        </div>
        <BootstrapTable
          id='confinguration_qam_table'
          keyField="no"
          data={tablerow.filter((row) =>
            (row?.frequency?.toUpperCase().indexOf(search.toUpperCase()) > -1) ||
            (row?.power?.toUpperCase().indexOf(search.toUpperCase()) > -1) ||
            (row?.width?.toUpperCase().indexOf(search.toUpperCase()) > -1) ||
            (row?.op_mode?.toUpperCase().indexOf(search.toUpperCase()) > -1) ||
            (row?.modulation?.toUpperCase().indexOf(search.toUpperCase()) > -1) ||
            (row?.annex?.toUpperCase().indexOf(search.toUpperCase()) > -1))
          }
          columns={columns}
          cellEdit={cellEditFactory({ mode: 'dbclick', blurToSave: true })}
          selectRow={selectRow}
          headerClasses="table_header"
          classes="mb-0"
        />
      </div>
      <div className="action mb-4 border border-dark p-2">
        {/* <h5 className='d-inline-block fw-bold'>Action</h5> */}
        <div className="action_btns justify-content-between">
          <div className="left_btns d-flex flex-column">
            <div>
              <Button label={'Add Range'} handleClick={rangeHandleClick} />
              <ModalAoi
                show={rangeModalShow}
                onHide={() => setRangeModalShow(false)}
                modalTitle='Add Range'
                modalBody={rangeBody}
                modalFooter={rangeFooter}
              />

              <Button label={'Edit'} handleClick={editHandleClick} />
              <ModalAoi
                show={editModalShow}
                onHide={() => setEditModalShow(false)}
                modalTitle=''
                modalBody={editBody}
                modalFooter={editFooter}
              />
              <Button label={'Delete'} />
            </div>
            <div>
              <Button label={'Add Tilt'} handleClick={tiltHandleClick} />
              <ModalAoi
                show={tiltModalShow}
                onHide={() => setTiltModalShow(false)}
                modalTitle='Add Tilt'
                modalBody={tiltBody}
                modalFooter={tiltFooter}
              />
            </div>
          </div>
          <div className="right_btn d-flex flex-column">
            <Button label={'Save'} />
            <Button label={'Visualize'} handleClick={visualizeHandleClick} />
          </div>
        </div>
      </div>
      {
        visualizeModel ? <Visualize hideVisualize={hideVisualize} /> : null
      }
    </div>
  )
}

export default QAMTab
