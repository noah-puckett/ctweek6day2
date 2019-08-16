import React from 'react';
import PropTypes from 'prop-types';
import PhotoAlbumCSS from '../css/PhotoAlbumCSS.css';

function PhotoAlbum(props) {
    const photos = props.photos.map(photo => {
        return <img className={PhotoAlbumCSS.img} key={photo} src={photo} />;
    });
    //apparently in React when you make a class (.whatever) in css, 
    //it assigns it a unique name that is a buncha garbledegook,
    //uncomment for fun and profit
    // console.log(PhotoAlbumCSS);
    return (photos);
}

PhotoAlbum.propTypes = {
    photos: PropTypes.array.isRequired
};

export default PhotoAlbum;
