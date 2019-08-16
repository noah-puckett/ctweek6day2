import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';

function Photos({ photos }) {
    const photosItem = photos.map(photo => (
        <li key={photo.src}>
            <Photo src={photo.src} />
        </li>
    ));
        
    return (
        <ul>
            {photosItem}
        </ul>
    );
}
Photos.propTypes = {
    photos: PropTypes.array.isRequired,    
};

export default Photos;
