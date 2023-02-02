import React, { useState, useEffect } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';

export default function QAMTab(props) {
  const [search, setSearch] = useState('')

  const muted = (<div><label className="toggle_box">
    <input type="checkbox" />
    <span className="slider"></span>
    <span className="labels" data-on="Yes" data-off="No"></span>
  </label></div>)

  const tablerow = [
    { no: 1, frequency: "test1", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 2, frequency: "test2", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 3, frequency: "test3", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 4, frequency: "test4", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 5, frequency: "test5", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 6, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 7, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 8, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 9, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 10, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 11, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 12, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 13, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 14, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 15, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 16, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 17, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 18, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 19, frequency: "test", power: '25', width: '11', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted }
  ]
  const columns = [
    {
      dataField: 'no',
      text: 'No',
      sort: true
    },
    {
      dataField: 'frequency',
      text: 'Frequency'
    },
    {
      dataField: 'power',
      text: 'Power'
    },
    {
      dataField: 'width',
      text: 'Width'
    },
    {
      dataField: 'modulation',
      text: 'Modulation'
    },
    {
      dataField: 'annex',
      text: 'Annex'
    },
    {
      dataField: 'op_mode',
      text: 'OP Mode'
    },
    {
      dataField: 'muted',
      text: 'Muted',
      editable: false
    }
  ];


  const selectRow = {
    mode: 'checkbox',
    clickToSelect: true,
    classes: 'selection-row',
    clickToEdit: true,
    hideSelectColumn: true
  };


  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      console.log(`clicked on row with index: ${rowIndex}`);
    }
  };

  return (
    <>
      < div className='channel_tab ' >
        <div className='border border-dark mb-4'>
          <div className='searchbar table_top_bar d-flex justify-content-end align-items-center border-bottom border-dark'>
            <label htmlFor="search">Search:</label>
            <input type="text" id='search' value={search || ''} onChange={e => setSearch(e.target.value)} />
          </div>
          <BootstrapTable
            id='running_qam_table'
            keyField="no"
            data={tablerow.filter((row) =>
              (row?.frequency?.toUpperCase().indexOf(search.toUpperCase()) > -1) ||
              (row?.power?.toUpperCase().indexOf(search.toUpperCase()) > -1) ||
              (row?.width?.toUpperCase().indexOf(search.toUpperCase()) > -1) ||
              (row?.op_mode?.toUpperCase().indexOf(search.toUpperCase()) > -1) ||
              (row?.modulation?.toUpperCase().indexOf(search.toUpperCase()) > -1) ||
              (row?.annex?.toUpperCase().indexOf(search.toUpperCase()) > -1))
            }
            columns={columns}
            selectRow={selectRow}
            cellEdit={cellEditFactory({ mode: 'dbclick', blurToSave: true })}
            headerClasses="table_header"
            classes="mb-0"
            rowEvents={rowEvents}
          />
        </div>

      </div >
    </>
  )
}
