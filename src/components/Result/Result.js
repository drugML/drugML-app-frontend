import {HStack, Container, Flex, Spacer, Stack, Center } from '@chakra-ui/react';

import classes from './Result.module.css';

const Result = (props) => (
	<Container className={classes['result-div']}>
		<Flex className={classes.label}>
			<p>Predictions</p>
			<Spacer />
		</Flex>
		<input type="text" className={classes.result} placeholder="Prediction" />
	</Container>
);

export default Result;
