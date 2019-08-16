import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Quotes from '../stateless/Quotes';
import { getQuotes } from '../../apis/futuramaAPI';

export default class TopQuotes extends Component {

    static propTypes = {
        count: PropTypes.number
    }

    state = {
        quotes: []
    }

    apiFetchQuotes = () => {
        getQuotes(this.props.count)
            .then(quotes => this.setState({ quotes }));
    }

    componentDidMount() {
        this.apiFetchQuotes();
    }

    render() {

        return (
            <>
                <Quotes quotes={this.state.quotes} />
            </>
        );

    }

}
