import * as React from 'react'
import "./Parent.css"

interface Props {
    width: number,
    height: number,
    nbChildren: number
}

const Rectangle: React.FC<Props> = (props: Props) => {
    const children: JSX.Element[] = []
    for (let i = 0; i < props.nbChildren; i++) {
        children.push(<div className="child"/>)
    }

    return (
        <div style={{width: props.width, height: props.height}} className='rectangle' >
            {children}
        </div>
    )
}

export default Rectangle
