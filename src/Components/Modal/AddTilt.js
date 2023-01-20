import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from '../Button'
import Form from 'react-bootstrap/Form';

const AddTilt = (props) => {
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
                    Add Tilt
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='d-flex flex-column justify-content-center'>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className='mb-2 me-3'>
                            <label htmlFor="" className='me-2'>Starting Tilt Freq: </label>
                            <input type="number" />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="" className='me-2'>Ending Tilt Freq: </label>
                            <input type="number" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className='mb-2 me-3'>
                            <label htmlFor="" className='me-2'>Starting Tilt Power: </label>
                            <input type="number" />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="" className='me-2'>Ending Tilt Power: </label>
                            <input type="number" />
                        </div>
                    </div>

                </div>
            </Modal.Body>
            <Modal.Footer>
                {/* <Button onClick={props.onHide}>Close</Button> */}
                <div className='edit_btns'>
                    <Button label={'Add Tilt'} />
                    <Button label={'Cancel'} handleClick={props.onHide} />
                </div>
            </Modal.Footer>
        </Modal>
    )
}

export default AddTilt
