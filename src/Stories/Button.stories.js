import Button from "../Components/Button";


export default {
    title: 'Button',
    component: Button
}

export function Increment(){
    return <Button name='Increment'  color='green'/>
}

export function Decrement(){
    return <Button name='Decrement'  color='red'/>
}

export function ButtonWithEvent(){
    return <Button name='Decrement'  color='red' onClick={()=> alert('clicked')} />
}