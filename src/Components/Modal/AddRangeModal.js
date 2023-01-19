import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from '../Button'
import Form from 'react-bootstrap/Form';


const AddRangeModal = (props) => {
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
                <Modal.Title id="contained-modal-title-vcenter">
                    Add Range
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='d-flex justify-content-center'>
                    <div className="mb-3 d-flex flex-column align-items-end me-3">
                        <div className='mb-2'>
                            <label htmlFor="" className='me-2'>Number of Channels: </label>
                            <input type="number" />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="" className='me-2'>Power: </label>
                            <input type="text" />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="" className='me-2'>Annex Type: </label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="mb-3 d-flex flex-column align-items-start">
                        <div className='me-2 mb-2'>
                            <label htmlFor="" className='me-2'>Starting Frequency: </label>
                            <input type="number" />
                        </div>
                        <div className='mb-2'>
                            <h5 htmlFor="" className='fw-bold me-2'>Advanced Settings </h5>
                        </div>
                        <div className='d-flex'>
                            <label htmlFor="" className='text-nowrap me-2'>Modulation Type: </label>
                            <Form.Select aria-label="Default select example" style={{padding : '2px 36px 2px 12px',borderRadius : '2px',border : '1px solid'}}>
                                <option></option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </div>
                    </div>
                </div>
                {/* <div className="d-flex justify-content-center mb-3">
                    <div className="me-3">
                        <label htmlFor="" className='me-2'>Power: </label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="" className='me-2'>Mute: </label>
                        <label className="toggle_box">
                            <input type="checkbox" />
                            <span className="slider"></span>
                            <span className="labels" data-on="Yes" data-off="No"></span>
                        </label>
                    </div>
                </div> */}
            </Modal.Body>
            <Modal.Footer>
                {/* <Button onClick={props.onHide}>Close</Button> */}
                <div className='edit_btns'>
                    <Button label={'Add Range'} />
                    <Button label={'Cancel'} handleClick={props.onHide} />
                </div>
            </Modal.Footer>
        </Modal>
    )
}

export default AddRangeModal