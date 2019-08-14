import React from 'react';
import PropTypes from 'prop-types';

function ColorDisplay({ color }) {
    return (<> 
    <div style={{ backgroundColor: color }}>COLOR</div>
    </>);
}
ColorDisplay.propTypes = {
    color: PropTypes.string.isRequired,
}; 

export default ColorDisplay;
