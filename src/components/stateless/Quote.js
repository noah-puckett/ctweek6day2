import React from 'react';
import PropTypes from 'prop-types';


//this works
function Quote({ character, quote, image }) {
    return (
        <section>
            <img style={{ height: 300 }} src={image} />
            <p>{quote} --{character}</p>
        </section>
    );
}

Quote.propTypes = {
    character: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

export default Quote;
