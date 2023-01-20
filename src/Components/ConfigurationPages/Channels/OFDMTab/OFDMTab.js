import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from '../../../Button';
import OfdmEditModal from '../../../Modal/OfdmEditModal';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import OFDMChannelTab from '../../../OFDMChannelTab/OFDMChannelTab';

const OFDMTab = () => {
  const [OfdmEditModalShow, setOfdmEditModalShow] = useState(false);
  const ofdmEditHandleClick = () => {
    setOfdmEditModalShow(true)
  }
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
  return (
    <div className='channel_tab OFDM_TAB'>
      <div className='border border-dark  mb-4'>
        <div className='searchbar table_top_bar d-flex justify-content-end border-bottom border-dark'>
          <label htmlFor="search">Search:</label>
          <input type="text" id='search' />
        </div>
        {/* <Table responsive bordered className='main_table mb-0 ' >
          <thead>
            <tr>
              <th className='col-1'>No</th>
              <th className='col-2'>Subcarrier Zero Frequency</th>
              <th className='col-2'>Cyclic Prefix</th>
              <th className='col-2'>Roll Off Period</th>
              <th className='col-2'>Time Interleaver Depth</th>
              <th className='col-1 '>Subcarrier Spacing</th>
              <th className='col-1'>Power</th>
              <th className='col-1'>Mute</th>
            </tr>
          </thead>
          <tbody className='bg-white'></tbody>
        </Table> */}
        <BootstrapTable
          keyField="no"
          data={tablerow}
          columns={columns}
          cellEdit={cellEditFactory({ mode: 'dbclick', blurToSave: true })}
          headerClasses="table_header"
          classes="mb-0"
        />
        {/* <div className='text-center p-2 bg-white'> No Data Available in table</div> */}
      </div>

      <div className="action mb-4 border border-dark p-2">
        <h5 className='border-bottom border-dark d-inline-block fw-bold'>Action</h5>
        <div className="action_btns justify-content-between">
          <div className="left_btns d-flex flex-column">
            <div>
              <Button label={'Edit'} handleClick={ofdmEditHandleClick} />
              <OfdmEditModal
                show={OfdmEditModalShow}
                onHide={() => setOfdmEditModalShow(false)} />
              <Button label={'Delete'} />
              <Button label={'Visualize'} />
            </div>
          </div>
          <div className="right_btn d-flex flex-column">
            <Button label={'Save'} />
          </div>
        </div>
      </div>

      <OFDMChannelTab/>
    </div>
  )
}

export default OFDMTab
