import * as React from "react";
import "./Select.css";
import Caret from "./caret.svg";
import Selected from './on.svg';

interface Props {
  options: string[];
  selectedOption: string;
  onSelect: (option: string) => void;
}

const Select: React.FC<Props> = (props: Props) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const getSelectCallback = (option: string): (e: React.MouseEvent<HTMLButtonElement>) => void => {
    return (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      setIsOpen(false);
      props.onSelect(option)
    }
  }

  const onTitleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setIsOpen(true)
  } 


  return (
    <div className="selectContainer">
    <button className="selectButton" onClick={onTitleClick}>
      <span className="selectTitle">{props.selectedOption}</span>
      <Caret />
    </button>

    {isOpen && <div className="selectDropdown">
      {props.options.map(
        (option) => 
          <button 
          className={option === props.selectedOption ? "selectOption selected" :"selectOption"}
          onClick={getSelectCallback(option)}
          >
            <Selected/> <span className="optionText">{option}</span>
          </button>
        )}
    </div>}
    </div>
  );
};

export default Select;
