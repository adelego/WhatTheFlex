import * as React from 'react'
import './Switch.css';

interface Option {
    value: string;
    icon: JSX.Element
}

interface Props {
    selectedValue: string;
    options: Option[];
    onSelect: (value: string) => void
}

const Switch: React.FC<Props> = (props: Props) => {
    const getOnClick = (value: string) => {
        const isSelected = value === props.selectedValue;
        return (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault()
            if (!isSelected){
                props.onSelect(value)
            }
        }
    }
    return (
        <div className="switch">
            {props.options.map((option, key) => {
                const selected = props.selectedValue === option.value;
                const className = `switchOption ${selected && 'selectedOption'}`
                return <button key={key} className={className} onClick={getOnClick(option.value)}>{option.icon}</button>
            })}
        </div>
    )
}

export default Switch
