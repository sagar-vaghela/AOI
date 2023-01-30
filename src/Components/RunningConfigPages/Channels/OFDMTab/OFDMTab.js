import React, { useState } from 'react'
import Button from '../../../Button';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import OFDMChannelTab from '../../../OFDMChannelTab/OFDMChannelTab';
import ModalAoi from '../../../Modal/ModalAoi';
import { Form } from 'react-bootstrap';
import Visualize from '../../../Modal/Visualize';


const muted = (<div><label className="toggle_box">
  <input type="checkbox" />
  <span className="slider"></span>
  <span className="labels" data-on="Yes" data-off="No"></span>
</label></div>)

const tablerow = [
  { no: 1, subcarrierZeroFrequency: "test", cyclicPrefix: '25', rollOffPeriod: '10', timeInterleaverDepth: 'test', subcarrierSpacing: 'test', power: 'test', mute: muted },
  { no: 2, subcarrierZeroFrequency: "demo", cyclicPrefix: '250', rollOffPeriod: '10', timeInterleaverDepth: 'test', subcarrierSpacing: 'test', power: 'test', mute: muted }
]


let manageConfigTableIndex = []

export default function OFDMTab(props) {
  const [search, setSearch] = useState('')
  const [saveAs, setSaveAs] = useState(false)
  const [saveName, setSaveName] = useState('')
  const [selectBtn, setSelectBtn] = useState('Select All')
  const [OfdmEditModalShow, setOfdmEditModalShow] = useState(false);
  const [visualizeModel, setVisualizeModel] = useState(false)
  const [editValue, setEditValue] = useState(0)
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const [tableRow, setTableRow] = useState(tablerow)

  const saveHandleClick = () => {
    setSaveAs(true)
  }

  const ofdmEditHandleClick = () => {
    setOfdmEditModalShow(!OfdmEditModalShow)
    const selectRowLength = document.querySelectorAll('#running_ofdm_table .selection-row').length;
    selectRowLength === 0 ? setOfdmEditModalShow(true) : setOfdmEditModalShow(true)  // changes on ticket 1
    setEditValue(selectRowLength);
  }

  const visualizeHandleClick = () => {
    setVisualizeModel(!visualizeModel)
  }

  const deleteHandleClick = () => {
    setDeleteModalShow(true)
  }

  const hideVisualize = () => {
    setVisualizeModel(false)
  }

  const columns = [
    {
      dataField: 'no',
      text: 'No',
      sort: true
    },
    {
      dataField: 'subcarrierZeroFrequency',
      text: 'Subcarrier Zero Frequency'
    },
    {
      dataField: 'cyclicPrefix',
      text: 'Cyclic Prefix'
    },
    {
      dataField: 'rollOffPeriod',
      text: 'Roll Off Period'
    },
    {
      dataField: 'timeInterleaverDepth',
      text: 'Time Interleaver Depth'
    },
    {
      dataField: 'subcarrierSpacing',
      text: 'Subcarrier Spacing'
    },
    {
      dataField: 'power',
      text: 'Power'
    },
    {
      dataField: 'mute',
      text: 'Mute'
    },
  ];

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

  const selectHandleClick = () => {
    var trElements = document.querySelectorAll("#running_ofdm_table tbody tr");
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

  const saveBody = (
    <input type="text" placeholder='Enter a name' className='w-100' value={saveName} onChange={(e) => setSaveName(e.target.value)} style={{ maxWidth: '100%' }} />
  )

  const saveFooter = (
    <div className='edit_btns'>
      <Button label={'Save'} />
      <Button label={'Cancel'} handleClick={() => setSaveAs(false)} />
    </div>
  )

  const ofdmEditBody = () => {
    return (
      <>
        {editValue === 0 ?
          <div>Please Select at list one Row !</div>
          :
          <>
            <div className="selected_channel mb-3">
              <label htmlFor="" className='me-2'>Number of Selected Channels: </label>
              <input type="text" value={editValue} readOnly className='bg-secondary text-light border-0' disabled />
            </div>
            <div className='d-flex justify-content-center'>
              <div className="mb-3 d-flex flex-column align-items-end me-3">
                <div className='mb-2'>
                  <label htmlFor="" className='me-2'>Subcarrier Zero Frequency: </label>
                  <input type="number" />
                </div>
                <div className='d-flex mb-2 align-items-center'>
                  <label htmlFor="" className='text-nowrap me-2'>Cyclic Prefix: </label>
                  <Form.Select aria-label="Default select example" style={{ padding: '2px 36px 2px 12px', borderRadius: '2px', border: '1px solid' }}>
                    <option></option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </div>
                <div className='mb-2'>
                  <label htmlFor="" className='me-2'>Power: </label>
                  <input type="text" />
                </div>
              </div>
              <div className="mb-3 d-flex flex-column align-items-start align-items-end">
                <div className=' mb-2'>
                  <label htmlFor="" className='me-2'>Time Interleaver Depth: </label>
                  <input type="number" />
                </div>
                <div className='d-flex mb-2 align-items-center'>
                  <label htmlFor="" className='text-nowrap me-2'>Roll Off Period: </label>
                  <Form.Select aria-label="Default select example" style={{ padding: '2px 36px 2px 12px', borderRadius: '2px', border: '1px solid' }}>
                    <option></option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </div>
                <div className='d-flex align-items-center'>
                  <label htmlFor="" className='text-nowrap me-2'>Subcarrier Spacing: </label>
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
        }
      </>
    )
  }

  const ofdmEditFooter = () => {
    return (
      <>
        {editValue === 0 ?
          <></>
          :
          <div className='edit_btns'>
            <Button label={'Edit'} />
            <Button label={'Cancel'} handleClick={() => setOfdmEditModalShow(false)} />
          </div>
        }
      </>
    )

  }
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

  return (
    <div className='channel_tab OFDM_TAB'>
      <div className='border border-dark  mb-4'>
        <div className='searchbar table_top_bar d-flex justify-content-end align-items-center border-bottom border-dark'>
          <label htmlFor="search">Search:</label>
          <input type="text" id='search' value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        <BootstrapTable
          id='running_ofdm_table'
          keyField="no"
          data={tableRow.filter((row) =>
            (row?.subcarrierZeroFrequency?.toUpperCase().indexOf(search.toUpperCase()) > -1) ||
            (row?.cyclicPrefix?.toUpperCase().indexOf(search.toUpperCase()) > -1) ||
            (row?.rollOffPeriod?.toUpperCase().indexOf(search.toUpperCase()) > -1) ||
            (row?.timeInterleaverDepth?.toUpperCase().indexOf(search.toUpperCase()) > -1) ||
            (row?.subcarrierSpacing?.toUpperCase().indexOf(search.toUpperCase()) > -1) ||
            (row?.power?.toUpperCase().indexOf(search.toUpperCase()) > -1) ||
            (row?.mute?.toUpperCase().indexOf(search.toUpperCase()) > -1)
          )}
          columns={columns}
          cellEdit={cellEditFactory({ mode: 'dbclick', blurToSave: true })}
          selectRow={selectRow}
          headerClasses="table_header"
          classes="mb-0 responsive table-striped"
          rowEvents={rowEvents}
        />
        {/* <div className='text-center p-2 bg-white'> No Data Available in table</div> */}
      </div>

      <div className="action mb-4 border border-dark p-2">
        {/* <h5 className='d-inline-block fw-bold'>Action</h5> */}
        <div className="action_btns justify-content-between">
          <div className="left_btns d-flex flex-column">
            <div>
              <Button label={'Edit'} handleClick={ofdmEditHandleClick} />
              <ModalAoi
                show={OfdmEditModalShow}
                onHide={() => setOfdmEditModalShow(false)}
                modalTitle=''
                modalBody={ofdmEditBody()}
                modalFooter={ofdmEditFooter()}
              />
              <Button label={'Delete'} handleClick={deleteHandleClick} />
              <ModalAoi
                show={deleteModalShow}
                onHide={() => setDeleteModalShow(false)}
                modalTitle=''
                modalBody={deleteBody}
                modalFooter={deleteFooter}
              />
              <Button label={'Visualize'} handleClick={visualizeHandleClick} />
              {/* <button onClick={selectHandleClick}>{selectBtn}</button> */}
            </div>
          </div>
          <div className="right_btn d-flex flex-column">
            <Button label={'Save As'} handleClick={saveHandleClick} />
            <ModalAoi
              show={saveAs}
              onHide={() => setSaveAs(false)}
              modalTitle='Save As'
              modalBody={saveBody}
              modalFooter={saveFooter}
            />
          </div>
        </div>
      </div>

      <OFDMChannelTab />
      {
        visualizeModel ? <Visualize hideVisualize={hideVisualize} /> : null
      }
    </div>
  )
}
