import React, { useState } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';


const muted = (<div><label className="toggle_box">
  <input type="checkbox" />
  <span className="slider"></span>
  <span className="labels" data-on="Yes" data-off="No"></span>
</label></div>)

const tablerow = [
  { no: 1, subcarrierZeroFrequency: "test", cyclicPrefix: '25', rollOffPeriod: '10', timeInterleaverDepth: 'test', subcarrierSpacing: 'test', power: 'test', mute: muted },
  { no: 2, subcarrierZeroFrequency: "demo", cyclicPrefix: '250', rollOffPeriod: '10', timeInterleaverDepth: 'test', subcarrierSpacing: 'test', power: 'test', mute: muted }
]

let manageConfigTableIndex = []

export default function OFDMTab(props) {
  const [search, setSearch] = useState('')
  const [tableRow, setTableRow] = useState(tablerow)


  const columns = [
    {
      dataField: 'no',
      text: 'No',
      sort: true
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
    classes: 'selection-row',
    clickToEdit: true
  };

  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      manageConfigTableIndex.includes({ selectRow: row.no }) ? manageConfigTableIndex.splice(manageConfigTableIndex.indexOf({ selectRow: row.no }), 1) : manageConfigTableIndex.push({ selectRow: row.no })
      console.log(`clicked on row with index: ${rowIndex} ${manageConfigTableIndex} ${row.no}`);

    }
  };


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
          data={tableRow.filter((row) =>
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
          classes="mb-0 responsive table-striped"
          rowEvents={rowEvents}
        />

      </div>

    </div>
  )
}
