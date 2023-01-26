import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from '../Button'

const SaveAs = (props) => {
    const [saveName, setSaveName] = useState('')

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
                    Save As
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input type="text" placeholder='Enter a name' className='w-100' value={saveName} onChange={(e) => setSaveName(e.target.value)} style={{ maxWidth: '100%' }} />
            </Modal.Body>
            <Modal.Footer>
                <div className='edit_btns'>
                    <Button label={'Save'} />
                    <Button label={'Cancel'} handleClick={props.onHide} />
                </div>
            </Modal.Footer>
        </Modal>
    )
}

export default SaveAs
