import {HStack, Container, Flex, Spacer, Stack, Center } from '@chakra-ui/react';

import { Component } from 'react';

import classes from './Result.module.css';

// const Result = (props) => (
// 	<Container className={classes['result-div']}>
// 		<Flex className={classes.label}>
// 			<p>Predictions</p>
// 			<Spacer />
// 		</Flex>
// 		<input type="text" className={classes.result} placeholder="Prediction" />
// 	</Container>
// );

// export default Result;




class Result extends Component {

    // For state of API result display
    constructor(props) {
        super(props)

        this.state = {
            prediction_hypertension: 'none',
        };
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.setState({ prediction_hypertension: nextProps.scores.prediction_hypertension });
    }

    render() {
        return (
            <Container className={classes['result-div']}>
                <Flex className={classes.label}>
                    <p>Predictions</p>
                    <Spacer />
                </Flex>
                <input type="text" className={classes.result} placeholder={this.state.prediction_hypertension} />
            </Container>
        );
    }
}

export default Result;

