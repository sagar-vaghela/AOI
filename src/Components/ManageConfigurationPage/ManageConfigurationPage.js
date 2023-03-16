import React, { useEffect, useState } from "react";
import Button from "../Button";
import OFDMTab from "./Channels/OFDMTab/OFDMTab";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory, { Type } from "react-bootstrap-table2-editor";
import Visualize from "../Modal/Visualize";
import ModalAoi from "../Modal/ModalAoi";
import { Tab, Tabs } from "react-bootstrap";
import QAMTab from "./Channels/QAMTab/QAMTab";
import { useDispatch, useSelector } from "react-redux";
import {
  mcChangeDataBaseName,
  getManageConfigQAMTable,
  getManageConfigRowSelect,
  newDataBase,
  mcChangeRemoveDataBase,
  mcDeleteDataBase,
  mcArchiveDataBase,
  mcRunDataBase,
  mcDownloadAllDataBase,
  dmcDatabaseAnnex,
} from "../../actions/dmcCurrentFiles";
import { getSystemSettingsAnnex } from "../../actions/systemSettings";
import ArchiveFormatter from "./ArchiveFormatter";
import { postSaveAs } from "../../actions/drcQAMchannels";

let manageConfigTableIndex = [];
let singalRowSelectDB = [];
let allRowsSelectDB = [];
let singalrowIndex;

export default function ManageConfigurationPage({ setActiveTab, setDataBaseName, setChID, setTabDisable, setConfiguratonData }) {

  const mcTableUser = useSelector((state) => state.dmcTableReducer.mcTableUser.data);
  const mcTableSystem = useSelector((state) => state.dmcTableReducer.mcTableSystem.data);
  const mcNewDataBase = useSelector((state) => state.dmcNewDataBaseAddReducer.dmcNewDataBase);
  const mcTableRowData = useSelector((state) => state.dmcTableRowReducer.dmcRowData);
  const rcQAMAnnexData = useSelector((state) => state.settingAnnexDataReducer.settingAnnexGet);
  const mcDeleteConfigData = useSelector((state) => state.dmcDeleteDatabaseReducer.dmcDeleteDataBaseData);
  const mcRenameDatabase = useSelector((state) => state.dmcRenameDataBaseReducer.dmcRenameDataBaseData);
  const mcRenameDeleteDatabase = useSelector((state) => state.dmcRenameDeleteDBReducer.dmcRenameDeleteDBData);
  const mcArchiveDatabase = useSelector((state) => state.dmcArchiveDatabaseReducer.dmcArchiveDataBaseData);
  const mcDownloadAllDatabase = useSelector((state) => state.dmcDownloadAllDBReducer.dmcDownloadAllDBData);
  const configQAMTableUpdateData = useSelector((state) => state.dcUpdateConfigurationReducer.dcUpdateConfigurationData);

  const [tableData, setTableData] = useState([]);
  const [search, setSearch] = useState("");
  const [dbName, setDBName] = useState('');
  const [selectBtn, setSelectBtn] = useState("Select All");
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const [renameModalShow, setRenameModalShow] = useState(false);
  const [newModalShow, setNewModalShow] = useState(false);
  const [visualizeModel, setVisualizeModel] = useState(false);
  const [saveAs, setSaveAs] = useState(false);
  const [saveName, setSaveName] = useState("");
  const [editValue, setEditValue] = useState(0);
  const [checkNewDataBase, setCheckNewDataBase] = useState(false);
  const [checkSameDataBase, setCheckSameDataBase] = useState(false);
  const [annexModal, setAnnexModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState({});
  const [OfdmEditModalShow, setOfdmEditModalShow] = useState(false);
  const [editablebody, setEditablebody] = useState('');
  const [dbRename, setdbRename] = useState('');
  const [dbCopy, setDbCopy] = useState('');
  const [copyModalShow, setCopyModalShow] = useState(false);
  const [selectDBValidation, setSelectDBValidation] = useState(false);
  const [totalData, setTotalData] = useState([]);


  let Reg = new RegExp(search, "i");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getManageConfigQAMTable(0));
    dispatch(getManageConfigQAMTable(1));
    setTabDisable(true);
  }, []);

  useEffect(() => {
    if ((mcDeleteConfigData && mcDeleteConfigData.data && mcDeleteConfigData.data.success === true) ||
      (mcRenameDeleteDatabase && mcRenameDeleteDatabase.data && mcRenameDeleteDatabase.data.success === true) ||
      (mcRenameDatabase && mcRenameDatabase.data && mcRenameDatabase.data.success === true)
    ) {
      dispatch(getManageConfigQAMTable(0));
      dispatch(getManageConfigQAMTable(1));
      setEditValue(0);
    }
  }, [mcDeleteConfigData, mcRenameDeleteDatabase, mcRenameDatabase])


  useEffect(() => {
    let newdata = [];

    if (mcTableSystem) {
      mcTableSystem.map((data, index) => {
        newdata.push({ name: data.dbname, editable: "no", annex: data.annex });
      });
    }
    if (mcTableUser) {
      mcTableUser.map((data, index) => {
        newdata.push({ name: data.dbname, editable: "yes", annex: data.annex });
      });
    }

    let updateData = [];

    newdata.forEach((item, index) => {
      updateData.push({ ...item, rowIndex: index + 1 })
    });
    setTotalData(updateData);
    setTableData(updateData);


  }, [mcTableSystem, mcTableUser]);

  const visualizeHandleClick = () => {
    setVisualizeModel(!visualizeModel);
  };

  const hideVisualize = () => {
    setVisualizeModel(false);
  };

  // const saveHandleClick = () => {
  //   if (singalRowSelectDB.length !== 0) {
  //     if (singalRowSelectDB.length > 1) {
  //       setSelectDBValidation(true);
  //     }
  //     else {
  //       setSaveAs(true);
  //       setSaveName(singalRowSelectDB[0].name);
  //     }
  //   } else {
  //     setEditablebody('Please select at list one Row !');
  //     setSaveName('');
  //     setOfdmEditModalShow(true);
  //   }
  // };

  const deleteHandleClick = () => {
    if (singalRowSelectDB.length > 0) {
      setDeleteModalShow(true)

    }
    else {
      setEditablebody('Please select at list one Row !');
      setOfdmEditModalShow(true);
    }

  };

  const renameHandleClick = () => {

    if (singalRowSelectDB.length !== 0) {
      if (singalRowSelectDB.length > 1) {
        setSelectDBValidation(true);
      }
      else {
        setRenameModalShow(true);
        setCheckSameDataBase(false);
        setdbRename(singalRowSelectDB[0].name);
      }
    } else {
      setEditablebody('Please select at list one Row !');
      setdbRename('');
      setOfdmEditModalShow(true);
    }
  };

  // if (visualizeModel) {
  //   document.getElementsByClassName('tab-content')[0].classList.add('overflow-hide')
  // } else {
  //   document.getElementsByClassName('tab-content')[0].classList.remove('overflow-hide')
  // }

  function numberFormatter(cell, row, rowIndex) {
    return <span>{Number(row.rowIndex)}</span>;
  }

  function annexFormatter(cell, row) {

    const settingAnnex = rcQAMAnnexData && rcQAMAnnexData.data;
    return <span>{row.annex === '' ? settingAnnex : row.annex}</span>;
  }

  const columns = [
    {
      dataField: "rowIndex",
      text: "Index",
      editable: false,
      sort: true,
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
      dataField: "name",
      text: "Name",
      sort: true,
      sortCaret: (order, column) => {
        if (!order) return (<span className="react-bootstrap-table-sort-order dropup"><span className="caret"></span></span>);
        else if (order === 'asc') return (<span className="react-bootstrap-table-sort-order dropup"><span className="caret"></span></span>);
        else if (order === 'desc') return (<span className="react-bootstrap-table-sort-order"><span className="caret"></span></span>);
        return null;
      },
    },
    {
      dataField: "editable",
      text: "Editable",
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
            value: "Yes",
            label: "Yes",
          },
          {
            value: "No",
            label: "No",
          },
        ],
      },
    },
    {
      dataField: "annex",
      text: "Annex",
      sort: true,
      editable: false,
      formatter: annexFormatter,
      sortCaret: (order, column) => {
        if (!order) return (<span className="react-bootstrap-table-sort-order dropup"><span className="caret"></span></span>);
        else if (order === 'asc') return (<span className="react-bootstrap-table-sort-order dropup"><span className="caret"></span></span>);
        else if (order === 'desc') return (<span className="react-bootstrap-table-sort-order"><span className="caret"></span></span>);
        return null;
      }
    },
    {
      dataField: "archive",
      text: "Archive",
      editable: false,
      formatter: (cell, row) => <ArchiveFormatter cell={cell} row={row} />,
      events: {
        onClick: (e, column, columnIndex, row, rowIndex) => {
          e.stopPropagation();
          e.preventDefault();
        },
      },
    }
  ];
  const selectionRow = (row, isSelect, rowIndex) => {

    const selectRowLength = document.querySelectorAll("#manage_config_table .selection-row").length + 1;
    setEditValue(selectRowLength);
    const dbName = row.name;
    const dbType = row.editable === 'no' ? 1 : 0;
    setSelectedRow(row);
    dispatch(getManageConfigRowSelect(dbName, dbType));
    dispatch(getSystemSettingsAnnex());

    if (isSelect) {
      //singalRowSelectDB.push(row);

      if (singalrowIndex) {
        const selectRowData = document.querySelector(`#manage_config_table tbody tr:nth-child(${singalrowIndex + 1})`);
        selectRowData.classList.remove('selection-row');
      }

      singalRowSelectDB = [row];
      singalrowIndex = rowIndex;
    } else {
      const updateRowData = singalRowSelectDB.filter(item => item.name !== row.name);
      singalRowSelectDB = updateRowData;
    }
  };

  useEffect(() => {
    if (singalrowIndex && document.querySelector(`#manage_config_table`)) {
      const selectRowData = document.querySelector(`#manage_config_table tbody tr:nth-child(${singalrowIndex + 1})`);
      selectRowData.classList.add('selection-row');
      setEditValue(selectRowData);

    }

  }, [singalrowIndex && document.querySelector(`#manage_config_table`)])



  useEffect(() => {
    if (mcTableRowData) {
      setConfiguratonData(mcTableRowData.data)
    }
  }, [mcTableRowData]);

  const handleOnSelectAll = (isSelect, rows) => {
    if (isSelect) {
      allRowsSelectDB = rows;
    }
    else {
      allRowsSelectDB = [];
    }
  }

  const selectRow = {
    mode: "radio",
    clickToSelect: true,
    classes: "selection-row",
    clickToEdit: true,
    hideSelectAll: true,
    hideSelectColumn: true,
    onSelect: selectionRow,
    //onSelectAll: handleOnSelectAll

  };

  const selectHandleClick = () => {
    var trElements = document.querySelectorAll("#manage_config_table tbody tr");
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

  const hanldeSaveDatabase = async () => {
    if (tableData.map(item => item.name).includes(saveName)) {
      setCheckSameDataBase(true);
    } else {
      await dispatch(postSaveAs(selectedRow.name, saveName));
      setSaveAs(false);
      dispatch(getManageConfigQAMTable(0));
      dispatch(getManageConfigQAMTable(1));
    }
  }

  const saveFooter = (
    <div className="edit_btns">
      <Button
        label={"Save"}
        handleClick={() => hanldeSaveDatabase()}
      />
      <Button label={"Cancel"} handleClick={() => setSaveAs(false)} />
    </div>
  );

  const deleteBody = <p>Delete the selected entry?</p>;
  const newBody = (
    checkSameDataBase ?
      <div>This name is already exists. Please enter different name.</div>
      :
      <input
        type="text"
        placeholder="Enter a database name"
        className="w-100"
        value={dbName}
        onChange={(e) => setDBName(e.target.value)}
        style={{ maxWidth: "100%" }}
      />
  );


  const newDatabaseAdd = async () => {

    if (tableData.map(item => item.name).includes(dbName)) {
      setCheckSameDataBase(true);
    }
    else {
      await dispatch(newDataBase(dbName));
      setCheckNewDataBase(true);
      setNewModalShow(false);
    }

  }

  useEffect(() => {

    if ((mcNewDataBase && mcNewDataBase.data && mcNewDataBase.data.success === true) && checkNewDataBase) {
      console.log("dbname", dbName);
      setDataBaseName(dbName)
      setActiveTab("configuration");
      setCheckNewDataBase(false);
    }
  }, [mcNewDataBase, checkNewDataBase])


  const newFooter = (
    !checkSameDataBase &&
    <div className="edit_btns">
      <Button
        label={"Add"}
        handleClick={newDatabaseAdd}
      />
      <Button label={"Cancel"} handleClick={() => setNewModalShow(false)} />
    </div>
  );

  const deleteItem = () => {

    let deleteRowsData;

    deleteRowsData = allRowsSelectDB.length > 0 ? allRowsSelectDB : singalRowSelectDB;

    if (selectedRow.editable === 'no') {
      setDeleteModalShow(false);
      setOfdmEditModalShow(true);
      setEditablebody('This Database is System Database That is not Delete.');
    }
    else {
      deleteRowsData.forEach((item) => {
        dispatch(mcDeleteDataBase(item.name));
        setDeleteModalShow(false);
      });
    }
  };

  // useEffect(() => {
  //   if (mcRenameDatabase && mcRenameDatabase.data && mcRenameDatabase.data.success === true) {
  //     dispatch(mcChangeRemoveDataBase(selectedRow.name));
  //   }
  // }, [mcRenameDatabase]);


  const renamedatabase = async () => {
    if (tableData.map(item => item.name).includes(dbRename)) {
      setCheckSameDataBase(true);
    } else {
      await dispatch(mcChangeDataBaseName(selectedRow.name, dbRename));
      await dispatch(mcChangeRemoveDataBase(selectedRow.name));
      setRenameModalShow(false);
    }
  }

  const copyDatabase = async () => {
    if (tableData.map(item => item.name).includes(dbCopy)) {
      setCheckSameDataBase(true);
    } else {
      await dispatch(mcChangeDataBaseName(selectedRow.name, dbCopy));
      setCopyModalShow(false);
    }
  }

  const deleteFooter = (
    <div className="edit_btns">
      <Button
        label={"Yes"}
        handleClick={deleteItem}
      />
      <Button label={"Cancel"} handleClick={() => setDeleteModalShow(false)} />
    </div>
  );

  const renameBody = (checkSameDataBase ?
    <div>This name is already exists. Please enter different name.</div>
    :
    <input
      type="text"
      placeholder="Enter a new file name"
      className="w-100"
      style={{ maxWidth: "100%" }}
      value={dbRename}
      onChange={(e) => setdbRename(e.target.value)}
    />
  );

  const renameFooter = (
    !checkSameDataBase &&
    <div className="edit_btns">
      <Button label={"Save"} handleClick={() => renamedatabase()} />
      <Button label={"Cancel"} handleClick={() => setRenameModalShow(false)} />
    </div>
  );

  const copyBody = (checkSameDataBase ?
    <div>This name is already exists. Please enter different name.</div>
    :
    <input
      type="text"
      placeholder="Enter a new db name"
      className="w-100"
      style={{ maxWidth: "100%" }}
      value={dbCopy}
      onChange={(e) => setDbCopy(e.target.value)}
    />
  );

  const copyFooter = (
    !checkSameDataBase &&
    <div className="edit_btns">
      <Button label={"Save"} handleClick={() => copyDatabase()} />
      <Button label={"Cancel"} handleClick={() => setCopyModalShow(false)} />
    </div>
  );


  const rowEvents = {
    onClick: (e, row, rowIndex) => {

      manageConfigTableIndex.includes({ selectRow: row.no })
        ?
        manageConfigTableIndex.splice(manageConfigTableIndex.indexOf({ selectRow: row.no }), 1)
        :
        manageConfigTableIndex.push({ selectRow: row.no });
    },
  };

  const annexVaidationModal = () => {
    return (
      <div>Annex is Different so, Go to Setting page and change the Annex</div>
    )
  }


  const selectDBVaidationModal = () => {
    return (
      <div>you can't more than one databse</div>
    )
  }

  const rowEditHandler = () => {

    if (singalRowSelectDB.length !== 0) {

      if (singalRowSelectDB.length > 1) {
        setSelectDBValidation(true);
      }
      else {
        setSelectDBValidation(false);

        if (selectedRow.editable === 'no') {
          setOfdmEditModalShow(true);
          setEditablebody('This Database is System Database That is not Editable.');

        }
        else {

          // if (mcTableRowData && mcTableRowData.data && mcTableRowData.data.length === 0) {
          //   setOfdmEditModalShow(true);
          //   setEditablebody('This databse is empty so annex is not match to setting annex');
          // }
          if (mcTableRowData && mcTableRowData.data && mcTableRowData.data.length > 0) {

            const settingAnnex = rcQAMAnnexData && rcQAMAnnexData.data;
            const rowAnnex = mcTableRowData && mcTableRowData.data[0] && mcTableRowData.data[0].annex;

            if (rowAnnex) {
              if (settingAnnex === rowAnnex) {
                setActiveTab("configuration");
                setDataBaseName(singalRowSelectDB[0].name);
                setChID(1);
              }
              else {
                setAnnexModal(true);
              }
            }
          }
          else {
            if (mcTableRowData && mcTableRowData.data.length === 0) {
              setActiveTab("configuration");
              setDataBaseName(singalRowSelectDB[0].name);
              setChID(1);
            }
          }
        }
      }
    }

    else {
      setEditablebody('Please select at list one Row !');
      setOfdmEditModalShow(true);
    }

  }

  useEffect(() => {

    let manageConfigData = [];

    if (mcTableSystem) {
      mcTableSystem.map((data) => {
        manageConfigData.push({ name: data.dbname, editable: "no", annex: data.annex });
      });
    }
    if (mcTableUser) {
      mcTableUser.map((data) => {
        manageConfigData.push({ name: data.dbname, editable: "yes", annex: data.annex });
      });
    }

    let updateData = [];

    manageConfigData.forEach((item, index) => {
      updateData.push({ ...item, rowIndex: index + 1 })
    });

    if (search.length > 0) {
      let data = updateData.length > 0 && updateData.filter((item) =>
        Reg.test(item.name) ||
        Reg.test(item.editable)
      );
      setTableData(data);
    }
    else {
      setTableData(totalData);
    }
  }, [search]);

  // useEffect(() => {
  //   if (mcArchiveDatabase && mcArchiveDatabase.data) {
  //     const url = window.URL.createObjectURL(new Blob([mcArchiveDatabase.data]));
  //     const a = document.createElement('a');
  //     a.href = url;
  //     a.download = `${selectedRow.name}.db`
  //     document.body.appendChild(a);
  //     a.click();
  //     window.URL.revokeObjectURL(url);
  //   }
  // }, [mcArchiveDatabase])


  const archiveHandleClick = () => {
    if (selectedRow.name) {
      dispatch(mcArchiveDataBase(selectedRow.name));
    } else {
      setEditablebody("Please select at list one Row !");
      setOfdmEditModalShow(true);
    }
  };

  const runHandler = () => {
    if (singalRowSelectDB.length !== 0) {

      if (singalRowSelectDB.length > 1) {
        setSelectDBValidation(true);
      }
      else {
        dispatch(mcRunDataBase(singalRowSelectDB[0].name));
      }
    } else {
      setEditablebody("Please select at list one Row !");
      setOfdmEditModalShow(true);
    }
  }

  useEffect(() => {
    if (mcDownloadAllDatabase && mcDownloadAllDatabase.data) {
      const url = window.URL.createObjectURL(new Blob([mcDownloadAllDatabase.data]));
      const a = document.createElement('a');
      a.href = url;
      a.download = `database.zip`
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    }
  }, [mcDownloadAllDatabase])


  const downloadHandleClick = () => {
    dispatch(mcDownloadAllDataBase());
  }

  const copyHandleClick = () => {

    if (singalRowSelectDB.length !== 0) {

      if (singalRowSelectDB.length > 1) {
        setSelectDBValidation(true);
      }
      else {
        setCopyModalShow(true);
        setCheckSameDataBase(false);
        setDbCopy(singalRowSelectDB[0].name);
      }

    } else {
      setEditablebody('Please select at list one Row !');
      setDbCopy('');
      setOfdmEditModalShow(true);
    }
  }

  return (
    <div className="channel_tab">
      <div className="border border-dark mb-4">
        <div className="table_top_bar border-bottom border-dark d-flex justify-content-between align-items-center p-2">
          <h5 className="mb-0">Current Configuration files</h5>

          <div className="searchbar p-2">
            <label htmlFor="search">Count: {tableData.length}</label>

            <label htmlFor="search">Search:</label>
            <input
              type="text"
              id="search"
              value={search || ""}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        {tableData.length === 0 ? (
          <p className="text-center fw-bold mt-2">No record found</p>
        ) : (
          <div className="tableContainer">

            <BootstrapTable
              id="manage_config_table"
              keyField="name"
              data={tableData}
              columns={columns}
              // cellEdit={cellEditFactory({ mode: "dbclick", blurToSave: true })}
              selectRow={selectRow}
              classes="mb-0"
              rowEvents={rowEvents}
              defaultSortDirection='asc'
              headerClasses="table_header"
            />
          </div>
        )}
      </div>
      <div className="action mb-4 border border-dark p-2">
        {/* <h5 className='d-inline-block fw-bold'>Action</h5> */}
        <div className="action_btns justify-content-between">
          <div className="left_btns">
            <Button label={"New"} handleClick={() => { setNewModalShow(true); setCheckSameDataBase(false); setDBName(''); }} />
            <ModalAoi
              show={newModalShow}
              onHide={() => setNewModalShow(false)}
              modalTitle=""
              modalBody={newBody}
              modalFooter={newFooter}
            />
            <Button label={"Edit"} handleClick={rowEditHandler} />
            <ModalAoi
              show={OfdmEditModalShow}
              onHide={() => setOfdmEditModalShow(false)}
              modalTitle=''
              modalBody={editablebody}
              modalFooter=''
            />

          </div>
          <div className="right_btn">
            <Button label={"Visualize"} handleClick={visualizeHandleClick} />
            <Button label={"Run"} handleClick={runHandler} />
          </div>
        </div>
      </div>
      <div className="action mb-4 border border-dark p-2">
        {/* <h5 className='d-inline-block fw-bold'>Manage Actions</h5> */}

        <div className="action_btns justify-content-between align-items-end">
          <div className="left_btns">
            <Button label={"Rename"} handleClick={renameHandleClick} />
            <ModalAoi
              show={renameModalShow}
              onHide={() => setRenameModalShow(false)}
              modalTitle="Rename"
              modalBody={renameBody}
              modalFooter={renameFooter}
            />
            <Button label={"Copy"} handleClick={copyHandleClick} />
            <ModalAoi
              show={copyModalShow}
              onHide={() => setCopyModalShow(false)}
              modalTitle="Copy db "
              modalBody={copyBody}
              modalFooter={copyFooter}
            />
            <Button label={"Delete"} handleClick={deleteHandleClick} />
            <ModalAoi
              show={deleteModalShow}
              onHide={() => setDeleteModalShow(false)}
              modalTitle=""
              modalBody={deleteBody}
              modalFooter={deleteFooter}
            />

            {/* <Button label={"Archive"} handleClick={archiveHandleClick} /> */}

            {/* <Button label={"Save as"} handleClick={saveHandleClick} /> */}
            <ModalAoi
              show={saveAs}
              onHide={() => setSaveAs(false)}
              modalTitle="Save As"
              modalBody={saveBody}
              modalFooter={saveFooter}
            />
          </div>
          <div className="right_btn d-flex align-items-center">
            <Button label={"Download All"} handleClick={downloadHandleClick} />
            <div className="d-flex flex-column ">
              {/* <strong>Upload from Pc to CPSG</strong> */}
              <button className="btn-file">
                Upload to CPSG
                <input type="file" />
              </button>
            </div>
          </div>

        </div>
      </div>
      {editValue !== 0 ? (
        <Tabs
          defaultActiveKey="QAMChannels"
          id="uncontrolled-tab-example"
          className="config_tabs border border-dark"
          unmountOnExit={true}
        >
          <Tab
            eventKey="QAMChannels"
            tabClassName="fw-bold"
            title="QAM Channels"
          >
            <QAMTab mcTableRowData={mcTableRowData && mcTableRowData.data} />
          </Tab>
          <Tab
            eventKey="OFDMChannels"
            tabClassName="fw-bold disabled-link"
            title="OFDM Channels"
          >
            <OFDMTab /> </Tab> </Tabs>) : null} {visualizeModel ? <Visualize hideVisualize={hideVisualize} /> : null}
      <ModalAoi
        show={annexModal}
        onHide={() => setAnnexModal(false)}
        modalTitle=""
        modalBody={annexVaidationModal()}
      />
      <ModalAoi
        show={selectDBValidation}
        onHide={() => setSelectDBValidation(false)}
        modalTitle=""
        modalBody={selectDBVaidationModal()}
      />
    </div>
  );
}
