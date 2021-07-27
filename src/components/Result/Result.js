import {HStack, Container, Flex, Spacer, Stack, Center } from '@chakra-ui/react';

import { Component } from 'react';

import classes from './Result.module.css';

import result_icon from '../../resources/result_icon.png';

class Result extends Component {

    // For state of API result display
    constructor(props) {
        super(props)

        this.state = {
            prediction_one_name: 'none',
            prediction_one_value: 'none',
            prediction_two_name: 'none',
            prediction_two_value: 'none',
            prediction_three_name: 'none',
            prediction_three_value: 'none',
        };
    }

    componentWillReceiveProps(nextProps) {
        console.log("Result");
        console.log(nextProps);
        this.setState({ prediction_one_name: Object.values(nextProps.scores)[0][0].split("_")[1] });
        this.setState({ prediction_one_value: Object.values(nextProps.scores)[0][1] });
        this.setState({ prediction_two_name: Object.values(nextProps.scores)[1][0].split("_")[1] });
        this.setState({ prediction_two_value: Object.values(nextProps.scores)[1][1] });
        this.setState({ prediction_three_name: Object.values(nextProps.scores)[2][0].split("_")[1] });
        this.setState({ prediction_three_value: Object.values(nextProps.scores)[2][1] });
    }

    render() {
        return (
            <Container className={classes['result-div']}>
                <Flex className={classes.label}>
                    <p>Predictions</p>
                    <Spacer />
                </Flex>
                <div className={classes.result}>
                <img src={result_icon} className={classes.icon} alt="icon"></img>
                {this.state.prediction_one_name}{" "}{this.state.prediction_one_value}
                </div>
                {/* <input type="text" className={classes.result} placeholder={this.state.prediction_hypertension} /> */}
                <div className={classes.result}>
                <img src={result_icon} className={classes.icon} alt="icon"></img>
                {this.state.prediction_two_name}{" "}{this.state.prediction_two_value}
                </div>
                <div className={classes.result}>
                <img src={result_icon} className={classes.icon} alt="icon"></img>
                {this.state.prediction_three_name}{" "}{this.state.prediction_three_value}
                </div>
           </Container>
            
        );
    }
}

export default Result;

