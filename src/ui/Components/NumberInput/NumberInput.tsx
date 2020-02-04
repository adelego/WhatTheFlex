import * as React from 'react';
import './NumberInput.css';

interface Props {
    value: number;
    onChange: (value: number) => void
}

const NumberInput: React.FC<Props> = (props: Props) => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();
        handleFocus(e)
        props.onChange(parseInt(e.target.value))
    } 
    const handleFocus = (event) => event.target.select();
    return (
        <input 
            type='number' 
            className='numberInput' 
            onChange={onChange} 
            onFocus={handleFocus}
            value={props.value}/>
    )
}

export default NumberInput
