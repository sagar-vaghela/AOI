import React, { useState } from 'react'
import Button from '../Button'
import { Form } from 'react-bootstrap'
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import ModalAoi from '../Modal/ModalAoi';


const tablerow = [
    { type: 1, first_subcarrier: "test", last_subcarrier: 25, increment: '10', uses: 'test' }
]
let manageConfigTableIndex = []

const OFDMSubcarrier = () => {
    const [tableRow, setTableRow] = useState(tablerow)
    const [deleteModalShow, setDeleteModalShow] = useState(false);
    const [selectRowChannel, setSelectRowChannel] = useState();

    const deleteHandleClick = () => {
        setDeleteModalShow(true);
        const selectRowLength = document.querySelectorAll('#manage_config_ofdm_table .selection-row').length;
        selectRowLength === 0 ? setDeleteModalShow(true) : setDeleteModalShow(true);
        setSelectRowChannel(selectRowLength);
    }


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
    const selectRow = {
        mode: 'checkbox',
        clickToSelect: true,
        hideSelectColumn: true,
        classes: 'selection-row',
        clickToEdit: true
    };

    const deleteItem = (manageConfigTableIndex) => {
        console.log("table row====", tableRow);
        console.log("manageConfigTableIndex====", manageConfigTableIndex);
        const results = tableRow.filter(({ no: id1 }) => !manageConfigTableIndex.some(({ selectRow: id2 }) => id2 === id1));
        setTableRow(results);
        setDeleteModalShow(false)
    }

    const deleteBody = () => {
        return (
            <>
                {selectRowChannel === 0 ?
                    <div>Please Select at list one Row !</div>
                    :
                    <p>Delete the entry?</p>
                }
            </>
        )
    }

    const deleteFooter = () => {
        return (
            <>
                {selectRowChannel === 0 ?
                    <></>
                    :
                    <div className='edit_btns'>
                        <Button label={'Yes'} handleClick={() => deleteItem(manageConfigTableIndex)} />
                        <Button label={'Cancel'} handleClick={() => setDeleteModalShow(false)} />
                    </div>
                }
            </>
        )
    }
    const rowEvents = {
        onClick: (e, row, rowIndex) => {
            manageConfigTableIndex.includes({ selectRow: row.no }) ? manageConfigTableIndex.splice(manageConfigTableIndex.indexOf({ selectRow: row.no }), 1) : manageConfigTableIndex.push({ selectRow: row.no })
            console.log(`clicked on row with index: ${rowIndex} ${manageConfigTableIndex} ${row.no}`);

        }
    };

    return (
        <>
            <div className="action mb-4 border border-dark p-2">
                <h5 className='d-inline-block fw-bold'>Channel Select</h5>
                <div className='d-flex'>
                    <label htmlFor="" className='text-nowrap me-2'>Channel: </label>
                    <Form.Select aria-label="Default select example" style={{ padding: '2px 36px 2px 12px', borderRadius: '2px', border: '1px solid', width: '16.66666667%' }} className='col-2'>
                        <option disabled>-- select a channle --</option>
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
                            <option>Specific</option>
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
                        </Form.Select>
                    </div>
                </div>
            </div>

            <div className="mb-4 border border-dark ">
                <div className='action p-2 '>
                    <h5 className='d-inline-block fw-bold'>Subcurrier Usage Type</h5>
                </div>
                <BootstrapTable
                    id='manage_config_ofdm_table'
                    keyField="type"
                    data={tableRow}
                    columns={columns}
                    cellEdit={cellEditFactory({ mode: 'dbclick', blurToSave: true })}
                    headerClasses="table_header"
                    selectRow={selectRow}
                    rowEvents={rowEvents}
                    classes="mb-0"

                />
            </div>
            <div className="action mb-4 border border-dark p-2">
                {/* <h5 className='d-inline-block fw-bold'>Action</h5> */}
                <div className="action_btns justify-content-between">
                    <div className="left_btns">
                        <Button label={'Add Subcarrier Rule'} />
                        <Button label={'Remove Selected'} handleClick={deleteHandleClick} />
                        <ModalAoi
                            show={deleteModalShow}
                            onHide={() => setDeleteModalShow(false)}
                            modalTitle=''
                            modalBody={deleteBody()}
                            modalFooter={deleteFooter()}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default OFDMSubcarrier
