import * as React from "react";
import * as ReactDOM from "react-dom";
import "./ui.css";
import Rectangle from "./Parent/Parent";
import { Size } from "../sandbox/getNodeSize";
import Form, { Direction } from "./Form/Form";

const App: React.FC = () => {
  const [rectSize, setRectSize] = React.useState<Size>({width: 0, height: 0});
  const [nbChildren, setNbChildren] = React.useState(0);
  const [direction, setDirection] = React.useState<Direction>('row')

  React.useEffect(() => {
    onmessage = (event: MessageEvent) => {
      const message = event.data.pluginMessage
      if ('currentNodeSize' === message.type) {
        setRectSize(message.size)
      }
    }
  }, [])


return <div className='container'>
  <Rectangle width={rectSize.width} height={rectSize.height} nbChildren={nbChildren} direction={direction}/>
  <Form 
    onNbSquareSelect={setNbChildren} 
    nbChildren={nbChildren}
    onDirectionSelect={setDirection}
    direction={direction}
  />
</div>}


ReactDOM.render(<App />, document.getElementById("react-page"));
