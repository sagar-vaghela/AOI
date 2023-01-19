import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from '../../../Button';
import EditModal from '../../../Modal/EditModal';
import AddRangeModal from '../../../Modal/AddRangeModal';

const QAMTab = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modal2Show, setModal2Show] = useState(false);
  const editHandleClick = () => {
    setModalShow(true)
  }
  const rangeHandleClick = () => {
    setModal2Show(true)
  }
  const tablerow = [
    { no: 1, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 2, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 3, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 4, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 5, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 6, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 7, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 8, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 9, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 10, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 11, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 12, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 13, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 14, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 15, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 16, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 17, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 18, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 19, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' }
  ]

  return (
    <div className='channle_tab '>
      <div className='border border-dark mb-4'>
        <div className='searchbar table_top_bar d-flex justify-content-end border-bottom border-dark'>
          <label htmlFor="search">Search:</label>
          <input type="text" id='search' />
        </div>
        <Table responsive bordered className='main_table mb-0 table-fixed' >
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
        </Table>
      </div>
      <div className="action mb-4 border border-dark p-2">
        <h5 className='border-bottom border-dark d-inline-block'>Action</h5>
        <div className="action_btns justify-content-between">
          <div className="left_btns d-flex flex-column">
            <div>
              <Button label={'Add Range'}  handleClick={rangeHandleClick}/>
              <AddRangeModal
                show={modal2Show}
                onHide={() => setModal2Show(false)}/>

              <Button label={'Edit'} handleClick={editHandleClick} />
              <EditModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />

              <Button label={'Delete'} />

            </div>
            <div><Button label={'Add Tilt'} /></div>
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
