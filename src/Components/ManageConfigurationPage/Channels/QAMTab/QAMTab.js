import React, { useState, useEffect } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';


export default function QAMTab({ mcTableRowData }) {

  const [search, setSearch] = useState('');
  const [tableData, setTableData] = useState([]);

  let Reg = new RegExp(search, "i");

  useEffect(() => {
    if (mcTableRowData) {
      setTableData(mcTableRowData);
    }
  }, [mcTableRowData]);

  useEffect(() => {
    setTableData(tableData);
  }, [tableData])

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
  function frequencyFormatter(cell, row, rowIndex) {
    return <span>{Number(row.frequency)}</span>;
  }
  
  function powerFormatter(cell, row, rowIndex) {
    return <span>{Number(row.power).toFixed(2)}</span>;
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
      sort: true,
      formatter: frequencyFormatter,
      sortCaret: (order, column) => {
        if (!order) return (<span className="react-bootstrap-table-sort-order dropup"><span className="caret"></span></span>);
        else if (order === 'asc') return (<span className="react-bootstrap-table-sort-order dropup"><span className="caret"></span></span>);
        else if (order === 'desc') return (<span className="react-bootstrap-table-sort-order"><span className="caret"></span></span>);
        return null;
      },
      sortFunc: (a, b, order, dataField, rowA, rowB) => {
        console.log(a, b);
        if (order === 'asc') {
          return b - a;
        }
        return a - b; // desc
      }
    },
    {
      dataField: 'power',
      text: 'Power',
      sort: true,
      formatter: powerFormatter,
      sortCaret: (order, column) => {
        if (!order) return (<span className="react-bootstrap-table-sort-order dropup"><span className="caret"></span></span>);
        else if (order === 'asc') return (<span className="react-bootstrap-table-sort-order dropup"><span className="caret"></span></span>);
        else if (order === 'desc') return (<span className="react-bootstrap-table-sort-order"><span className="caret"></span></span>);
        return null;
      },
      sortFunc: (a, b, order, dataField, rowA, rowB) => {
        if (order === 'asc') {
          return b - a;
        }
        return a - b; // desc
      }
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
      sort: true,
      sortCaret: (order, column) => {
        if (!order) return (<span className="react-bootstrap-table-sort-order dropup"><span className="caret"></span></span>);
        else if (order === 'asc') return (<span className="react-bootstrap-table-sort-order dropup"><span className="caret"></span></span>);
        else if (order === 'desc') return (<span className="react-bootstrap-table-sort-order"><span className="caret"></span></span>);
        return null;
      }
    },
    {
      dataField: "operMode",
      text: "OP Mode",
      sort: true,
      sortCaret: (order, column) => {
        if (!order) return (<span className="react-bootstrap-table-sort-order dropup"><span className="caret"></span></span>);
        else if (order === 'asc') return (<span className="react-bootstrap-table-sort-order dropup"><span className="caret"></span></span>);
        else if (order === 'desc') return (<span className="react-bootstrap-table-sort-order"><span className="caret"></span></span>);
        return null;
      },
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
    // classes: 'selection-row',
    clickToEdit: false,
  };


  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      console.log(`clicked on row with index: ${rowIndex}`);
    }
  };

  useEffect(() => {
    if (search.length > 0) {
      let data =
        mcTableRowData.length > 0 &&
        mcTableRowData.filter(
          (data) =>
            Reg.test(data.frequency) ||
            Reg.test(data.power) ||
            Reg.test(data.annex) ||
            Reg.test(data.operMode)
        );
      setTableData(data);
    }
    else {
      setTableData(mcTableRowData);
    }
  }, [search]);

  return (
    <>
      < div className='channel_tab ' >
        <div className='border border-dark mb-4'>

          <div className='searchbar table_top_bar d-flex justify-content-end align-items-center border-bottom border-dark'>

            {/* <label htmlFor="search">Annex: {tableData && tableData[0] && tableData[0].annex}</label> */}
            <label htmlFor="search">Search:</label>
            <input type="text" id='search' value={search || ''} onChange={e => setSearch(e.target.value)} />

          </div>
          {
            tableData && tableData.length > 0 ? 
            <div className="tableContainer">
            
            <BootstrapTable
              id='running_qam_table'
              keyField="ch_index"
              data={tableData}
              columns={columns}
              // selectRow={selectRow}
              // cellEdit={cellEditFactory({ mode: 'dbclick', blurToSave: true })}
              headerClasses="table_header"
              classes="mb-0"
              rowEvents={rowEvents}
              defaultSortDirection='asc'

            /> 
            </div>
            :
              <p className='text-center fw-bold mt-2'>No record found</p>
          }
        </div>

      </div >
    </>
  )
}
