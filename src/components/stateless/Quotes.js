import React from 'react';
import PropTypes from 'prop-types';
import Quote from '../stateless/Quote';

//this works
function Quotes({ quotes }) {
    const quoteArray = quotes.map(quote => {
        return (
            <li key={quote.quote}>
                <Quote image={quote.image} quote={quote.quote} character={quote.character} />
            </li>
        );
    });
    return quoteArray;
}

Quotes.propTypes = {
    quotes: PropTypes.array.isRequired
};

export default Quotes;
