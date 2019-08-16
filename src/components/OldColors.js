import React from 'react';
import PropTypes from 'prop-types';
import Color from '../components/Color';

export default function Colors({ colors }) {
    
    const colorsItem = colors.map(color => (
        <li key={color.hex}>
            <Color name={color.name} hex={color.hex} rgb={[color.rgb[0], color.rgb[1], color.rgb[2]]} />
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
