import Counter from "../Components/Counter";
import { withKnobs, object, number } from '@storybook/addon-knobs'


export default {
    title: 'Counter',
    component: Counter,
    decorators:[withKnobs]
}

export function CounterDefault(){
    return <Counter />
}

export function CounterWithValue(){
    return <Counter initialValue={number('initialValue', 34)} />
}

export function CounterWithColor(){
    return <Counter initialValue={number('initialValue', 34)} backgroundColor= 'red' />
}

export function CounterWithBlue(){
    return <Counter initialValue={number('initialValue', 34)} backgroundColor= 'blue' />
}