import * as React from 'react';
import './Select.css';
import Caret from './caret.svg';
import Selected from './on.svg';
import { useClickOutside } from './useClickOutside';

interface Props {
	options: string[];
	selectedOption: string;
	icon: JSX.Element;
	onSelect: (option: string) => void;
}

const Select: React.FC<Props> = (props: Props) => {
	const [ isOpen, setIsOpen ] = React.useState(false);
	const getSelectCallback = (option: string): ((e: React.MouseEvent<HTMLButtonElement>) => void) => {
		return (e: React.MouseEvent<HTMLButtonElement>) => {
			e.preventDefault();
			setIsOpen(false);
			props.onSelect(option);
		};
	};

	const selectRef = React.useRef(null);
	useClickOutside(selectRef, () => {
		setIsOpen(false);
	});

	const onTitleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		setIsOpen(true);
	};

	return (
		<div className="selectContainer" ref={selectRef}>
			<button className="selectButton" onClick={onTitleClick}>
				<div className="selectIconTitle">
					<span className="selectIcon">{props.icon}</span>
					<span className="selectTitle">{props.selectedOption}</span>
				</div>
				<Caret />
			</button>

			{isOpen && (
				<div className="selectDropdown">
					{props.options.map((option, key) => (
						<button
							className={option === props.selectedOption ? 'selectOption selected' : 'selectOption'}
							onClick={getSelectCallback(option)}
							key={key}
						>
							<Selected /> <span className="optionText">{option}</span>
						</button>
					))}
				</div>
			)}
		</div>
	);
};

export default Select;
