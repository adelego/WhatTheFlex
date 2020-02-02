import * as React from 'react'

interface Props {
    onNbSquareSelect: (nbSquares: number) => void 
}

const Form: React.FC<Props> = (props: Props) => {
    const onNbSelect = (e: React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();
        props.onNbSquareSelect(parseInt(e.target.value));
    }

    return (
        <div>
            <label>
                Number of children?
                <input type='number' onChange={onNbSelect}/>
            </label>
        </div>
    )
}

export default Form
