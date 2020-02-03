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

  const onDirectionSelect = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    e.preventDefault();
    setCopied(false)
    const direction = e.target.value as Direction;
      props.setFlexProperties({
        ...props.flexProperties,
        flexDirection: direction
      });
    
  };

  const onJustifyContentSelect = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    e.preventDefault();
    setCopied(false)
    const justifyContent = e.target.value as JusitfyContent;
    props.setFlexProperties({
      ...props.flexProperties,
      justifyContent
    });
  };

  const onAlignItemsSelect = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    e.preventDefault();
    setCopied(false)
    const alignItems = e.target.value as AlignItems;
    props.setFlexProperties({
      ...props.flexProperties,
      alignItems
    })
  };

  const onCopyButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    copy(props.cssString);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000)
  }

  return (
    <div className="flexForm">
      <label className="label">
        Number of children?
        <input type="number" onChange={onNbSelect} value={props.nbChildren} />
      </label>
      <label className="label">
        Flex direction
        <select onChange={onDirectionSelect} value={props.flexProperties.flexDirection}>
          {directionArray.map((value, key) => (
            <option key={key} value={value}>
              {value}
            </option>
          ))}
        </select>
      </label>
      <label className="label">
        Jusitfy content
        <select onChange={onJustifyContentSelect} value={props.flexProperties.justifyContent}>
          {justifyContentArray.map((value, key) => (
            <option key={key} value={value}>
              {value}
            </option>
          ))}
        </select>
      </label>
      <label className="label">
        Align items
        <select onChange={onAlignItemsSelect} value={props.flexProperties.alignItems}>
          {alignItemArray.map((value, key) => (
            <option key={key} value={value}>
              {value}
            </option>
          ))}
        </select>
      </label>

      <button type='button' onClick={onCopyButtonClick} disabled={copied}>{copied ? 'Copied!' : 'Copy CSS'}</button>
    </div>
  );
};

export default Form;
