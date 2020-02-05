import * as React from 'react';
import './Button.css';

type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
	theme: 'default' | 'primary';
};

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
	const className = `button ${props.theme}Button`;
	return (
		<button className={className} onClick={props.onClick} type="button" disabled={props.disabled}>
			{props.children}
		</button>
	);
};

export default Button;
