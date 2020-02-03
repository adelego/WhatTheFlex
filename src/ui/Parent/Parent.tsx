import * as React from "react";
import "./Parent.css";
import { FlexProperties } from "../flexTypes";

interface Props {
  width: number;
  height: number;
  nbChildren: number;
  flexProperties: FlexProperties
}

const Rectangle: React.FC<Props> = (props: Props) => {
  const children: JSX.Element[] = [];
  for (let i = 0; i < props.nbChildren; i++) {
    children.push(<div className="child" key={i} />);
  }

  const style = {
    ...props.flexProperties,
    width: props.width,
    height: props.height,
  }

  console.log(style);

  return (
    <div style={style} className="rectangle">
      {children}
    </div>
  );
};

export default Rectangle;
