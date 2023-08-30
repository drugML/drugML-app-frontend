import Input from './Input/Input';
import Result from '../../../Result/Result';

import { Fragment, Component } from 'react';
import { Container } from '@chakra-ui/react';


import classes from './AdvancedInput.module.css';

import axios from 'axios'


class AdvancedInput extends Component {

    constructor(props) {
        super(props)

        this.mediaQuery = {
            desktop: 1200,
            phone: 900,
        };

        this.state = {
            result: false,
            scores: "none",
            windowWidth: null,
        }

        this.params = {
            molecular_weight: '',
            hydrogen_bond_donor_count: '',
            hydrogen_bond_acceptor_count: '',
            topological_polar_surface_area: '',
            heavy_atom_count: '',
            complexity: '',
            melting_point: '',
            solubility: '',
            logp: '',
        }

        this.result = {
            prediction_diabetes: '',
            prediction_hypertenstion: '',
            prediction_pain: '',
        }
    }

    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState({windowWidth: document.body.clientWidth})
        });
    }

    // Scores returned from API are decimals, format to rounded percentages and decreasing order
    formatScores() {
        var scores_copy = this.state.scores;

        var sorted_scores = []

        for (var key in scores_copy) {
            sorted_scores.push([key, scores_copy[key]])
        }

        // sort scores in descending order
        sorted_scores.sort(function compare(kv1, kv2) {
            return kv2[1] - kv1[1]
        })

        // format scores into percentages
        for (var key in sorted_scores) {
            console.log(sorted_scores[key][1]);
            sorted_scores[key][1] = (Number(sorted_scores[key][1]) * 100).toFixed(2).toString() + '%';
        }

        console.log("sorted:");
        console.log(sorted_scores);
        
        this.setState({scores: sorted_scores});
    }

    changeHandler = e => {
        this.params[e.target.name] = e.target.value
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state);
        axios.post('https://drugml-backend.azurewebsites.net/api/drug/', this.params)
            .then(response => {
                console.log(response)
                this.setState({scores: response.data.message, result: true})
                this.formatScores();
                console.log(this.state.scores);
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { molecular_weight, hydrogen_bond_donor_count, hydrogen_bond_acceptor_count, topological_polar_surface_area, heavy_atom_count, complexity, melting_point, solubility, logp } = this.state
        const inputs = [
            {
                label: 'Molecular Weight (g)',
                name: 'molecular_weight',
                value: molecular_weight,
                placeholder: '428.5',
                isFirst: true
            },
            {
                label: 'Hydrogen Bond Donor Count',
                name: 'hydrogen_bond_donor_count',
                value: hydrogen_bond_donor_count,
                placeholder: '1'
            },
            {
                label: 'Hydrogen Bond Acceptor Count',
                name: 'hydrogen_bond_acceptor_count',
                value: hydrogen_bond_acceptor_count,
                placeholder: '5'
            },
            {
                label: 'Topological Polar Surface Area',
                name: 'topological_polar_surface_area',
                value: topological_polar_surface_area,
                placeholder: '87'
            },
            {
                label: 'Heavy Atom Count',
                name: 'heavy_atom_count',
                value: heavy_atom_count,
                placeholder: '32'
            },
            {
                label: 'Complexity',
                name: 'complexity',
                value: complexity,
                placeholder: '682'
            },
            {
                label: 'Melting Point (K)',
                name: 'melting_point',
                value: melting_point,
                placeholder: '453.7'
            },
            {
                label: 'Solubility (mg/L)',
                name: 'solubility',
                value: solubility,
                placeholder: '8.84'
            },
            {
                label: 'logP',
                name: 'logp',
                value: logp,
                placeholder: '4.5'
            }
        ];

        return (
            <div style={{
                width: this.state.windowWidth > this.mediaQuery.phone
                ? '50%'
                : '100%',
            }}>
            <Container className={classes['input-div']}>
                <Fragment>
                <form onSubmit={this.submitHandler}>
                    {inputs.map((input) => (
                        <Input
                            label={input.label}
                            name={input.name}
                            value={input.value}
                            placeholder={input.placeholder}
                            isFirst={input.isFirst}
                            onAdvancedInput={this.props.onAdvancedInput}
                            onChange={this.changeHandler}
                        />
                    ))}
                    <button className={classes['button']} type="submit">Enter</button>
                </form>
                <Result scores={this.state.scores} />
            </Fragment>
            </Container>
             </div> 
            
        );
    }
}

export default AdvancedInput;
