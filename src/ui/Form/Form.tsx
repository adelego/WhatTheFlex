import * as React from "react";
import copy from 'clipboard-copy'
import "./Form.css";
import {
  Direction,
  JusitfyContent,
  justifyContentArray,
  directionArray,
  AlignItems,
  alignItemArray,
  FlexProperties
} from "../flexTypes";
import Select from "../Components/Select/Select";

interface Props {
  nbChildren: number;
  flexProperties: FlexProperties;
  cssString: string;
  onNbSquareSelect: (nbSquares: number) => void;
  setFlexProperties: (flexProperties: FlexProperties) => void
}

const Form: React.FC<Props> = (props: Props) => {
  const [copied, setCopied] = React.useState(false);

  const onNbSelect = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    props.onNbSquareSelect(parseInt(e.target.value));
  };

  const onDirectionSelect = (option: string): void => {
    setCopied(false)
    const direction = option as Direction;
      props.setFlexProperties({
        ...props.flexProperties,
        flexDirection: direction
      });
    
  };

  const onJustifyContentSelect = (
    option: string
  ): void => {
    setCopied(false)
    const justifyContent = option as JusitfyContent;
    props.setFlexProperties({
      ...props.flexProperties,
      justifyContent
    });
  };

  const onAlignItemsSelect = (
    option: string
  ): void => {
    setCopied(false)
    const alignItems = option as AlignItems;
    props.setFlexProperties({
      ...props.flexProperties,
      alignItems
    })
  };

  const onCopyButtonClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    copy(props.cssString);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000)
  }

  const onSaveButtonCLick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    parent.postMessage({
      pluginMessage: {
        type: 'saveNodeProperties',
        properties: {
          ...props.flexProperties,
          nbChildren: props.nbChildren
        }
      }
    }, '*')
  }

  return (
    <div className="flexForm">
      <label className="label">
        Number of children?
        <input type="number" onChange={onNbSelect} value={props.nbChildren} />
      </label>
      <label className="label">
        Flex direction
        <Select options={['row', 'column']} selectedOption={props.flexProperties.flexDirection} onSelect={onDirectionSelect}/>
      </label>
      <label className="label">
        Jusitfy content
        <Select options={justifyContentArray} selectedOption={props.flexProperties.justifyContent} onSelect={onJustifyContentSelect}/>
      </label>
      <label className="label">
        Align items
        <Select options={alignItemArray} selectedOption={props.flexProperties.alignItems} onSelect={onAlignItemsSelect}/>
      </label>

      <button type='button' onClick={onCopyButtonClick} disabled={copied}>{copied ? 'Copied!' : 'Copy CSS'}</button>
      <button type='button' onClick={onSaveButtonCLick} >Save properties</button>
    </div>
  );
};

export default Form;
