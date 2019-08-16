import React from 'react';
import PropTypes from 'prop-types';
import Color from '../components/Color';

export default function Colors({ colors }) {
    
    const colorsItem = colors.map(color => (
        <li key={color.hex}>
            <Color name={color.name} hex={color.hex} rgb={color.rgb}/>
        </li>
    ));
    
    return (
        <ul>
            {colorsItem}
        </ul>
    );
}
Colors.propTypes = {
    colors: PropTypes.array.isRequired,
};
