import { Input as InputBox, HStack, Container, Flex, Spacer, Stack, Center } from '@chakra-ui/react';

import classes from './RegularInput.module.css';

const RegularInput = (props) => (
	<Container className={classes['input-div']}>
		<Flex className={classes.label}>
			<p>Molecule</p>
			<Spacer />
			<Center className={classes.button} onClick={props.onAdvancedInput}>
				<i class="fas fa-caret-right fa-lg" />
				<button>Advanced</button>
			</Center>
		</Flex>
		<input type="text" className={classes.input} placeholder="Ibuprofen" />
	</Container>
);

export default RegularInput;
