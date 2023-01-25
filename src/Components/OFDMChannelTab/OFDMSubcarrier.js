import React from 'react'
import Button from '../Button'
import { Form } from 'react-bootstrap'
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';

const OFDMSubcarrier = () => {
    const tablerow = [
        { type: 1, first_subcarrier: "test", last_subcarrier: 25, increment: '10', uses: 'test' }
    ]

    const columns = [
        {
            dataField: 'type',
            text: 'Type'
        },
        {
            dataField: 'first_subcarrier',
            text: 'First Subcarrier'
        },
        {
            dataField: 'last_subcarrier',
            text: 'Last Subcarrier'
        },
        {
            dataField: 'increment',
            text: 'Increment'
        },
        {
            dataField: 'uses',
            text: 'Uses'
        }
    ];
    return (
        <>
            <div className="action mb-4 border border-dark p-2">
                <h5 className='d-inline-block fw-bold'>Channel Select</h5>
                <div className='d-flex'>
                    <label htmlFor="" className='text-nowrap me-2'>Channel: </label>
                    <Form.Select aria-label="Default select example" style={{ padding: '2px 36px 2px 12px', borderRadius: '2px', border: '1px solid', width: '16.66666667%' }} className='col-2'>
                        <option  disabled>-- select a channle --</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </div>
            </div>

            <div className="action mb-4 border border-dark p-2">
                <h5 className='d-inline-block fw-bold'>Subcarrier Configuration</h5>
                <div className='d-flex flex-wrap align-items-center  justify-content-xl-between'>
                    <div className='d-flex align-items-center mb-2 me-2 '>
                        <label htmlFor="" className='text-nowrap me-2'>Type: </label>
                        <Form.Select aria-label="Default select example" style={{ padding: '2px 36px 2px 12px', borderRadius: '2px', border: '1px solid' }} >
                            <option>Spacific</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </div>
                    <div className='d-flex align-items-center mb-2 me-2 '>
                        <label htmlFor="" className='me-2'>First Subcarrier: </label>
                        <input type="number" />
                    </div>
                    <div className='d-flex align-items-center mb-2 me-2 '>
                        <label htmlFor="" className='me-2'>Last Subcarrier: </label>
                        <input type="number" />
                    </div>
                    <div className='d-flex align-items-center mb-2 me-2 '>
                        <label htmlFor="" className='me-2'>Increment: </label>
                        <input type="number" />
                    </div>
                    <div className='d-flex align-items-center mb-2 me-2 '>
                        <label htmlFor="" className='text-nowrap me-2'>Uses: </label>
                        <Form.Select aria-label="Default select example" style={{ padding: '2px 36px 2px 12px', borderRadius: '2px', border: '1px solid' }} >
                            <option >Spacific</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </div>
                </div>
            </div>

            <div className="action mb-4 border border-dark p-2">
                <h5 className='d-inline-block fw-bold'>Action</h5>
                <div className="action_btns justify-content-between">
                    <div className="left_btns">
                        <Button label={'Add Subcarrier Rule'} />
                        <Button label={'Remove Selected'} />
                    </div>
                </div>
            </div>

            <div className="mb-4 border border-dark ">
                <div className='action p-2'>
                    <h5 className='d-inline-block fw-bold'>Subcurrier Usage Type</h5>
                </div>
                <BootstrapTable
                    keyField="no"
                    data={tablerow}
                    columns={columns}
                    // cellEdit={cellEditFactory({ mode: 'dbclick', blurToSave: true })}
                    headerClasses="table_header"
                    classes="mb-0"
                />
            </div>

        </>
    )
}

export default OFDMSubcarrier
