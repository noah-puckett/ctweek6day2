import React from 'react';
import PropTypes from 'prop-types';

function Footer(props) {
    return (<h3>{props.footer}</h3>);
}

Footer.propTypes = {
    footer: PropTypes.string.isRequired
};

export default Footer;
