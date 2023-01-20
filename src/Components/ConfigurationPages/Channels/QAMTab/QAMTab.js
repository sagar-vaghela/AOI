import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from '../../../Button';
import EditModal from '../../../Modal/EditModal';
import AddRangeModal from '../../../Modal/AddRangeModal';
import AddTilt from '../../../Modal/AddTilt';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';

const QAMTab = () => {
  const [editModalShow, setEditModalShow] = useState(false);
  const [rangeModalShow, setRangeModalShow] = useState(false);
  const [tiltModalShow, setTiltModalShow] = useState(false);
  const editHandleClick = () => {
    setEditModalShow(true)
  }
  const rangeHandleClick = () => {
    setRangeModalShow(true)
  }
  const tiltHandleClick = () => {
    setTiltModalShow(true)
  }

  const muted = (<div><label className="toggle_box">
    <input type="checkbox" />
    <span className="slider"></span>
    <span className="labels" data-on="Yes" data-off="No"></span>
  </label></div>)

  const tablerow = [
    { no: 1, frequency: "test", power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 2, frequency: "test", power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 3, frequency: "test", power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 4, frequency: "test", power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 5, frequency: "test", power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 6, frequency: "test", power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 7, frequency: "test", power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 8, frequency: "test", power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 9, frequency: "test", power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 10, frequency: "test", power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 11, frequency: "test", power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 12, frequency: "test", power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 13, frequency: "test", power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 14, frequency: "test", power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 15, frequency: "test", power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 16, frequency: "test", power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 17, frequency: "test", power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 18, frequency: "test", power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 19, frequency: "test", power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted }
  ]

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

  return (
    <div className='channel_tab '>
      <div className='border border-dark mb-4'>
        <div className='searchbar table_top_bar d-flex justify-content-end border-bottom border-dark'>
          <label htmlFor="search">Search:</label>
          <input type="text" id='search' />
        </div>
        {/* <Table responsive bordered className='main_table mb-0' >
          <thead>
            <tr>
              <th className='col-1'>No</th>
              <th className='col-2'>Frequency</th>
              <th className='col-1'>Power</th>
              <th className='col-1'>Width</th>
              <th className='col-2'>Modulation</th>
              <th className='col-2'>Annex</th>
              <th className='col-2'>OP Mode</th>
              <th className='col-1'>Muted</th>
            </tr>
          </thead>
          <tbody className='bg-white'>
            {tablerow.map((item) => (
              <tr key={item.no}>
                <td className='col-1'>{item.no}</td>
                <td className='col-2'>{item.frequency}</td>
                <td className='col-1'>{item.Power}</td>
                <td className='col-1'>{item.width}</td>
                <td className='col-2'>{item.modulation}</td>
                <td className='col-2'>{item.annex}</td>
                <td className='col-2'>{item.op_mode}</td>
                <td className='col-1'>
                  <label className="toggle_box">
                    <input type="checkbox" />
                    <span className="slider"></span>
                    <span className="labels" data-on="Yes" data-off="No"></span>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </Table> */}
        <BootstrapTable
          keyField="no"
          data={tablerow}
          columns={columns}
          cellEdit={cellEditFactory({ mode: 'dbclick', blurToSave: true })}
          headerClasses="table_header"
          classes="mb-0"
        />
      </div>
      <div className="action mb-4 border border-dark p-2">
        <h5 className='border-bottom border-dark d-inline-block fw-bold'>Action</h5>
        <div className="action_btns justify-content-between">
          <div className="left_btns d-flex flex-column">
            <div>
              <Button label={'Add Range'} handleClick={rangeHandleClick} />
              <AddRangeModal
                show={rangeModalShow}
                onHide={() => setRangeModalShow(false)} />

              <Button label={'Edit'} handleClick={editHandleClick} />
              <EditModal
                show={editModalShow}
                onHide={() => setEditModalShow(false)}
              />
              <Button label={'Delete'} />
            </div>
            <div>
              <Button label={'Add Tilt'} handleClick={tiltHandleClick} />
              <AddTilt
                show={tiltModalShow}
                onHide={() => setTiltModalShow(false)} />
            </div>
          </div>
          <div className="right_btn d-flex flex-column">
            <Button label={'Save'} />
            <Button label={'Visualize'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default QAMTab
