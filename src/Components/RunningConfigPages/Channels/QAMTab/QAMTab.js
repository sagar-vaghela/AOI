import React, { useState, useEffect } from 'react'
import Button from '../../../Button';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';
import ModalAoi from '../../../Modal/ModalAoi';
import {
  drcSingleQAMTable,
  getRCQAMCreateTableRow,
  getRCQAMDeleteTableRowCell,
  getRCQAMEditTableRow,
  getRunConfigQAMTable,
  makeDefault,
  postSaveAs
} from '../../../../actions/drcQAMchannels';
import { useSelector, useDispatch } from "react-redux";
import { showPopup } from '../../../../actions/popupAction';
import { getSystemSettingsAnnex } from '../../../../actions/systemSettings';
import Form from 'react-bootstrap/Form';
import { addRangeQAMConfiguration } from '../../../../actions/dConfiguration';

let editRowData = [];
let data = [];

export default function QAMTab(props) {
  const dispatch = useDispatch();

  const rcQAMTableData = useSelector((state) => state.drcQAMTableReducer.rcQAMTable.data);
  const rcQAMTableUpdateData = useSelector((state) => state.drcQAMTableRowEditReducer.rcQAMEditRow);
  const rcQAMTableCreateData = useSelector((state) => state.drcQAMTableRowCreateReducer.rcQAMCreateRow);
  const rcQAMTableDeleteData = useSelector((state) => state.drcQAMTableRowDeleteReducer.rcQAMDeleteRow);
  const rcQAMAnnexData = useSelector((state) => state.settingAnnexDataReducer.settingAnnexGet);
  const rcQAMTableSingleData = useSelector((state) => state.drcSingleQAMTableReducer.drcSinglelQAMTableData);

  const [tableData, setTableData] = useState([]);
  const [search, setSearch] = useState("");
  const [selectBtn, setSelectBtn] = useState("Select All");
  const [modalShow, setModalShow] = useState(false);
  const [saveAs, setSaveAs] = useState(false);
  const [saveName, setSaveName] = useState("");
  const [editValue, setEditValue] = useState(0);
  const [updateRowData, setUpdateRowData] = useState([]);
  const [powerValue, setPowerValue] = useState();
  const [muteValue, setMuteValue] = useState();
  const [validationQAMTable, setValidationQAMTable] = useState(false);
  const [validationField, setValidationField] = useState('');
  const [rangeModalOpen, setRangeModalOpen] = useState(false);
  const [nofChannel, setNOFChannel] = useState('');
  const [power, setPower] = useState();
  const [frequency, setFrequency] = useState();
  const [mute, setMute] = useState(false);
  const [operModeValue, setOperModeValue] = useState('');


  let Reg = new RegExp(search, "i");

  useEffect(() => {
    if (rcQAMTableData) {
      setTableData(rcQAMTableData);
    }
  }, [rcQAMTableData])


  useEffect(() => {
    dispatch(getRunConfigQAMTable());
    dispatch(getSystemSettingsAnnex());

  }, []);

  useEffect(() => {
    if ((rcQAMTableUpdateData.data && rcQAMTableUpdateData.data.success === true) ||
      (rcQAMTableDeleteData.data && rcQAMTableDeleteData.data.success === true)
    ) {
      dispatch(getRunConfigQAMTable());
      setModalShow(false);
    }
  }, [rcQAMTableUpdateData, rcQAMTableDeleteData]);

  useEffect(() => {
    const chId = rcQAMTableCreateData && rcQAMTableCreateData.data && rcQAMTableCreateData.data.ch_id;
    if (rcQAMTableCreateData && rcQAMTableCreateData.status === 200) {
      for (let i = 1; i <= Number(nofChannel); i++) {
        dispatch(drcSingleQAMTable(chId));
      }
    }
  }, [rcQAMTableCreateData]);

  useEffect(() => {
    if (rcQAMTableSingleData && rcQAMTableSingleData.data) {
      data.push(rcQAMTableSingleData.data[0]);
    }
    console.log("data=====", data);

  }, [rcQAMTableSingleData]);

  useEffect(() => {
    setTableData(tableData);
  }, [tableData])

  const muted = (
    <div class="custom-control custom-switch">
      <input type="checkbox" class="custom-control-input" id="customSwitch1" />
    </div>
  );

  const tablerow = [
    {
      no: 1,
      frequency: "test1",
      power: "25",
      width: "10",
      modulation: "test",
      annex: "test",
      op_mode: "test",
      muted: muted,
    },
    {
      no: 2,
      frequency: "test2",
      power: "25",
      width: "10",
      modulation: "test",
      annex: "test",
      op_mode: "test",
      muted: muted,
    },
    {
      no: 3,
      frequency: "test3",
      power: "25",
      width: "10",
      modulation: "test",
      annex: "test",
      op_mode: "test",
      muted: muted,
    },
    {
      no: 4,
      frequency: "test4",
      power: "25",
      width: "10",
      modulation: "test",
      annex: "test",
      op_mode: "test",
      muted: muted,
    },
    {
      no: 5,
      frequency: "test5",
      power: "25",
      width: "10",
      modulation: "test",
      annex: "test",
      op_mode: "test",
      muted: muted,
    },
    {
      no: 6,
      frequency: "test",
      power: "25",
      width: "10",
      modulation: "test",
      annex: "test",
      op_mode: "test",
      muted: muted,
    },
    {
      no: 7,
      frequency: "test",
      power: "25",
      width: "10",
      modulation: "test",
      annex: "test",
      op_mode: "test",
      muted: muted,
    },
    {
      no: 8,
      frequency: "test",
      power: "25",
      width: "10",
      modulation: "test",
      annex: "test",
      op_mode: "test",
      muted: muted,
    },
    {
      no: 9,
      frequency: "test",
      power: "25",
      width: "10",
      modulation: "test",
      annex: "test",
      op_mode: "test",
      muted: muted,
    },
    {
      no: 10,
      frequency: "test",
      power: "25",
      width: "10",
      modulation: "test",
      annex: "test",
      op_mode: "test",
      muted: muted,
    },
    {
      no: 11,
      frequency: "test",
      power: "25",
      width: "10",
      modulation: "test",
      annex: "test",
      op_mode: "test",
      muted: muted,
    },
    {
      no: 12,
      frequency: "test",
      power: "25",
      width: "10",
      modulation: "test",
      annex: "test",
      op_mode: "test",
      muted: muted,
    },
    {
      no: 13,
      frequency: "test",
      power: "25",
      width: "10",
      modulation: "test",
      annex: "test",
      op_mode: "test",
      muted: muted,
    },
    {
      no: 14,
      frequency: "test",
      power: "25",
      width: "10",
      modulation: "test",
      annex: "test",
      op_mode: "test",
      muted: muted,
    },
    {
      no: 15,
      frequency: "test",
      power: "25",
      width: "10",
      modulation: "test",
      annex: "test",
      op_mode: "test",
      muted: muted,
    },
    {
      no: 16,
      frequency: "test",
      power: "25",
      width: "10",
      modulation: "test",
      annex: "test",
      op_mode: "test",
      muted: muted,
    },
    {
      no: 17,
      frequency: "test",
      power: "25",
      width: "10",
      modulation: "test",
      annex: "test",
      op_mode: "test",
      muted: muted,
    },
    {
      no: 18,
      frequency: "test",
      power: "25",
      width: "10",
      modulation: "test",
      annex: "test",
      op_mode: "test",
      muted: muted,
    },
    {
      no: 19,
      frequency: "test",
      power: "25",
      width: "11",
      modulation: "test",
      annex: "test",
      op_mode: "test",
      muted: muted,
    },
  ];

  useEffect(() => {
    if (search.length > 0) {
      let data =
        rcQAMTableData.length > 0 &&
        rcQAMTableData.filter(
          (data) =>
            Reg.test(data.frequency) ||
            Reg.test(data.power) ||
            Reg.test(data.width) ||
            Reg.test(data.modulation) ||
            Reg.test(data.annex) ||
            Reg.test(data.operMode)
        );
      setTableData(data);
    }
  }, [search]);

  function numberFormatter(cell, row, rowIndex) {
    return <span>{rowIndex + 1}</span>;
  }

  function mutedFormatter(row) {
    const checkSwitch = row === "YES" ? true : false;

    return (
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckChecked"
          checked={checkSwitch}
          onChange={(e) => { }}
        />
      </div>
    );
  }

  const columns = [
    // {
    //   dataField: "no",
    //   text: "No",
    //   sort: true,
    //   editable: false,
    //   formatter: numberFormatter,
    // },
    {
      dataField: "frequency",
      text: "Frequency",
      sort: true,
    },
    {
      dataField: "power",
      text: "Power",
      sort: true,
    },
    // {
    //   dataField: "width",
    //   text: "Width",
    // },
    // {
    //   dataField: "modulation",
    //   text: "Modulation",
    // },
    {
      dataField: "annex",
      text: "Annex",
      sort: true,
    },
    {
      dataField: "operMode",
      text: "Oper Mode",
      sort: true,
      editor: {
        type: Type.SELECT,
        options: [
          {
            value: 'QAM64',
            label: 'QAM64'
          },
          {
            value: 'QAM256',
            label: 'QAM256'
          },
          {
            value: 'CW_CARRIER',
            label: 'CW_CARRIER'
          }
        ],
      }
    },
    {
      dataField: "mute",
      text: "Muted",
      editable: false,
      formatter: mutedFormatter,
    },
  ];

  const editHandleClick = () => {
    setPowerValue();
    const selectRowLength = document.querySelectorAll('#running_qam_table .selection-row').length;
    selectRowLength === 0 ? setModalShow(true) : setModalShow(true); // changes on ticket 1
    setEditValue(selectRowLength);
  };

  const saveHandleClick = () => {
    setSaveAs(true);
  };

  const defaultHandleClick = () => {
    dispatch(makeDefault());
  };


  const handleOnSelect = (row, isSelect) => {
    if (isSelect) {
      editRowData.push(row);
    } else {
      const updateRowData = editRowData.filter(item => item.ch_index !== row.ch_index);
      editRowData = updateRowData;
    }
    setUpdateRowData(editRowData);

  }

  const selectRow = {
    mode: "checkbox",
    clickToSelect: true,
    classes: "selection-row",
    clickToEdit: true,
    hideSelectColumn: true,
    onSelect: handleOnSelect,
  };

  const editBody = () => {
    return (
      <>
        {editValue === 0 ? (
          <div>Please Select at list one Row !</div>
        ) : (
          <>
            <div className="selected_channel mb-3">
              <label htmlFor="" className="me-2">
                Number of Selected Channels:{" "}
              </label>
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
                <input type="text" value={powerValue} onChange={(e) => setPowerValue(e.target.value)} />
              </div>

              <div className='d-flex'>
                <label htmlFor="" className='me-2'>Mute: </label>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onChange={e => setMuteValue(e.target.checked)} />
                </div>
              </div>
            </div>
          </>
        )}
      </>
    );
  };

  const upateRow = () => {

    const checkSwitch = (muteValue === true ? 'YES' : 'NO')

    editRowData.forEach((item, index) => {
      const payload = {
        power: powerValue,
        annex: item.annex,
        operMode: item.operMode,
        mute: checkSwitch,
        frequency: item.frequency,
      }
      dispatch(getRCQAMEditTableRow(item.ch_index, payload));
    });
  }

  const editFooter = () => {
    return (
      <>
        {editValue === 0 ?
          <></>
          :
          <div className='edit_btns'>
            <Button label={'Edit'} handleClick={upateRow} />
            <Button label={'Cancel'} handleClick={() => setModalShow(false)} />
          </div>
        }
      </>
    );
  };

  const saveBody = (
    <input
      type="text"
      placeholder="Enter a name"
      className="w-100"
      value={saveName}
      onChange={(e) => setSaveName(e.target.value)}
      style={{ maxWidth: "100%" }}
    />
  );
  const saveFooter = (
    <div className="edit_btns">
      <Button
        label={"Save"}
        handleClick={async () => {
          dispatch(postSaveAs(saveName));
          setSaveAs(false);
        }}
      />
      <Button label={"Cancel"} handleClick={() => setSaveAs(false)} />
    </div>
  );
  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      console.log(`clicked on row with index: ${rowIndex}`, row);
    },
  };

  // const filteredData = tablerow.filter((row) =>
  //   (row?.frequency?.toUpperCase().indexOf(search.toUpperCase()) > -1) ||
  //   (row?.power?.toUpperCase().indexOf(search.toUpperCase()) > -1) ||
  //   (row?.width?.toUpperCase().indexOf(search.toUpperCase()) > -1) ||
  //   (row?.op_mode?.toUpperCase().indexOf(search.toUpperCase()) > -1) ||
  //   (row?.modulation?.toUpperCase().indexOf(search.toUpperCase()) > -1) ||
  //   (row?.annex?.toUpperCase().indexOf(search.toUpperCase()) > -1))

  const dbSaveCell = (row, newValue) => {

    const payload = {
      modulation: row.modulation,
      power: row.power,
      interleave: row.interleave,
      annex: row.annex,
      operMode: row.operMode,
      mute: row.mute,
      width: row.width,
      frequency: row.frequency,
    }
    dispatch(getRCQAMEditTableRow(row.ch_index, payload));
  }

  const addRowCell = () => {
    setRangeModalOpen(!rangeModalOpen);
  }

  const handleChangemodul = (event) => {
    //  console.log("value",event.target.value);
    setOperModeValue(event.target.value);
  }

  const deleteRowCell = () => {
    editRowData.forEach((item, index) => {
      dispatch(getRCQAMDeleteTableRowCell(item.ch_index));
    });
  }

  const validationModal = () => {

    let validationMessage;

    if (validationField === 'frequency') {
      validationMessage = "Frequency should be in between 0 and 1800";
    }
    else if (validationField === 'power') {
      validationMessage = "Power Range should be in between -12 and 12";

    }
    return (

      <div>{validationMessage}</div>

    )
  }

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
            <label htmlFor="" className='me-2' title='value from -12 to 12 dB'>Power: </label>
            <input
              type="text"
              value={power}
              onChange={(e) => setPower(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-3 d-flex flex-column align-items-start">
          <div className='me-2 mb-3'>
            <label htmlFor="" className='me-2' title='value from 0 to 1800 MHz'>Starting Frequency: </label>
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
      <div className='d-flex mb-2 advance_setting'>
        <label htmlFor="" className='text-nowrap me-2'>Oper Mode: </label>
        <Form.Select aria-label="Default select example" style={{ padding: '2px 36px 2px 12px', borderRadius: '2px', border: '1px solid' }} onChange={handleChangemodul} value={operModeValue}>
          <option value="QAM64">QAM64</option>
          <option value="QAM256">QAM256 </option>
          <option value="CW_CARRIER">CW_CARRIER</option>
        </Form.Select>
      </div>
    </>
  )
  const rangeFooter = () => {

    const opMode = operModeValue === '' ? 'QAM64' : operModeValue;

    return (

      <div className='edit_btns'>
        <Button
          label={"Add Range"}
          handleClick={() => {

            const payload = {
              power: power,
              numofchannels: Number(nofChannel),
              annex: rcQAMAnnexData && rcQAMAnnexData.data,
              operMode: opMode,
              mute: mute === true ? "YES" : "NO",
              frequency: frequency,
            };
            dispatch(getRCQAMCreateTableRow(payload));
            setRangeModalOpen(false);
            // setNOFChannel('');
            setPower('');
            setFrequency('');
            setMute(false);
            setOperModeValue('');
          }}
        />
        <Button label={'Cancel'} handleClick={() => setRangeModalOpen(false)} />
      </div>
    )
  }

  return (
    <>
      <div className="channel_tab ">
        <div className="border border-dark mb-4">
          <div className="searchbar table_top_bar d-flex justify-content-end align-items-center border-bottom border-dark">

            <label htmlFor="search">Annex: {rcQAMAnnexData && rcQAMAnnexData.data}</label>
            <label htmlFor="search">Search:</label>
            <input
              type="text"
              id="search"
              value={search || ""}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {
            tableData && tableData.length > 0 ?
              <BootstrapTable
                id='running_qam_table'
                keyField="ch_index"
                data={tableData}
                columns={columns}
                selectRow={selectRow}
                cellEdit={cellEditFactory({
                  mode: 'dbclick',
                  blurToSave: true,
                  onStartEdit: (row, column, rowIndex, columnIndex) => { console.log('start to edit!!!', row); },
                  afterSaveCell: (oldValue, newValue, row, column) => {

                    if (column.dataField === 'frequency' && (newValue < 0 || newValue > 1800 || newValue === '')) {
                      setValidationField('frequency');
                      setValidationQAMTable(true);
                      dispatch(getRunConfigQAMTable());

                    }
                    else if (column.dataField === 'power' && (newValue < -12 || newValue > 12 || newValue === '')) {
                      setValidationField('power');
                      setValidationQAMTable(true);
                      dispatch(getRunConfigQAMTable());

                    }
                    else {
                      dbSaveCell(row, newValue)
                    }

                  }
                })}
                headerClasses="table_header"
                classes="mb-0"
                rowEvents={rowEvents}
              />
              :
              <p className='text-center fw-bold mt-2'>No record found</p>
          }
        </div>

        <ModalAoi
          show={validationQAMTable}
          onHide={() => setValidationQAMTable(false)}
          modalTitle=""
          modalBody={validationModal()}
        />

        <div className="action mb-4 border border-dark p-2">
          {/* <h5 className='d-inline-block fw-bold'>Action</h5> */}

          <div className="action_btns justify-content-between">
            <div className="left_btns text-center">

              <Button label={'Edit'} handleClick={editHandleClick} />

              <Button label={'Add Range'} handleClick={addRowCell} />
              <ModalAoi
                show={rangeModalOpen}
                onHide={() => setRangeModalOpen(false)}
                modalTitle='Add Range'
                modalBody={rangeBody}
                modalFooter={rangeFooter()}
              />

              <Button label={'Delete Channel'} handleClick={deleteRowCell} />

              {/* <button onClick={selectHandleClick}>{selectBtn}</button> */}

              <ModalAoi
                show={modalShow}
                onHide={() => setModalShow(false)}
                modalTitle=""
                modalBody={editBody()}
                modalFooter={editFooter()}
              />
            </div>

            <div className="right_btn text-center">
              <Button label={"Save as"} handleClick={saveHandleClick} />
              <ModalAoi
                show={saveAs}
                onHide={() => setSaveAs(false)}
                modalTitle="Save As"
                modalBody={saveBody}
                modalFooter={saveFooter}
              />
              <Button label={"Make Default"} handleClick={defaultHandleClick} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
