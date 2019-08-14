import React, { Component } from 'react';

export default class Incrementer extends Component { 

    state = {
        count: 0
    }

    increment(value) {
        this.setState({ count: value });
    }

    render() {
        return (<> <span>you have incremented {this.state.count} times</span> <button onClick={() => this.increment(this.state.count + 1)}>INCREMENT</button></>);
    }
}
