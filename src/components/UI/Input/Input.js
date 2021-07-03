import { Container } from '@chakra-ui/react';

import { useState } from 'react';
import RegularInput from './RegularInput/RegularInput';
import AdvancedInput from './AdvancedInput/AdvancedInput';
import classes from './Input.module.css';

const Input = (props) => {
	const [ isAdvanced, setIsAdvanced ] = useState(false);

	const advancedInputHandler = () => {
		setIsAdvanced(!isAdvanced);
	};

	return (
		<Container className={classes.input} centerContent maxW="container.sm">
			{isAdvanced ? (
				<AdvancedInput onAdvancedInput={advancedInputHandler} />
			) : (
				<RegularInput onAdvancedInput={advancedInputHandler} />
			)}
		</Container>
	);
};

export default Input;
