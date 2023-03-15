import React, { useEffect, useState } from "react";
import Button from "../../../Button";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';
import Visualize from "../../../Modal/Visualize";
import Form from "react-bootstrap/Form";
import ModalAoi from "../../../Modal/ModalAoi";
import { Accordion, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addRangeQAMConfiguration,
  addTiltQAMConfiguration,
  configurationQAMRowAllDelete,
  configurationQAMRowDelete,
  configurationQAMRowUpdate,
  getConfigurationQAMTable,
} from "../../../../actions/dConfiguration";
import { showPopup } from "../../../../actions/popupAction";
import { getManageConfigRowSelect } from "../../../../actions/dmcCurrentFiles";
import MutedFormatter from "../../MuteFormatter";

let manageConfigTableIndex = [];
let editRowData = [];
let allRowsSelectData = [];
let singalRowSelectData = [];

const QAMTab = ({ dataBaseName, chID, configuratonData }) => {
  const dispatch = useDispatch();

  const addRangeData = useSelector((state) => state.dcAddRangeReducer.dcAddRangeData);
  const addTiltData = useSelector((state) => state.dcAddTiltReducer.dcAddTiltData);
  const cTableRowData = useSelector((state) => state.dmcTableRowReducer.dmcRowData.data);
  const cTableRowDeleteData = useSelector((state) => state.dcDeleteConfigurationReducer.dcDeleteConfigurationData);
  const cTableRowAllDeleteData = useSelector((state) => state.dcAllDeleteConfigurationReducer.dcAllDeleteConfigData);
  const cTableRowUpdateData = useSelector((state) => state.dcUpdateConfigurationReducer.dcUpdateConfigurationData);


  const [search, setSearch] = useState("");
  const [selectBtn, setSelectBtn] = useState("Select All");
  const [editModalShow, setEditModalShow] = useState(false);
  const [rangeModalShow, setRangeModalShow] = useState(false);
  const [tiltModalShow, setTiltModalShow] = useState(false);
  const [visualizeModel, setVisualizeModel] = useState(false);
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const [saveModal, setSaveModal] = useState(false);
  const [editValue, setEditValue] = useState(0);
  const [nofChannel, setNOFChannel] = useState("");
  const [power, setPower] = useState();
  const [frequency, setFrequency] = useState();
  const [operModeValue, setOperModeValue] = useState("");
  const [annexSelectType, setannexSelectType] = useState();
  const [mute, setMute] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [powerValue, setPowerValue] = useState();
  const [muteValue, setMuteValue] = useState();
  const [startFreq, setStartFreq] = useState();
  const [endFreq, setEndFreq] = useState();
  const [startPower, setStartPower] = useState();
  const [endPower, setEndPower] = useState();
  const [validationQAMTable, setValidationQAMTable] = useState(false);
  const [validationField, setValidationField] = useState('');


  let Reg = new RegExp(search, "i");

  useEffect(() => {
    dispatch(getManageConfigRowSelect(dataBaseName, 0));
  }, []);

  useEffect(() => {
    if ((addRangeData && addRangeData.status === 200) ||
      (addTiltData && addTiltData.status === 200) ||
      (cTableRowDeleteData && addTiltData.status === 200) ||
      (cTableRowAllDeleteData && cTableRowAllDeleteData.data && cTableRowAllDeleteData.data.success === true) ||
      (cTableRowUpdateData && cTableRowUpdateData.data && cTableRowUpdateData.data.success === true)
    ) {
      dispatch(getManageConfigRowSelect(dataBaseName, 0));
    }
  }, [addRangeData, addTiltData, cTableRowDeleteData, cTableRowAllDeleteData, cTableRowUpdateData]);


  useEffect(() => {
    if (cTableRowData) {
      setTableData(cTableRowData);
    }
  }, [cTableRowData]);

  // useEffect(() => {
  //   if (dataBaseName && chID) {
  //     dispatch(getConfigurationQAMTable(dataBaseName, chID));
  //   }
  // }, [dataBaseName && chID]);

  const editHandleClick = () => {
    setEditModalShow(!editModalShow);
    const selectRowLength = document.querySelectorAll(
      "#confinguration_qam_table .selection-row"
    ).length;
    selectRowLength === 0 ? setEditModalShow(true) : setEditModalShow(true); // changes on ticket 1
    setEditValue(selectRowLength);
  };

  const rangeHandleClick = () => {
    setRangeModalShow(!rangeModalShow);
  };

  const tiltHandleClick = () => {
    setTiltModalShow(!tiltModalShow);
  };

  const visualizeHandleClick = () => {
    setVisualizeModel(!visualizeModel);
  };

  const hideVisualize = () => {
    setVisualizeModel(false);
  };

  const deleteHandleClick = () => {
    singalRowSelectData.length > 0 ? setDeleteModalShow(true) :  setEditModalShow(true);
    
  };

  const saveHandleClick = () => {
    setSaveModal(true);
  };
  const handleChangemodul = (event) => {
    //  console.log("value",event.target.value);
    setOperModeValue(event.target.value);
  };

  const handlechangeannex = (event) => {
    setannexSelectType(event.target.value);
  };
  const muted = (
    <div>
      <label className="toggle_box">
        <input type="checkbox" />
        <span className="slider"></span>
        <span className="labels" data-on="Yes" data-off="No"></span>
      </label>
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
      frequency: "test",
      power: "25",
      width: "10",
      modulation: "test",
      annex: "test",
      op_mode: "test",
      muted: muted,
    },
    {
      no: 5,
      frequency: "test",
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
      width: "10",
      modulation: "test",
      annex: "test",
      op_mode: "test",
      muted: muted,
    },
  ];

  const handleOnSelect = (row, isSelect) => {

    if (isSelect) {
      singalRowSelectData.push(row);
    } else {
      const updateRowData = singalRowSelectData.filter(item => item.ch_index !== row.ch_index);
      singalRowSelectData = updateRowData;
    }
  }

  const handleOnSelectAll = (isSelect, rows) => {
    if (isSelect) {
      allRowsSelectData = rows;
    }
    else {
      allRowsSelectData = [];
    }
  }

  const selectRow = {
    mode: "checkbox",
    clickToSelect: true,
    classes: "selection-row",
    clickToEdit: true,
    onSelect: handleOnSelect,
    onSelectAll: handleOnSelectAll

  };

  const selectHandleClick = () => {
    var trElements = document.querySelectorAll(
      "#confinguration_qam_table tbody tr"
    );
    console.log(trElements);

    if (selectBtn === "Select All") {
      trElements.forEach(function (element) {
        element.classList.add("selection-row");
      });
      setSelectBtn("Deselect All");
    } else {
      trElements.forEach(function (element) {
        element.classList.remove("selection-row");
      });
      setSelectBtn("Select All");
    }
  };

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

  function numberFormatter(cell, row, rowIndex) {
    return <span>{Number(row.ch_index)}</span>;
  }

  function frequencyFormatter(cell, row, rowIndex) {
    return <span>{Number(row.frequency)}</span>;
  }

  function powerFormatter(cell, row, rowIndex) {
    return <span>{Number(row.power)}</span>;
  }


  const columns = [
    {
      dataField: "ch_index",
      text: "Ch_Index",
      sort: true,
      editable: false,
      formatter: numberFormatter,
      sortCaret: (order, column) => {
        if (!order) return (<span className="react-bootstrap-table-sort-order dropup"><span className="caret"></span></span>);
        else if (order === 'asc') return (<span className="react-bootstrap-table-sort-order dropup"><span className="caret"></span></span>);
        else if (order === 'desc') return (<span className="react-bootstrap-table-sort-order"><span className="caret"></span></span>);
        return null;
      },
      sortFunc: (a, b, order, dataField, rowA, rowB) => {
        if (order === 'asc') {
          return b - a;
        }
        return a - b; // desc
      }
    },
    {
      dataField: "frequency",
      text: "Frequency",
      formatter: frequencyFormatter,
      sort: true,
      sortCaret: (order, column) => {
        if (!order) return (<span className="react-bootstrap-table-sort-order dropup"><span className="caret"></span></span>);
        else if (order === 'asc') return (<span className="react-bootstrap-table-sort-order dropup"><span className="caret"></span></span>);
        else if (order === 'desc') return (<span className="react-bootstrap-table-sort-order"><span className="caret"></span></span>);
        return null;
      },
      sortFunc: (a, b, order, dataField, rowA, rowB) => {
        if (order === 'asc') {
          return b - a;
        }
        return a - b; // desc
      }
    },
    {
      dataField: "power",
      text: "Power",
      sort: true,
      formatter: powerFormatter,
      sortCaret: (order, column) => {
        if (!order) return (<span className="react-bootstrap-table-sort-order dropup"><span className="caret"></span></span>);
        else if (order === 'asc') return (<span className="react-bootstrap-table-sort-order dropup"><span className="caret"></span></span>);
        else if (order === 'desc') return (<span className="react-bootstrap-table-sort-order"><span className="caret"></span></span>);
        return null;
      },
      sortFunc: (a, b, order, dataField, rowA, rowB) => {
        if (order === 'asc') {
          return b - a;
        }
        return a - b; // desc
      }
    },
    // {
    //   dataField: 'width',
    //   text: 'Width',
    // },
    // {
    //   dataField: 'modulation',
    //   text: 'Modulation',
    // },
    {
      dataField: "annex",
      text: "Annex",
      sort: true,
      sortCaret: (order, column) => {
        if (!order) return (<span className="react-bootstrap-table-sort-order dropup"><span className="caret"></span></span>);
        else if (order === 'asc') return (<span className="react-bootstrap-table-sort-order dropup"><span className="caret"></span></span>);
        else if (order === 'desc') return (<span className="react-bootstrap-table-sort-order"><span className="caret"></span></span>);
        return null;
      }
    },
    {
      dataField: "operMode",
      text: "OP Mode",
      sort: true,
      sortCaret: (order, column) => {
        if (!order) return (<span className="react-bootstrap-table-sort-order dropup"><span className="caret"></span></span>);
        else if (order === 'asc') return (<span className="react-bootstrap-table-sort-order dropup"><span className="caret"></span></span>);
        else if (order === 'desc') return (<span className="react-bootstrap-table-sort-order"><span className="caret"></span></span>);
        return null;
      },
      editor: {
        type: Type.SELECT,
        options: [
          {
            value: 'QAM256',
            label: 'QAM256'
          },
          {
            value: 'QAM64',
            label: 'QAM64'
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
      formatter:(cell, row) => <MutedFormatter cell={cell} row={row} dataBaseName={dataBaseName} />,
      events: {
        onClick: (e, column, columnIndex, row, rowIndex) => {
          e.stopPropagation();
        },
      },
    },
  ];

  const rangeBody = (
    <>
      <div className="d-flex justify-content-center">
        <div className="mb-3 d-flex flex-column align-items-end me-3">
          <div className="mb-2">
            <label htmlFor="" className="me-2" title='value from 1 to 300'>
              Number of Channels:{" "}
            </label>
            <input
              type="number"
              value={nofChannel}
              onChange={(e) => setNOFChannel(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor="" className='me-2' title='value from -12 to 12 dB' >Power: </label>
            <input
              type="text"
              value={power}
              onChange={(e) => setPower(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-3 d-flex flex-column align-items-start">
          <div className='me-2 mb-3'>
            <label htmlFor="" className='me-2' title='value from 1 to 1800 MHz' >Starting Frequency: </label>
            <input
              type="number"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="" className="me-2">
              Mute:{" "}
            </label>
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
          <option value="QAM256">QAM256 </option>
          <option value="QAM64">QAM64</option>
          <option value="CW_CARRIER">CW_CARRIER</option>
        </Form.Select>
      </div>

      {/* <Accordion defaultActiveKey="1" className='advance_setting'>
        <Accordion.Item eventKey="0">
          <Accordion.Header >Advanced Settings</Accordion.Header>
          <Accordion.Body>
            <div className='d-flex mb-2'>
              <label htmlFor="" className='text-nowrap me-2'>Modulation Type: </label>
              <Form.Select aria-label="Default select example" style={{ padding: '2px 36px 2px 12px', borderRadius: '2px', border: '1px solid' }} onChange={handleChangemodul} value={operModeValue}>
                <option></option>
                <option value="QAM64">QAM64</option>
                <option value="QAM256">QAM256 </option>
                <option value="CW_CARRIER">CW_CARRIER</option>
              </Form.Select>
            </div>
            <div className='mb-2 d-flex'>
              <label htmlFor="" className='me-2'>Annex Type: </label>
              <Form.Select aria-label="Default select example" style={{ padding: '2px 36px 2px 12px', borderRadius: '2px', border: '1px solid' }} onChange={handlechangeannex} value={annexSelectType}>
                <option></option>
                <option value="ANNEX_A">ANNEX_A</option>
                <option value="ANNEX_B">ANNEX_B </option>
              </Form.Select>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion> */}
    </>
  );

  const rangeFooter = () => {
    const opMode = operModeValue === "" ? "QAM256" : operModeValue;

    let message;

    if (nofChannel <= 1 || nofChannel >= 300) {
      message = 'No of Channel betwwen 1 to 300';
    }
    else if (frequency <= 1 || frequency >= 1800) {
      message = 'Frequency betwwen 1 to 1800 MHz';
    }
    else if (power <= -12 || power >= 12) {
      message = 'Power betwwen -12 to 12';
    }

    return (
      <div className="edit_btns">
        <Button
          label={"Add Range"}
          handleClick={() => {
            const payload = {
              power: power,
              numofchannels: Number(nofChannel),
              annex: "ANNEX_A",
              operMode: opMode,
              mute: mute === true ? "YES" : "NO",
              frequency: frequency,
            };

            if (message) {
              dispatch(showPopup({ message: message, type: "danger" }))
            } else {
              dispatch(addRangeQAMConfiguration(dataBaseName, payload));
            }

            setRangeModalShow(false);
            // setNOFChannel('');
            setPower("");
            setFrequency("");
            setMute(false);
            setOperModeValue("");
            setannexSelectType("");
          }}
        />
        <Button label={"Cancel"} handleClick={() => setRangeModalShow(false)} />
      </div>
    );
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
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckChecked"
                    onChange={e => setMuteValue(e.target.checked)} />
                </div>
              </div>
            </div>
          </>
        )}
      </>
    );
  };

  const updateHandler = () => {

    const checkSwitch = (muteValue === true ? 'YES' : 'NO');
    let updateRowsData;

    updateRowsData = allRowsSelectData.length > 0 ? allRowsSelectData : singalRowSelectData;

    updateRowsData.forEach((item, index) => {
      const payload = {
        power: powerValue,
        annex: item.annex,
        operMode: item.operMode,
        mute: checkSwitch,
        frequency: item.frequency,
      }
      dispatch(configurationQAMRowUpdate(dataBaseName, item.ch_index, payload));
      setEditModalShow(false);
    });

  }

  const editFooter = () => {
    return (
      <>
        {editValue === 0 ? (
          <></>
        ) : (
          <div className="edit_btns">
            <Button label={"Edit"} handleClick={updateHandler} />
            <Button
              label={"Cancel"}
              handleClick={() => setEditModalShow(false)}
            />
          </div>
        )}
      </>
    );
  };

  const tiltBody = (
    <div className="d-flex flex-column justify-content-center">
      <div className="d-flex justify-content-center align-items-center">
        <div className="mb-2 me-3">
          <label htmlFor="" className="me-2">
            Starting Tilt Freq:{" "}
          </label>
          <input
            type="number"
            value={startFreq}
            onChange={(e) => setStartFreq(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="" className="me-2">
            Ending Tilt Freq:{" "}
          </label>
          <input
            type="number"
            value={endFreq}
            onChange={(e) => setEndFreq(e.target.value)}
          />
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="mb-2 me-3">
          <label htmlFor="" className="me-2">
            Starting Tilt Power:{" "}
          </label>
          <input type="number"
            value={startPower}
            onChange={(e) => setStartPower(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="" className="me-2">
            Ending Tilt Power:{" "}
          </label>
          <input type="number"
            value={endPower}
            onChange={(e) => setEndPower(e.target.value)}
          />
        </div>
      </div>
    </div>
  );

  const handleAddTilt = () => {

    dispatch(addTiltQAMConfiguration(startFreq, endFreq, startPower, endPower, dataBaseName))
    setTiltModalShow(false);
  }

  const tiltFooter = (
    <div className="edit_btns">
      <Button label={"Add Tilt"} handleClick={handleAddTilt} />
      <Button label={"Cancel"} handleClick={() => setTiltModalShow(false)} />
    </div>
  );

  const deleteItem = () => {
    setDeleteModalShow(false);
    if (allRowsSelectData.length > 0) {
      dispatch(configurationQAMRowAllDelete(dataBaseName))
      allRowsSelectData = [];

    } else {
      singalRowSelectData.forEach((item, index) => {
        dispatch(configurationQAMRowDelete(dataBaseName, item.ch_index))
        singalRowSelectData = [];
      });
    }
  };

  const deleteBody = <p>Delete the selected entry?</p>;

  const deleteFooter = (
    <div className="edit_btns">
      <Button
        label={"Yes"}
        handleClick={deleteItem}
      />
      <Button label={"Cancel"} handleClick={() => setDeleteModalShow(false)} />
    </div>
  );

  const saveBody = <p>Save the entry?</p>;

  const saveFooter = (
    <div className="edit_btns">
      <Button label={"Save"} />
      <Button label={"Cancel"} handleClick={() => setSaveModal(false)} />
    </div>
  );

  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      manageConfigTableIndex.includes({ selectRow: row.no })
        ? manageConfigTableIndex.splice(
          manageConfigTableIndex.indexOf({ selectRow: row.no }),
          1
        )
        : manageConfigTableIndex.push({ selectRow: row.no });
      console.log(
        `clicked on row with index: ${rowIndex} ${manageConfigTableIndex} ${row.no}`
      );
      console.log("frequency", row.frequency);
    },
  };

  useEffect(() => {
    setTableData(tableData);
  }, [tableData])

  useEffect(() => {
    if (search.length > 0) {
      let data =
        cTableRowData.length > 0 &&
        cTableRowData.filter(
          (data) =>
            Reg.test(data.frequency) ||
            Reg.test(data.power) ||
            Reg.test(data.annex) ||
            Reg.test(data.operMode)
        );

      setTableData(data);
    }
  }, [search]);

  const dbSaveCell = (row) => {

    const payload = {
      power: row.power,
      annex: row.annex,
      operMode: row.operMode,
      mute: row.mute,
      frequency: row.frequency,
    }
    dispatch(configurationQAMRowUpdate(dataBaseName, row.ch_index, payload));
  }

  const validationModal = () => {

    let validationMessage;

    if (validationField === 'frequency') {
      validationMessage = "Frequency should be in between 1 and 1800";
    }
    else if (validationField === 'power') {
      validationMessage = "Power Range should be in between -12 and 12";

    }
    return (

      <div>{validationMessage}</div>

    )
  }

  return (
    <div className="channel_tab ">
      <div className="border border-dark mb-4">
        <div className="searchbar table_top_bar d-flex justify-content-end border-bottom border-dark">
          <label htmlFor="search">Search:</label>
          <input
            type="text"
            id="search"
            value={search || ""}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {tableData && tableData.length > 0 ? (
          <div className="tableContainer">

            <BootstrapTable
              id="confinguration_qam_table"
              keyField="frequency"
              data={tableData}
              columns={columns}
              cellEdit={cellEditFactory({
                mode: 'dbclick',
                blurToSave: true,
                onStartEdit: (row, column, rowIndex, columnIndex) => { console.log('start to edit!!!', row); },
                afterSaveCell: (oldValue, newValue, row, column) => {

                  if (column.dataField === 'frequency' && (newValue < 0 || newValue > 1800 || newValue === '')) {
                    setValidationField('frequency');
                    setValidationQAMTable(true);
                    dispatch(getManageConfigRowSelect(dataBaseName, 0));

                  }
                  else if (column.dataField === 'power' && (newValue < -12 || newValue > 12 || newValue === '')) {
                    setValidationField('power');
                    setValidationQAMTable(true);
                    dispatch(getManageConfigRowSelect(dataBaseName, 0));

                  }
                  else {
                    dbSaveCell(row)
                  }

                }
              })}
              selectRow={selectRow}
              headerClasses="table_header"
              classes="mb-0"
              rowEvents={rowEvents}
              defaultSortDirection='asc'

            />
          </div>
        ) : (
          <p className="text-center fw-bold mt-2">No record found</p>
        )}
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
          <div className="left_btns d-flex flex-column">
            <div>
              <Button label={"Add Range"} handleClick={rangeHandleClick} />
              <ModalAoi
                show={rangeModalShow}
                onHide={() => setRangeModalShow(false)}
                modalTitle="Add Range"
                modalBody={rangeBody}
                modalFooter={rangeFooter()}
              />

              <Button label={"Edit"} handleClick={editHandleClick} />
              <ModalAoi
                show={editModalShow}
                onHide={() => setEditModalShow(false)}
                modalTitle=""
                modalBody={editBody()}
                modalFooter={editFooter()}
              />
              <Button label={"Delete"} handleClick={deleteHandleClick} />
              <ModalAoi
                show={deleteModalShow}
                onHide={() => setDeleteModalShow(false)}
                modalTitle=""
                modalBody={deleteBody}
                modalFooter={deleteFooter}
              />
            </div>
            <div>
              <Button label={"Add Tilt"} handleClick={tiltHandleClick} />
              <ModalAoi
                show={tiltModalShow}
                onHide={() => setTiltModalShow(false)}
                modalTitle="Add Tilt"
                modalBody={tiltBody}
                modalFooter={tiltFooter}
              />

              {/* <button onClick={selectHandleClick}>{selectBtn}</button> */}
            </div>
          </div>
          <div className="right_btn d-flex flex-column">
            {/* <Button label={"Save"} handleClick={saveHandleClick} /> */}
            <ModalAoi
              show={saveModal}
              onHide={() => setSaveModal(false)}
              modalTitle=""
              modalBody={saveBody}
              modalFooter={saveFooter}
            />
            <Button label={"Visualize"} handleClick={visualizeHandleClick} />
          </div>
        </div>
      </div>
      {visualizeModel ? <Visualize hideVisualize={hideVisualize} /> : null}
    </div>
  );
};

export default QAMTab;
