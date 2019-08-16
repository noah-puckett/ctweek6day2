import React, { Component } from 'react';

export default class WaterTracker extends Component { 

    state = {
        oz: 0,
        totalWater: 0
    }

    onChange = ({ target }) => {
        event.preventDefault();
        this.setState({ [target.name]: target.value });
    }

    increment = () => {
        event.preventDefault();
        this.setState(state => { 
            return { totalWater: parseInt(state.totalWater) + parseInt(state.oz) };
        }); 
    }

    render() {
        return (<> 
            <form onSubmit={this.increment}>
                <input name='oz' type='number' onChange={this.onChange} /> HYDRATE OR DIEDRATE
                <p> {this.state.totalWater} oz DRANK </p> 
                <progress max={100} value={this.state.totalWater} onChange={this.onChange}></progress>
                <button>drANk wOter</button>
            </form>
        </>);
    }
}
