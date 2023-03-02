import React, { useState } from 'react'
import Button from '../../../Button';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import Visualize from '../../../Modal/Visualize';
import Form from 'react-bootstrap/Form';
import ModalAoi from '../../../Modal/ModalAoi';
import { Accordion, Nav } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { addRangeQAMConfiguration } from "../../../../actions/dConfiguration";


let manageConfigTableIndex = []

const QAMTab = () => {
  const [search, setSearch] = useState('')
  const [selectBtn, setSelectBtn] = useState('Select All')
  const [editModalShow, setEditModalShow] = useState(false);
  const [rangeModalShow, setRangeModalShow] = useState(false);
  const [tiltModalShow, setTiltModalShow] = useState(false);
  const [visualizeModel, setVisualizeModel] = useState(false);
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const [saveModal, setSaveModal] = useState(false)
  const [editValue, setEditValue] = useState(0)
  const [nofChannel, setNOFChannel] = useState();
  const [power, setPower] = useState();
  const [frequency, setFrequency] = useState();
  const [mute, setMute] = useState(false);
  const dispatch = useDispatch();

  const editHandleClick = () => {
    setEditModalShow(!editModalShow)
    const selectRowLength = document.querySelectorAll('#confinguration_qam_table .selection-row').length;
    selectRowLength === 0 ? setEditModalShow(true) : setEditModalShow(true)  // changes on ticket 1
    setEditValue(selectRowLength);
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

  const deleteHandleClick = () => {
    setDeleteModalShow(true)
  }

  const saveHandleClick = () => {
    setSaveModal(true)
  }


  const muted = (
    <div>
      <label className="toggle_box">
        <input type="checkbox" />
        <span className="slider"></span>
        <span className="labels" data-on="Yes" data-off="No"></span>
      </label>
    </div>
  )

  const tablerow = [
    { no: 1, frequency: "test1", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 2, frequency: "test2", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 3, frequency: "test3", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 4, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 5, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 6, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 7, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 8, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 9, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 10, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 11, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 12, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 13, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 14, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 15, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 16, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 17, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 18, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 19, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted }
  ]

  const [tableRow, setTableRow] = useState(tablerow)

  const selectRow = {
    mode: 'checkbox',
    clickToSelect: true,
    hideSelectColumn: true,
    classes: 'selection-row',
    clickToEdit: true
  };


  const selectHandleClick = () => {
    var trElements = document.querySelectorAll("#confinguration_qam_table tbody tr");
    console.log(trElements);

    if (selectBtn === 'Select All') {
      trElements.forEach(function (element) {
        element.classList.add("selection-row");
      });
      setSelectBtn('Deselect All')
    } else {
      trElements.forEach(function (element) {
        element.classList.remove("selection-row");
      });
      setSelectBtn('Select All')
    }
  }

  const columns = [
    {
      dataField: 'no',
      text: 'No',
      sort: true
    },
    {
      dataField: 'frequency',
      text: 'Frequency'
    },
    {
      dataField: 'power',
      text: 'Power'
    },
    {
      dataField: 'width',
      text: 'Width'
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
      text: 'OP Mode'
    },
    {
      dataField: 'muted',
      text: 'Muted',
      editable: false
    },
  ];

  const rangeBody = (
    <>
      <div className='d-flex justify-content-center'>
        <div className="mb-3 d-flex flex-column align-items-end me-3">
          <div className='mb-2'>
            <label htmlFor="" className='me-2'>Number of Channels: </label>
            <input
              type="number"
              value={nofChannel}
              onChange={(e) => setNOFChannel(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor="" className='me-2'>Power: </label>
            <input
              type="text"
              value={power}
              onChange={(e) => setPower(e.target.value)}
            />
          </div>

        </div>
        <div className="mb-3 d-flex flex-column align-items-start">
          <div className='me-2 mb-3'>
            <label htmlFor="" className='me-2'>Starting Frequency: </label>
            <input
              type="number"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="" className='me-2'>Mute: </label>
            <label className="toggle_box">
              <input
                type="checkbox"
                checked={mute}
                onChange={(e) => setMute(!mute)}
              />
              <span className="slider"></span>
              <span className="labels" data-on="Yes" data-off="No"></span>
            </label>
          </div>

        </div>

      </div>
      <Accordion defaultActiveKey="1" className='advance_setting'>
        <Accordion.Item eventKey="0">
          <Accordion.Header >Advanced Settings</Accordion.Header>
          <Accordion.Body>
            <div className='d-flex mb-2'>
              <label htmlFor="" className='text-nowrap me-2'>Modulation Type: </label>
              <Form.Select aria-label="Default select example" style={{ padding: '2px 36px 2px 12px', borderRadius: '2px', border: '1px solid' }}>
                <option></option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
            <div className='mb-2 d-flex'>
              <label htmlFor="" className='me-2'>Annex Type: </label>
              <input type="text" />
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

    </>
  )

  const rangeFooter = (
    <div className='edit_btns'>
      <Button
        label={"Add Range"}
        handleClick={() => {
          const payload = {

            modulation: "QAM256",
            power: power,
            interleave: "INTERLEAVER_8_16",
            ch_index: nofChannel,
            annex: "ANNEX_B",
            operMode: "MPEG_VIDEO",
            mute: mute === true ? "YES" : "NO",
            width: "6",
            frequency: frequency,
            symbolFreqNumerator: "78",
            symbolFreqDenominator: "149",
          };

          dispatch(addRangeQAMConfiguration("cpsg2", 0, payload));
        }}
      />
      <Button label={'Cancel'} handleClick={() => setRangeModalShow(false)} />
    </div>
  )

  const editBody = () => {
    return (
      <>
        {editValue === 0 ?
          <div>Please Select at list one Row !</div>
          :
          <>
            <div className="selected_channel mb-3">
              <label htmlFor="" className='me-2'>Number of Selected Channels: </label>
              <input
                type="text"
                value={editValue}
                readOnly
                className="bg-secondary text-light border-0"
                disabled
              />
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
        }
      </>
    )
  }

  const editFooter = () => {
    return (
      <>
        {editValue === 0 ?
          <></>
          :
          <div className='edit_btns'>
            <Button label={'Edit'} />
            <Button label={'Cancel'} handleClick={() => setEditModalShow(false)} />
          </div>
        }
      </>
    )

  }


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

  const deleteItem = (manageConfigTableIndex) => {
    console.log("table row====", tableRow);
    console.log("manageConfigTableIndex====", manageConfigTableIndex);
    const results = tableRow.filter(({ no: id1 }) => !manageConfigTableIndex.some(({ selectRow: id2 }) => id2 === id1));
    setTableRow(results);
    setDeleteModalShow(false)
  }

  const deleteBody = (
    <p>Delete the entry?</p>
  )

  const deleteFooter = (
    <div className='edit_btns'>
      <Button label={'Yes'} handleClick={() => deleteItem(manageConfigTableIndex)} />
      <Button label={'Cancel'} handleClick={() => setDeleteModalShow(false)} />
    </div>
  )

  const saveBody = (
    <p>Save the entry?</p>
  )

  const saveFooter = (
    <div className='edit_btns'>
      <Button label={'Save'} />
      <Button label={'Cancel'} handleClick={() => setSaveModal(false)} />
    </div>
  )

  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      manageConfigTableIndex.includes({ selectRow: row.no }) ?
        manageConfigTableIndex.splice(manageConfigTableIndex.indexOf({ selectRow: row.no }), 1)
        :
        manageConfigTableIndex.push({ selectRow: row.no })
      console.log(`clicked on row with index: ${rowIndex} ${manageConfigTableIndex} ${row.no}`);

    }
  };

  const filteredData = tableRow.filter((row) =>
    (row?.frequency?.toUpperCase().indexOf(search.toUpperCase()) > -1) ||
    (row?.power?.toUpperCase().indexOf(search.toUpperCase()) > -1) ||
    (row?.width?.toUpperCase().indexOf(search.toUpperCase()) > -1) ||
    (row?.op_mode?.toUpperCase().indexOf(search.toUpperCase()) > -1) ||
    (row?.modulation?.toUpperCase().indexOf(search.toUpperCase()) > -1) ||
    (row?.annex?.toUpperCase().indexOf(search.toUpperCase()) > -1))

  return (
    <div className='channel_tab '>
      <div className='border border-dark mb-4'>
        <div className='searchbar table_top_bar d-flex justify-content-end border-bottom border-dark'>
          <label htmlFor="search">Search:</label>
          <input type="text" id='search' value={search || ''} onChange={e => setSearch(e.target.value)} />
        </div>
        {filteredData.length === 0 ? <p className='text-center fw-bold mt-2'>No record found</p> :
          <BootstrapTable
            id='confinguration_qam_table'
            keyField="no"
            data={filteredData}
            columns={columns}
            cellEdit={cellEditFactory({ mode: 'dbclick', blurToSave: true })}
            selectRow={selectRow}
            headerClasses="table_header"
            classes="mb-0"
            rowEvents={rowEvents}
          />}
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
                modalBody={editBody()}
                modalFooter={editFooter()}
              />
              <Button label={'Delete'} handleClick={deleteHandleClick} />
              <ModalAoi
                show={deleteModalShow}
                onHide={() => setDeleteModalShow(false)}
                modalTitle=''
                modalBody={deleteBody}
                modalFooter={deleteFooter}
              />
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

              {/* <button onClick={selectHandleClick}>{selectBtn}</button> */}
            </div>

          </div>
          <div className="right_btn d-flex flex-column">
            <Button label={'Save'} handleClick={saveHandleClick} />
            <ModalAoi
              show={saveModal}
              onHide={() => setSaveModal(false)}
              modalTitle=''
              modalBody={saveBody}
              modalFooter={saveFooter}
            />
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
