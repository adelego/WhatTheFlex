import * as React from "react";
import * as ReactDOM from "react-dom";
import "./ui.css";
import Rectangle from "./Parent/Parent";
import { Size } from "../sandbox/getNodeSize";
import Form from "./Form/Form";
import { Direction, JusitfyContent, AlignItems } from "./flexTypes";

const App: React.FC = () => {
  const [rectSize, setRectSize] = React.useState<Size>({ width: 0, height: 0 });
  const [nbChildren, setNbChildren] = React.useState(0);
  const [direction, setDirection] = React.useState<Direction>("row");
  const [justifyContent, setJustifyContent] = React.useState<JusitfyContent>(
    "flex-start"
  );
  const [alignItems, setAlignItems] = React.useState<AlignItems>("stretch");

  React.useEffect(() => {
    onmessage = (event: MessageEvent) => {
      const message = event.data.pluginMessage;
      if ("currentNodeSize" === message.type) {
        setRectSize(message.size);
      }
    };
  }, []);

  return (
    <div className="container">
      <Rectangle
        width={rectSize.width}
        height={rectSize.height}
        nbChildren={nbChildren}
        direction={direction}
        justifyContent={justifyContent}
        alignItems={alignItems}
      />
      <Form
        onNbSquareSelect={setNbChildren}
        nbChildren={nbChildren}
        onDirectionSelect={setDirection}
        direction={direction}
        justifyContent={justifyContent}
        onJustifyContentSelect={setJustifyContent}
        alignItems={alignItems}
        onAlignItemsSelect={setAlignItems}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("react-page"));
