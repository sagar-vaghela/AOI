import React, { useState } from 'react'
import Button from '../../../Button';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import OFDMChannelTab from '../../../OFDMChannelTab/OFDMChannelTab';
import ModalAoi from '../../../Modal/ModalAoi';

export default function OFDMTab(props) {
  const [search, setSearch] = useState('')
  const [saveAs, setSaveAs] = useState(false)
  const [saveName, setSaveName] = useState('')
  const saveHandleClick = () => {
    setSaveAs(true)
  }

  const tablerow = [
    { no: '1', subcarrierZeroFrequency: "test", cyclicPrefix: '25', rollOffPeriod: '10', timeInterleaverDepth: 'test', subcarrierSpacing: 'test', power: 'test', mute: 'No' },
    { no: '2', subcarrierZeroFrequency: "demo", cyclicPrefix: '250', rollOffPeriod: '10', timeInterleaverDepth: 'test', subcarrierSpacing: 'test', power: 'test', mute: 'No' }
  ]
  const columns = [
    {
      dataField: 'no',
      text: 'No'
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
    bgColor: '#f1e4ff',
    classes: 'selection-row',
    clickToEdit: true
  };

  const saveBody = (
    <input type="text" placeholder='Enter a name' className='w-100' value={saveName} onChange={(e) => setSaveName(e.target.value)} style={{ maxWidth: '100%' }} />
  )
  const saveFooter = (
    <div className='edit_btns'>
      <Button label={'Save'} />
      <Button label={'Cancel'} handleClick={() => setSaveAs(false)} />
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
          data={tablerow.filter((row) =>
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
          classes="mb-0"
        />
        {/* <div className='text-center p-2 bg-white'> No Data Available in table</div> */}
      </div>

      <div className="action mb-4 border border-dark p-2">
        {/* <h5 className='d-inline-block fw-bold'>Action</h5> */}
        <div className="action_btns justify-content-end">
          <Button label={'Save as'} handleClick={saveHandleClick} />
          <ModalAoi
            show={saveAs}
            onHide={() => setSaveAs(false)}
            modalTitle='Save As'
            modalBody={saveBody}
            modalFooter={saveFooter}
          />
          <Button label={'Make Default'} />
        </div>
      </div>

      <OFDMChannelTab />
    </div>
  )
}
