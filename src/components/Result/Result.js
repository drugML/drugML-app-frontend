import {HStack, Container, Flex, Spacer, Stack, Center } from '@chakra-ui/react';

import { Component } from 'react';

import classes from './Result.module.css';

import result_icon from '../../resources/result_icon.png';

class Result extends Component {

    // For state of API result display
    constructor(props) {
        super(props)

        this.state = {
            result_status: false,
            prediction_one_name: 'none',
            prediction_one_value: 'none',
            prediction_two_name: 'none',
            prediction_two_value: 'none',
            prediction_three_name: 'none',
            prediction_three_value: 'none',
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ result_status: true });
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
                
                {!this.state.result_status ? (
                    <div></div>
                     ) : (
                    <div className={classes.resultContainer}>
                        <Flex className={classes.label}>
                            <p>Predictions</p>
                            <Spacer />
                        </Flex>
                        <div className={classes.result}>
                            <img src={result_icon} className={classes.icon} alt="icon"></img>
                            {this.state.prediction_one_name}{" "}{this.state.prediction_one_value}
                        </div>
                        <div className={classes.result}>
                            <img src={result_icon} className={classes.icon} alt="icon"></img>
                            {this.state.prediction_two_name}{" "}{this.state.prediction_two_value}
                        </div>
                        <div className={classes.result}>
                            <img src={result_icon} className={classes.icon} alt="icon"></img>
                            {this.state.prediction_three_name}{" "}{this.state.prediction_three_value}
                        </div>
                    </div>
                )}
           </Container>
        );
    }
}
     

export default Result;

