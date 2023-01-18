import React from 'react'

const Button = (props) => {
    const { label } = props
    const btnStyle = {
        backgroundColor: '#fff',
        padding: '0 15px',
        marginRight: '20px'
    }

    return (
        <button style={btnStyle}>{label}</button>
    )
}

export default Button
