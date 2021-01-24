import React, { Component } from 'react'
import axios from 'axios'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            molecular_weight: '',
            hydrogen_bond_donor_count: '',
            hydrogen_bond_acceptor_count: '',
            typological_polar_surface_area: '',
            heavy_atom_count: '',
            formal_charge: '',
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
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { molecular_weight, hydrogen_bond_donor_count, hydrogen_bond_acceptor_count, typological_polar_surface_area, heavy_atom_count, formal_charge, complexity, melting_point, solubility, logp } = this.state
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
                            <label>Topological Polar Surface Area <input type="text" className="typological_polar_surface_area" value={typological_polar_surface_area} onChange={this.changeHandler}></input></label>
                        </p>
                        <p>
                            <label>Heavy Atom Count <input type="text" className="heavy_atom_count" value={heavy_atom_count} onChange={this.changeHandler}></input></label>
                        </p>
                        <p>
                            <label>Formal Charge <input type="text" className="formal_charge" value={formal_charge} onChange={this.changeHandler}></input></label>
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
            </div>
        );
    }
}

export default Form;