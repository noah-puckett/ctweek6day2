import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonCSS from '../css/ButtonCSS.css';

export default class ColorPicker extends Component {

    static propTypes = {
        button1: PropTypes.string.isRequired,
        button2: PropTypes.string.isRequired,
        button3: PropTypes.string.isRequired
    }    

    state = {
        color: ''
    }

    changeColor = (value) => {
        this.setState({ color: value });
    }

    render() {
        return (<> 
        <button className={ButtonCSS[this.props.button1]} onClick={() => this.changeColor('red')}>red</button>
        <button className={ButtonCSS[this.props.button2]} onClick={() => this.changeColor('green')}>green</button>
        <button className={ButtonCSS[this.props.button3]} onClick={() => this.changeColor('blue')}>blue</button>
        <div style={{ backgroundColor: this.state.color }}>COLOR</div>
    </>);
    }
}
