import React, { Component } from 'react'
import axios from 'axios'

class Form extends Component {

    // For state of API result display
    state = {
        result: false,
        scores: null
    };

    constructor(props) {
        super(props)

        this.state = {
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
    }

    changeHandler = e => {
        this.setState({[e.target.className]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state);
        axios.post('https://drugmlapi-env.eba-f7kpi2dc.us-east-1.elasticbeanstalk.com/api/drug/', this.state)
            .then(response => {
                console.log(response)
                this.setState({scores: response.data.message, result: true})
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { molecular_weight, hydrogen_bond_donor_count, hydrogen_bond_acceptor_count, topological_polar_surface_area, heavy_atom_count, complexity, melting_point, solubility, logp } = this.state
        return (
            <div className="form-part">
                <form onSubmit={this.submitHandler}>
                    <div>
                        <p>
                            <label>Molecular Weight <input type="text" className="molecular_weight" value={molecular_weight} onChange={this.changeHandler}></input></label>
                        </p>
                        <p>
                            <label>Hydrogen Bond Donor Count <input type="text" className="hydrogen_bond_donor_count" value={hydrogen_bond_donor_count} onChange={this.changeHandler}></input></label>
                        </p>
                        <p>
                            <label>Hydrogen Bond Acceptor Count <input type="text" className="hydrogen_bond_acceptor_count" value={hydrogen_bond_acceptor_count} onChange={this.changeHandler}></input></label>
                        </p>
                        <p>
                            <label>Topological Polar Surface Area <input type="text" className="topological_polar_surface_area" value={topological_polar_surface_area} onChange={this.changeHandler}></input></label>
                        </p>
                        <p>
                            <label>Heavy Atom Count <input type="text" className="heavy_atom_count" value={heavy_atom_count} onChange={this.changeHandler}></input></label>
                        </p>
                        <p>
                            <label>Complexity <input type="text" className="complexity" value={complexity} onChange={this.changeHandler}></input></label>
                        </p>
                        <p>
                            <label>Melting Point <input type="text" className="melting_point" value={melting_point} onChange={this.changeHandler}></input></label>
                        </p>
                        <p>
                            <label>Solubility <input type="text" className="solubility" value={solubility} onChange={this.changeHandler}></input></label>
                        </p>
                        <p>
                            <label>logP <input type="text" className="logp" value={logp} onChange={this.changeHandler}></input></label>
                        </p>
                        <button className="todo-button" type="submit" >
                        <i className="fas fa-plus-square"></i>
                        </button>
                    </div>
                </form>
                <div>
                    {!this.state.result || !this.state.scores ? (
                    <div> Press "+" for result. </div>
                     ) : (
                         <div>
                            <div>Result: </div>
                            <div><p>prediction_diabetes:</p>{this.state.scores.prediction_diabetes}</div>
                            <div><p>prediction_hypertension:</p>{this.state.scores.prediction_hypertension}</div>
                            <div><p>prediction_pain:</p>{this.state.scores.prediction_pain}</div>
                        </div>
                     )}
                </div>
            </div>
        );
    }
}

export default Form;