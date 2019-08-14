import React from 'react';
import PropTypes from 'prop-types';
// import ButtonCSS from '../css/ButtonCSS.css';

function ColorPicker({ changeColorHandler }) {
    return (<> 
        <button onClick={() => changeColorHandler('red')}>red</button>
        <button onClick={() => changeColorHandler('green')}>green</button>
        <button onClick={() => changeColorHandler('blue')}>blue</button>
    </>);
}
ColorPicker.propTypes = {
    changeColorHandler: PropTypes.func.isRequired,
}; 

export default ColorPicker;
