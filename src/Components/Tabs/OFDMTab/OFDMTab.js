import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from '../../../Button';

export default function OFDMTab() {

  return (
    <div className='channel_tab OFDM_TAB'>
      <div className='border border-dark  mb-4'>
        <div className='searchbar table_top_bar d-flex justify-content-end border-bottom border-dark'>
          <label htmlFor="search">Search:</label>
          <input type="text" id='search' />
        </div>
        <Table responsive bordered className='main_table mb-0 ' >
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
        </Table>
        <div className='text-center p-2 bg-white'> No Data Available in table</div>
      </div>

      <div className="action mb-4 border border-dark p-2">
        <h5 className='border-bottom border-dark d-inline-block'>Action</h5>
        <div className="action_btns justify-content-end">
          <Button label={'Save as'} />
          <Button label={'Make Default'} />
        </div>
      </div>

      <div className="channel_btns">
        <Button label={'OFDM Channel Subcarries'} style={{ padding: '20px' }} />
        <Button label={'OFDM Channel Profiles'} />
      </div>
    </div>
  )
}
