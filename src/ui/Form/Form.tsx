import * as React from 'react'

export type Direction = 'row' | 'column'

interface Props {
    nbChildren: number;
    direction: Direction;
    onNbSquareSelect: (nbSquares: number) => void;
    onDirectionSelect: (direction: Direction) => void
}

const Form: React.FC<Props> = (props: Props) => {
    const onNbSelect = (e: React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();
        props.onNbSquareSelect(parseInt(e.target.value));
    }

    const onDirectionSelect = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        e.preventDefault();
        const value = e.target.value;
        if (value === 'row' || value === 'column') {
            props.onDirectionSelect(value);
        }
    }

    return (
        <div>
            <label>
                Number of children?
                <input type='number' onChange={onNbSelect} value={props.nbChildren}/>
            </label>
            <label>
                Flex direction
                <select onChange={onDirectionSelect} value={props.direction}>
                    <option value='row'>Row</option>
                    <option value='column'>Column</option>
                </select>
            </label>
        </div>
    )
}

export default Form
