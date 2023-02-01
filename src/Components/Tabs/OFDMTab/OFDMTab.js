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
                <th>No</th>
                <th>Subcarrier Zero Frequency</th>
                <th>Cyclic Prefix</th>
                <th>Roll Off Period</th>
                <th>Time Interleaver Depth</th>
                <th>Subcarrier Spacing</th>
                <th>Power</th>
                <th>Mute</th>
            </tr>
          </thead>
          <tbody className='bg-white'></tbody>
        </Table>
        <div className='text-center p-2 bg-white'> No Data Available in table</div>
      </div>

      <div className="action mb-4 border border-dark p-2">
        <h5 className='d-inline-block'>Action</h5>
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
