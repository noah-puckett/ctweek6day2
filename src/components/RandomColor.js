import React, { Component } from 'react';

export default class RandomColor extends Component {
    state = {
        color: 'white'
    }

    componentDidMount() {

        setInterval(() => { 
            const colors = ['purple', 'red', 'green', 'pink', 'white', 'yellow', 'orange', 'blue', 'cyan', 'magenta'];
            const num = Math.floor(Math.random() * colors.length);
            this.setState({ color: colors[num] }); 
        }, 1000);

    }

    render() {
        return (<> 
        <div style={{ backgroundColor: this.state.color, height: '300px', width: '300px' }}></div>
        </>);
    }
}

