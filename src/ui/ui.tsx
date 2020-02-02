import * as React from "react";
import * as ReactDOM from "react-dom";
import "./ui.css";
import Rectangle from "./Rectangle/Rectangle";
import { Size } from "../sandbox/getNodeSize";

const App: React.FC = () => {
  const [rectSize, setRectSize] = React.useState<Size>({width: 0, height: 0})
  React.useEffect(() => {
    onmessage = (event: MessageEvent) => {
      const message = event.data.pluginMessage
      if ('currentNodeSize' === message.type) {
        setRectSize(message.size)
      }
    }
  }, [])
return <div>
  <Rectangle width={rectSize.width} height={rectSize.height}/>
</div>}


ReactDOM.render(<App />, document.getElementById("react-page"));
