import React from 'react'
import Button from './Button'

const Counter = (props) => {
    const [value , setValue] = React.useState(props.initialValue)
    return (
        <div style={{backgroundColor: props.backgroundColor}} >
            Hello Counter {value}
            <br />
            <Button name='Increment' color='green' onClick={()=> setValue(value + 1)}/>
            <Button name='Decrement' color='red' onClick={()=> setValue(value - 1)}/>
        </div>
    )
}

export default Counter
