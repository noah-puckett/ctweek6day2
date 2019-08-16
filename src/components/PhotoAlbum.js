import React from 'react';
import PropTypes from 'prop-types';
import Photos from '../components/Photos';

function PhotoAlbum({ title, photos }) {

    return (<>
        <h1>{title}</h1>
        <Photos photos={photos} />
        </>
    );

}

PhotoAlbum.propTypes = {
    photos: PropTypes.array.isRequired
};

export default PhotoAlbum;
