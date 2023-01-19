import React from 'react'

const Button = (props) => {
    const { handleClick,label } = props
    const btnStyle = {
        backgroundColor: '#fff',
        padding: '2px 15px',
        marginRight: '20px',
        minWidth : '150px'
    }

    return (
        <button style={btnStyle} onClick={handleClick}>{label}</button>
    )
}

export default Button
