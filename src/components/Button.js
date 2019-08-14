import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonCSS from '../css/ButtonCSS.css';

export default class Button extends Component {
    static propTypes = {
        color: PropTypes.string.isRequired
    }
    render() {
        return (<> 
        <button className={ButtonCSS[this.props.color]} onClick={() => console.log(this.props.color, 'clicked')}>{this.props.color}</button>
        </>);
    }
}

