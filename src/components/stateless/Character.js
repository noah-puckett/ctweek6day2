import React from 'react';
import PropTypes from 'prop-types';

//this works!
function Character({ name, status, species, image }) {
    return (
        <section>
            <img style={{ height: 300 }} src={image} />
            <p>
                Name: {name}
            </p>
            <p> 
                Status: {status}
            </p> 
            <p>
                Species: {species}
            </p>
        </section>
    );
}

Character.propTypes = {
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

export default Character;
