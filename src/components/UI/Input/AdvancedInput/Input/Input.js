import { Fragment } from 'react';

import { Container, Flex, Spacer, Center } from '@chakra-ui/react';

import classes from './Input.module.css';

const Input = (props) => (
	<Container className={classes['input-div']}>
		<Flex className={classes.label}>
			<h4>{props.label}</h4>
			{props.isFirst && (
				<Fragment>
					<Spacer />
					<Center className={classes.button} onClick={props.onAdvancedInput}>
						<i class="fas fa-caret-down fa-lg" />
						<button>Advanced</button>
					</Center>
				</Fragment>
			)}
		</Flex>
		<input type="text" className={classes.input} name={props.name} value={props.value} placeholder={props.placeholder} onChange={props.onChange} />
	</Container>
);

export default Input;
