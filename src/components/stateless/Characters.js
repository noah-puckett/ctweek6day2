import React from 'react';
import PropTypes from 'prop-types';
import Character from '../../components/stateless/Character';

//this works!
function Characters({ characters }) {
    const characterArray = characters.map(character => {
        return (
            <li key={character.id}>
                <Character name={character.name} status={character.status} species={character.species} image={character.image} />
            </li>
        );
    });
    return characterArray;
}

Characters.propTypes = {
    characters: PropTypes.array.isRequired
};

export default Characters;
