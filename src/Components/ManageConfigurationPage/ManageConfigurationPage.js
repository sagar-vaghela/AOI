import React, { useState } from 'react'
import Button from '../Button';
import OFDMTab from './Channels/OFDMTab/OFDMTab'
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';
import Visualize from '../Modal/Visualize';
import ModalAoi from '../Modal/ModalAoi';
import { Tab, Tabs } from 'react-bootstrap';
import QAMTab from './Channels/QAMTab/QAMTab';

const tablerow = [
  { no: 1, name: "david_lanum - Copy.db", editable: 'Yes' },
  { no: 2, name: "david_lanum.db", editable: 'Yes' },
  { no: 3, name: "david_lanum_copy.db", editable: 'Yes' },
  { no: 4, name: "david_lanum_noofdm.db", editable: 'Yes' },
  { no: 5, name: "no_channels.db", editable: 'Yes' },
  { no: 6, name: "no_channels_copy.db", editable: 'Yes' },
  { no: 7, name: "ofdm54M_qams_258to1794M.db", editable: 'Yes' },
  { no: 8, name: "ofdm54M_qams_258to1794M_copy - Copy.db", editable: 'Yes' },
  { no: 9, name: "ofdm54M_qams_258to1794M_copy.db", editable: 'Yes' },
  { no: 10, name: "ofdm54M_qams_258to1794M_copy_copy - Copy.db", editable: 'Yes' },
  { no: 11, name: "ofdm54M_qams_258to1794M_copy_copy.db", editable: 'Yes' },
  { no: 12, name: "ofdm54M_qams_258to1794M_copy_copy_copy.db", editable: 'Yes' },
  { no: 13, name: "ofdm54M_qams_258to1794M_copy_copy_copy_copy.db", editable: 'Yes' },
  { no: 14, name: "qams_102to1218M.db", editable: 'Yes' },
  { no: 15, name: "qams_54to1200M.db", editable: 'Yes' },
  { no: 16, name: "qams_54to1218M.db", editable: 'Yes' },
  { no: 17, name: "qams_54to1218M_copy - Copy.db", editable: 'Yes' },
  { no: 18, name: "qams_54to1218M_copy.db", editable: 'Yes' },
  { no: 19, name: "qams_54to1218M_copy_copy - Copy.db", editable: 'Yes' },
  { no: 20, name: "qams_54to1218M_copy_copy.db", editable: 'Yes' },
  { no: 21, name: "qams_54to1584M_ofdm1602M.db", editable: 'Yes' },
  { no: 22, name: "qams_54to1584M_ofdm1602M_copy - Copy.db", editable: 'Yes' },
  { no: 23, name: "qams_54to1584M_ofdm1602M_copy.db", editable: 'Yes' },
  { no: 24, name: "qams_54to1584M_ofdm1602M_copy_copy - Copy.db", editable: 'Yes' },
  { no: 25, name: "qams_54to1584M_ofdm1602M_copy_copy.db", editable: 'Yes' },
  { no: 26, name: "qams_54to1584M_ofdm1602M_copy_copy_copy - Copy.db", editable: 'Yes' },
  { no: 27, name: "qams_54to1584M_ofdm1602M_copy_copy_copy.db", editable: 'Yes' },
  { no: 28, name: "qams_54to1584M_ofdm1602M_copy_copy_copy_copy - Copy.db", editable: 'Yes' },
  { no: 29, name: "qams_54to1584M_ofdm1602M_copy_copy_copy_copy.db", editable: 'Yes' },
  { no: 30, name: "test_ram_db0.db", editable: 'Yes' }
]

let manageConfigTableIndex = []

export default function ManageConfigurationPage({ setActiveTab }) {
  const [search, setSearch] = useState('')
  const [selectBtn, setSelectBtn] = useState('Select All')
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const [renameModalShow, setRenameModalShow] = useState(false);
  const [visualizeModel, setVisualizeModel] = useState(false)
  const [saveAs, setSaveAs] = useState(false)
  const [saveName, setSaveName] = useState('')
  const [tableRow, setTableRow] = useState(tablerow)
  const [editValue, setEditValue] = useState(0)



  const visualizeHandleClick = () => {
    setVisualizeModel(!visualizeModel)
  }

  const hideVisualize = () => {
    setVisualizeModel(false)
  }

  const saveHandleClick = () => {
    setSaveAs(true)
  }

  const deleteHandleClick = () => {
    setDeleteModalShow(true)
  }

  const renameHandleClick = () => {
    setRenameModalShow(true)
  }

  // if (visualizeModel) {
  //   document.getElementsByClassName('tab-content')[0].classList.add('overflow-hide')
  // } else {
  //   document.getElementsByClassName('tab-content')[0].classList.remove('overflow-hide')
  // }



  const columns = [
    {
      dataField: 'no',
      text: 'No',
      sort: true
    },
    {
      dataField: 'name',
      text: 'Name'
    },
    {
      dataField: 'editable',
      text: 'Editable',
      editor: {
        type: Type.SELECT,
        options: [
          {
            value: 'Yes',
            label: 'Yes'
          }, {
            value: 'No',
            label: 'No'
          }
        ]
      }
    }
  ];
  const selectionRow = () => {
    console.log('select===', editValue);
    const selectRowLength = document.querySelectorAll('#manage_config_table .selection-row').length + 1;
    setEditValue(selectRowLength);
  }

  const selectRow = {
    mode: 'radio',
    clickToSelect: true,
    hideSelectColumn: true,
    classes: 'selection-row',
    clickToEdit: true,
    onSelect: selectionRow
  };

  const selectHandleClick = () => {
    var trElements = document.querySelectorAll("#manage_config_table tbody tr");
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

  const newClick = () => {
    setActiveTab('configuration');
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

  const deleteBody = (
    <p>Delete the entry?</p>
  )

  const deleteItem = (manageConfigTableIndex) => {
    console.log("table row====", tableRow);
    console.log("manageConfigTableIndex====", manageConfigTableIndex);
    const results = tableRow.filter(({ no: id1 }) => !manageConfigTableIndex.some(({ selectRow: id2 }) => id2 === id1));
    setTableRow(results);
    setDeleteModalShow(false)
  }

  const deleteFooter = (
    <div className='edit_btns'>
      <Button label={'Yes'} handleClick={() => deleteItem(manageConfigTableIndex)} />
      <Button label={'Cancel'} handleClick={() => setDeleteModalShow(false)} />
    </div>
  )

  const renameBody = (
    <input type="text" placeholder='Enter a new file name' className='w-100' style={{ maxWidth: '100%' }} />
  )

  const renameFooter = (
    <div className='edit_btns'>
      <Button label={'Save'} />
      <Button label={'Cancel'} handleClick={() => setRenameModalShow(false)} />
    </div>
  )


  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      manageConfigTableIndex.includes({ selectRow: row.no }) ? manageConfigTableIndex.splice(manageConfigTableIndex.indexOf({ selectRow: row.no }), 1) : manageConfigTableIndex.push({ selectRow: row.no })
      console.log(`clicked on row with index: ${rowIndex} ${manageConfigTableIndex} ${row.no}`);

    }
  };

  const filteredData = tableRow && tableRow.filter((row) =>
    (row?.name?.toUpperCase().indexOf(search.toUpperCase()) > -1) ||
    (row?.editable?.toUpperCase().indexOf(search.toUpperCase()) > -1)
  )

  return (
    <div className='channel_tab'>
      <div className='border border-dark mb-4'>
        <div className='table_top_bar border-bottom border-dark d-flex justify-content-between align-items-center p-2'>
          <h5 className='mb-0'>Current Configuration files</h5>
          <div className="searchbar p-2">
            <label htmlFor="search">Search:</label>
            <input type="text" id='search' value={search} onChange={e => setSearch(e.target.value)} />
          </div>
        </div>
        {filteredData.length === 0 ? <p className='text-center fw-bold mt-2'>No record found</p> :
          <BootstrapTable
            id='manage_config_table'
            keyField="no"
            data={filteredData}
            columns={columns}
            cellEdit={cellEditFactory({ mode: 'dbclick', blurToSave: true })}
            selectRow={selectRow}
            classes="mb-0"
            rowEvents={rowEvents}
          />}
      </div>
      <div className="action mb-4 border border-dark p-2">
        {/* <h5 className='d-inline-block fw-bold'>Action</h5> */}
        <div className="action_btns justify-content-between">
          <div className="left_btns">
            <Button label={'New'} handleClick={newClick} />
            <Button label={'Edit'} handleClick={newClick} />
          </div>
          <div className="right_btn">
            <Button label={'Run'} />
          </div>
        </div>
      </div>
      <div className="action mb-4 border border-dark p-2">
        {/* <h5 className='d-inline-block fw-bold'>Manage Actions</h5> */}
        <div className="action_btns justify-content-between align-items-end">
          <div className="left_btns">
            <Button label={'Delete'} handleClick={deleteHandleClick} />
            <ModalAoi
              show={deleteModalShow}
              onHide={() => setDeleteModalShow(false)}
              modalTitle=''
              modalBody={deleteBody}
              modalFooter={deleteFooter}
            />
            <Button label={'Archive'} />
            <Button label={'Visualize'} handleClick={visualizeHandleClick} />
            <Button label={'Rename'} handleClick={renameHandleClick} />
            <ModalAoi
              show={renameModalShow}
              onHide={() => setRenameModalShow(false)}
              modalTitle='Rename'
              modalBody={renameBody}
              modalFooter={renameFooter}
            />
            <Button label={'Save as'} handleClick={saveHandleClick} />
            <ModalAoi
              show={saveAs}
              onHide={() => setSaveAs(false)}
              modalTitle='Save As'
              modalBody={saveBody}
              modalFooter={saveFooter}
            />
          </div>
          <div className="right_btn">
            <div className='d-flex flex-column '>
              <strong>Upload from Pc to CPSG</strong>
              <button className="btn-file">
                Upload<input type="file" />
              </button>
            </div>
          </div>
        </div>

      </div>
      {
        editValue !== 0 ? <Tabs
          defaultActiveKey='QAMChannels'
          id="uncontrolled-tab-example"
          className="config_tabs border border-dark"
          unmountOnExit={true}
        >
          <Tab eventKey="QAMChannels" tabClassName='fw-bold' title="QAM Channels">
            <QAMTab />
          </Tab>
          <Tab eventKey="OFDMChannels" tabClassName='fw-bold' title="OFDM Channels">
            <OFDMTab />
          </Tab>
        </Tabs> : null
      }
      {
        visualizeModel ? <Visualize hideVisualize={hideVisualize} /> : null
      }
    </div>
  )
}