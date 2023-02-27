import React, { useState, useEffect } from 'react'
import Button from '../../../Button';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import ModalAoi from '../../../Modal/ModalAoi';
import { getRunConfigQAMTable } from '../../../../actions/runConfigQAM';
import { useSelector, useDispatch } from "react-redux";

export default function QAMTab(props) {
  const dispatch = useDispatch();

  const rcQAMTableData = useSelector((state) => state.runConfigQAMReducer.rcQAMTable.data);

  const [search, setSearch] = useState('')
  const [selectBtn, setSelectBtn] = useState('Select All')
  const [modalShow, setModalShow] = useState(false);
  const [saveAs, setSaveAs] = useState(false)
  const [saveName, setSaveName] = useState('')
  const [editValue, setEditValue] = useState(0)


  useEffect(() => {
    // dispatch(getRunConfigQAMTable());
    console.log("api call thy che-----");

  }, []);


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
    { no: 4, frequency: "test4", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 5, frequency: "test5", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
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
    { no: 19, frequency: "test", power: '25', width: '11', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },

  ]

  function numberFormatter(rowIndex) {

    return (
      <span>
        {rowIndex + 1}
      </span>
    );
  }

  function mutedFormatter(row) {
    console.log("row----", row);

    return (
      <div>
        <label className="toggle_box">
          <input type="checkbox" />
          <span className="slider"></span>
          <span className="labels" data-on="Yes" data-off="No"></span>
        </label>
      </div>
    );
  }

  const columns = [
    {
      dataField: 'no',
      text: 'No',
      sort: true,
      formatter: numberFormatter,
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
      dataField: 'operMode',
      text: 'OP Mode'
    },
    {
      dataField: 'mute',
      text: 'Muted',
      editable: false,
      formatter: mutedFormatter,
    }
  ];


  const editHandleClick = () => {
    const selectRowLength = document.querySelectorAll('#running_qam_table .selection-row').length;
    selectRowLength === 0 ? setModalShow(true) : setModalShow(true)  // changes on ticket 1
    setEditValue(selectRowLength);
  }

  const saveHandleClick = () => {
    setSaveAs(true)
  }

  const defaultHandleClick = () => {
    console.log(props);
    props.showAlertBox('Action was complete successfully!', 'success')
  }

  const selectRow = {
    mode: 'checkbox',
    clickToSelect: true,
    classes: 'selection-row',
    clickToEdit: true,
    hideSelectColumn: true
  };

  const editBody = () => {
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
            <Button label={'Cancel'} handleClick={() => setModalShow(false)} />
          </div>
        }
      </>
    )

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
  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      console.log(`clicked on row with index: ${rowIndex}`);
    }
  };
  const filteredData = tablerow.filter((row) =>
    (row?.frequency?.toUpperCase().indexOf(search.toUpperCase()) > -1) ||
    (row?.power?.toUpperCase().indexOf(search.toUpperCase()) > -1) ||
    (row?.width?.toUpperCase().indexOf(search.toUpperCase()) > -1) ||
    (row?.op_mode?.toUpperCase().indexOf(search.toUpperCase()) > -1) ||
    (row?.modulation?.toUpperCase().indexOf(search.toUpperCase()) > -1) ||
    (row?.annex?.toUpperCase().indexOf(search.toUpperCase()) > -1))

  return (
    <>
      < div className='channel_tab ' >
        <div className='border border-dark mb-4'>
          <div className='searchbar table_top_bar d-flex justify-content-end align-items-center border-bottom border-dark'>
            <label htmlFor="search">Search:</label>
            <input type="text" id='search' value={search || ''} onChange={e => setSearch(e.target.value)} />
          </div>
          {filteredData.length === 0 ? <p className='text-center fw-bold mt-2'>No record found</p> :
            <BootstrapTable
              id='running_qam_table'
              keyField="no"
              data={filteredData}
              columns={columns}
              selectRow={selectRow}
              cellEdit={cellEditFactory({ mode: 'dbclick', blurToSave: true })}
              headerClasses="table_header"
              classes="mb-0"
              rowEvents={rowEvents}
            />}
        </div>

        <div className="action mb-4 border border-dark p-2">
          {/* <h5 className='d-inline-block fw-bold'>Action</h5> */}
          <div className="action_btns justify-content-between">
            <div className="left_btns text-center">
              <Button label={'Edit'} handleClick={editHandleClick} />
              {/* <button onClick={selectHandleClick}>{selectBtn}</button> */}
              <ModalAoi
                show={modalShow}
                onHide={() => setModalShow(false)}
                modalTitle=''
                modalBody={editBody()}
                modalFooter={editFooter()}
              />
            </div>
            <div className="right_btn text-center">
              <Button label={'Save as'} handleClick={saveHandleClick} />
              <ModalAoi
                show={saveAs}
                onHide={() => setSaveAs(false)}
                modalTitle='Save As'
                modalBody={saveBody}
                modalFooter={saveFooter}
              />
              <Button label={'Make Default'} handleClick={defaultHandleClick} />
            </div>
          </div>
        </div>
      </div >
    </>
  )
}
