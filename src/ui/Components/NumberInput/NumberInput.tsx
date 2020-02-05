import * as React from 'react';
import './NumberInput.css';

interface Props {
	value: number;
	onChange: (value: number) => void;
	icon: JSX.Element;
}

const NumberInput: React.FC<Props> = (props: Props) => {
	const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		e.preventDefault();
		handleFocus(e);
		props.onChange(parseInt(e.target.value));
	};
	const handleFocus = (event) => event.target.select();
	return (
		<div className="numberInputContainer">
			<span className="numberInputIcon">{props.icon}</span>
			<input
				type="number"
				className="numberInput"
				onChange={onChange}
				value={props.value}
				onFocus={handleFocus}
			/>
		</div>
	);
};

export default NumberInput;
