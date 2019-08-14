import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
    return (<h1>{props.header}</h1>);
}

Header.propTypes = {
    header: PropTypes.string.isRequired
};

export default Header;
