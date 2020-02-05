import * as React from 'react';
import './FormElement.css';

interface Props {
	labelText: string;
	labelId: string;
}

const FormElement: React.FC<React.PropsWithChildren<Props>> = (props: React.PropsWithChildren<Props>) => {
	return (
		<div className="formElement">
			<label id={props.labelId} className="label">
				{props.labelText}
			</label>
			{props.children}
		</div>
	);
};

export default FormElement;
