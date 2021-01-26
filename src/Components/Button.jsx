import React from 'react'

const Button = (props) => {
    return (
        <button style={{backgroundColor: props.color}} onClick={props.onClick} >{props.name}</button>
    )
}

export default Button
