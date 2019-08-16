import React from 'react';
import PropTypes from 'prop-types';
import PhotoAlbumCSS from '../css/PhotoAlbumCSS.css';

function Photo(props) {
    return (<img src={props.src} className={PhotoAlbumCSS.img}>
    </img>);
}

Photo.propTypes = {
    src: PropTypes.string.isRequired
};

export default Photo;
