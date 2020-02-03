import * as React from "react";
import "./Form.css";
import {
  Direction,
  JusitfyContent,
  justifyContentArray,
  directionArray,
  AlignItems,
  alignItemArray
} from "../flexTypes";

interface Props {
  nbChildren: number;
  direction: Direction;
  justifyContent: JusitfyContent;
  alignItems: AlignItems;
  onNbSquareSelect: (nbSquares: number) => void;
  onDirectionSelect: (direction: Direction) => void;
  onJustifyContentSelect: (justifyContent: JusitfyContent) => void;
  onAlignItemsSelect: (alignItems: AlignItems) => void;
}

const Form: React.FC<Props> = (props: Props) => {
  const onNbSelect = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    props.onNbSquareSelect(parseInt(e.target.value));
  };

  const onDirectionSelect = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    e.preventDefault();
    const value = e.target.value;
    if (value === "row" || value === "column") {
      props.onDirectionSelect(value);
    }
  };

  const onJustifyContentSelect = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    e.preventDefault();
    const value = e.target.value as JusitfyContent;
    props.onJustifyContentSelect(value);
  };

  const onAlignItemsSelect = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    e.preventDefault();
    const value = e.target.value as AlignItems;
    props.onAlignItemsSelect(value);
  };

  return (
    <div className="flexForm">
      <label className="label">
        Number of children?
        <input type="number" onChange={onNbSelect} value={props.nbChildren} />
      </label>
      <label className="label">
        Flex direction
        <select onChange={onDirectionSelect} value={props.direction}>
          {directionArray.map((value, key) => (
            <option key={key} value={value}>
              {value}
            </option>
          ))}
        </select>
      </label>
      <label className="label">
        Jusitfy content
        <select onChange={onJustifyContentSelect} value={props.justifyContent}>
          {justifyContentArray.map((value, key) => (
            <option key={key} value={value}>
              {value}
            </option>
          ))}
        </select>
      </label>
      <label className="label">
        Align items
        <select onChange={onAlignItemsSelect} value={props.alignItems}>
          {alignItemArray.map((value, key) => (
            <option key={key} value={value}>
              {value}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Form;
