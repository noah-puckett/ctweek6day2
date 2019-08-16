import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Quotes from '../stateless/Quotes';
import { getCharacters } from '../../apis/rickAndMortyAPI';
import Characters from '../stateless/Characters';

export default class AllCharacters extends Component {

    static propTypes = {
        count: PropTypes.number
    }

    state = {
        characters: []
    }

    apiFetchCharacters = () => {
        getCharacters(this.props.count)
            .then(characters => this.setState({ characters }));
    }

    componentDidMount() {
        this.apiFetchCharacters();
    }

    render() {

        return (
            <>
                <Characters characters={this.state.characters} />
            </>
        );

    }

}
