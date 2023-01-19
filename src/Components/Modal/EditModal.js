import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from '../Button'

const EditModal = (props) => {
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
                <div className="selected_channle mb-3">
                    <label htmlFor="" className='me-2'>Number of Selected Channels: </label>
                    <input type="text" />
                </div>
                <div className="power_mute mb-3">
                    <div className="power me-3">
                        <label htmlFor="" className='me-2'>Power: </label>
                        <input type="text" />
                    </div>
                    <div className="mute">
                        <label htmlFor="" className='me-2'>Mute: </label>
                        <label className="toggle_box">
                            <input type="checkbox" />
                            <span className="slider"></span>
                            <span className="labels" data-on="Yes" data-off="No"></span>
                        </label>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                {/* <Button onClick={props.onHide}>Close</Button> */}
                <div className='edit_btns'>
                    <Button label={'Edit'} />
                    <Button label={'Cancel'} handleClick={props.onHide}/>
                </div>
            </Modal.Footer>
        </Modal>
    )
}

export default EditModal
