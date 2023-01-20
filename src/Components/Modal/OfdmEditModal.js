import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from '../Button'
import Form from 'react-bootstrap/Form';

const OfdmEditModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            dialogClassName='modal_common edit_modal'
            backdrop={false}

        >
            <Modal.Header closeButton>
                {/* <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title> */}
            </Modal.Header>
            <Modal.Body>
                <div className="selected_channel mb-3">
                    <label htmlFor="" className='me-2'>Number of Selected Channels: </label>
                    <input type="text" />
                </div>
                <div className='d-flex justify-content-center'>
                    <div className="mb-3 d-flex flex-column align-items-end me-3">
                        <div className='mb-2'>
                            <label htmlFor="" className='me-2'>Subcarrier Zero Frequency: </label>
                            <input type="number" />
                        </div>
                        <div className='d-flex mb-2 align-items-center'>
                            <label htmlFor="" className='text-nowrap me-2'>Cyclic Prefix: </label>
                            <Form.Select aria-label="Default select example" style={{ padding: '2px 36px 2px 12px', borderRadius: '2px', border: '1px solid' }}>
                                <option></option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="" className='me-2'>Power: </label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="mb-3 d-flex flex-column align-items-start align-items-end">
                        <div className=' mb-2'>
                            <label htmlFor="" className='me-2'>Time Interleaver Depth: </label>
                            <input type="number" />
                        </div>
                        <div className='d-flex mb-2 align-items-center'>
                            <label htmlFor="" className='text-nowrap me-2'>Roll Off Period: </label>
                            <Form.Select aria-label="Default select example" style={{ padding: '2px 36px 2px 12px', borderRadius: '2px', border: '1px solid' }}>
                                <option></option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </div>
                        <div className='d-flex align-items-center'>
                            <label htmlFor="" className='text-nowrap me-2'>Subcarrier Spacing: </label>
                            <Form.Select aria-label="Default select example" style={{ padding: '2px 36px 2px 12px', borderRadius: '2px', border: '1px solid' }}>
                                <option></option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor="" className='me-2'>Mute: </label>
                    <label className="toggle_box">
                        <input type="checkbox" />
                        <span className="slider"></span>
                        <span className="labels" data-on="Yes" data-off="No"></span>
                    </label>
                </div>
            </Modal.Body>
            <Modal.Footer>
                {/* <Button onClick={props.onHide}>Close</Button> */}
                <div className='edit_btns'>
                    <Button label={'Edit'} />
                    <Button label={'Cancel'} handleClick={props.onHide} />
                </div>
            </Modal.Footer>
        </Modal>
    )
}

export default OfdmEditModal
