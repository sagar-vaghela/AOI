import React from 'react'
import Alert from 'react-bootstrap/Alert';
import success from '../../success.svg'

const AlertBox = (props) => {
    return (
        <>
            {props.alertMode && [
                props.alertMode.type
            ].map((variant) => (
                <Alert key={variant} variant={variant} className='d-flex align-items-center'>
                    <img src={success} style={{ height: '20px', width: '20px', marginRight: '10px' }} alt="" /> {props.alertMode.message}
                </Alert>
            ))}
        </>
    )
}

export default AlertBox
