import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Color extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        hex: PropTypes.string.isRequired,
        rgb: PropTypes.array.isRequired
    }

    render() {
        return (<dl>
            <dt>Name</dt>
            <dd style={{ color: this.props.hex }}>{this.props.name}</dd>
    
            <dt>Hex</dt>
            <dd>{this.props.hex}</dd>
    
            <dt>RGB</dt>
            <dd>Red - {this.props.rgb[0]}</dd> 
            <dd>Green - {this.props.rgb[1]}</dd> 
            <dd>Blue - {this.props.rgb[2]}</dd>
        </dl>);
    }
}
