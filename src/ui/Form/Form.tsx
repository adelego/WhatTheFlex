import * as React from "react";
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
  onNbSquareSelect: (nbSquares: number) => void;
  setFlexProperties: (flexProperties: FlexProperties) => void
}

const Form: React.FC<Props> = (props: Props) => {
  const onNbSelect = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    props.onNbSquareSelect(parseInt(e.target.value));
  };

  const onDirectionSelect = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    e.preventDefault();
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
    const alignItems = e.target.value as AlignItems;
    props.setFlexProperties({
      ...props.flexProperties,
      alignItems
    })
  };

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

      <button>Copy CSS</button>
    </div>
  );
};

export default Form;
