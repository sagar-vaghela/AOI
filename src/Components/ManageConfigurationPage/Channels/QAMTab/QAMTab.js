import React, { useState, useEffect } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';


export default function QAMTab({ mcTableRowData }) {

  const [search, setSearch] = useState('');
  const [tableData, setTableData] = useState(mcTableRowData);

  useEffect(() => {
    setTableData(mcTableRowData);
  }, [mcTableRowData]);


  // const muted = (<div><label className="toggle_box">
  //   <input type="checkbox" />
  //   <span className="slider"></span>
  //   <span className="labels" data-on="Yes" data-off="No"></span>
  // </label></div>)


  // const tablerow = [
  //   { no: 1, frequency: "test1", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
  //   { no: 2, frequency: "test2", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
  //   { no: 3, frequency: "test3", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
  //   { no: 4, frequency: "test4", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
  //   { no: 5, frequency: "test5", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
  //   { no: 6, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
  //   { no: 7, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
  //   { no: 8, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
  //   { no: 9, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
  //   { no: 10, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
  //   { no: 11, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
  //   { no: 12, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
  //   { no: 13, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
  //   { no: 14, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
  //   { no: 15, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
  //   { no: 16, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
  //   { no: 17, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
  //   { no: 18, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
  //   { no: 19, frequency: "test", power: '25', width: '11', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted }
  // ]

  function mutedFormatter(row) {
    const checkSwitch = row === "YES" ? true : false;

    return (
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckChecked"
          checked={checkSwitch}
          onChange={(e) => { }}
        />
      </div>
    );
  }
  const columns = [
    // {
    //   dataField: 'no',
    //   text: 'No',
    //   sort: true
    // },
    {
      dataField: 'frequency',
      text: 'Frequency',
    },
    {
      dataField: 'power',
      text: 'Power',
    },
    // {
    //   dataField: 'width',
    //   text: 'Width'
    // },
    // {
    //   dataField: 'modulation',
    //   text: 'Modulation'
    // },
    {
      dataField: 'annex',
      text: 'Annex',
    },
    {
      dataField: "operMode",
      text: "OP Mode",
      editor: {
        type: Type.SELECT,
        options: [
          {
            value: 'QAM64',
            label: 'QAM64'
          },
          {
            value: 'QAM256',
            label: 'QAM256'
          },
          {
            value: 'CW_CARRIER',
            label: 'CW_CARRIER'
          }
        ],
      }
    },
    {
      dataField: "mute",
      text: "Muted",
      editable: false,
      formatter: mutedFormatter,
    },
  ];


  const selectRow = {
    mode: 'checkbox',
    clickToSelect: true,
    classes: 'selection-row',
    clickToEdit: false,
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

            <label htmlFor="search">Annex: {tableData && tableData[0] && tableData[0].annex}</label>
            <label htmlFor="search">Search:</label>
            <input type="text" id='search' value={search || ''} onChange={e => setSearch(e.target.value)} />

          </div>
          {
            tableData && tableData.length > 0 ? <BootstrapTable
              id='running_qam_table'
              keyField="frequency"
              data={tableData}
              columns={columns}
              selectRow={selectRow}
              cellEdit={cellEditFactory({ mode: 'dbclick', blurToSave: true })}
              headerClasses="table_header"
              classes="mb-0"
              rowEvents={rowEvents}
            /> :
              <p className='text-center fw-bold mt-2'>No record found</p>
          }
        </div>

      </div >
    </>
  )
}
