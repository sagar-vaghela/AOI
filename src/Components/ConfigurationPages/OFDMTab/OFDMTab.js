import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from '../../Button';

export default function OFDMTab() {
  const headings = [
    'No',
    'Subcarrier Zero Frequency',
    'Cyclic Prefix',
    'Roll Off Period',
    'Time Interleaver Depth',
    'Subcarrier Spacing',
    'Power',
    'Mute'
  ]
  return (
    <div className='channle_tab'>
      <div className='border border-dark border-top-0 mb-4'>
        <div className='searchbar border-bottom border-dark'>
          <label htmlFor="search">Search:</label>
          <input type="text" id='search' />
        </div>
        <Table responsive bordered className='main_table mb-0' >
          <thead>
            <tr>
              {headings.map((heading, index) => (
                <th key={index}>{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody className='bg-white'></tbody>
        </Table>
        <div className='text-center p-2 bg-white'> No Data Available in table</div>
      </div>

      <div className="action mb-4 border border-dark p-2">
        <h5 className='border-bottom border-dark d-inline-block'>Action</h5>
        <div className="action_btns">
          <Button label={'Save as'} />
          <Button label={'Make Default'} />
        </div>
      </div>

      <div className="channle_btns">
        <Button label={'OFDM Channel Subcarries'} style={{ padding: '20px' }} />
        <Button label={'OFDM Channel Profiles'} />
      </div>
    </div>
  )
}
