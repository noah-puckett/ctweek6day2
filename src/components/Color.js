import React from 'react';
import PropTypes from 'prop-types';

function Color(props) {
    return (<div>
        <dt>Name</dt>
        <dd style={{ color: props.hex }}>{props.name}</dd>

        <dt>Hex</dt>
        <dd>{props.hex}</dd>

        <dt>RGB</dt>
        <dd>Red - {props.rgb[0]}</dd> 
        <dd>Green - {props.rgb[1]}</dd> 
        <dd>Blue - {props.rgb[2]}</dd>
    </div>);
}

Color.propTypes = {
    name: PropTypes.string.isRequired,
    hex: PropTypes.string.isRequired,
    rgb: PropTypes.array.isRequired
};

export default Color;
