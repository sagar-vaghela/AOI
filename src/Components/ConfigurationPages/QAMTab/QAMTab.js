import React from 'react'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

export default function QAMTab() {
  const tablerow = [
    { no: 1, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 2, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 3, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 4, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 5, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 6, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 7, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 8, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 9, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 10, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 11, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 12, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 13, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 14, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 15, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 16, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 17, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 18, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 19, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' }
  ]
  const headings = [
    'No',
    'Frequency',
    'Power',
    'Width',
    'Modulation',
    'Annex',
    'OP Mode',
    'Muted'
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
          <tbody className='bg-white'>
            {tablerow.map((item) => (
              <tr key={item.no}>
                <td>{item.no}</td>
                <td>{item.frequency}</td>
                <td>{item.Power}</td>
                <td>{item.width}</td>
                <td>{item.modulation}</td>
                <td>{item.annex}</td>
                <td>{item.op_mode}</td>
                <td>
                  <Form>
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                    />
                  </Form>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

    </div>
  )
}
