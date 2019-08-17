import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getPage } from '../../apis/rickAndMortyAPI';
import Characters from '../stateless/Characters';

export default class AllCharacters extends Component {

    static propTypes = {
        count: PropTypes.number
    }

    state = {
        characters: [],
        page: 1,
        maxPages: ''
    }

    apiFetchCharacters = () => {
        getPage(this.state.page)
            .then(res => {
                this.setState({ characters: res.results });
                this.setState({ maxPages: res.info.pages });
            });
    }

    increment(value) {
        this.setState({ page: value });
    }

    decrement(value) {
        this.setState({ page: value });
    }

    componentDidMount() {
        this.apiFetchCharacters();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.page !== this.state.page) {
            this.apiFetchCharacters();
        }
    }

    render() {
        return (
            <>
                {/* IF YOU WANT TO DO JAVASCRIPT THINGS LIKE LOGIC, you have to put the thing you're returning in CURLY BRACES
                and the && basically means "if condition one evaluates to true, andTHEN do this" */}
                {this.state.page !== 1 && <button onClick={() => this.decrement(this.state.page - 1)}>DECREMENT</button>}
                {this.state.page !== this.state.maxPages && <button onClick={() => this.increment(this.state.page + 1)}>INCREMENT</button>}
                <Characters characters={this.state.characters}/>
            </>
        );

    }

}
