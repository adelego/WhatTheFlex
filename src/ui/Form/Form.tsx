import * as React from 'react';
import copy from 'clipboard-copy';
import './Form.css';
import {
	Direction,
	JusitfyContent,
	justifyContentArray,
	directionArray,
	AlignItems,
	alignItemArray,
	FlexProperties
} from '../flexTypes';
import Select from '../Components/Select/Select';
import NumberInput from '../Components/NumberInput/NumberInput';
import NbChildrenIcon from './Icons/nbChildren.svg';
import JustifyContentIcon from './Icons/justifyContent.svg';
import AlignItemsIcon from './Icons/alignItems.svg';
import FlexDirectionIcon from './Icons/flexDirection.svg';
import Button from '../Components/Button/Button';
import FormElement from '../Components/FormElement/FormElement';
import Switch from '../Components/Switch/Switch';
import Column from './Icons/column.svg'
import Row from './Icons/row.svg'


interface Props {
	nbChildren: number;
	flexProperties: FlexProperties;
	cssString: string;
	onNbSquareSelect: (nbSquares: number) => void;
	setFlexProperties: (flexProperties: FlexProperties) => void;
}

const Form: React.FC<Props> = (props: Props) => {
	const [ copied, setCopied ] = React.useState(false);

	const onDirectionSelect = (option: string): void => {
		setCopied(false);
		const direction = option as Direction;
		props.setFlexProperties({
			...props.flexProperties,
			flexDirection: direction
		});
	};

	const onJustifyContentSelect = (option: string): void => {
		setCopied(false);
		const justifyContent = option as JusitfyContent;
		props.setFlexProperties({
			...props.flexProperties,
			justifyContent
		});
	};

	const onAlignItemsSelect = (option: string): void => {
		setCopied(false);
		const alignItems = option as AlignItems;
		props.setFlexProperties({
			...props.flexProperties,
			alignItems
		});
	};

	const onCopyButtonClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		copy(props.cssString);
		setCopied(true);
		setTimeout(() => setCopied(false), 3000);
	};

	const onSaveButtonCLick = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		parent.postMessage(
			{
				pluginMessage: {
					type: 'saveNodeProperties',
					properties: {
						...props.flexProperties,
						nbChildren: props.nbChildren
					}
				}
			},
			'*'
		);
	};

	return (
		<div className="flexForm">
			<FormElement labelText="Number of children" labelId="nbChildren">
				<NumberInput value={props.nbChildren} onChange={props.onNbSquareSelect} icon={<NbChildrenIcon />} />
			</FormElement>

			<FormElement labelText="Flex direction" labelId="flexdirection">
				<Switch
				selectedValue={props.flexProperties.flexDirection}
				onSelect={onDirectionSelect}
				options={[
					{
						value: 'row',
						icon: <Row/>
					},
					{
						value: 'column',
						icon: <Column/>
					}
				]}
				/>
			</FormElement>

			<FormElement labelText="Jusitfy content" labelId="justifyContent">
				<Select
					options={justifyContentArray}
					selectedOption={props.flexProperties.justifyContent}
					onSelect={onJustifyContentSelect}
					icon={<JustifyContentIcon />}
				/>
			</FormElement>

			<FormElement labelText="Align items" labelId="alignId">
				<Select
					options={alignItemArray}
					selectedOption={props.flexProperties.alignItems}
					onSelect={onAlignItemsSelect}
					icon={<AlignItemsIcon />}
				/>
			</FormElement>

			<div className="actions">
				<Button onClick={onCopyButtonClick} disabled={copied} theme="default">
					{copied ? 'Copied!' : 'Copy CSS'}
				</Button>
				<Button onClick={onSaveButtonCLick} theme="primary">
					Save properties
				</Button>
			</div>
		</div>
	);
};

export default Form;
