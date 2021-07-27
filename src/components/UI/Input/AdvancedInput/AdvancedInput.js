import Input from './Input/Input';
import Result from '../../../Result/Result';

import { Fragment, Component } from 'react';

import classes from './AdvancedInput.module.css';

import axios from 'axios'


class AdvancedInput extends Component {

    constructor(props) {
        super(props)

        this.state = {
            result: false,
            scores: "none"
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

    sortObjectByKeys(o) {
        return Object.values(o).sort().reduce((r, k) => (r[k] = o[k], r), {});
    }

    // scores returned from API are decimals, format to rounded percentages
    formatScores() {
        var scores_copy = this.state.scores;
        Object.keys(scores_copy).forEach(e => {
            scores_copy[e] = (Number(scores_copy[e]) * 100).toFixed(2).toString() + '%';
        })
        
        var sorted_scores = []

        for (var key in scores_copy) {
            sorted_scores.push([ key, scores_copy[key] ])
        }

        // sort scores in descending order
        sorted_scores.sort(function compare(kv1, kv2) {
            return kv1[1] < kv2[1]
        })

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
        axios.post('https://drugmlapi-env.eba-f7kpi2dc.us-east-1.elasticbeanstalk.com/api/drug/', this.params)
            .then(response => {
                console.log(response)
                this.setState({scores: response.data.message, result: true})
                this.formatScores();
                console.log(this.state.scores);
                console.log(this.state.result);
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
                placeholder: '570',
                isFirst: true
            },
            {
                label: 'Hydrogen Bond Donor Count',
                name: 'hydrogen_bond_donor_count',
                value: hydrogen_bond_donor_count,
                placeholder: '129'
            },
            {
                label: 'Hydrogen Bond Acceptor Count',
                name: 'hydrogen_bond_acceptor_count',
                value: hydrogen_bond_acceptor_count,
                placeholder: '130'
            },
            {
                label: 'Topological Polar Surface Area',
                name: 'topological_polar_surface_area',
                value: topological_polar_surface_area,
                placeholder: '300'
            },
            {
                label: 'Heavy Atom Count',
                name: 'heavy_atom_count',
                value: heavy_atom_count,
                placeholder: '10000'
            },
            {
                label: 'Complexity',
                name: 'complexity',
                value: complexity,
                placeholder: '983'
            },
            {
                label: 'Melting Point (K)',
                name: 'melting_point',
                value: melting_point,
                placeholder: '340.56'
            },
            {
                label: 'Solubility (mg/L)',
                name: 'solubility',
                value: solubility,
                placeholder: '120'
            },
            {
                label: 'logP',
                name: 'logp',
                value: logp,
                placeholder: '980'
            }
        ];

        return (
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
                    <button type="submit">Enter</button>
                </form>
                <Result scores={this.state.scores} />
            </Fragment>
        );
    }
}

export default AdvancedInput;
