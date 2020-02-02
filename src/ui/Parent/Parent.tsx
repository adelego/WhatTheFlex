import * as React from 'react'
import "./Parent.css"
import { Direction } from '../Form/Form'

interface Props {
    width: number,
    height: number,
    nbChildren: number,
    direction: Direction
}

const Rectangle: React.FC<Props> = (props: Props) => {
    const children: JSX.Element[] = []
    for (let i = 0; i < props.nbChildren; i++) {
        children.push(<div className="child" key={i}/>)
    }

    const style = {
        width: props.width, 
        height: props.height,
        flexDirection: props.direction
    } as React.CSSProperties

    return (
        <div style={style} className='rectangle' >
            {children}
        </div>
    )
}

export default Rectangle
