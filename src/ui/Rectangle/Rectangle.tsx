import * as React from 'react'
import "./Rectangle.css"

interface Props {
    width: number,
    height: number
}

const Rectangle: React.FC<Props> = (props: Props) => {
    return (
        <div style={{width: props.width, height: props.height}} className='rectangle' />
    )
}

export default Rectangle
