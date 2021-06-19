import Input from './Input/Input';

import { Fragment } from 'react';

import classes from './AdvancedInput.module.css';

const inputs = [
	{
		label: 'Molecular Weight',
		placeholder: '570',
		isFirst: true
	},
	{
		label: 'Hydrogen Bond Donor Count',
		placeholder: '129'
	},
	{
		label: 'Hydrogen Bond Acceptor Count',
		placeholder: '130'
	},
	{
		label: 'Topological Polar Surface Area',
		placeholder: '300'
	},
	{
		label: 'Heavy Atom Count',
		placeholder: '10000'
	},
	{
		label: 'Complexity',
		placeholder: '983'
	},
	{
		label: 'Melting Point',
		placeholder: '340.56'
	},
	{
		label: 'Solubility',
		placeholder: '120'
	},
	{
		label: 'logP',
		placeholder: '980'
	}
];

const AdvancedInput = (props) => (
	<Fragment className={classes['input-div']}>
		{inputs.map((input) => (
			<Input
				label={input.label}
				key={input.label}
				placeholder={input.placeholder}
				isFirst={input.isFirst}
				onAdvancedInput={props.onAdvancedInput}
			/>
		))}
	</Fragment>
);

export default AdvancedInput;
