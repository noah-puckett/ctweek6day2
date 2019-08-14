import React from 'react';
import PropTypes from 'prop-types';

function Bio(props) {
    return (<dl>
        <dt>Name</dt>
        <dd>{props.name}</dd>

        <dt>Favorite Animal</dt>
        <dd>{props.faveAnimal}</dd>
    </dl>);
}

Bio.propTypes = {
    name: PropTypes.string.isRequired,
    faveAnimal: PropTypes.string
};

export default Bio;
