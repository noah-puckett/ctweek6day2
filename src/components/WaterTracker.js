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
            <form name='oz' onSubmit={this.increment}>Pick yer color, pal
                <input name='oz' type='number' onChange={this.onChange} />
                <span> {this.state.totalWater} oz DRANK </span> 
                <button>drANk wOter</button>
            </form>
        </>);
    }
}
