import React from 'react'
import Button from '../Button';

const Visualize = (props) => {
    console.log('Visualize model');
    const style = {
        position: 'absolute',
        height: '85vh',
        width: '100%',
        top: '0',
        left: '0',
        backgroundColor: '#fff',
        padding: '15px'
    }
    return (
        <div style={style} className='visualize_modal'>
            <div className='py-2 d-flex justify-content-end align-items-center'>
                <Button label={'Back'} handleClick={props.hideVisualize} />
            </div>
            <div className='border p-3 bg-lightgray' style={{ height: 'calc(100% - 70px)' }}>
                <div className='border bg-white d-flex justify-content-center align-items-center' style={{ height: '100%' }}>
                    <h5>Display Visualize Graph output, with click to zoom feature</h5>
                </div>
            </div>
        </div>
    )
}

export default Visualize
