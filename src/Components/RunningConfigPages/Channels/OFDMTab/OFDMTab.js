import React from 'react'
import Button from '../../../Button';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import OFDMChannelTab from '../../../OFDMChannelTab/OFDMChannelTab';

export default function OFDMTab() {
  const tablerow = [
    { no: 1, subcarrierZeroFrequency: "test", cyclicPrefix: 25, rollOffPeriod: '10', timeInterleaverDepth: 'test', subcarrierSpacing: 'test', power: 'test', mute: 'No' }
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

  return (
    <div className='channel_tab OFDM_TAB'>
      <div className='border border-dark  mb-4'>
        <div className='searchbar table_top_bar d-flex justify-content-end align-items-center border-bottom border-dark'>
          <label htmlFor="search">Search:</label>
          <input type="text" id='search' />
        </div>
        <BootstrapTable
          keyField="no"
          data={tablerow}
          columns={columns}
          cellEdit={cellEditFactory({ mode: 'dbclick', blurToSave: true })}
          selectRow={selectRow}
          headerClasses="table_header"
          classes="mb-0"
        />
        {/* <div className='text-center p-2 bg-white'> No Data Available in table</div> */}
      </div>

      <div className="action mb-4 border border-dark p-2">
        <h5 className='d-inline-block fw-bold'>Action</h5>
        <div className="action_btns justify-content-end">
          <Button label={'Save as'} />
          <Button label={'Make Default'} />
        </div>
      </div>

      <OFDMChannelTab />
    </div>
  )
}
