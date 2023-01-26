import React, { useState } from 'react'
import Button from '../Button';
import OFDMTab from '../RunningConfigPages/Channels/OFDMTab/OFDMTab'
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import Visualize from '../Modal/Visualize';
import SaveAs from '../Modal/SaveAs';

export default function ManageConfigurationPage({ setActiveTab }) {
  const [search, setSearch] = useState('')
  const [visualizeModel, setVisualizeModel] = useState(false)
  const [saveAs, setSaveAs] = useState(false)

  const visualizeHandleClick = () => {
    setVisualizeModel(!visualizeModel)
  }
  const hideVisualize = () => {
    setVisualizeModel(false)
  }
  const saveHandleClick = () => {
    setSaveAs(true)
  }
  // if (visualizeModel) {
  //   document.getElementsByClassName('tab-content')[0].classList.add('overflow-hide')
  // } else {
  //   document.getElementsByClassName('tab-content')[0].classList.remove('overflow-hide')
  // }

  const tablerow = [
    { no: '1', name: "test1.db1", editable: 'Yes' },
    { no: '2', name: "test1.db", editable: 'No' },
    { no: '3', name: "test1.db", editable: 'Yes' },
    { no: '4', name: "test1.db", editable: 'No' },
    { no: '5', name: "test1.db", editable: 'Yes' },
    { no: '6', name: "test1.db", editable: 'No' },
    { no: '7', name: "test1.db", editable: 'Yes' },
    { no: '8', name: "test1.db", editable: 'No' },
    { no: '9', name: "test1.db", editable: 'Yes' },
    { no: '10', name: "test1.db", editable: 'Yes' },
    { no: '11', name: "test1.db", editable: 'No' },
    { no: '12', name: "test1.db", editable: 'Yes' },
    { no: '13', name: "test1.db", editable: 'No' },
    { no: '14', name: "test1.db", editable: 'Yes' },
    { no: '15', name: "test1.db", editable: 'No' },
    { no: '16', name: "test1.db", editable: 'Yes' },
    { no: '17', name: "test1.db", editable: 'No' },
    { no: '18', name: "test1.db", editable: 'Yes' },
    { no: '19', name: "test1.db", editable: 'No' }
  ]
  const columns = [
    {
      dataField: 'no',
      text: 'No'
    },
    {
      dataField: 'name',
      text: 'Name'
    },
    {
      dataField: 'editable',
      text: 'Editable'
    }
  ];
  const selectRow = {
    mode: 'checkbox',
    clickToSelect: true,
    hideSelectColumn: true,
    bgColor: '#f1e4ff',
    classes: 'selection-row',
    clickToEdit: true
  };

  const newClick = () => {
    setActiveTab('configuration');
  }

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
        <BootstrapTable
          keyField="no"
          data={tablerow.filter((row) =>
            (row?.name?.toUpperCase().indexOf(search.toUpperCase()) > -1) ||
            (row?.editable?.toUpperCase().indexOf(search.toUpperCase()) > -1)
          )}
          columns={columns}
          cellEdit={cellEditFactory({ mode: 'dbclick' })}
          selectRow={selectRow}
        />
      </div>
      <div className="action mb-4 border border-dark p-2">
        {/* <h5 className='d-inline-block fw-bold'>Action</h5> */}
        <div className="action_btns justify-content-between">
          <div className="left_btns">
            <Button label={'New'} handleClick={newClick} />
            <Button label={'Edit'} />
          </div>
          <div className="right_btn">
            <Button label={'Run'} />
          </div>
        </div>
      </div>
      <div className="action mb-4 border border-dark p-2">
        <h5 className='d-inline-block fw-bold'>Manage Actions</h5>
        <div className="action_btns justify-content-between align-items-end">
          <div className="left_btns">
            <Button label={'Delete'} />
            <Button label={'Archive'} />
            <Button label={'Visualize'} handleClick={visualizeHandleClick} />
            <Button label={'Rename'} />
            <Button label={'Save as'} handleClick={saveHandleClick} />
            <SaveAs
              show={saveAs}
              onHide={() => setSaveAs(false)}
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
      <OFDMTab />
      {
        visualizeModel ? <Visualize hideVisualize={hideVisualize} /> : null
      }
    </div>
  )
}
